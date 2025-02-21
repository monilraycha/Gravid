import React from "react";
import ScrollableContent from "../../../../../components/ScrollableContent";

const WeekEight = ({ navigation }) => {

  const headerTitle = 'Week 8-10 Pregnancy confirmation';
  const imageSource = require("../../../../../assets/images/womanholdbaby.jpeg");
  const backCancelIcon = require("../../../../../assets/images/back.png");
  const contentTitle = "READ";
  const contentText = "Pregnancy confirmation";

  const descriptions = [
    "Pregnancy confirmation is the first step in your journey to motherhood. It involves verifying whether you are pregnant through reliable methods such as home pregnancy tests, blood tests, or ultrasounds. Home pregnancy tests detect the presence of the hormone hCG (human chorionic gonadotropin) in your urine, which is produced after a fertilized egg attaches to the uterine lining. Blood tests, performed by healthcare providers, measure the exact levels of hCG and are more accurate. An ultrasound, typically done a few weeks after a missed period, confirms the pregnancy by visualizing the gestational sac or embryo in the uterus.",
    "Before taking a pregnancy test, you might notice early signs that could indicate pregnancy. These include a missed period, nausea (often referred to as morning sickness), breast tenderness, fatigue, frequent urination, and mood swings. However, these symptoms can also be caused by other factors, such as stress or hormonal imbalances. Therefore, it’s essential to confirm pregnancy through a test rather than relying solely on symptoms.",
    "Confirming pregnancy early is crucial for both your health and the baby’s development. Early confirmation allows you to start prenatal care, which includes taking essential vitamins like folic acid, avoiding harmful substances, and making lifestyle changes to support a healthy pregnancy. It also helps identify any potential risks, such as ectopic pregnancy or miscarriage, so that you can seek timely medical intervention if needed.",
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
      descriptions={descriptions}
      sourceText={sourceText}
    />
  );
};

export default WeekEight;
