// CustomHeader.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import colors from "../constants/color";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../constants/fonts";

const CustomHeader = ({ navigation, title }) => (
  <View style={{}}>
    <SafeAreaView />
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: colors.background,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* <Text style={{ fontSize: 24, fontWeight: "bold" }}> */}
        <Image
          source={require("../assets/images/back.png")}
          style={{ width: 20, height: 20 }}
        />
        {/* </Text> */}
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          fontSize: RFValue(25),
          fontFamily: fonts.MontserratBold,
          color: colors.primary,
        }}
      >
        {title}
      </Text>
    </View>
  </View>
);

export default CustomHeader;
