import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import colors from "../../../constants/color";
import { horizontalScale, verticalScale } from "../../../helpers/Metrics";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: "row",
    padding: verticalScale(15),
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  headerImage: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  headerText: {
    fontSize: RFValue(16),
    color: colors.black,
    textAlign: "center",
    flex: 1,
    fontFamily: "Montserrat Medium",
  },
  title: {
    fontSize: RFValue(14),
    color: colors.black,
    marginTop: verticalScale(20),
    fontFamily: "Montserrat Medium",
    marginLeft: horizontalScale(20),
  },
  description: {
    fontSize: RFValue(12),
    margin: verticalScale(10),
    fontFamily: "Montserrat",
    color: colors.textSecondary,
    marginLeft: horizontalScale(20),
  },
  buttonContainer: {
    marginTop: verticalScale(7),
  },
  button: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontSize: RFValue(13),
    color: colors.black,
    flex: 1,
  },
  imgStyle: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
});
