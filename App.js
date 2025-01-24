import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/WelcomeScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import colors from './src/constants/color'
import StartJourney from './src/screens/StartJourney'
import SignUpScreen from './src/screens/SignUpScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>App</Text> */}
      {/* <WelcomeScreen   /> */}
      {/* <LoginScreen /> */}
          {/* <StartJourney /> */}
      <SignUpScreen />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF3E6'

  }
})