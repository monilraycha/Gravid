import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import SplashScreen from "../screens/Welcome/SplashScreen";
import InboxScreen from "../screens/Tabs/InboxScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import SignUpScreen from "../screens/Login/SignUpScreen";
import StartJourney from "../screens/Welcome/StartJourney";
import TrackPregnancy from "../screens/Welcome/TrackPregnancy";
import AddChildren from "../screens/Welcome/AddChildren";
import DrawerNavigator from "./DrawerNavigator";
import CustomHeader from "../components/CustomHeader";
import AnswerScreen from "../screens/QA/AnswerScreen";
import FollowOnInsta from "../screens/Hometabs/FollowOnInsta";
import TellStory from "../screens/Hometabs/TellStory";
import OxyTocin from "../screens/Hometabs/OxyTocin";
import SupportScreen from "../screens/DrawerTabs/SupportScreen";
import PregnancyScreen from "../screens/DrawerTabs/PregnancyScreen";
import AppSettings from "../screens/DrawerTabs/AppSettings";
import NotificationsScreen from "../screens/DrawerTabs/NotificationsScreen";
import PregnancyWeeks from "../screens/Articles/TopicList/PregnancyWeeks/PregnancyWeeks";
import TrimesterFour from "../screens/Articles/TopicList/Trimester/TrimesterFour";
import Labor from "../screens/Articles/TopicList/labor/Labor";
import BreastfeedingGuide from "../screens/Articles/TopicList/Breastfeedingguide/BreastfeedingGuide";
import Diseases from "../screens/Articles/quecards/Diseases/Diseases";
import FetalMovement from "../screens/Articles/quecards/Fetalmovement/FetalMovement";
import BabyGuide from "../screens/Articles/quecards/Babyguide/BabyGuide";
import DietAdvice from "../screens/Articles/quecards/Dietadvice/DietAdvice";
import FirstWeeks from "../screens/Articles/quecards/Firstweeks/FirstWeeks";
import MentalHealth from "../screens/Articles/quecards/Mentalhealth/MentalHealth";
import FolicAcid from "../screens/Articles/anscards/Diseases/FolicAcid";
import HavingDrunk from "../screens/Articles/anscards/Diseases/HavingDrunk";
import EatDiet from "../screens/Articles/anscards/Diseases/EatDiet";
import Miscarriage from "../screens/Articles/anscards/Diseases/Miscarriage";
import Listeria from "../screens/Articles/anscards/Diseases/Listeria";
import BabyMonths from "../screens/Articles/quecards/Babymonths/BabyMonths";
import CarSeatGuide from "../screens/Articles/quecards/carseatguide/CarSeatGuide";
import Clothing from "../screens/Articles/quecards/clothing/Clothing";
import Partner from "../screens/Articles/quecards/partner/Partner";
import MedicalBoard from "../screens/Articles/quecards/Medicalboard/MedicalBoard";
import VisitsDuringPregnancy from "../screens/Articles/TopicList/PregnancyWeeks/VisitsDuringPregnancy";
import WeekEight from "../screens/Articles/TopicList/PregnancyWeeks/WeekCards/weekEight";
import MidwifeInformation from "../screens/Articles/TopicList/PregnancyWeeks/MidwifeInformation";
import sympToms from "../screens/Articles/TopicList/PregnancyWeeks/SympToms";
import Preparations from "../screens/Articles/TopicList/PregnancyWeeks/Preparations";
import Exercising from "../screens/Articles/TopicList/PregnancyWeeks/Exercising";
import Fertility from "../screens/Articles/TopicList/PregnancyWeeks/Fertility";
import VideoOne from "../screens/Playtab/VideoOne";
import VideoTwo from "../screens/Playtab/VideoTwo";
import VideoThree from "../screens/Playtab/VideoThree";
import Podcast from "../screens/Playtab/Browse/Podcast";
import PlayBaby from "../screens/Playtab/Browse/PlayBaby";
import { PlayContent } from "../helpers/PlayContent";
import PlayPregnancy from "../screens/Playtab/Browse/PlayPregnancy";
import PlayMedical from "../screens/Playtab/Browse/PlayMedical";
import PlayLabor from "../screens/Playtab/Browse/PlayLabor";
import Empowering from "../screens/Playtab/Playlists/Empowering";
import Empower1 from "../screens/Playtab/Playlists/Empower1";
import Empower2 from "../screens/Playtab/Playlists/Empower2";
import Exclusive from "../screens/Playtab/Playlists/Exclusive";
import Exclusive1 from "../screens/Playtab/Playlists/Exclusive1";
import Exclusive2 from "../screens/Playtab/Playlists/Exclusive2";
import CheckList from "../screens/Tools/CheckList";
import Calender from "../screens/Tools/Calender";
import Nutrition from "../screens/Tools/Nutrition";
import SymptomChecker from "../screens/Tools/SymptomChecker";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
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
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
            headerTitle: "",
            headerBackTitle: "",
          })}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="StartJourney"
          component={StartJourney}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="TrackPregnancy"
          component={TrackPregnancy}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="AddChildren"
          component={AddChildren}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader navigation={navigation} title="Preglife" />
            ),
            headerTransparent: true,
          })}
        />

        <Stack.Screen
          name="InboxScreen"
          component={InboxScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainApp"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AnswerScreen"
          component={AnswerScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FollowOnInsta"
          component={FollowOnInsta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TellStory"
          component={TellStory}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OxyTocin"
          component={OxyTocin}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SupportScreen"
          component={SupportScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PregnancyScreen"
          component={PregnancyScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SettingsScreen"
          component={AppSettings}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />

        {/* Articles Screens  */}

        <Stack.Screen
          name="PregnancyWeeks"
          component={PregnancyWeeks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Labor"
          component={Labor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrimesterFour"
          component={TrimesterFour}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BreastfeedingGuide"
          component={BreastfeedingGuide}
          options={{ headerShown: false }}
        />

        {/* Questions & topic  */}

        <Stack.Screen
          name="Diseases"
          component={Diseases}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FetalMovement"
          component={FetalMovement}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MentalHealth"
          component={MentalHealth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DietAdvice"
          component={DietAdvice}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstWeeks"
          component={FirstWeeks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BabyGuide"
          component={BabyGuide}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BabyMonths"
          component={BabyMonths}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CarSeatGuide"
          component={CarSeatGuide}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Clothing"
          component={Clothing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Partner"
          component={Partner}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicalBoard"
          component={MedicalBoard}
          options={{ headerShown: false }}
        />

        {/* Article Answers -- Diseases */}

        <Stack.Screen
          name="FolicAcid"
          component={FolicAcid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HavingDrunk"
          component={HavingDrunk}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EatDiet"
          component={EatDiet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Miscarriage"
          component={Miscarriage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Listeria"
          component={Listeria}
          options={{ headerShown: false }}
        />

        {/* Articles -- PregnancyWeeks */}

        <Stack.Screen
          name="VisitsDuringPregnancy"
          component={VisitsDuringPregnancy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MidwifeInformation"
          component={MidwifeInformation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sympToms"
          component={sympToms}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Preparations"
          component={Preparations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Exercising"
          component={Exercising}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fertility"
          component={Fertility}
          options={{ headerShown: false }}
        />

        {/* Articles -- PregnancyWeeks Topics */}

        <Stack.Screen
          name="WeekEight"
          component={WeekEight}
          options={{ headerShown: false }}
        />

        {/* PlayTabs */}

        <Stack.Screen
          name="VideoOne"
          component={VideoOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideoTwo"
          component={VideoTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideoThree"
          component={VideoThree}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Podcast"
          component={Podcast}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayBaby"
          component={PlayBaby}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayLabor"
          component={PlayLabor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayPregnancy"
          component={PlayPregnancy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayMedical"
          component={PlayMedical}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Empowering"
          component={Empowering}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Empower1"
          component={Empower1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Empower2"
          component={Empower2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Exclusive"
          component={Exclusive}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Exclusive1"
          component={Exclusive1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Exclusive2"
          component={Exclusive2}
          options={{ headerShown: false }}
        />

        {/* Tools */}

        <Stack.Screen
          name="CheckList"
          component={CheckList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Calender"
          component={Calender}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Nutrition"
          component={Nutrition}
          options={{ headerShown: false }}
        />

         <Stack.Screen
         name="SymptomChecker"
         component={SymptomChecker}
         options={{ headerShown: false }}
         />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
