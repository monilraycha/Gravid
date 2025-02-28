import React from "react";
import VideoScrollable from "../../components/VideoScrollable";

const OfferVideo2 = ({ navigation }) => {
  const imageSource = require("../../assets/images/womanholdbaby.jpeg");
  const backCancelIcon = require("../../assets/icons/close.png");
  const contentText = "Pelvic Floor Exercises";
  const headerTitle = "Check";
  const image = require("../../assets/images/woman2.jpg");
  const descriptions = [
    "As the months passed, I started to enjoy my pregnancy more. I learned about the importance of a balanced diet.",
    "As the months passed, I started to enjoy my pregnancy more. I learned about the importance of a balanced diet As the months passed, I started to enjoy my pregnancy more. I learned about the importance of a balanced diet.",
    "As the months passed, I started to enjoy my pregnancy more. I learned about the importance of a balanced diet.",
    "As the months passed, I started to enjoy my pregnancy more. I learned about the importance of a balanced diet.",
    "As the months passed, I started to enjoy my pregnancy more. I learned about the importance of a balanced diet.",
    "As the months passed, I started to enjoy my pregnancy more. I learned about the importance of a balanced diet.",
  ];

  return (
    <VideoScrollable
      navigation={navigation}
      headerTitle={headerTitle}
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

export default OfferVideo2;
