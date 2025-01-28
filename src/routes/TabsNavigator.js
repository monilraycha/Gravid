// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/Tabs/HomeScreen';
import ArticlesScreen from '../screens/Tabs/ArticlesScreen';
import PlayScreen from '../screens/Tabs/PlayScreen';
import ToolsScreen from '../screens/Tabs/ToolsScreen';
import OffersScreen from '../screens/Tabs/OffersScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hides the header for each tab screen
        tabBarStyle: { backgroundColor: '#F88C8C', height: 60 },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/homes.png')} // Replace with your home icon
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/lightbulb.png')} // Replace with your articles icon
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Play"
        component={PlayScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/film.png')} // Replace with your play icon
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tools"
        component={ToolsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/tools.png')} // Replace with your tools icon
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/gift.png')} // Replace with your offers icon
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
