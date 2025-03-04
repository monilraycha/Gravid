import React, { version } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/color";
import ToolsHeader from "./ToolsHeader";
import { moderateScale, verticalScale } from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../../constants/fonts";

const { height } = Dimensions.get("window");

const Nutrition = ({ navigation }) => {
  const meals = [
    { title: "Breakfast", description: "Oatmeal with nuts and fresh fruits." },
    {
      title: "Lunch",
      description: "Grilled salmon with quinoa and steamed broccoli.",
    },
    {
      title: "Snack",
      description: "Greek yogurt with honey and mixed berries.",
    },
    {
      title: "Dinner",
      description: "Lentil soup with whole grain bread and avocado salad.",
    },
    {
      title: "Hydration",
      description: "Drink at least 8 glasses of water daily.",
    },
  ];

  return (
    <View style={styles.container}>
      <ToolsHeader title="Nutrition" navigation={navigation} />
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.heading}>Nutrition Guide for Pregnancy</Text>
        {meals.map((meal, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.mealTitle}>{meal.title}</Text>
            <Text style={styles.mealDescription}>{meal.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    padding: moderateScale(20),
  },
  heading: {
    fontSize: RFValue(20, height),
    color: colors.black,
    marginBottom: verticalScale(10),
    textAlign: "center",
    fontFamily: fonts.MontserratMedium,
  },
  card: {
    backgroundColor: "white",
    padding: moderateScale(10),
    marginVertical: verticalScale(8),
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  mealTitle: {
    fontSize: RFValue(16, height),
    fontFamily: fonts.MontserratMedium,
    color: "#4CAF50",
  },
  mealDescription: {
    fontSize: RFValue(14, height),
    color: colors.black,
    marginTop: 5,
    fontFamily: fonts.MontserratRegular,
  },
});

export default Nutrition;
