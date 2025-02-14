import React, {useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
} from 'react-native';
import colors from '../../constants/color';
import {horizontalScale, verticalScale} from '../../helpers/Metrics';
import {RFValue} from 'react-native-responsive-fontsize';

// Get device width and height
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const OxyTocin = ({navigation}) => {
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
      <Animated.View style={[styles.fixedHeader, {opacity: headerOpacity}]}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/close.png')}
            style={styles.cancelIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          The importance of oxytocin for breastfeeding
        </Text>
        <Image
          source={require('../../assets/icons/sharedetail.png')}
          style={styles.shareIcon}
        />
        <Image
          source={require('../../assets/images/heart.png')}
          style={styles.likeIcon}
        />
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        {/* Animated Image */}
        <Animated.Image
          source={require('../../assets/images/womanholdbaby.jpeg')}
          style={[styles.ladyImage, {opacity: imageOpacity}]}
        />

        {/* Content Below */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>READ</Text>
          <Text style={styles.text}>
            The importance of oxytocin for breastfeeding
          </Text>

          {/* Paragraphs and Titles */}
          {[
            {
              type: 'paragraph',
              content:
                'The moment I found out I was pregnant, a rush of emotions flooded through me...',
            },
            {
              type: 'paragraph',
              content:
                'The first trimester was challenging. I experienced morning sickness almost every day...',
            },
            {type: 'title', content: 'Milk Booster'}, // Title 1
            {
              type: 'paragraph',
              content:
                'As the months passed, I started to enjoy my pregnancy more. I could feel the baby’s movements...',
            },
            {type: 'title', content: 'Emotional Bonding'}, // Title 2
            {
              type: 'paragraph',
              content:
                'The final trimester brought its own set of challenges, but I could feel myself getting stronger...',
            },
            {type: 'title', content: "Oxytocin's Role in Breastfeeding"}, // Title 3
            {
              type: 'paragraph',
              content:
                'And then, when the day arrived, it was nothing like I had imagined – it was even better...',
            },
          ].map((item, index) => (
            <Text
              key={index}
              style={
                item.type === 'title' ? styles.subTitle : styles.description
              }>
              {item.content}
            </Text>
          ))}
          <Text style={styles.titleSource}> Source:</Text>

            <Text style ={styles.sourceText}>
            {'\u2022'} Myles, M.F,Marshall,J.E & Raynor,M.D.(red.)(2014).Myles textbook for midwives.(16th edition). Edinburgh:Elvisher.
            </Text>
            <View style = {styles.horizontalLine}>

            </View>
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
    height: horizontalScale(20),
  },
  shareIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    marginRight: horizontalScale(10),
  },
  likeIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    marginLeft: horizontalScale(10),
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
    fontSize: RFValue(17),
    marginBottom: verticalScale(20),
    fontFamily: 'Montserrat Bold',

  },
  subTitle: {
    fontSize: RFValue(14),
    marginBottom: verticalScale(10),
    paddingVertical: verticalScale(5),
    fontFamily: 'Montserrat Bold',
  },
  description: {
    fontSize: RFValue(14),
    marginBottom: verticalScale(15),
    lineHeight: verticalScale(20),
    fontFamily: 'Montserrat Light',
  },

  title: {
    fontSize: RFValue(10),
    width: '20%',
    marginBottom: verticalScale(20),
    letterSpacing: 1,
    marginLeft: horizontalScale(10),
    backgroundColor: '#D3D3D3',
    padding: horizontalScale(5),
    borderRadius: horizontalScale(20),
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  titleSource: {
    fontSize: RFValue(15),
    fontFamily: 'Montserrat Medium',
    marginBottom: verticalScale(20),
    letterSpacing: 1,
  },
  sourceText:{
    fontSize: RFValue(14),
    marginBottom: verticalScale(20),
    lineHeight: verticalScale(20),
    fontFamily: 'Montserrat Light',},
  horizontalLine:{
    height: verticalScale(1),
    backgroundColor: '#D3D3D3',
    marginVertical: verticalScale(20),
  }
});
