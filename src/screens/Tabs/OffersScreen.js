import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "../../constants/color";
import { RFValue } from "react-native-responsive-fontsize";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../helpers/Metrics";

const { width, height } = Dimensions.get("window"); // Get screen width

const OffersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Offers</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <TouchableOpacity style={styles.card}>
        <Image
          source={require("../../assets/images/prmother.jpg")}
          style={styles.image}
        />

        <Text style={styles.title}>
          Unlimited access to A FREE WEEK of tailored workouts
        </Text>

        <Text style={styles.description}>
          Enjoy secure workout routines, including yoga sessions designed
          specifically for pregnancy. Dive into a world of self-care with our
          FREE WEEK TRIAL of the ultimate health and wellness program by signing
          up today!
        </Text>
      </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("LimitedOffer")}
        >
          <Image
            source={require("../../assets/images/podcastw.jpg")}
            style={styles.image}
          />

          <Text style={styles.title}>
            Limited access for a month and tailored workouts
          </Text>

          <Text style={styles.description}>
            Enjoy secure workout routines, including yoga sessions designed
            specifically for pregnancy. Dive into a world of self-care with our
            FREE WEEK TRIAL of the ultimate health and wellness program by
            signing up today!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
    paddingBottom: verticalScale(20),
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
  },
  headerText: {
    fontSize: RFValue(16, height),
    color: colors.black,
    fontFamily: "Montserrat-Medium",
    flex: 1,
    textAlign: "center",
  },
  card: {
    width: width - 40,
    marginTop: verticalScale(20),
    backgroundColor: "#ffffff",
    borderRadius: moderateScale(20),
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: width - 40,
    height: moderateScale(200),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  title: {
    fontSize: RFValue(16, height),
    fontFamily: "Montserrat-Medium",
    fontWeight: "bold",
    color: colors.textSecondary,
    textAlign: "left",
    padding: moderateScale(10),
  },
  description: {
    fontSize: RFValue(12, height),
    fontFamily: "Montserrat-Regular",
    color: "#666",
    lineHeight: moderateScale(20),
    textAlign: "left",
    padding: moderateScale(10),
    marginBottom: verticalScale(20),
  },
});
