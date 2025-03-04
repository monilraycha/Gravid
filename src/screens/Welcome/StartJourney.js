import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CommonButton from "../../components/CommonButton";
import colors from "../../constants/color";
import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";

const StartJourney = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const renderCheckbox = (isChecked, onPress, imageSource) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked && (
          <Image source={imageSource} style={styles.checkmarkImage} />
        )}
      </View>
    </TouchableOpacity>
  );

  const handleEdit = () => {
    setSelectedOption(null);
  };

  const handlePress = () => {
    if (selectedOption === "pregnancy") {
      navigation.navigate("TrackPregnancy"); // twist
    } else if (selectedOption === "childDevelopment") {
      navigation.navigate("AddChildren");
    }
    if (!selectedOption) {
      navigation.navigate("SignUpScreen");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, selectedOption && styles.titleReduced]}>
        About you
      </Text>

      {/* Hide description if no checkbox is selected */}
      {!selectedOption && (
        <Text style={styles.description}>
          To make Preglife as useful as possible, we'd like to get to know you.
        </Text>
      )}

      <View style={styles.checkboxContainer}>
        <Text style={styles.question}>I want to use Preglife to...</Text>

        {/* First Checkbox */}
        {selectedOption !== "childDevelopment" && (
          <View style={styles.checkboxItem}>
            {renderCheckbox(
              selectedOption === "pregnancy", // Check if 'pregnancy' is selected
              () => setSelectedOption("pregnancy"), // Set 'pregnancy' when clicked
              require("../../assets/images/check.png") // Replace with your image path
            )}
            <Text style={styles.checkboxText}>Track a pregnancy</Text>

            {selectedOption === "pregnancy" && (
              <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* Second Checkbox */}
        {selectedOption !== "pregnancy" && (
          <View style={styles.checkboxItem}>
            {renderCheckbox(
              selectedOption === "childDevelopment", // Check if 'childDevelopment' is selected
              () => setSelectedOption("childDevelopment"), // Set 'childDevelopment' when clicked
              require("../../assets/images/check.png") // Replace with your image path
            )}
            <Text style={styles.checkboxText}>
              Follow the development of one or more children (0-2 years old)
            </Text>

            {selectedOption === "childDevelopment" && (
              <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

      <CommonButton
        title={selectedOption ? "CONTINUE" : "I HAVE A SHARING CODE"}
        onPress={handlePress}
        filled={false}
        style={styles.button}
      />
    </View>
  );
};

export default StartJourney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: verticalScale(60),
    backgroundColor: colors.background,
  },
  title: {
    fontSize: RFValue(22),
    fontFamily: "Montserrat-Bold",
    marginBottom: verticalScale(10),
    color: colors.black,
  },
  titleReduced: {
    fontSize: RFValue(16),
    opacity: 0.6,
    fontWeight: "normal",
  },
  description: {
    fontSize: RFValue(14),
    marginBottom: verticalScale(20),
    marginTop: verticalScale(10),
    fontFamily: "Montserrat-Medium",
    color: colors.black,
  },
  checkboxContainer: {
    marginTop: verticalScale(25),
  },
  question: {
    fontSize: RFValue(16),
    color: colors.black,
    fontFamily: "Montserrat-Regular",
  },
  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: RFValue(14),
    color: colors.black,
    marginTop: verticalScale(25),
    fontFamily: "Montserrat-Regular",
  },
  checkbox: {
    width: horizontalScale(30),
    height: horizontalScale(30),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(3),
    borderColor: "#F88C8C",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: verticalScale(10),
  },
  checkboxChecked: {
    backgroundColor: "#F88C8C",
    borderColor: "#F88C8C",
  },
  checkmarkImage: {
    width: horizontalScale(18),
    height: horizontalScale(18),
    tintColor: "white",
  },
  button: {
    marginTop: verticalScale(20),
    width: "95%",
    alignSelf: "center",
    position: "absolute",
    bottom: verticalScale(20),
  },
  editButton: {
    position: "absolute",
    right: horizontalScale(0),
    fontSize: RFValue(12),
    color: "#F88C8C",
    marginTop: verticalScale(5),
    alignSelf: "flex-end",
  },
  editButtonText: {
    fontSize: RFValue(12),
    color: colors.black,
    marginTop: verticalScale(5),
    opacity: 0.9,
    letterSpacing: moderateScale(1),
  },
});
