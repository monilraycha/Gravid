import React from "react";
import ScrollableContent from "../../../../components/ScrollableContent";


const Listeria = ({ navigation , route }) => {

const {articleTitle} = route.params;

  const headerTitle = articleTitle ;
  const imageSource = require("../../../../assets/images/womanholdbaby.jpeg");
  const backCancelIcon = require("../../../../assets/icons/close.png")
  const contentTitle = "READ";
  const contentText = "The importance of oxytocin for breastfeeding";
  const subTitles = [
    "Milk Booster",
    "Emotional Bonding",
    "Oxytocin's Role in Breastfeeding",
  ];
  const descriptions = [
    "As the months passed, I started to enjoy my pregnancy more...",
    "The final trimester brought its own set of challenges...",
    "And then, when the day arrived, it was nothing like I had imagined...",
  ];
  const sourceText = `\u2022 Myles, M.F,Marshall,J.E & Raynor,M.D.(red.)(2014).Myles textbook for midwives.(16th edition). Edinburgh:Elvisher.`;

  return (
    <ScrollableContent
      navigation={navigation}
      headerTitle={headerTitle}
      imageSource={imageSource}
      backCancelIcon={backCancelIcon}
      contentTitle={contentTitle}
      contentText={contentText}
      subTitles={subTitles}
      descriptions={descriptions}
      sourceText={sourceText}
    />
  );
};

export default Listeria;