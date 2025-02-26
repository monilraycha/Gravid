import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import React from 'react';
import CommonButton from '../../components/CommonButton';
import colors from '../../constants/color';
import { RFValue } from 'react-native-responsive-fontsize';
import { horizontalScale, verticalScale, moderateScale } from '../../helpers/Metrics';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isFormFilled = () => {
    return email.trim() !== '' && password.trim() !== '';
  };

  const handleLogin = () => {
      navigation.navigate('MainApp');
  }

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
          {backgroundColor: isFormFilled() ? '#F88C8C' : '#D9D9D9'}, 
        ]}
        textStyle={{color: '#ffffff'}} 
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: horizontalScale(30),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: verticalScale(60),
  },
  title: {
    fontSize: RFValue(22),
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'flex-start',
    marginBottom: verticalScale(25),
    color: '#333',
  },
  input: {
    height: verticalScale(50),
    borderColor: '#0f172a',
    borderWidth: 1,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(15),
    fontSize: RFValue(13),
    width: '100%',
    marginTop: verticalScale(10),
    fontFamily: 'Montserrat-Regular',
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginTop: verticalScale(10),
  },
  forgotText: {
    fontSize: RFValue(12),
    letterSpacing: 1,
    fontFamily: 'Montserrat-Italic',
  },
  buttonCss: {
    position: 'absolute',
    bottom: verticalScale(20),
  },
});
