
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import addbtn from "../../assets/addition.png"

import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions, AsyncStorage
} from 'react-native';
import Hamburger from './component/Hamburger';

import { Context1 } from '../../../Stackpage';
import Posts from './component/Posts';
import Header from './component/Header';


const Home = ({ navigation }) => {
  console.log("contextsdf", navigation);
  const { user } = useContext(Context1)

  console.log(useContext(Context1));
  console.log("fsedfsdreew4", user);

  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "skyblue" }}>
        <Posts category={'Home'} navigation={navigation} />
      </View>
      {
        (user !== null && user?.role === 'admin') &&
        <View style={{
          position: 'absolute',
          bottom: 130,
          left: 270,
          right: 0,
          alignItems: 'center',
        }}>
          <TouchableOpacity style={{ alignSelf: 'center', }} onPress={() => navigation.navigate('NewPost')}>
            <Image source={addbtn} style={{ width: 55, height: 55, }} />
          </TouchableOpacity>
        </View>
      }

    </SafeAreaView>
  );
};


export default Home;
