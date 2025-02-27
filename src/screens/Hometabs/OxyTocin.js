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
import colors from "../../constants/color";
import { horizontalScale, verticalScale } from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";

// Get device width and height
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const OxyTocin = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const imageHeight = deviceHeight * 0.3;

  // Header opacity based on scroll position
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  // Image opacity based on scroll position
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
          <Image
            source={require("../../assets/icons/close.png")}
            style={styles.cancelIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton}>
          <Image
            source={require("../../assets/icons/sharedetail.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeButton}>
          <Image
            source={require("../../assets/images/heart.png")}
            style={styles.likeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Animated Header */}
      <Animated.View style={[styles.fixedHeader, { opacity: headerOpacity }]}>
        <Text style={styles.headerText}>
          The importance of oxytocin for breastfeeding
        </Text>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        bounces= {false}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Animated Image */}
        <Animated.Image
          source={require("../../assets/images/womanholdbaby.jpeg")}
          style={[styles.ladyImage, { opacity: imageOpacity }]}
        />

        {/* Content Below */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>READ</Text>
          <Text style={styles.text}>
            The importance of oxytocin for breastfeeding
          </Text>

          {/* Paragraphs and Titles */}
          <Text style={styles.subTitle}>Milk Booster</Text>
          <Text style={styles.description}>
            As the months passed, I started to enjoy my pregnancy more. I could
            feel the baby’s movements...
          </Text>

          <Text style={styles.subTitle}>Emotional Bonding</Text>
          <Text style={styles.description}>
            The final trimester brought its own set of challenges, but I could
            feel myself getting stronger...
          </Text>

          <Text style={styles.subTitle}>Oxytocin's Role in Breastfeeding</Text>
          <Text style={styles.description}>
            And then, when the day arrived, it was nothing like I had imagined –
            it was even better...
          </Text>

          <Text style={styles.subTitle}>Oxytocin's Role in Breastfeeding</Text>
          <Text style={styles.description}>
            And then, when the day arrived, it was nothing like I had imagined –
            it was even better...
          </Text>

          <Text style={styles.titleSource}>Source:</Text>
          <Text style={styles.sourceText}>
            {"\u2022"} Myles, M.F,Marshall,J.E & Raynor,M.D.(red.)(2014).Myles
            textbook for midwives.(16th edition). Edinburgh:Elvisher.
          </Text>

          <View style={styles.horizontalLine}></View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default OxyTocin;

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
    position:'absolute',
    right:horizontalScale(45)
  },
  shareIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
  },
  likeButton: {
    position:'absolute',
    right:horizontalScale(15)
  },
  likeIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
  },
  headerText: {
    fontSize: RFValue(14),
    flex: 1,
    textAlign: "center",
    fontFamily: "Montserrat Medium",
    paddingHorizontal:10,
    marginRight:horizontalScale(25)
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
    fontSize: RFValue(17),
    marginBottom: verticalScale(20),
    fontFamily: "Montserrat Bold",
  },
  subTitle: {
    fontSize: RFValue(14),
    marginBottom: verticalScale(10),
    paddingVertical: verticalScale(5),
    fontFamily: "Montserrat Bold",
  },
  description: {
    fontSize: RFValue(14),
    marginBottom: verticalScale(15),
    lineHeight: verticalScale(20),
    fontFamily: "Montserrat Light",
  },
  title: {
    fontSize: RFValue(10),
    width: "20%",
    marginBottom: verticalScale(20),
    letterSpacing: 1,
    backgroundColor: "#D3D3D3",
    padding: horizontalScale(5),
    borderRadius: horizontalScale(20),
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  titleSource: {
    fontSize: RFValue(15),
    fontFamily: "Montserrat Medium",
    marginBottom: verticalScale(20),
    letterSpacing: 1,
  },
  sourceText: {
    fontSize: RFValue(14),
    marginBottom: verticalScale(20),
    lineHeight: verticalScale(20),
    fontFamily: "Montserrat Light",
  },
  horizontalLine: {
    height: verticalScale(1),
    backgroundColor: "#D3D3D3",
    marginVertical: verticalScale(20),
  },
});