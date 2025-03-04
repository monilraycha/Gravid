import React from "react";
import ScrollableContent from "../../components/ScrollableContent";

const OxyTocin = ({ navigation }) => {
  const headerTitle = "The importance of oxytocin for breastfeeding";
  const imageSource = require("../../assets/images/oxytocin.jpeg");
  const backCancelIcon = require("../../assets/images/back.png");
  const contentTitle = "READ";
  const contentText = "Importance of oxytocin";

  const descriptions = [
    "Oxytocin, often called the 'love hormone' or 'bonding hormone,' plays a crucial role during pregnancy, labor, and postpartum recovery. It helps stimulate uterine contractions during childbirth, facilitating a smoother delivery while also reducing the risk of excessive bleeding. Beyond labor, oxytocin promotes mother-infant bonding by enhancing emotional connection and encouraging breastfeeding through its role in milk ejection. This hormone also supports stress reduction, promotes relaxation, and helps new mothers feel more connected and secure in their caregiving role. Maintaining healthy oxytocin levels through skin-to-skin contact, breastfeeding, and emotional support can significantly benefit both mother and baby.",
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

export default OxyTocin;
