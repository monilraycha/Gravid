import React from "react";
import ScrollableContent from "../../components/ScrollableContent";

const TellStory = ({ navigation }) => {
  const headerTitle = "Tell your birth story!";
  const imageSource = require("../../assets/images/womanholdbaby.jpeg");
  const backCancelIcon = require("../../assets/images/back.png");
  const contentTitle = "READ";
  const contentText = "Tell your birth story!";

  const descriptions = [
    "Pregnancy confirmation is the first step in your journey to motherhood. It involves verifying whether you are pregnant through reliable methods such as home pregnancy tests, blood tests, or ultrasounds. Home pregnancy tests detect the presence of the hormone hCG (human chorionic gonadotropin) in your urine, which is produced after a fertilized egg attaches to the uterine lining. Blood tests, performed by healthcare providers, measure the exact levels of hCG and are more accurate. An ultrasound, typically done a few weeks after a missed period, confirms the pregnancy by visualizing the gestational sac or embryo in the uterus.",
  ];

  return (
    <ScrollableContent
      navigation={navigation}
      headerTitle={headerTitle}
      imageSource={imageSource}
      backCancelIcon={backCancelIcon}
      contentTitle={contentTitle}
      contentText={contentText}
      descriptions={descriptions}
    />
  );
};

export default TellStory;
