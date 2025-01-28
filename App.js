import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import colors from './src/constants/color'
import StartJourney from './src/screens/StartJourney'
import SignUpScreen from './src/screens/SignUpScreen'
import AddChildren from './src/screens/AddChildren'
import TrackPregnancy from './src/screens/TrackPregnancy'
import AppNavigator from './src/routes/AppNavigator'
import TabsNavigator from './src/routes/TabsNavigator'
import HomeScreen from './src/screens/Tabs/HomeScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>App</Text> */}
      {/* <WelcomeScreen   /> */}
      {/* <LoginScreen /> */}
          {/* <StartJourney /> */}
      {/* <SignUpScreen /> */}
      {/* <AddChildren /> */}
       {/* <TrackPregnancy /> */}
       <AppNavigator />
       {/* <TabsNavigator /> */}
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