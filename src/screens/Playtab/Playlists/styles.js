import { StyleSheet, Dimensions } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../constants/color";

const { width, height } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: "100%",
    height: verticalScale(250),
    backgroundColor: "#F89E9E",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backIcon: {
    position: "absolute",
    left: horizontalScale(15),
    top: verticalScale(15),
  },
  searchIcon: {
    position: "absolute",
    right: horizontalScale(15),
    top: horizontalScale(15),
  },
  icon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
  },
  scrollContent: {
    paddingBottom: verticalScale(20), // Add some padding at the bottom of the scroll view
  },
  descriptionContainer: {
    padding: moderateScale(15),
  },
  title: {
    fontSize: RFValue(18, height),
    fontFamily: "Montserrat Bold",
    color: colors.textSecondary,
  },
  description: {
    fontSize: RFValue(16, height),
    color: "#666",
    marginTop: verticalScale(5),
    fontFamily: "Montserrat Regular",
  },
  videoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    backgroundColor: "#FFF",
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: 3,
  },
  thumbnailContainer: {
    position: "relative",
  },
  videoThumbnail: {
    width: horizontalScale(90),
    height: horizontalScale(60),
    borderRadius: moderateScale(5),
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: horizontalScale(25),
    height: horizontalScale(25),
    tintColor: "#FFF",
    transform: [
      { translateX: -horizontalScale(14) },
      { translateY: -verticalScale(14) },
    ],
  },
  videoTextContainer: {
    marginLeft: horizontalScale(10),
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: horizontalScale(10),
  },
  nextIcon: {
    width: horizontalScale(25),
    height: horizontalScale(25),
  },
  videoTitle: {
    fontSize: RFValue(16, height),
    fontFamily: "Montserrat Medium",
  },
  videoDescription: {
    fontSize: RFValue(14, height),
    color: "#777",
    fontFamily: "Montserrat Regular",
    marginRight: horizontalScale(10),
  },
});
