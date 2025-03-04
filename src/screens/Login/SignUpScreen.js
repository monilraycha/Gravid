import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import CommonButton from "../../components/CommonButton";
import colors from "../../constants/color";
import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../../constants/fonts";

const { height } = Dimensions.get("window");

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);

  const renderCheckbox = (isChecked, onPress, imageSource) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked && (
          <Image source={imageSource} style={styles.checkmarkImage} />
        )}
      </View>
    </TouchableOpacity>
  );

  const isFormValid =
    email !== "" && password !== "" && isCheckedTerms && isCheckedPrivacy;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.description}>
        Create an account to avoid the risk of losing your data when you change
        your phone
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <View style={styles.checkboxWrapper}>
        <View style={styles.checkboxItem}>
          {renderCheckbox(
            isCheckedTerms,
            () => setIsCheckedTerms(!isCheckedTerms),
            require("../../assets/images/check.png")
          )}
          <Text style={styles.checkboxText}>
            I give consent to the processing of my health data, such as the
            expected due date.
          </Text>
        </View>

        <View style={styles.checkboxItem}>
          {renderCheckbox(
            isCheckedPrivacy,
            () => setIsCheckedPrivacy(!isCheckedPrivacy),
            require("../../assets/images/check.png")
          )}
          <Text style={styles.checkboxText}>
            I want newsletters with tips, information and offers during my
            pregnancy.
          </Text>
        </View>
      </View>

      <Text style={styles.termsText}>
        By continuing I agree to the {""}
        <Text
          style={styles.linkText}
          onPress={() => alert("Terms of Use clicked")}
        >
          Terms of Use
        </Text>
        <Text> and </Text>
        <Text
          style={styles.linkText}
          onPress={() => alert("Privacy Policy clicked")}
        >
          Privacy Policy
        </Text>
      </Text>

      <CommonButton
        title="CREATE ACCOUNT"
        onPress={() => navigation.navigate("LoginScreen")}
        filled={isFormValid}
        style={[
          styles.button,
          { backgroundColor: isFormValid ? "#F88C8C" : "#B6B0AE" },
        ]}
        textStyle={{
          color: isFormValid ? "#000000" : "#ffffff",
        }}
        disabled={!isFormValid}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: horizontalScale(20),
    marginTop: verticalScale(70),
    backgroundColor: colors.background,
  },
  title: {
    fontSize: RFValue(22, height),
    fontFamily: fonts.MontserratBold,
    marginBottom: verticalScale(10),
    alignSelf: "center",
    color: colors.black,
  },
  description: {
    fontSize: RFValue(16, height),
    color: colors.black,
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
    fontFamily: fonts.MontserratMedium,
  },
  inputContainer: {
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: moderateScale(15),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(15),
    fontSize: RFValue(14, height),
    color: colors.black,
    fontFamily: fonts.MontserratRegular,
    marginTop: verticalScale(10),
  },
  checkboxWrapper: {
    marginTop: verticalScale(10),
  },
  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: verticalScale(15),
  },
  checkboxText: {
    marginLeft: horizontalScale(10),
    fontSize: RFValue(13, height),
    color: colors.black,
    flexShrink: 1,
    fontFamily: fonts.MontserratRegular,
  },
  checkboxContainer: {
    marginTop: verticalScale(5),
  },
  checkbox: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(3),
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmarkImage: {
    width: moderateScale(18),
    height: moderateScale(18),
    tintColor: "white",
  },
  button: {
    marginTop: verticalScale(30),
    width: "100%",
  },
  termsText: {
    fontSize: RFValue(14, height),
    color: colors.black,
    marginTop: verticalScale(10),
    fontFamily: "Montserrat",
  },
  linkText: {
    color: "#0000EE",
    textDecorationLine: "underline",
    fontFamily: fonts.MontserratRegular,
    fontSize: RFValue(14, height),
  },
});
