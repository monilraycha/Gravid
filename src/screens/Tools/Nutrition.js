import React, { version } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import colors from "../../constants/color";
import ToolsHeader from "./ToolsHeader";
import { moderateScale, verticalScale } from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";

const Nutrition = ({navigation}) => {
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
    <View style ={styles.container}>
    <ToolsHeader title="Nutrition" navigation={navigation}/>
    <ScrollView style = {styles.scrollContainer} >
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
     backgroundColor: colors.background
 },
 scrollContainer:{
   padding: moderateScale(20),

 },
  heading: {
    fontSize: RFValue(20),
    marginBottom: verticalScale(10),
    textAlign: "center",
    fontFamily:"Montserrat Medium"
  },
  card: {
    backgroundColor: "white",
    padding:moderateScale(10),
    marginVertical: verticalScale(8),
    borderRadius: 10,
    elevation: 2,
  },
  mealTitle: {
     fontSize: RFValue(16),
     fontFamily:"Montserrat Medium",
     color: "#4CAF50" 
    },
  mealDescription: { 
    fontSize: RFValue(14),
     color: "#555", 
     marginTop: 5 ,
     fontFamily:"Montserrat Regular"
    },
});

export default Nutrition;
