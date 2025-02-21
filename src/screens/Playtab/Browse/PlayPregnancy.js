// screens/Podcast.js
import React from "react";
import { View, ScrollView } from "react-native";
import VideoCard from "../../../components/VideoCard";
import PlayHeader from "../../../components/PlayHeader";

const videoData = [
  {
    id: "1",
    title: "Pregnancy period",
    description: "Empowering stories from around the world and the people who are making a difference.",
    imgUri: require("../../../assets/images/woman2.jpg"),
  },
  {
    id: "2",
    title: "Missed period",
    description: "Listen to the latest trends and insights!",
    imgUri: require("../../../assets/images/woman3.jpg"),
  },
];

const PlayPregnancy = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
        
      <PlayHeader navigation={navigation} title="Pregnancy" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", paddingBottom: 20 }}>
          {videoData.map((item) => (
            <VideoCard key={item.id} title={item.title} description={item.description} imgUri={item.imgUri} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PlayPregnancy;
