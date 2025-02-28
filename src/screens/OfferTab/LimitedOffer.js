import React, { useRef, useState } from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import color from "../../constants/color";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../../constants/fonts";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../helpers/Metrics";
import { data, offerData, wellness } from "./offerdata";

const { width, height } = Dimensions.get("window");

const LimitedOffer = ({ onPressItem, navigation }) => {
  const [index, setIndex] = useState(0);
  const onViewableItemsChanged = React.useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {data.map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            { backgroundColor: i === index ? "grey" : "darkgrey" },
          ]}
        />
      ))}
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.videoContainer}>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          bounces={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                onPressItem && onPressItem(item);
                navigation.navigate(item.screenName);
              }}
            >
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <TouchableOpacity
                  style={styles.backContainer}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    source={require("../../assets/images/back.png")}
                    style={styles.backIcon}
                  />
                </TouchableOpacity>
                <View style={styles.overlay}>
                  <Text style={styles.imgTitle}>{item.title}</Text>
                  <Text style={styles.imgDesc}>{item.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        {renderDots()}
      </View>
      <View style={styles.recommended}>
        <Text style={styles.recommendedTitle}>RECOMMENDED</Text>
        <FlatList
          bounces={false}
          data={offerData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.offersContainer}>
                <TouchableOpacity
                  style={styles.offerCards}
                  onPress={() => {
                    navigation.navigate(item.screenName);
                  }}
                >
                  <Image source={item.image} style={styles.offerImage} />
                  <Text style={styles.offersTitle}>{item.title}</Text>
                  <Text style={styles.offersDesc}>{item.description}</Text>
                  <Text style={styles.duration}>{item.duration}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      <Text style={styles.recommendedTitle}>EXPLORE PREGLIFE WELLNESS</Text>

      {wellness.map((item) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.id} // Key prop is required for list items
            onPress={() => {
              navigation.navigate(item.screenName);
            }}
          >
            <View style={styles.exploreContainer}>
              <Image source={item.image} style={styles.exploreImage} />
              <View style={styles.exploreContent}>
                <Text style={styles.exploreTitle}>{item.title}</Text>
                <Text style={styles.exploreDesc}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: verticalScale(20),
  },
  videoContainer: {
    height: height * 0.5, // Use relative height
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 180,
    borderBottomEndRadius: 180,
    overflow: "hidden",
  },
  imageContainer: {
    width,
    height: height * 0.5, // Use relative height
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scaleX: 0.5 }],
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 120,
    left: "5%",
  },
  imgTitle: {
    fontSize: RFValue(20, height),
    fontFamily: fonts.MontserratBold,
    color: color.white,
  },
  imgDesc: {
    fontSize: RFValue(14, height),
    textAlign: "left",
    width: "40%",
    fontFamily: fonts.MontserratMedium,
    color: color.white,
  },
  backContainer: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  backIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  dotsContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    transform: [{ scaleX: 0.5 }],
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  recommended: {
    marginTop: verticalScale(20),
  },
  recommendedTitle: {
    fontSize: RFValue(14, height),
    marginLeft: horizontalScale(15),
    fontFamily: fonts.MontserratMedium,
    letterSpacing: 1,
  },
  offersContainer: {},
  offerCards: {
    marginTop: verticalScale(20),
    backgroundColor: color.white,
    borderRadius: 10,
    margin: 10,
    height: verticalScale(300),
    width: horizontalScale(220),
  },
  offerImage: {
    width: "100%",
    height: height * 0.2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  offersTitle: {
    fontSize: RFValue(16, height),
    fontFamily: fonts.MontserratMedium,
    marginTop: verticalScale(10),
    marginLeft: horizontalScale(10),
  },
  offersDesc: {
    fontSize: RFValue(14, height),
    fontFamily: fonts.MontserratRegular,
    marginTop: verticalScale(10),
    marginLeft: horizontalScale(10),
  },
  duration: {
    fontSize: RFValue(12, height),
    fontFamily: fonts.MontserratRegular,
    color: "grey",
    marginTop: verticalScale(10),
    marginLeft: horizontalScale(10),
  },

  exploreImage: {
    width: horizontalScale(100),
    height: horizontalScale(100),
  },
  exploreContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  exploreImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  exploreTitle: {
    fontSize: RFValue(18, height),
    fontFamily: fonts.MontserratSemiBold,
  },
  exploreDesc: {
    fontSize: RFValue(14, height),
    color: "gray",
    marginTop: 5,
    fontFamily: fonts.MontserratRegular,
    width: "80%",
  },
});

export default LimitedOffer;
