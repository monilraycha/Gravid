import { StyleSheet, Text, View  } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';


const SplashScreen = ({navigation}) => {

  React.useEffect(() => {
    // Navigate to the next screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('WelcomeScreen');  // Or any other screen you'd like to navigate to
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
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
    backgroundColor: '#F88C8C',
  },
  splashText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
  },
});
