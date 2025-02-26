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
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const imageHeight = deviceHeight * 0.3;
  const playerRef = useRef(null);

  // Header opacity animation
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  // Image animations
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [0, -imageHeight * 0.2],
    extrapolate: "clamp",
  });

  const imageScale = scrollY.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [1, 1.5],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [1, 0.2],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      {/* Animated Header */}
      <Animated.View style={[styles.fixedHeader, { opacity: headerOpacity }]}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        >
          <Image source={backCancelIcon} style={styles.HeaderCancelIcon} />
        </TouchableOpacity>

        <Text style={styles.headerText}>{headerTitle}</Text>

        <View style={styles.headerRightIcons}>
          <TouchableOpacity style={styles.headerIcon}>
            <Image
              source={require("../assets/images/heart.png")}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Fixed Icons Over Image */}
      <Animated.View style={[styles.fixedIcons, { opacity: imageOpacity }]}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backCancelIcon} style={styles.cancelIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={require("../assets/images/heart.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
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
      >
        <VideoPlayer
          ref={playerRef}
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
    zIndex: 1,
  },
  headerIcon: {
    paddingBottom: verticalScale(10),
  },
  cancelButton: {
    position: "absolute",
    top: verticalScale(20),
  },
  HeaderCancelIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    position: "absolute",
    bottom: verticalScale(0),
    left: horizontalScale(-10),
  },
  cancelIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    tintColor:colors.white
  },
  searchButton: {
    position: "absolute",
    right: horizontalScale(19),
    top: verticalScale(20),
  },
  searchIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    marginLeft: horizontalScale(10),
    tintColor:colors.white
  },
  headerText: {
    fontSize: RFValue(14),
    flex: 1,
    textAlign: "center",
    fontFamily: "Montserrat Medium",
    marginHorizontal: horizontalScale(50),
  },
  contentContainer: {
    padding: horizontalScale(20),
    paddingTop: verticalScale(20),
  },
  text: {
    fontSize: RFValue(17),
    marginBottom: verticalScale(10),
    fontFamily: "Montserrat Medium",
  },

  description: {
    fontSize: RFValue(14, deviceHeight),
    marginBottom: verticalScale(15),
    fontFamily: "Montserrat Regular",
  },
  fixedIcons: {
    position: "absolute",
    left: horizontalScale(10),
    right: horizontalScale(0),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(15),
    zIndex: 2,
  },
  headerRightIcons: {
    flexDirection: "row",
    position: "absolute",
    right: horizontalScale(20),
  },
});
