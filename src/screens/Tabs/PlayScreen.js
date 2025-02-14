import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import colors from '../../constants/color';
import PlayContent from '../../helpers/PlayContent';
import videoData from '../../helpers/VideoData';
import { RFValue } from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');
const CARD_SIZE = width / 3.4;

const imageData = [
  {id: '1', image: require('../../assets/images/welcome-image-1.jpg')},
  {id: '2', image: require('../../assets/images/welcome-image-2.jpg')},
  {id: '3', image: require('../../assets/images/welcome-image-3.jpg')},
];

const PlayScreen = () => {
  const [index, setIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef([]);

  const onViewableItemsChanged = React.useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 50};

  const togglePlayPause = id => {
    setPlayingVideo(playingVideo === id ? null : id);
  };

  const renderDots = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {imageData.map((_, i) => (
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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Play</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/search-interface-symbol.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
  
      {/* FlatList for all content */}
      <FlatList
        data={[imageData, PlayContent, videoData]}  // Nested data, multiple sections
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          if (index === 0) {
            return (
              <View style={styles.carouselContainer}>
                <FlatList
                  data={item} // Carousel images
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  onViewableItemsChanged={onViewableItemsChanged}
                  viewabilityConfig={viewabilityConfig}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <View style={styles.slide}>
                      <Image source={item.image} style={styles.image} />
                    </View>
                  )}
                />
                {renderDots()}
              </View>
            );
          }
          if (index === 1) {
            return (
              <View style={styles.body}>
                <Text style={styles.bodyTitle}>BROWSE ALL CONTENT</Text>
                <FlatList
                  data={item} // Browse all content
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={[styles.card, {width: CARD_SIZE, height: CARD_SIZE}]}>
                      <Image source={item.image} style={styles.cardImage} />
                      <Text style={styles.cardTitle}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                  numColumns={3}
                  contentContainerStyle={styles.grid}
                />
              </View>
            );
          }
          if (index === 2) {
            return (
              <View>
                <Text style={styles.bodyTitle}>POPULAR RIGHT NOW</Text>
                <FlatList
                  data={item} // Popular videos
                  renderItem={({item}) => (
                    <View style={styles.videoCard}>
                      <TouchableOpacity
                        style={styles.videoContainer}
                        onPress={() => togglePlayPause(item.id)}>
                        <Video
                          source={{uri: item.uri}}
                          ref={ref => (videoRefs.current[item.id] = ref)}
                          style={styles.video}
                          paused={playingVideo !== item.id}
                          resizeMode="cover"
                          repeat
                        />
                        {/* Thumbnail Overlay */}
                        {playingVideo !== item.id && (
                          <Image source={item.thumbnail} style={styles.thumbnail} />
                        )}
                        {/* Transparent Circular Play Button */}
                        {playingVideo !== item.id && (
                          <TouchableOpacity
                            style={styles.playButton}
                            onPress={() => togglePlayPause(item.id)}>
                            <View>
                              <Image
                                source={require('../../assets/icons/play-button.png')}
                                style={styles.playIcon}
                              />
                            </View>
                          </TouchableOpacity>
                        )}
                        {/* Video Duration */}
                        <View style={styles.durationContainer}>
                          <Text style={styles.videoDuration}>{item.duration}</Text>
                        </View>
                      </TouchableOpacity>
                      {/* Video Info */}
                      <View style={styles.videoDetails}>
                        <Text style={styles.videoDescription}>{item.description}</Text>
                        <Text style={styles.videoTitle}>{item.title}</Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{paddingHorizontal: 10}}
                  nestedScrollEnabled
                />
              </View>
            );
          }
        }}
        ListHeaderComponent={() => null}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};


export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: RFValue(18),
    fontWeight: '300',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  searchIcon: {width: 24, height: 24},
  carouselContainer: {width: '100%', height: 300},
  slide: {width, alignItems: 'center'},
  image: {width, height: 300, resizeMode: 'cover'},
  body: {padding: 10},
  bodyTitle: {fontSize: 17, color: '#333', marginLeft: 20, marginVertical: 10},
  grid: {paddingHorizontal: 10, paddingTop: 15},
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  cardImage: {width: 40, height: 40, marginBottom: 5},
  cardTitle: {fontSize: 12, color: '#333' , textAlign: 'center'},
  videoCard: {
    width: width * 0.7,
    margin: 10,
    backgroundColor: '#fff', // White background
    borderRadius: 10,
    paddingBottom: 15, // Spacing for text
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  videoContainer: {
    height: 180,
    borderTopLeftRadius: 10, // Ensure rounded top corners
    borderTopRightRadius: 10,
    overflow: 'hidden', // Prevents video overflow
    backgroundColor: '#000',
  },

  video: {
    width: '100%',
    height: '100%',
  },

  thumbnail: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  playButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
  },

  playIcon: {
    width: 50,
    height: 50,
    tintColor: 'white',
  },

  durationContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 5,
  },

  videoDuration: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold',
  },

  videoTitle: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
  },

  videoDescription: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
    marginLeft: 10,
    flexWrap: 'wrap',
    width: '90%',
  },
});
