import React from "react";
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
} from "react-native";
import CommonButton from "../../components/CommonButton";
import carouselData from "../../constants/CarouselData";
import colors from "../../constants/color";
import { verticalScale, horizontalScale } from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";

const { width: screenWidth, height } = Dimensions.get("window");
const imageSize = screenWidth;

const WelcomeScreen = ({ navigation, currentIndexCallback }) => {
  const [index, setIndex] = React.useState(0);
  const flatListRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % carouselData.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const onViewableItemsChanged = React.useCallback(
    ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        const currentIndex = viewableItems[0].index;
        setIndex(currentIndex);

        if (currentIndexCallback) {
          currentIndexCallback(currentIndex);
        }
      }
    },
    [currentIndexCallback]
  );

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const renderDots = () => {
    const totalDots = 5; // Total number of dots
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {Array.from({ length: totalDots }, (_, i) => (
          <View
            key={i}
            style={{
              width: 9,
              height: 9,
              borderRadius: 10,
              backgroundColor: i === index ? "#F88C8C" : "#B6B0AE",
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
          ref={flatListRef}
          data={carouselData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
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
            onPress={() => navigation.navigate("StartJourney")}
            filled={true}
            textStyle={styles.buttonText}
          />
          <CommonButton
            title="I ALREADY HAVE AN ACCOUNT"
            onPress={() => navigation.navigate("LoginScreen")}
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
    justifyContent: "space-between",
  },
  slide: {
    width: screenWidth,
    alignItems: "center",
    paddingHorizontal: horizontalScale(30),
  },
  image: {
    width: imageSize,
    height: verticalScale(320),
    resizeMode: "cover",
  },
  title: {
    fontSize: RFValue(18, height),
    textAlign: "center",
    marginTop: verticalScale(30),
    color: colors.textSecondary,
    fontFamily: "Montserrat-Bold",
  },
  description: {
    fontSize: RFValue(14, height),
    textAlign: "center",
    marginTop: verticalScale(10),
    color: "#555",
    fontFamily: "Montserrat-Regular",
  },
  buttonContainer: {
    marginTop: verticalScale(20, height),
    width: screenWidth,
    alignItems: "center",
    marginBottom: Platform.OS === "ios" ? verticalScale(20) : 0,
  },
  buttonText: {
    fontSize: RFValue(12, height),
    fontFamily: "Montserrat-Medium",
    color: colors.black,
  },
});

export default WelcomeScreen;
