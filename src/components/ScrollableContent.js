import React, { useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
} from "react-native";
import colors from "../constants/color";
import { RFValue } from "react-native-responsive-fontsize";
import { horizontalScale, verticalScale } from "../helpers/Metrics";
import fonts from "../constants/fonts";

// Get device width and height
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const ScrollableContent = ({
  navigation,
  headerTitle,
  imageSource,
  backCancelIcon,
  contentTitle,
  contentText,
  subTitles,
  descriptions,
  sourceText,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const imageHeight = deviceHeight * 0.3;

  // Header opacity animation
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  // Image opacity animation
  const imageOpacity = scrollY.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      {/* Fixed Icons at the Top */}
      <View style={styles.fixedIconsContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backCancelIcon} style={styles.cancelIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton}>
          <Image
            source={require("../assets/icons/sharedetail.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeButton}>
          <Image
            source={require("../assets/images/heart.png")}
            style={styles.likeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Animated Header */}
      <Animated.View style={[styles.fixedHeader, { opacity: headerOpacity }]}>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContent} // Add this line
      >
        {/* Animated Image */}
        <Animated.Image
          source={imageSource}
          style={[styles.ladyImage, { opacity: imageOpacity }]}
        />

        {/* Content Below */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{contentTitle}</Text>
          <Text style={styles.text}>{contentText}</Text>

          {subTitles?.length > 0
            ? subTitles.map((subTitle, index) => (
                <View key={index}>
                  <Text style={styles.subTitle}>{subTitle}</Text>
                  <Text style={styles.description}>
                    {descriptions?.[index]}
                  </Text>
                </View>
              ))
            : descriptions?.length > 0 &&
              descriptions.map((desc, index) => (
                <Text key={index} style={styles.description}>
                  {desc}
                </Text>
              ))}

          <Text style={styles.titleSource}>Source:</Text>
          <Text style={styles.sourceText}>{sourceText}</Text>
          <View style={styles.horizontalLine}></View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default ScrollableContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fixedIconsContainer: {
    position: "absolute",
    top: verticalScale(15),
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(20),
    zIndex: 2, // Ensure icons are above the header and image
  },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1, // Ensure header is below the icons
  },
  cancelButton: {
    position: "absolute",
    top: verticalScale(0),
    left: horizontalScale(10),
  },
  cancelIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
  },
  shareButton: {
    position: "absolute",
    right: horizontalScale(45),
  },
  shareIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
  },
  likeButton: {
    position: "absolute",
    right: horizontalScale(15),
  },
  likeIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
  },
  headerText: {
    fontSize: RFValue(14, deviceHeight),
    flex: 1,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    marginRight: horizontalScale(30),
    marginBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  ladyImage: {
    width: deviceWidth,
    height: deviceHeight * 0.3,
    resizeMode: "cover",
  },
  contentContainer: {
    padding: horizontalScale(20),
    paddingTop: verticalScale(20),
  },
  text: {
    fontSize: RFValue(17, deviceHeight),
    marginBottom: verticalScale(20),
    fontFamily: fonts.MontserratBold,
  },
  subTitle: {
    fontSize: RFValue(14, deviceHeight),
    marginBottom: verticalScale(10),
    paddingVertical: verticalScale(5),
    fontFamily: "Montserrat Bold",
  },
  description: {
    fontSize: RFValue(14, deviceHeight),
    marginBottom: verticalScale(15),
    lineHeight: verticalScale(20),
    fontFamily: fonts.MontserratRegular,
  },
  title: {
    fontSize: RFValue(10, deviceHeight),
    width: "20%",
    marginBottom: verticalScale(20),
    letterSpacing: 1,
    backgroundColor: "#D3D3D3",
    padding: horizontalScale(5),
    borderRadius: horizontalScale(20),
    textAlign: "center",
    fontFamily: fonts.MontserratRegular,
  },
  titleSource: {
    fontSize: RFValue(15, deviceHeight),
    fontFamily: fonts.MontserratMedium,
    marginBottom: verticalScale(20),
    letterSpacing: 1,
  },
  sourceText: {
    fontSize: RFValue(14, deviceHeight),
    marginBottom: verticalScale(20),
    lineHeight: verticalScale(20),
    fontFamily: fonts.MontserratRegular,
  },
  horizontalLine: {
    height: verticalScale(1),
    backgroundColor: "#D3D3D3",
    marginVertical: verticalScale(20),
  },
  scrollViewContent: {
    minHeight: deviceHeight + 200, // Ensure the ScrollView has enough content to scroll
  },
});
