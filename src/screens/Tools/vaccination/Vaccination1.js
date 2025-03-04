import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import styles from "./index";
import ToolsHeader from "../ToolsHeader";

const Vaccination1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ToolsHeader title="Step 1/3" navigation={navigation} />
      <Text style={styles.text}>Which vaccine would you like to add?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Vaccination2")}
        >
          <Text style={styles.buttonText}>Rubella</Text>
          <Image
            source={require("../../../assets/icons/chevron.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Vaccination1;
