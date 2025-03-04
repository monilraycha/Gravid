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
import Toast from "react-native-toast-message";
import fonts from "../../constants/fonts";

const TrackPregnancy = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxPress = (option) => {
    setSelectedOption(option);
  };

  // const showToast = () => {
  //   Toast.show({
  //     type: "success",
  //     text1: "Congratulations",
  //     text2: "Your App is running successfully",
  //   });
  // };

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Login successfully ✅ ",
      text2: "Your App is running successfully",
      position: "top",
      visibilityTime: 3000,
      topOffset: 50,
      bottomOffset: 40,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Let us add the pregnancy and adjust the app according to your needs
      </Text>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>
          How do you want to enter the pregnancy?
        </Text>
      </View>

      <View style={styles.checkboxContainer}>
        {/* First Checkbox */}
        <TouchableOpacity
          onPress={() => handleCheckboxPress("viaScan")}
          style={styles.checkboxItem}
        >
          <View
            style={[
              styles.checkbox,
              selectedOption === "viaScan" && styles.checkboxChecked,
            ]}
          >
            {selectedOption === "viaScan" && (
              <Image
                source={require("../../assets/images/check.png")}
                style={styles.checkmarkImage}
              />
            )}
          </View>
          <Text style={styles.checkboxText}>Calculate using last period</Text>
        </TouchableOpacity>

        <View style={styles.horizontalLine}></View>

        {/* Second Checkbox */}
        <TouchableOpacity
          onPress={() => handleCheckboxPress("viaSymptoms")}
          style={styles.checkboxItem}
        >
          <View
            style={[
              styles.checkbox,
              selectedOption === "viaSymptoms" && styles.checkboxChecked,
            ]}
          >
            {selectedOption === "viaSymptoms" && (
              <Image
                source={require("../../assets/images/check.png")}
                style={styles.checkmarkImage}
              />
            )}
          </View>
          <Text style={styles.checkboxText}>I have an estimated due date</Text>
        </TouchableOpacity>

        <View style={styles.horizontalLine}></View>
      </View>

      {selectedOption && (
        <CommonButton
          title="CONTINUE"
          textStyle={styles.buttonText}
          style={styles.button}
          onPress={showToast}
        />
      )}
    </View>
  );
};

export default TrackPregnancy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: horizontalScale(20),
    marginTop: verticalScale(60),
    backgroundColor: colors.background,
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    marginBottom: verticalScale(20),
    color: colors.black,
    fontFamily: "Montserrat Bold",
  },
  questionContainer: {
    marginBottom: verticalScale(15),
  },
  question: {
    fontSize: RFValue(14),
    fontWeight: "400",
    fontFamily: "Montserrat",
    color: colors.black,
  },
  checkboxContainer: {
    marginTop: verticalScale(25),
  },
  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(15),
  },
  checkbox: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(12),
    borderColor: "#F88C8C",
    marginRight: horizontalScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#F88C8C",
  },
  checkmarkImage: {
    width: moderateScale(18),
    height: moderateScale(18),
    tintColor: "white",
  },
  checkboxText: {
    fontSize: RFValue(14),
    fontFamily: "Montserrat",
    color: colors.black,
  },
  horizontalLine: {
    height: verticalScale(1),
    backgroundColor: "#F88C8C",
    marginVertical: verticalScale(10),
  },
  buttonText: {
    letterSpacing: 1,
  },
  button: {
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: verticalScale(20),
  },
});
