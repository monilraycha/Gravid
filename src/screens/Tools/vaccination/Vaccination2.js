import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import ToolsHeader from "../ToolsHeader";
import styles from "./index";

const vaccination = [
  {
    id: 1,
    name: "Dose 1",
    imgUri: require("../../../assets/icons/chevron.png"),
    screenName: "DateOfVaccination",
  },
  {
    id: 2,
    name: "Dose 2",
    imgUri: require("../../../assets/icons/chevron.png"),
    screenName: "DateOfVaccination",
  },
  {
    id: 3,
    name: "Dose 3",
    imgUri: require("../../../assets/icons/chevron.png"),
    screenName: "DateOfVaccination",
  },
  {
    id: 4,
    name: "Dose 4",
    imgUri: require("../../../assets/icons/chevron.png"),
    screenName: "DateOfVaccination",
  },
  {
    id: 5,
    name: "Dose 5",
    imgUri: require("../../../assets/icons/chevron.png"),
    screenName: "DateOfVaccination",
  },
];

const Vaccination2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ToolsHeader title="Step 2/3" navigation={navigation} />
      <Text style={styles.text}>Dose of vaccine</Text>

      {vaccination.map((item) => (
        <View key={item.id} style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(item.screenName)}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
            <Image source={item.imgUri} style={styles.image} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Vaccination2;
