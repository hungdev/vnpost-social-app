import React, { Component } from 'react';
import { Button, View, Text, Platform, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useSelector } from 'react-redux';

// https://stackoverflow.com/questions/60444343/remove-header-react-navigation-v5

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import SettingScreen from '../screens/Setting';
import SignInScreen from '../screens/Login';
import SignUpScreen from '../screens/Register';
// import PostScreen from '../screens/Post';
// import FriendsScreen from '../screens/Friends';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
// import { Metrics } from '../themes';

function TabHome() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'md-home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function ContainerStack() {
  const store = useSelector(store => store);
  console.log('store', store.auth.user);
  return (
    <Stack.Navigator>
      {!store.auth.user ? (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          {/* <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
        </>
      ) :
        (
          <>
            <Stack.Screen
              name="Home"
              component={TabHome}
            // options={{ headerShown: false }}
            />
            <Stack.Screen name="Notifications" component={ProfileScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
          </>
        )
      }
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ContainerStack />
    </NavigationContainer>
  );
}
