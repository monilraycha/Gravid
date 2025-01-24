import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import CommonButton from '../components/CommonButton';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isFormFilled = () => {
    return email.trim() !== '' && password.trim() !== '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in to Preglife</Text>

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

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotText}>Have you forgotten your password?</Text>
      </TouchableOpacity>

      <CommonButton
        title="LOG IN"
        filled={true}
        style={[
          styles.buttonCss,
          {backgroundColor: isFormFilled() ? '#F88C8C' : '#D9D9D9'}, // Change color based on form state
        ]}
        textStyle={{color: '#ffffff'}} // Change text color based on form state
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E6',
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#0f172a',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    width: '100%',
    marginTop: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginTop: 10,
    fontFamily: '',
  },
  forgotText: {
    fontSize: 14,
    fontFamily: 'Open Sans Condensed Italic',
    letterSpacing: 1,
  },
  buttonCss: {
    position: 'absolute',
    bottom: 20,
  },
});
