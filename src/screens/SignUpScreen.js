import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import CommonButton from '../components/CommonButton';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxSelect = option => {
    setSelectedOption(option);
  };

  const renderCheckbox = (isChecked, onPress, imageSource) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked && (
          <Image source={imageSource} style={styles.checkmarkImage} />
        )}
      </View>
    </TouchableOpacity>
  );

  const isFormValid =
    email !== '' && password !== '' && isCheckedTerms && isCheckedPrivacy;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.description}>
        Create an account to avoid the risk of losing your data when you change
        your phone
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <View style={styles.checkboxWrapper}>
        <View style={styles.checkboxItem}>
          {renderCheckbox(
            isCheckedTerms,
            () => setIsCheckedTerms(!isCheckedTerms),
            require('../assets/images/check.png'),
          )}
          <Text style={styles.checkboxText}>
            I give consent to the processing of my health data, such as the
            expected due date.
          </Text>
        </View>

        <View style={styles.checkboxItem}>
          {renderCheckbox(
            isCheckedPrivacy,
            () => setIsCheckedPrivacy(!isCheckedPrivacy),
            require('../assets/images/check.png'),
          )}
          <Text style={styles.checkboxText}>
            I want newsletters with tips, information and offers during my
            pregnancy.
          </Text>
        </View>
      </View>

      <Text style={styles.termsText}>
        By continuing i agree to the
        <Text
          style={styles.linkText}
          onPress={() => alert('Terms of Use clicked')}>
          {' '}
          Terms of Use
        </Text>{' '}
        and
        <Text
          style={styles.linkText}
          onPress={() => alert('Privacy Policy clicked')}>
          {' '}
          Privacy Policy
        </Text>
      </Text>

      {/* <CommonButton
        title="Create Account"
        onPress={() => alert('Account Created Successfully!')}
        filled={false} // Enable button when a checkbox is checked
        style={[
          styles.button,
          {backgroundColor: selectedOption ? '#F88C8C' : '#D9D9D9'}, // Primary color when checked, gray when not
        ]}
        disabled={!selectedOption}
      /> */}

      <CommonButton
        title="CREATE ACCOUNT"
        onPress={() => alert('Account Created Successfully!')}
        filled={isFormValid} // Enable button when both checkboxes are checked
        style={[
          styles.button,
          {backgroundColor: isFormValid ? '#F88C8C' : '#D9D9D9'}, // Primary color when checked, gray when not
        ]}
        textStyle={{
          color: isFormValid ? '#000000' : '#ffffff', // White text when enabled, gray when disabled
        }}
        disabled={!isFormValid}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 70,
    backgroundColor: '#FFF3E6',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  description: {
    fontSize: 17,
    marginBottom: 20,
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    marginTop: 10,
  },
  checkboxWrapper: {
    marginTop: 10,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 15,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
    flexShrink: 1,
  },
  checkboxContainer: {
    marginTop: 5,
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
    width: '100%',
  },
  termsText: {
    fontSize: 16,
    color: '#000', // Normal text color
    marginTop: 10,
  },
  linkText: {
    color: '#87CEFA', // Light blue color for links
    textDecorationLine: 'underline', // Underline effect
    fontWeight: 'bold',
  },
});

// remains from create account button
