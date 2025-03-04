import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../CommonStyle";

const PregnancyWeeks = ({ navigation, route }) => {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../../assets/images/back.png")}
            style={styles.headerImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
        </Text>
      </View>

      <View style={styles.introduction}>
        <Text style={styles.introductionText}>
          {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
        </Text>
        <Text style={styles.introductionDescription}>
          Here is a collection of articles about expecting a baby, preparations
          before birth, and parenting
        </Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Reusable Category Buttons */}
        <CategoryButton
          title="Visits during pregnancy"
          articleCount={8}
          onPress={() =>
            navigation.navigate("VisitsDuringPregnancy", {
              articleTitle: "Visits during pregnancy",
            })
          }
        />
        <CategoryButton
          title="More information from the midwife"
          articleCount={9}
          onPress={() =>
            navigation.navigate("MidwifeInformation", {
              articleTitle: "More information from the midwife",
            })
          }
        />
        <CategoryButton
          title="Pregnancy symptoms"
          articleCount={4}
          onPress={() =>
            navigation.navigate("sympToms", {
              articleTitle: "Pregnancy symptoms",
            })
          }
        />
        <CategoryButton
          title="Preparations"
          articleCount={6}
          onPress={() =>
            navigation.navigate("Preparations", {
              articleTitle: "Preparations",
            })
          }
        />
        <CategoryButton
          title="Exercising"
          articleCount={4}
          onPress={() =>
            navigation.navigate("Exercising", { articleTitle: "Exercising" })
          }
        />
        <CategoryButton
          title="Fertility"
          articleCount={5}
          onPress={() =>
            navigation.navigate("Fertility", { articleTitle: "Fertility" })
          }
        />
      </ScrollView>
    </View>
  );
};

/* Reusable Category Button Component */
const CategoryButton = ({ title, articleCount, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.backgroundOfImage}>
          <Image
            source={require("../../../../assets/icons/pregnant.png")}
            style={styles.pregIcon}
          />
        </View>

        {/* Text & Chevron Content */}
        <View style={styles.buttonContent}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonTitle}>{title}</Text>
            <Text style={styles.buttonText}>
              Number of articles: {articleCount}
            </Text>
          </View>
          <Image
            source={require("../../../../assets/icons/chevron.png")}
            style={styles.nextIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PregnancyWeeks;
