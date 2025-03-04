import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import VideoPlayer from "react-native-video-player";
import colors from "../../constants/color";
import { PlayContent, PlayImageData } from "../../constants/PlayContent";
import videoData from "../../constants/VideoData";
import { RFValue } from "react-native-responsive-fontsize";
import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "../../helpers/Metrics";
import fonts from "../../constants/fonts";
const { width, height } = Dimensions.get("window");
const CARD_SIZE = width / 3.4;

const PlayScreen = ({ navigation }) => {
  const playerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const videoRefs = useRef([]);

  const onViewableItemsChanged = React.useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

  const renderDots = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {PlayImageData.map((_, i) => (
          <View
            key={i}
            style={{
              width: 9,
              height: 9,
              borderRadius: 10,
              backgroundColor: i === index ? "#F88C8C" : "#D9D9D9",
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
        {/* <TouchableOpacity>
          <Image
            source={require("../../assets/images/search-interface-symbol.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity> */}
      </View>

      {/* FlatList for all content */}
      <FlatList
        data={[PlayImageData, PlayContent, videoData]} // Nested data, multiple sections
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
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
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View style={styles.slide}>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                          if (item.title) {
                            navigation.navigate(item.screenName, {
                              title: item.title,
                              image: item.image,
                            });
                          }
                        }}
                      >
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.imageTitle}>{item.title}</Text>
                        <Text style={styles.imgDescription}>
                          {item.description}
                        </Text>
                      </TouchableOpacity>
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
                  scrollEventThrottle={16}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.card,
                        { width: CARD_SIZE, height: CARD_SIZE },
                      ]}
                      onPress={() =>
                        navigation.navigate(item.screenName, {
                          title: item.title,
                        })
                      }
                    >
                      <Image source={item.image} style={styles.cardImage} />
                      <Text style={styles.cardTitle}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.id}
                  numColumns={3}
                  contentContainerStyle={styles.grid}
                />
              </View>
            );
          }
          if (index === 2) {
            return (
              // <---- ADD RETURN HERE
              <View style={styles.VideoContainer}>
                <Text style={styles.VideoTitle}>POPULAR RIGHT NOW</Text>
                <FlatList
                  data={item} // Videos
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
              </View>
            );
          }
        }}
        ListHeaderComponent={() => null}
        showsVerticalScrollIndicator={false}
        bounces={false}
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
    padding: moderateScale(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: RFValue(16, height),
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    flex: 1,
    textAlign: "center",
  },
  searchIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
  },
  carouselContainer: {
    width: "100%",
    height: verticalScale(300),
    position: "relative",
  },
  slide: {
    width,
    alignItems: "center",
  },
  image: {
    flex: 1,
    width,
    height: verticalScale(250),
    resizeMode: "cover",
  },
  imageTitle: {
    fontSize: RFValue(16, height),
    fontFamily: fonts.MontserratBold,
    marginLeft: horizontalScale(5),
    position: "absolute",
    bottom: "13%",
    left: "2%",
    color: colors.white,
  },
  imgDescription: {
    fontSize: RFValue(14, height),
    fontFamily: fonts.MontserratMedium,
    marginLeft: horizontalScale(10),
    position: "absolute",
    bottom: "5%",
    left: "2%",
    color: colors.white,
  },
  body: {
    padding: moderateScale(10),
  },
  bodyTitle: {
    fontSize: RFValue(15, height),
    fontFamily: fonts.MontserratMedium,
    color: colors.textSecondary,
    marginLeft: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  grid: {
    paddingHorizontal: horizontalScale(10),
    paddingTop: verticalScale(15),
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    margin: moderateScale(5),
  },
  cardImage: {
    width: horizontalScale(40),
    height: horizontalScale(40),
    marginBottom: verticalScale(5),
  },
  cardTitle: {
    fontSize: RFValue(12, height),
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    textAlign: "center",
  },
  VideoContainer: {
    paddingLeft: horizontalScale(10),
    marginTop: verticalScale(10),
  },
  VideoTitle: {
    marginBottom: verticalScale(10),
    marginRight: horizontalScale(10),
    fontSize: RFValue(15, height),
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
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
    fontFamily: fonts.MontserratMedium,
  },
  descriptionVideo: {
    fontSize: RFValue(14, height),
    color: colors.black,
    marginBottom: verticalScale(5),
    marginLeft: horizontalScale(15),
    fontFamily: fonts.MontserratRegular,
  },
  videoPlayer: {
    width: "100%",
    height: verticalScale(180),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
});
