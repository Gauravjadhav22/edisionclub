import React, { useState, useEffect } from 'react';

import Home from '../login/Screens/home';
import FunandJoyScreen from '../login/Screens/fun&joy';
import ProfileScreen from '../login/Screens/profile';
import ChallengeScreen from '../login/Screens/challenge';
import { Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostFeedScreen from '../login/Screens/home/postfeed';
import Hamburger from '../login/Screens/component/Hamburger';
import Header from '../login/Screens/component/Header';
import houseimg from "../assets/house.png"
import confettiimg from "../assets/confetti.png"
import effortimg from "../assets/effort.png"
import postfeedimg from "../assets/postfeed.png"
const Tab = createBottomTabNavigator()

const BottomTabNavigator = ({ navigation }) => {
  console.log(navigation, "inside of bottomebafre");
  return (
    < >
      <Header navigation={navigation} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>


        {/* <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: 33, width: 33 }}
              source={menu}
            />
          ),
        }}
      /> */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{ height: 33, width: 33 }}
                source={houseimg}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Challenge"
          component={ChallengeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{ height: 33, width: 33 }}
                source={effortimg}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Fun&Joy"
          component={FunandJoyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{ height: 33, width: 33 }}
                source={confettiimg}
              />
            ),
          }}
        />

        <Tab.Screen
          name="PostFeed"
          component={PostFeedScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{ height: 33, width: 33 }}
                source={postfeedimg}
              />
            ),
          }}
        />

        {/* <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{ height: 20, width: 20 }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/107/107247.png',
                }}
              />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
