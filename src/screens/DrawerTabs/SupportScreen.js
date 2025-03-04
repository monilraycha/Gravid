import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import colors from "../../constants/color";
import { horizontalScale, verticalScale } from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import faqData from "../../constants/faqData";
import fonts from "../../constants/fonts";

const height = Dimensions.get("window");

const SupportScreen = ({ navigation }) => {
  // Navigation Function
  const navigateToAnswer = (faqItem) => {
    navigation.navigate("AnswerScreen", {
      question: faqItem.question,
      answer: faqItem.answer,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/images/back.png")}
            style={styles.headerImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Support and FAQ</Text>
      </View>

      {/* FAQ List */}
      <ScrollView style={styles.content}>
        {faqData.map((faqItem, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigateToAnswer(faqItem)}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>{faqItem.question}</Text>
              <Image
                source={require("../../assets/icons/chevron.png")}
                style={styles.chevronIcon}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SupportScreen;

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
    fontSize: RFValue(18, height),
    color:colors.black,
    fontFamily: fonts.MontserratMedium,
    textAlign: "center",
    flex: 1,
  },
  button: {
    backgroundColor: colors.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    marginVertical: verticalScale(5),
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontSize: RFValue(16, height),
    color: colors.black,
    fontFamily: fonts.MontserratRegular,
  },
  chevronIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
});
