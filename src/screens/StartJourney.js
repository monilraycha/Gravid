import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CommonButton from '../components/CommonButton';

const StartJourney = () => {
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const renderCheckbox = (isChecked, onPress, imageSource) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View
        style={[
          styles.checkbox,
          isChecked && styles.checkboxChecked, // Apply checked styles
        ]}>
        {isChecked && (
          <Image source={imageSource} style={styles.checkmarkImage} />
        )}
      </View>
    </TouchableOpacity>
  );

  const handleEdit = () => {
    setSelectedOption(null); // Reset the selected option when Edit is clicked
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          selectedOption && styles.titleReduced, // Reduce title size when a checkbox is selected
        ]}>
        About you
      </Text>

      {/* Hide description if no checkbox is selected */}
      {!selectedOption && (
        <Text style={styles.description}>
          To make Preglife as useful as possible, we'd like to get to know you.
        </Text>
      )}

      <View style={styles.checkboxContainer}>
        <Text style={styles.question}>I want to use Preglife to...</Text>

        {/* First Checkbox */}
        {selectedOption !== 'childDevelopment' && (
          <View style={styles.checkboxItem}>
            {renderCheckbox(
              selectedOption === 'pregnancy', // Check if 'pregnancy' is selected
              () => setSelectedOption('pregnancy'), // Set 'pregnancy' when clicked
              require('../assets/images/check.png'), // Replace with your image path
            )}
            <Text style={styles.checkboxText}>Track a pregnancy</Text>

            {selectedOption === 'pregnancy' && (
              <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            )}
            
          </View>
        )}

        {/* Second Checkbox */}
        {selectedOption !== 'pregnancy' && (
          <View style={styles.checkboxItem}>
            {renderCheckbox(
              selectedOption === 'childDevelopment', // Check if 'childDevelopment' is selected
              () => setSelectedOption('childDevelopment'), // Set 'childDevelopment' when clicked
              require('../assets/images/check.png'), // Replace with your image path
            )}
            <Text style={styles.checkboxText}>
              Follow the development of one or more children (0-2 years old)
            </Text>

            {selectedOption === 'childDevelopment' && (
              <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

      <CommonButton
        title={selectedOption ? 'CONTINUE' : 'I HAVE A SHARING CODE'}
        onPress={() => {}}
        filled={false}
        style={styles.button}
      />
    </View>
  );
};

export default StartJourney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleReduced: {
    fontSize: 20, // Reduced size when a checkbox is selected
    opacity: 0.6, // Reduced opacity when a checkbox is selected
    fontWeight: 'normal', // Reduced weight when a checkbox is selected
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 10,
  },
  checkboxContainer: {
    marginTop: 25,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
    marginTop: 25,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#F88C8C',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  checkboxChecked: {
    backgroundColor: '#F88C8C',
    borderColor: '#F88C8C',
  },
  checkmarkImage: {
    width: 18,
    height: 18,
    tintColor: 'white',
  },
  button: {
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    fontSize: 14,
    color: '#F88C8C',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  editButtonText: {
    fontSize: 15,
    color: '#000000',
    marginTop: 5,
    opacity: 0.9,
    letterSpacing: 1,
  },
});
