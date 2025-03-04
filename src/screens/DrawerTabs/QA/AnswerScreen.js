import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../../../constants/fonts";
import colors from "../../../constants/color";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../helpers/Metrics";

const height = Dimensions.get("window");

const AnswerScreen = ({ route, navigation }) => {
  const { question, answer } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../assets/icons/close.png")}
            style={styles.headerImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{question}</Text>
      </View>
      <Text style={styles.answerText}>{answer}</Text>
    </View>
  );
};

export default AnswerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  questionText: {
    marginBottom: verticalScale(10),
    color: colors.textSecondary,
  },
  answerText: {
    fontSize: RFValue(18, height),
    color: "#555",
    lineHeight: moderateScale(24),
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(15),
    fontFamily: fonts.MontserratRegular,
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
    fontSize: RFValue(20, height),
    color: colors.black,
    textAlign: "center",
    flex: 1,
    fontFamily: fonts.MontserratMedium,
  },
});
