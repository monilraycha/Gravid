import React, { useRef } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
  Linking,
} from 'react-native';
import CommonButton from '../../components/CommonButton';
import colors from '../../constants/color';
import { horizontalScale, verticalScale } from '../../helpers/Metrics';
import { RFValue } from 'react-native-responsive-fontsize';

// Get device width and height
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const TellStory = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const imageHeight = deviceHeight * 0.3;

  // Header opacity based on scroll position
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  // Image opacity based on scroll position
  const imageOpacity = scrollY.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* Animated Header */}
      <Animated.View style={[styles.fixedHeader, { opacity: headerOpacity }]}> 
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/icons/close.png')}
            style={styles.cancelIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tell your birth story!</Text>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Animated Image */}
        <Animated.Image
          source={require('../../assets/images/womanholdbaby.jpeg')}
          style={[styles.ladyImage, { opacity: imageOpacity }]}
        />

        {/* Content Below */}
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Tell your birth story!</Text>

          {/* Paragraphs */}
          {[
            "The moment I found out I was pregnant, a rush of emotions flooded through me...",
            "The first trimester was challenging. I experienced morning sickness almost every day...",
            "As the months passed, I started to enjoy my pregnancy more. I could feel the baby’s movements...",
            "The final trimester brought its own set of challenges, but I could feel myself getting stronger...",
            "And then, when the day arrived, it was nothing like I had imagined – it was even better...",
            "The moment I found out I was pregnant, a rush of emotions flooded through me...",
            "The first trimester was challenging. I experienced morning sickness almost every day...",
            "As the months passed, I started to enjoy my pregnancy more. I could feel the baby’s movements...",
            "The final trimester brought its own set of challenges, but I could feel myself getting stronger...",
            "And then, when the day arrived, it was nothing like I had imagined – it was even better...",
          ].map((paragraph, index) => (
            <Text key={index} style={styles.description}>{paragraph}</Text>
          ))}

          <CommonButton
            title="FOLLOW US HERE !"
            filled={true}
            style={styles.button}
            textStyle={styles.btntext}
            onPress={() => Linking.openURL('https://www.instagram.com/monil_4102')}

          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default TellStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
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
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Montserrat Medium',
  },
  ladyImage: {
    width: deviceWidth,
    height: deviceHeight * 0.3,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: horizontalScale(20),
    paddingTop: verticalScale(20),
  },
  text: {
    fontSize: RFValue(18),
    marginBottom: verticalScale(20),
    fontFamily: 'Montserrat Bold',
  },
  description: {
    fontSize: RFValue(14),
    marginBottom: verticalScale(15),
    fontFamily: 'Montserrat',
  },
  btntext: {
    fontSize: RFValue(12),
    fontFamily: 'Montserrat Light',
  },
  button: {
    marginTop: verticalScale(20),
    backgroundColor: '#9BAF8E',
    alignSelf: 'center',
  },
});