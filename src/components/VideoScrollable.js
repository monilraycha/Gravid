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
import VideoPlayer from "react-native-video-player";

// Get device width and height
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const VideoScrollable = ({
  navigation,
  headerTitle,
  thumbnail,
  videoUri,
  backCancelIcon,
  contentText,
  descriptions,
  showLikeIcon = true, // Default to true, but can be overridden
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

        {/* Conditionally render the like icon */}
        {showLikeIcon && (
          <TouchableOpacity style={styles.likeButton}>
            <Image
              source={require("../assets/images/heart.png")}
              style={styles.likeIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Animated Header */}
      <Animated.View style={[styles.fixedHeader, { opacity: headerOpacity }]}>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* Animated Video Player */}
        <Animated.View style={{ opacity: imageOpacity }}>
          <VideoPlayer
            ref={useRef(null)}
            endWithThumbnail
            thumbnail={thumbnail}
            source={{
              uri: videoUri,
            }}
            videoWidth={deviceWidth}
            videoHeight={deviceHeight * 0.3}
            onError={(e) => console.log(e)}
            showDuration={true}
          />
        </Animated.View>

        {/* Content Below */}
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{contentText}</Text>

          {descriptions.map((desc, index) => (
            <Text key={index} style={styles.description}>
              {desc}
            </Text>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default VideoScrollable;

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
    zIndex: 2, // Ensure icons are above the header and video
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
    tintColor: colors.black,
  },
  likeButton: {
    position: "absolute",
    right: horizontalScale(15),
  },
  likeIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    tintColor: colors.black,
  },
  headerText: {
    fontSize: RFValue(14, deviceHeight),
    flex: 1,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    marginRight: horizontalScale(30),
    marginBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    color: colors.black,
  },
  contentContainer: {
    padding: horizontalScale(20),
    paddingTop: verticalScale(20),
  },
  text: {
    fontSize: RFValue(17, deviceHeight),
    marginBottom: verticalScale(20),
    fontFamily: "Montserrat-Medium",
    color: colors.black,
  },
  description: {
    fontSize: RFValue(14, deviceHeight),
    marginBottom: verticalScale(15),
    lineHeight: verticalScale(20),
    fontFamily: "Montserrat-Regular",
    color: colors.black,
  },
  scrollViewContent: {
    minHeight: deviceHeight + 200, // Ensure the ScrollView has enough content to scroll
  },
});
