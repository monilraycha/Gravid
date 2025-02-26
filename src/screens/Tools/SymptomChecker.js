import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, Button, Card, Text, RadioButton } from "react-native-paper";
import colors from "../../constants/color";

const SymptomChecker = () => {
  const [symptom, setSymptom] = useState("");
  const [severity, setSeverity] = useState("Mild");
  const [symptomHistory, setSymptomHistory] = useState([]);

  useEffect(() => {
    loadSymptoms();
  }, []);

  const saveSymptom = async () => {
    if (!symptom) {
      Alert.alert("Please enter a symptom.");
      return;
    }

    const newEntry = {
      symptom,
      severity,
      date: new Date().toLocaleDateString(),
    };
    const updatedHistory = [...symptomHistory, newEntry];

    try {
      await AsyncStorage.setItem(
        "symptomHistory",
        JSON.stringify(updatedHistory)
      );
      setSymptomHistory(updatedHistory);
      setSymptom("");
      setSeverity("Mild");
    } catch (error) {
      Alert.alert("Error saving symptom.");
    }
  };

  const loadSymptoms = async () => {
    try {
      const savedSymptoms = await AsyncStorage.getItem("symptomHistory");
      if (savedSymptoms) {
        setSymptomHistory(JSON.parse(savedSymptoms));
      }
    } catch (error) {
      console.error("Error loading symptoms:", error);
    }
  };

  const deleteSymptom = async (index) => {
    const updatedHistory = [...symptomHistory];
    updatedHistory.splice(index, 1);
    try {
      await AsyncStorage.setItem(
        "symptomHistory",
        JSON.stringify(updatedHistory)
      );
      setSymptomHistory(updatedHistory);
    } catch (error) {
      Alert.alert("Error deleting symptom.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Symptom Checker & Journal</Text>

      <TextInput
        label="Enter Symptom"
        value={symptom}
        onChangeText={setSymptom}
        mode="outlined"
        style={styles.input}
      />

      <Text style={styles.label}>Severity:</Text>
      <RadioButton.Group
        onValueChange={(value) => setSeverity(value)}
        value={severity}
      >
        <View style={styles.radioGroup}>
          <RadioButton value="Mild" />
          <Text>Mild</Text>
          <RadioButton value="Moderate" />
          <Text>Moderate</Text>
          <RadioButton value="Severe" />
          <Text>Severe</Text>
        </View>
      </RadioButton.Group>

      <Button mode="contained" onPress={saveSymptom} style={styles.button}>
        Save Symptom
      </Button>

      <Text style={styles.subtitle}>Symptom History</Text>
      <FlatList
        data={symptomHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>{item.symptom}</Text>
            <Text>Severity: {item.severity}</Text>
            <Text>Date: {item.date}</Text>
            <TouchableOpacity>
              <Text
                style={styles.deleteText}
                onPress={() => deleteSymptom(item.id)}
              ></Text>
            </TouchableOpacity>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginVertical: 10,
    backgroundColor: colors.primary,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  card: {
    marginVertical: 5,
    padding: 10,
  },
  cardTitle: {
    fontWeight: "bold",
  },
  deleteText: {
    color: "blue",
  },
});

export default SymptomChecker;
