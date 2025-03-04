import React, { useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";
import CommonButton from "../../components/CommonButton";
import colors from "../../constants/color";
import { horizontalScale, verticalScale } from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";

// Get device width and height
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const FollowOnInsta = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/icons/close.png")}
            style={styles.cancelIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Follow us on Instagram!</Text>
      </View>

      {/* Fixed Image (Not Scrollable) */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/followinsta.jpeg")}
          style={styles.ladyImage}
        />
      </View>

      <View
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text}>Follow us on Instagram</Text>
        <CommonButton
          title="TAKE ME THERE"
          filled={true}
          style={styles.button}
          textStyle={styles.btntext}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/monil_4102")
          }
        />
      </View>
    </View>
  );
};

export default FollowOnInsta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fixedHeader: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    flexDirection: "row",
    alignItems: "center",
  },
  cancelButton: {
    marginRight: horizontalScale(10),
  },
  cancelIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  headerText: {
    fontSize: RFValue(14),
    fontFamily: "Montserrat",
    flex: 1,
    textAlign: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  ladyImage: {
    width: deviceWidth,
    height: deviceHeight * 0.3,
    resizeMode: "cover",
  },
  scrollContent: {
    flexGrow: 1,
    padding: horizontalScale(20),
    paddingTop: verticalScale(20),
  },
  text: {
    fontSize: RFValue(18),
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(15),
    fontFamily: "Montserrat Bold",
  },
  button: {
    marginTop: verticalScale(30),
    backgroundColor: "#9BAF8E",
    alignSelf: "center",
  },
});
