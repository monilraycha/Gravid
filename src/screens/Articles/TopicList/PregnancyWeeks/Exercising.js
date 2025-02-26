import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./Style";


const articles = [
  { title: "week 8-10 - Pregnancy confirmation", screen: "WeekEight" },
  { title: "week 12 - First prenatal visit", screen: "" },
  { title: "week 16 - First prenatal visit", screen: "" },
  { title: "week 20 - First prenatal visit", screen: "" },
  { title: "visits in week 24--27", screen: "" },
  { title: "visits in week 28--34", screen: "" },
  { title: "visits in week 36--38", screen: "" },
  { title: "visits in week 38--42", screen: "" },
];

const Exercising = ({ navigation, route }) => {
    const {articleTitle} = route.params;

    const handleNavigation = (screen ) => {
      navigation.navigate(screen);
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
        <Text style={styles.headerText}>{articleTitle}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{articleTitle}</Text>
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

export default Exercising;

