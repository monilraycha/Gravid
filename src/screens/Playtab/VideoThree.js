import React from "react";
import VideoScrollable from "../../components/VideoScrollable";

const VideoThree = ({ navigation, route }) => {
  const { articleTitle , image } = route.params;

  const headerTitle = articleTitle;
  const imageSource = require("../../assets/images/womanholdbaby.jpeg");
  const backCancelIcon = require("../../assets/icons/close.png");
  const contentText = "video title 3";

  const descriptions = [
    "As the months passed, I started to enjoy my pregnancy more. I learned about the importance of a balanced diet."
  ];

  return (
    <VideoScrollable
      navigation={navigation}
      headerTitle={headerTitle}
      imageSource={imageSource}
      backCancelIcon={backCancelIcon}
      contentText={contentText}
      descriptions={descriptions}
      videoUri={"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
      thumbnail={image}
    />
  );
};

export default VideoThree;
