import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from '../index';

const articles = [
  { title: "Folic acid intake recommendations", screen: "FolicAcid" },
  { title: "Having drunk alcohol before finding out about the pregnancy", screen: "AlcoholPregnancy" },
  { title: "What should I eat during pregnancy", screen: "PregnancyDiet" },
  { title: "Miscarriage/terminated pregnancy", screen: "Miscarriage" },
  { title: "Listeria bacteria and toxoplasma parasites", screen: "ListeriaToxoplasma" },
];

const BabyGuide = ({ navigation, route }) => {
  const { title } = route.params;
  const formattedTitle =
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

    const handleNavigation = (screen , articleTitle) => {
      navigation.navigate(screen , {title : articleTitle});
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../../assets/images/back.png")}
            style={styles.headerImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{formattedTitle}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{formattedTitle}</Text>
        <Text style={styles.description}>
          Here is a collection of articles about expecting a baby, preparations
          before birth, and parenting.
        </Text>

        {articles.map((article, index) => (
          <View key={index} style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleNavigation(article.screen)}>
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>{article.title}</Text>
                <Image
                  source={require("../../../../assets/icons/chevron.png")}
                  style={styles.imgStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BabyGuide;
