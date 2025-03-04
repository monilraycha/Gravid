import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../constants/color";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../../constants/fonts";

const PregnancyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Wrap the Image in TouchableOpacity to make it clickable */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/images/back.png")}
            style={styles.headerImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Pregnancy</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Current Pregnancy</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Estimated due date</Text>
              <Text style={styles.dateText}>06/11/25</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Length of pregnancy</Text>
              <Text style={styles.dateText}>280 days(40 + 0)</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Pre-pregnancy weight</Text>
              <Image
                source={require("../../assets/icons/chevron.png")}
                style={{
                  width: horizontalScale(20),
                  height: verticalScale(20),
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>
                Miscarriage/terminated pregnancy
              </Text>
              <Image
                source={require("../../assets/icons/chevron.png")}
                style={{
                  width: horizontalScale(20),
                  height: verticalScale(20),
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Enter date of birth</Text>
              <Image
                source={require("../../assets/icons/chevron.png")}
                style={{
                  width: horizontalScale(20),
                  height: verticalScale(20),
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PregnancyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  headerImage: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  headerText: {
    fontSize: RFValue(16),
    fontFamily: fonts.MontserratMedium,
    textAlign: "center",
    flex: 1,
    color: colors.black,
  },
  title: {
    fontSize: RFValue(14),
    color: colors.black,
    fontFamily: fonts.MontserratMedium,
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
    marginLeft: horizontalScale(20),
  },
  buttonContainer: {
    marginTop: verticalScale(5),
  },
  button: {
    backgroundColor: colors.white, // Button background color
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: "#ffff",
    width: "100%",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontSize: RFValue(14),
    color: colors.black, // Text color
    fontFamily: fonts.MontserratRegular,
  },
  dateText: {
    fontSize: RFValue(14),
    fontFamily: fonts.MontserratRegular,
  },
});
