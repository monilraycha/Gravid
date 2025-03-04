import colors from "../../../constants/color";
import fonts from "../../../constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../helpers/Metrics";
import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: RFValue(18, height),
    margin: moderateScale(20),
    textAlign: "center",
    fontFamily: fonts.MontserratMedium,
  },
  buttonContainer: {
    justifyContent: "space-between",
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: verticalScale(35),
    paddingHorizontal: horizontalScale(10),
  },
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  buttonText: {
    fontSize: RFValue(18, height),
    marginLeft: horizontalScale(10),
    fontFamily: fonts.MontserratRegular,
  },
});

export default styles;
