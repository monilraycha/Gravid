import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import CommonButton from '../../components/CommonButton';
import carouselData from '../../helpers/CarouselData';
import colors from '../../constants/color';
import {verticalScale, horizontalScale} from '../../helpers/Metrics';
import {RFValue} from 'react-native-responsive-fontsize';

const {width: screenWidth} = Dimensions.get('window');
const imageSize = screenWidth;

const WelcomeScreen = ({navigation, currentIndexCallback}) => {
  const [index, setIndex] = React.useState(0);

  const onViewableItemsChanged = React.useCallback(
    ({viewableItems}) => {
      if (viewableItems.length > 0) {
        const currentIndex = viewableItems[0].index;
        setIndex(currentIndex);

        if (currentIndexCallback) {
          currentIndexCallback(currentIndex);
        }
      }
    },
    [currentIndexCallback],
  );

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const renderDots = () => {
    const totalDots = 5; // Total number of dots
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {Array.from({length: totalDots}, (_, i) => (
          <View
            key={i}
            style={{
              width: 9,
              height: 9,
              borderRadius: 10,
              backgroundColor: i === index ? '#F88C8C' : '#D9D9D9',
              margin: 10,
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={carouselData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.slide}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
        {renderDots()}
        <View style={styles.buttonContainer}>
          <CommonButton
            title="START THE JOURNEY"
            onPress={() => navigation.navigate('StartJourney')}
            filled={true}
            textStyle={styles.buttonText}
          />
          <CommonButton
            title="I ALREADY HAVE AN ACCOUNT"
            onPress={() => navigation.navigate('LoginScreen')}
            filled={false}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  slide: {
    width: screenWidth,
    alignItems: 'center',
    paddingHorizontal: horizontalScale(30),
  },
  image: {
    width: imageSize,
    height: verticalScale(320),
    resizeMode: 'cover',
  },
  title: {
    fontSize: RFValue(20),
    textAlign: 'center',
    marginTop: verticalScale(30),
    color: '#333',
    fontFamily: 'Montserrat Bold',
  },
  description: {
    fontSize: RFValue(12),
    textAlign: 'center',
    marginTop: verticalScale(10),
    color: '#555',
    fontFamily: 'Montserrat',
  },
  buttonContainer: {
    marginTop: verticalScale(20),
    width: screenWidth,
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? verticalScale(20) : 0,
  },
  buttonText: {
    fontSize: RFValue(10),
  },
});

export default WelcomeScreen;
