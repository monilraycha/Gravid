import React from "react";
import VideoScrollable from "../../components/VideoScrollable";

const TryFree = ({ navigation }) => {
  const imageSource = require("../../assets/images/womanholdbaby.jpeg");
  const backCancelIcon = require("../../assets/icons/close.png");
  const contentText = "Prenatal Yoga for a Healthy Pregnancy";
  const image = require("../../assets/images/woman1.jpg");
  const descriptions = [
    "As the months passed, I started to enjoy my pregnancy more. Prenatal yoga became my go-to practice for staying active, reducing stress, and connecting with my baby.",
    "Prenatal yoga helped me stay flexible and strong during my pregnancy. The gentle stretches and breathing exercises made me feel more relaxed and prepared for labor.",
    "I discovered how prenatal yoga could ease common pregnancy discomforts like back pain and swelling. It became a cherished part of my daily routine.",
    "My yoga instructor taught me poses specifically designed for pregnancy. I felt more balanced, both physically and emotionally, as my body continued to change.",
    "Incorporating prenatal yoga into my week was transformative. It not only improved my strength and flexibility but also gave me a sense of calm and mindfulness during this special journey.",
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

export default TryFree;
