import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from '../CommonStyle';

const BreastfeedingGuide = ({ navigation, route }) => {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../assets/images/back.png')}
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

      <ScrollView style={styles.content}>
        {/* Reusable Category Buttons */}
        <CategoryButton title="Visits during pregnancy" articleCount={8} />
        <CategoryButton title="More information from the midwife" articleCount={9} />
        <CategoryButton title="Oxytocin" articleCount={4} />
        <CategoryButton title="Preparations" articleCount={6} />
        <CategoryButton title="Exercising" articleCount={4} />
        <CategoryButton title="Fertility" articleCount={5} />
      </ScrollView>
    </View>
  );
};

/* Reusable Category Button Component */
const CategoryButton = ({ title, articleCount }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.backgroundOfImage}>
        <Image
          source={require('../../../../assets/icons/pregnant.png')}
          style={styles.pregIcon}
        />
        </View>

        {/* Text & Chevron Content */}
        <View style={styles.buttonContent}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonTitle}>{title}</Text>
            <Text style={styles.buttonText}>Number of articles: {articleCount}</Text>
          </View>
          <Image
            source={require('../../../../assets/icons/chevron.png')}
            style={styles.nextIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BreastfeedingGuide;


