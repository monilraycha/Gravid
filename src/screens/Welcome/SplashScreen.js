import { StyleSheet, Text, View  } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import colors from '../../constants/color';
import { RFValue } from 'react-native-responsive-fontsize';


const SplashScreen = ({navigation}) => {

  React.useEffect(() => {
    // Navigate to the next screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('WelcomeScreen'); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <Animatable.View style={styles.container}>
      <Animatable.Text
        animation="slideInDown"
        direction='alternate'
        iterationCount={5}
        style={styles.splashText}
      >
        Preglife
      </Animatable.Text>
    </Animatable.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  splashText: {
    fontSize: RFValue(40),
    fontWeight: 'bold',
    color: 'white',
  },
});
