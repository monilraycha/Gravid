import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../constants/color";

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
    width: horizontalScale(18),
    height: verticalScale(18),
  },
  headerText: {
    fontSize: RFValue(16),
    textAlign: "center",
    fontFamily: "Montserrat Medium",
    flex: 1,
  },
  introduction: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
  },
  introductionText: {
    fontSize: RFValue(15),
    marginBottom: verticalScale(10),
    fontFamily: "Montserrat Medium",
  },
  introductionDescription: {
    fontFamily: "Montserrat Regular",
    fontSize: RFValue(12),
    color: colors.textSecondary,
  },
  introExtra: {
    marginTop: verticalScale(10),
  },
  calenderButton: {
    paddingVertical: verticalScale(15),
  },
  buttonOfCalender: {
    backgroundColor: colors.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calenderText: {
    fontSize: RFValue(12),
    fontFamily: "Montserrat Medium",
  },
  nextIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },

  /* Button Container */
  buttonContainer: {
    marginTop: verticalScale(10),
    borderRadius: moderateScale(12),
    overflow: "hidden",
  },

  /* Button */
  button: {
    backgroundColor: colors.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    width: "100%",
    height: verticalScale(80),
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },

  pregIcon: {
    width: horizontalScale(30),
    height: horizontalScale(30),
    // marginBottom: verticalScale(10),
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "#000000",

  },

  backgroundOfImage: {
    position: "absolute",
    top: verticalScale(0),
    left: horizontalScale(0),
    height: horizontalScale(80),
    width: horizontalScale(80),
    backgroundColor: "#fdf5e2",
    justifyContent: "center",
    alignItems: "center",
  },

  /* Button Content */
  buttonContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: horizontalScale(80),
  },

  textContainer: {
    flex: 1,
  },

  buttonTitle: {
    fontSize: RFValue(12),
    fontFamily: "Montserrat Medium",
  },

  buttonText: {
    fontSize: RFValue(10),
    marginTop: verticalScale(5),
    fontFamily: "Montserrat Regular",
    color: colors.textSecondary,
  },
  content: {
    paddingBottom: verticalScale(100),
  },

});

export default styles;
