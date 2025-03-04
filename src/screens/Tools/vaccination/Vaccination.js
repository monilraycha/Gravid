import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../constants/color";

const { height } = Dimensions.get("window");

const Vaccination = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require("../../../assets/icons/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Vaccination</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/icons/injection.png")}
          style={[styles.emailIcon, { tintColor: colors.primary }]}
        />
        <Text style={styles.updateTitle}>
          You have not added any vaccinations yet
        </Text>
        <Text style={styles.noUpdatesText}>
          Keep track of your and your child's vaccinations easily by registering
          all given vaccines.
        </Text>
        <Text style={styles.noUpdatesText}>
          start by clicking the button below
        </Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Vaccination1")}
        >
          <Image
            source={require("../../../assets/icons/plus1.png")}
            style={styles.addIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: verticalScale(15),
    backgroundColor: colors.primary,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: horizontalScale(10),
  },
  backIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  headerText: {
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(40),
  },
  emailIcon: {
    width: horizontalScale(80),
    height: horizontalScale(80),
    marginBottom: verticalScale(15),
  },
  updateTitle: {
    fontSize: RFValue(16, height),
    textAlign: "center",
    fontFamily: "Montserrat-ExtraBold",
  },
  noUpdatesText: {
    fontSize: RFValue(12, height),
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    color: colors.textSecondary,
    marginTop: verticalScale(20),
  },
  addButton: {
    position: "absolute",
    bottom: verticalScale(20),
    right: horizontalScale(20),
    backgroundColor: "#5dbea3",
    padding: moderateScale(15),
    borderRadius: 8,
  },
  addIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    tintColor: colors.white,
  },
});

export default Vaccination;
