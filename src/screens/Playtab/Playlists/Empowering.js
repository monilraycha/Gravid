import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import styles from "./styles";

const { width, height } = Dimensions.get("window");

const videoData = [
  {
    id: 1,
    title: "Practice clenching",
    description: "Pregnancy is the term used to describe the period in which a fetus develops inside a woman's womb or uterus.",
    thumbnail: require("../../../assets/images/podcastw.jpg"),
    screenName: "Empower1",
  },
  {
    id: 2,
    title: "Another video",
    description: "Pregnancy usually lasts about 40 weeks, or just over 9 months, as measured from the last menstrual period to delivery. Health care providers refer to three segments of pregnancy, called trimesters.",
    thumbnail: require("../../../assets/images/woman1.jpg"),
    screenName: "Empower2",
  },
  // Add more video objects as needed
];

const Empowering = ({ navigation, route }) => {
  const {
    title: headerTitle,
    description: headerDescription,
    imgUri,
  } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Static Header */}
      <View style={styles.header}>
        <Image source={imgUri} style={styles.headerImage} />
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/icons/back.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require("../../../assets/icons/search.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Content in a ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Video Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{headerTitle}</Text>
          <Text style={styles.description}>{headerDescription}</Text>
        </View>

        {/* Render Video List */}
        {videoData.map((video) => (
          <TouchableOpacity
            key={video.id}
            style={styles.videoItem}
            onPress={() =>
              navigation.navigate(video.screenName, {
                title: video.title,
                description: video.description,
                thumbnail: video.thumbnail,
              })
            }
          >
            <View style={styles.thumbnailContainer}>
              <Image source={video.thumbnail} style={styles.videoThumbnail} />
              <Image
                source={require("../../../assets/icons/play-button1.png")}
                style={styles.playIcon}
              />
            </View>
            <View style={styles.videoTextContainer}>
              <View>
                <Text style={styles.videoTitle}>{video.title}</Text>
                <Text style={styles.videoDescription} numberOfLines={1}>{video.description}</Text>
              </View>
              <Image
                source={require("../../../assets/icons/chevron.png")}
                style={styles.nextIcon}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Empowering;
