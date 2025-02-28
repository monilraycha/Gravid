import React from "react";
import VideoScrollable from "../../components/VideoScrollable";

const Wellness1 = ({ navigation }) => {
  const imageSource = require("../../assets/images/womanholdbaby.jpeg");
  const backCancelIcon = require("../../assets/icons/close.png");
  const contentText = "Prenatal Yoga for a Healthy Pregnancy";
  const image = require("../../assets/images/welcome-image-1.jpg");
  const descriptions = [
    "As the months passed, I started to enjoy my pregnancy more. Prenatal yoga became my go-to practice for staying active, reducing stress, and connecting with my baby.",
    "Prenatal yoga helped me stay flexible and strong during my pregnancy. The gentle stretches and breathing exercises made me feel more relaxed and prepared for labor.",
  ];

  return (
    <VideoScrollable
      navigation={navigation}
      imageSource={imageSource}
      backCancelIcon={backCancelIcon}
      contentText={contentText}
      descriptions={descriptions}
      // showLikeIcon={false}
      videoUri={
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
      thumbnail={image}
    />
  );
};

export default Wellness1;
