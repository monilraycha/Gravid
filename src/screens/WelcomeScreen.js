import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import CommonButton from '../components/CommonButton';
import carouselData from '../helpers/CarouselData';

const {width: screenWidth} = Dimensions.get('window');
const imageSize = screenWidth;

const WelcomeScreen = (props) => {

  const [index , setIndex] = React.useState(0);

  const onViewableItemsChanged = React.useCallback(({ viewableItems }) => {  
    if (viewableItems.length > 0) {  
      const currentIndex = viewableItems[0].index;  
      setIndex(currentIndex);  
      
      if (props.currentIndexCallback) {  
        props.currentIndexCallback(currentIndex);  
      }  
    }  
  }, [props]);  

  const viewabilityConfig = {  
    viewAreaCoveragePercentThreshold: 50,  
  }; 

  const renderDots = () => {  

    const totalDots = 5; // Total number of dots  
    return (  
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>  
        {Array.from({ length: totalDots }, (_, i) => (  
          <View   
            key={i}   
            style={{   
              width: 9,   
              height: 9,   
              borderRadius: 10,   
              backgroundColor: i === index ? '#F88C8C' : '#D9D9D9', // Change color based on active index  
              margin: 10
            }}   
          />  
        ))}  
      </View>  
    );  
  };  


  return (
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
          onPress={() => {}}
          filled={true}
        />
        <CommonButton
          title="I ALREADY HAVE AN ACCOUNT"
          onPress={() => {}}
          filled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E6',
    justifyContent: 'space-between',
  },
  slide: {
    width: screenWidth, // Ensures full-width slides
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: imageSize,
    height: 340, // Adjusted for better viewing
    resizeMode: 'cover',
  },
  title: {
    fontSize: 25,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    color: '#333',
    fontFamily: 'Open Sans SemiCondensed Bold',
    // fontWeight:'600'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
