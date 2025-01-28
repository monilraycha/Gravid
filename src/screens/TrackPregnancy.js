import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CommonButton from '../components/CommonButton';

const TrackPregnancy = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let us add the pregnancy and adjust the app according to your needs</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>How do you want to enter the pregnancy?</Text>
      </View>

      <View style={styles.checkboxContainer}>
        {/* First Checkbox */}
        <TouchableOpacity onPress={() => handleCheckboxPress('viaScan')} style={styles.checkboxItem}>
          <View style={[styles.checkbox, selectedOption === 'viaScan' && styles.checkboxChecked]}>
            {selectedOption === 'viaScan' && (
              <Image source={require('../assets/images/check.png')} style={styles.checkmarkImage} />
            )}
          </View>
          <Text style={styles.checkboxText}>Calculate using last period</Text>
        </TouchableOpacity>

        <View style={styles.horizontalLine}></View>

        {/* Second Checkbox */}
        <TouchableOpacity onPress={() => handleCheckboxPress('viaSymptoms')} style={styles.checkboxItem}>
          <View style={[styles.checkbox, selectedOption === 'viaSymptoms' && styles.checkboxChecked]}>
            {selectedOption === 'viaSymptoms' && (
              <Image source={require('../assets/images/check.png')} style={styles.checkmarkImage} />
            )}
          </View>
          <Text style={styles.checkboxText}>I have an estimated due date</Text>
        </TouchableOpacity>

        <View style={styles.horizontalLine}></View>

      </View>

      {
        selectedOption ? (
          <CommonButton title="CONTINUE" textStyle={styles.buttonText} style={styles.button}  />
        ) : null
      }

      {/* <CommonButton title="CONTINUE" textStyle={styles.buttonText} style={styles.button}  /> */}

    </View>
  );
};

export default TrackPregnancy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
    backgroundColor: '#FFF3E6',


  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    fontFamily:"Montserrat Bold",
    fontSize: 30,
  },
  questionContainer: {
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily:"Montserrat Light",
    fontWeight: '600',
    
  },
  checkboxContainer: {
    marginTop: 25,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#F88C8C', // Your primary color
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#F88C8C', // Primary color for checked state
  },
  checkmarkImage: {
    width: 18,
    height: 18,
    tintColor: 'white', // Make the checkmark white
  },
  checkboxText: {
    fontSize: 18,
    fontFamily:"Montserrat Light",
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#F88C8C', // Primary color
    marginVertical: 10,
  },
  buttonText : {
        letterSpacing: 1,
        // fontSize: 16,
    }, 
    button: {
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    }
});
