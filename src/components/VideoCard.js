// components/VideoCard.js
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity , Dimensions} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { verticalScale, moderateScale } from "../helpers/Metrics";

const {height} = Dimensions.get('window');

const VideoCard = ({ navigation ,screenName, title = "", description = "", imgUri }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} 
      onPress={() => {
        navigation.navigate(screenName , {title , description , imgUri});
      }}
    >
      <Image source={imgUri} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={1}>{description}</Text>
    </TouchableOpacity>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    marginTop: verticalScale(20),
    backgroundColor: "#ffffff",
    borderRadius: moderateScale(20),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: moderateScale(200),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  title: {
    fontSize: RFValue(16 , height),
    fontFamily: "Montserrat Bold",
    color: "#333",
    padding: moderateScale(10),
  },
  description: {
    fontSize: RFValue(12 , height),
    fontFamily: "Montserrat Regular",
    color: "#666",
    marginTop: verticalScale(-15),
    padding: moderateScale(10),
    marginBottom: verticalScale(10),
  },
});
