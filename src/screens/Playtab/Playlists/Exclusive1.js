import React from "react";
import VideoScrollable from "../../../components/VideoScrollable";

const Exclusive1 = ({ navigation, route }) => {
  const { articleTitle , title ,description , thumbnail } = route.params;

  const headerTitle = articleTitle;
  const imageSource = require("../../../assets/images/womanholdbaby.jpeg");
  const backCancelIcon = require("../../../assets/icons/close.png");
  const contentText = title;
  const descriptions = [
    description
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
      thumbnail= {thumbnail}
    />
  );
};

export default Exclusive1;
