import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import ToolsHeader from "../ToolsHeader";
import fonts from "../../../constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, verticalScale } from "../../../helpers/Metrics";

const { height } = Dimensions.get("window");

const DateOfVaccination = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ToolsHeader title="Step 3/3" navigation={navigation} />
      <Text style={styles.title}>Date of Vaccination</Text>
      <TextInput
        style={styles.dateInput}
        placeholder="Enter Date of Vaccination"
        placeholderTextColor="#000"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.dateButton}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateOfVaccination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: RFValue(18, height),
    margin: moderateScale(20),
    textAlign: "center",
    fontFamily: fonts.MontserratBold,
  },
  dateInput: {
    height: 40,
    width: "80%",
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 40,
    width: "80%",
    alignSelf: "center",
    marginTop: verticalScale(30),
  },
  dateButton: {
    color: "#fff",
    fontSize: RFValue(14, height),
    textAlign: "center",
    fontFamily: fonts.MontserratRegular,
  },
});
