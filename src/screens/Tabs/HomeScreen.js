import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import React from 'react';
import colors from '../../constants/color';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/Metrics';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {RFValue} from 'react-native-responsive-fontsize';
import videoData from '../../helpers/VideoData';
import VideoPlayer from 'react-native-video-player';

const {height} = Dimensions.get('window');


const AnimatedHeader = ({animatedValue, navigation}) => {
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, 150],
    outputRange: [200, 80],
    extrapolate: 'clamp',
  });

  const logoSize = animatedValue.interpolate({
    inputRange: [0, 150],
    outputRange: [100, 40], // Adjusting size on scroll
    extrapolate: 'clamp',
  });

  const logoMarginTop = animatedValue.interpolate({
    inputRange: [0, 150],
    outputRange: [40, 10], // Moves logo up on scroll
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, {height: headerHeight}]}>
      {/* Settings Icon - Fixed */}
      <Animated.View style={[styles.fixedIcon, {left: 20}]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../assets/images/setting.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </Animated.View>

      {/* Logo - Moves on Scroll */}
      <Animated.Image
        source={require('../../assets/icons/pediatrics.png')}
        style={[
          styles.iconLogo,
          {width: logoSize, height: logoSize, marginTop: logoMarginTop},
        ]}
      />

      {/* Email Icon - Fixed */}
      <Animated.View style={[styles.fixedIcon, {right: 20}]}>
        <TouchableOpacity onPress={() => navigation.navigate('InboxScreen')}>
          <Image
            source={require('../../assets/images/email.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};


const HomeScreen = ({navigation}) => {


  const playerRef = React.useRef(null);
  const videoRefs = React.useRef([]);

  const offset = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.safeArea}
        forceInset={{top: 'always'}}
        edges={['top']}>
        <AnimatedHeader animatedValue={offset} navigation={navigation} />
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          scrollEnabled={true}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: offset}}}],
            {useNativeDriver: false},
          )}>
          <View style={styles.container}>
            <View>
              {/* Main Content */}
              <View style={styles.content}>
                <Text style={styles.title}>What's happening this month?</Text>

                {/* Button Container */}
                <View style={styles.buttonContainer}>
                  {/* Button 1 */}
                  <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button}>
                      <Image
                        source={require('../../assets/icons/1.png')}
                        style={styles.buttonIcon}
                      />
                    </TouchableOpacity>
                    <Text style={styles.btnTitle}>Parenthood</Text>
                  </View>

                  <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button}>
                      <Image
                        source={require('../../assets/icons/2.png')}
                        style={styles.buttonIcon}
                      />
                    </TouchableOpacity>
                    <Text style={styles.btnTitle}>Development</Text>
                  </View>

                  <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button}>
                      <Image
                        source={require('../../assets/icons/3.png')}
                        style={styles.buttonIcon}
                      />
                    </TouchableOpacity>
                    <Text style={styles.btnTitle}>Tips</Text>
                  </View>
                </View>
              </View>

              <View>
                <Text style={styles.postTitle}>POSTPARTUM</Text>

                <TouchableOpacity style={styles.toolCard}>
                  <View style={styles.toolItem}>
                    <View style={styles.iconContainer}>
                      <Image
                        source={require('../../assets/icons/star.png')}
                        style={styles.starIcon}
                      />
                    </View>
                    <View style={styles.toolInfo}>
                      <Text style={styles.toolTitle}>
                        Get to know and help your new body and mind to heal
                      </Text>
                      <Text style={styles.toolDescription}>
                        Designed by experts to guide and support you
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>


                  {/* Horizontal FlatList for Video Cards */}
                  <View style={styles.VideoContainer}>
                <Text style={styles.VideoTitle}>FEATURED THIS MONTH</Text>
                <FlatList
                  data={videoData} 
                  horizontal
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View style={styles.VideoCard}>
                      <VideoPlayer
                        ref={playerRef}
                        endWithThumbnail
                        thumbnail={{ uri: item.thumbnail }}
                        source={{ uri: item.videoUri }}
                        onError={(e) => console.log(e)}
                        showDuration={true}
                        style={styles.videoPlayer}
                      />
                      <Text style={styles.titleVideo}>{item.title}</Text>
                      <Text style={styles.descriptionVideo}>
                        {item.description}
                      </Text>
                    </View>
                  )}
                />
              {/* </View> */}

                  {/* Instagram Card */}
                  <Text style={styles.sectionTitle}>INSTAGRAM</Text>
                  <TouchableOpacity
                    style={styles.instagramCard}
                    onPress={() => navigation.navigate('FollowOnInsta')}>
                    {/* Circular Instagram Icon */}
                    <View style={styles.instagramIconContainer}>
                      <Image
                        source={require('../../assets/icons/instagram.png')}
                        style={styles.instagramIcon}
                      />
                    </View>
                    <Text style={styles.instagramText}>
                      Follow Preglife on Instagram - Interact, ask questions and
                      share your pregnancy with us{' '}
                      <Text style={styles.readMore}>Read more</Text>
                    </Text>
                  </TouchableOpacity>

                  {/* Weight section */}

                  <Text style={styles.sectionTitle}>WEIGHT CURVE</Text>
                  <TouchableOpacity style={styles.weightCard}>
                    <View style={styles.weightIconContainer}>
                      <Image
                        source={require('../../assets/images/chart.png')}
                        style={styles.weightIcon}
                      />
                    </View>
                    <Text style={styles.weightText}>
                      Activate your child's weight and height chart{' '}
                      <Text style={styles.readMore}>click here </Text>
                    </Text>
                  </TouchableOpacity>

                  {/* Birth Story */}

                  <Text style={styles.sectionTitle}>MY BIRTH STORY</Text>
                  <TouchableOpacity
                    style={styles.weightCard}
                    onPress={() => navigation.navigate('TellStory')}>
                    <View style={styles.bookIconContainer}>
                      <Image
                        source={require('../../assets/images/open-book.png')}
                        style={styles.bookIcon}
                      />
                    </View>
                    <Text style={styles.weightText}>
                      We know that no two births are alike. Tell us your birth
                      story <Text style={styles.readMore}> Read more </Text>
                    </Text>
                  </TouchableOpacity>

                  {/* oxytocin */}
                  <Text style={styles.sectionTitle}>OXYTOCIN</Text>
                  <TouchableOpacity
                    style={styles.oxytocinCard}
                    onPress={() => navigation.navigate('OxyTocin')}>
                    <View style={styles.oxytocinTextContainer}>
                      <Text style={styles.oxytocinText}>PREGNANCY</Text>
                      <Text style={styles.oxytocinDesc}>
                        The Importance of Oxytocin for breastfeeding
                      </Text>
                    </View>

                    <Image
                      source={require('../../assets/images/oxytocin.jpeg')}
                      style={styles.oxytocinImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    padding: moderateScale(15),
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative',
    paddingTop: 0,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: RFValue(16 , height),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(20),
    fontFamily: 'Montserrat Medium',
    textAlign: 'center',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(40),
    marginHorizontal: horizontalScale(30),
  },
  iconLogo: {
    width: horizontalScale(150),
    height: horizontalScale(150),
    backgroundColor: '#e2d7d5',
    borderRadius: moderateScale(75),
    padding: moderateScale(10),
    alignSelf: 'center',
  },

  icon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
  },
  fixedIcon: {
    position: 'absolute',
    top: 5,
    zIndex: 10,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  },
  buttonIcon: {
    width: horizontalScale(30),
    height: horizontalScale(30),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: verticalScale(30),
    width: '100%',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    width: horizontalScale(70),
    height: horizontalScale(70),
    borderRadius: moderateScale(35),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  btnTitle: {
    fontSize: RFValue(12),
    textAlign: 'center',
    marginTop: verticalScale(5),
    fontFamily: 'Montserrat',
  },
  postTitle: {
    fontSize: RFValue(14),
    marginTop: verticalScale(40),
    marginLeft: horizontalScale(25),
    fontFamily: 'Montserrat',
  },
  toolCard: {
    marginTop: verticalScale(10),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  toolItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#ddd',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    marginBottom: verticalScale(10),
  },
  iconContainer: {
    backgroundColor: colors.primary,
    width: horizontalScale(90),
    height: horizontalScale(90),
    borderRadius: moderateScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: horizontalScale(15),
  },
  starIcon:{
    width: horizontalScale(50),
    height: horizontalScale(50),
  },
  toolInfo: {
    flex: 1,
  },
  toolTitle: {
    fontSize: RFValue(14),
    fontWeight: moderateScale(600),
    marginBottom: verticalScale(5),
    fontFamily: 'Montserrat Medium',
  },
  toolDescription: {
    fontSize: RFValue(12),
    color: '#555',
    fontFamily: 'Montserrat',
    marginTop: verticalScale(5),
  },
  newSection: {
    marginTop: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },
  sectionTitle: {
    fontSize: RFValue(14 , height),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(20),
    fontFamily: 'Montserrat',
  },
  playIconContainer: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    zIndex: 1,
  },
  playIcon: {
    width: horizontalScale(50),
    height: horizontalScale(50),
  },
  VideoContainer: {
    paddingLeft: horizontalScale(20),
    marginTop: verticalScale(10),

  },
  VideoTitle: {
    marginBottom: verticalScale(10),
    marginRight: horizontalScale(10),
    fontSize: RFValue(14, height),
    fontFamily: "Montserrat Medium",
    color: "#333",
  },
  VideoCard: {
    width: horizontalScale(250),
    marginRight: horizontalScale(15),
    backgroundColor: "#fff",
    borderRadius: moderateScale(10),
    paddingBottom: verticalScale(30),
    marginBottom: verticalScale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    overflow: "hidden",
  },
  titleVideo: {
    fontSize: RFValue(16, height),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
    color: "gray",
    marginLeft: horizontalScale(15),
    fontFamily: "Montserrat Medium",
  },
  descriptionVideo: {
    fontSize: RFValue(14, height),
    marginBottom: verticalScale(5),
    marginLeft: horizontalScale(15),
    fontFamily: "Montserrat Regular",
  },
  videoPlayer: {
    width: "100%",
    height: verticalScale(180),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },

  instagramCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  instagramIconContainer: {
    backgroundColor: '#E1306C', 
    width: RFValue(70),
    height: RFValue(70),
    borderRadius: RFValue(35),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: RFValue(10),
  },
  instagramIcon: {
    width: RFValue(30),
    height: RFValue(30),
    tintColor: '#fff',
  },
  instagramText: {
    fontSize: RFValue(13),
    flex: 1,
    textAlign: 'left',
    marginLeft: RFValue(10),
    fontFamily: 'Montserrat',
  },
  readMore: {
    fontSize: RFValue(12),
    marginTop: 10,
  },
  weightCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  weightIconContainer: {
    backgroundColor: colors.primary,
    width: RFValue(70),
    height: RFValue(70),
    borderRadius: RFValue(35),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: RFValue(10),
  },
  weightText: {
    fontSize: RFValue(13),
    flex: 1,
    textAlign: 'left',
    marginLeft: RFValue(10),
    fontFamily: 'Montserrat',
  },

  weightIcon: {
    width: RFValue(30),
    height: RFValue(30),
    tintColor: '#000000',
  },

  bookIconContainer: {
    backgroundColor: 'lightgrey',
    width: RFValue(55),
    height: RFValue(55),
    borderRadius: RFValue(27),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: RFValue(10),
  },
  bookIcon: {
    width: RFValue(45),
    height: RFValue(45),
    tintColor: '#000000',
  },
  oxytocinCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    width: '100%',
    height: RFValue(100),
    marginBottom: verticalScale(50),
    overflow: 'hidden',
  },

  oxytocinTextContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: RFValue(10),
    fontFamily: 'Montserrat',
  },
  oxytocinText:{
    fontSize: RFValue(12),
    fontFamily: 'Montserrat Medium',
    paddingBottom: RFValue(7),
  },
  oxytocinDesc:{
    fontSize: RFValue(10),
    fontFamily: 'Montserrat',
  },
  oxytocinImage: {
    width: RFValue(150),
    height: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: RFValue(10),
    borderBottomRightRadius: RFValue(10),
  },
});
