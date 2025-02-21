import React from "react";
import ScrollableContent from "../../../../components/ScrollableContent";

const EatDiet = ({ navigation, route }) => {
  const { articleTitle } = route.params;

  const headerTitle = articleTitle;
  const imageSource = require("../../../../assets/images/womanholdbaby.jpeg");
  const backCancelIcon = require("../../../../assets/icons/close.png");
  const contentTitle = "READ";
  const contentText = "The importance of oxytocin for breastfeeding";
  const subTitles = [
    "Milk Booster",
    "Emotional Bonding",
    "Oxytocin's Role in Breastfeeding",
    "Nutrition for Nursing Mothers",
    "Common Breastfeeding Challenges",
    "Tips for Successful Breastfeeding",
  ];

  const descriptions = [
    "As the months passed, I started to enjoy my pregnancy more. I learned about the importance of a balanced diet and hydration to boost milk supply. Foods like oats, fenugreek, and leafy greens became staples in my meals.",
    "The final trimester brought its own set of challenges, but it also deepened the emotional bond with my baby. Skin-to-skin contact and frequent nursing sessions helped strengthen this connection.",
    "And then, when the day arrived, it was nothing like I had imagined. Oxytocin, often called the 'love hormone,' played a crucial role in breastfeeding by promoting milk letdown and fostering a sense of calm and bonding.",
    "Nutrition is key for nursing mothers. Consuming a variety of nutrient-rich foods ensures that both mother and baby receive the necessary vitamins and minerals. Supplements like vitamin D and omega-3 fatty acids can also be beneficial.",
    "Breastfeeding can come with challenges such as sore nipples, engorgement, or low milk supply. Seeking support from lactation consultants and joining support groups can make a significant difference.",
    "To ensure successful breastfeeding, establish a routine, stay hydrated, and find a comfortable position. Remember, every mother's journey is unique, so be patient and kind to yourself.",
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

export default EatDiet;
