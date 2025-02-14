import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import SplashScreen from '../screens/Welcome/SplashScreen';
import InboxScreen from '../screens/Tabs/InboxScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import StartJourney from '../screens/Welcome/StartJourney';
import TrackPregnancy from '../screens/Welcome/TrackPregnancy';
import AddChildren from '../screens/Welcome/AddChildren';
import DrawerNavigator from './DrawerNavigator';
import CustomHeader from '../components/CustomHeader';
import AnswerScreen from '../screens/QA/AnswerScreen';
import FollowOnInsta from '../screens/Hometabs/FollowOnInsta';
import TellStory from '../screens/Hometabs/TellStory';
import OxyTocin from '../screens/Hometabs/OxyTocin';
import SupportScreen from '../screens/DrawerTabs/SupportScreen';
import PregnancyScreen from '../screens/DrawerTabs/PregnancyScreen';
import AppSettings from '../screens/DrawerTabs/AppSettings';
import NotificationsScreen from '../screens/DrawerTabs/NotificationsScreen';
import PragnencyWeeks from '../screens/Articles/PragnencyWeeks';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({navigation}) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
            headerTitle: '',
            headerBackTitle: '',
          })}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={({navigation}) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="StartJourney"
          component={StartJourney}
          options={({navigation}) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="TrackPregnancy"
          component={TrackPregnancy}
          options={({navigation}) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="AddChildren"
          component={AddChildren}
          options={({navigation}) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
          })}
        />

        <Stack.Screen
          name="InboxScreen"
          component={InboxScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MainApp"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AnswerScreen"
          component={AnswerScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FollowOnInsta"
          component={FollowOnInsta}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TellStory"
          component={TellStory}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="OxyTocin"
          component={OxyTocin}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SupportScreen"
          component={SupportScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PregnancyScreen"
          component={PregnancyScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SettingsScreen"
          component={AppSettings}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{headerShown: false}}
        />

        {/* Articles Screens  */}

        <Stack.Screen
          name="PregnancyWeeks"
          component={PragnencyWeeks}
          options={{headerShown: false}}
        />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
