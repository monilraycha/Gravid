import React, { version } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, StyleSheet, View, Platform} from 'react-native';
import HomeScreen from '../screens/Tabs/HomeScreen';
import ArticlesScreen from '../screens/Tabs/ArticlesScreen';
import PlayScreen from '../screens/Tabs/PlayScreen';
import ToolsScreen from '../screens/Tabs/ToolsScreen';
import OffersScreen from '../screens/Tabs/OffersScreen';
import colors from '../constants/color';
import { verticalScale } from '../helpers/Metrics';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: '#888', 
        tabBarInactiveTintColor: '#888',
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarIcon: ({focused}) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = focused
                ? require('../assets/icons/home-filled.png')
                : require('../assets/icons/home-1.png');
              break;
            case 'Articles':
              iconSource = focused
                ? require('../assets/icons/bulb-filled.png')
                : require('../assets/icons/bulbs.png');
              break;
            case 'Play':
              iconSource = focused
                ? require('../assets/icons/play-filled.png')
                : require('../assets/icons/play.png');
              break;
            case 'Tools':
              iconSource = focused
                ? require('../assets/icons/tool-filled.png')
                : require('../assets/icons/tool.png');
              break;
            case 'Offers':
              iconSource = focused
                ? require('../assets/icons/discount-filled.png')
                : require('../assets/icons/discount.png');
              break;
          }

          return (
            <View style={styles.iconContainer}>
              <Image
                source={iconSource}
                style={[
                  styles.icon,
                  {tintColor: focused ? colors.primary : '#888'}, // Set primary color when active
                ]}
              />
            </View>
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Play"
        component={PlayScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tools"
        component={ToolsScreen}
        options={{
           headerShown: false,
        }}
        
      />
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    height: Platform.OS === 'ios' ? verticalScale(75) : verticalScale(65), // Increase height for iOS
    paddingBottom: Platform.OS === 'ios' ? verticalScale(10) : verticalScale(10), // Manually add extra padding for iOS
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 5, 
    shadowOffset: {width: 0, height: -2}, 
    shadowRadius: 4,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: 'Montserrat Medium',
  },
  tabBarItemStyle: {
    paddingVertical: 5,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '350',
  },
});
