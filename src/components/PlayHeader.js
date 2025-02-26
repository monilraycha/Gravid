// components/Header.js
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../constants/color";
import { horizontalScale, verticalScale } from "../helpers/Metrics";

const {height} = Dimensions.get('window')

const PlayHeader = ({ navigation, title }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation?.goBack()}>
      <Image
        source={require("../assets/images/back.png")}
        style={styles.headerImage}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>{title}</Text>
    <TouchableOpacity>
      <Image
        source={require("../assets/images/search-interface-symbol.png")}
        style={styles.headerImage}
      />
    </TouchableOpacity>
  </View>
);

export default PlayHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
    width: "100%",
  },
  headerImage: {
    width: horizontalScale(20),
    height: horizontalScale(20),
  },
  headerText: {
    fontSize: RFValue(16 , height),
    fontFamily: "Montserrat Medium",
    flex: 1,
    textAlign: "center",
  },
});
