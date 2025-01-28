import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import StartJourney from '../screens/StartJourney';
import TrackPregnancy from '../screens/TrackPregnancy';
import AddChildren from '../screens/AddChildren';
import WelcomeScreen from '../screens/WelcomeScreen';
import colors from '../constants/color';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const CustomHeader = ({ navigation, title }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#FFF3E6' }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        <Image source={require('../assets/images/back.png')}
          style={{ width: 20, height: 20}}
        />
      </Text>
    </TouchableOpacity>
    <Text style={{ flex: 1, textAlign: 'center', fontSize: 35, fontWeight: 'bold', color: colors.primary }}>{title}</Text>
  </View>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name = "SplashScreen"
          component = {SplashScreen}
          options = {{ headerShown: false }}
         />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={({ navigation }) => ({ 
            header: () => <CustomHeader navigation={navigation} title="Preglife" />, 
            headerTransparent: true,
            headerTitle: '',
            headerBackTitle: '',  
          })} 
        />
        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen} 
          options={({ navigation }) => ({ 
            header: () => <CustomHeader navigation={navigation} title="Preglife"  />, 
            headerTransparent: true,
          })}
        />
        <Stack.Screen 
          name="StartJourney" 
          component={StartJourney} 
          options={({ navigation }) => ({ 
            header: () => <CustomHeader navigation={navigation} title="Preglife"  />, 
            headerTransparent: true,
          })} 
          
        />
        <Stack.Screen 
          name="TrackPregnancy" 
          component={TrackPregnancy} 
          options={({ navigation }) => ({ 
            header: () => <CustomHeader navigation={navigation} title="Preglife"  />, 
            headerTransparent: true,
          })} 
        />

        <Stack.Screen 
          name="AddChildren" 
          component={AddChildren} 
          options={({ navigation }) => ({ 
            header: () => <CustomHeader navigation={navigation} title="Preglife"  />, 
            headerTransparent: true,
          })} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
