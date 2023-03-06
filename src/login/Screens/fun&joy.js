import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity, TextInput,
  Dimensions,
} from 'react-native';
import Hamburger from './component/Hamburger';
import like from "../../assets/like.png"
import share from "../../assets/share.png"
import dislike from "../../assets/dislike.png"
import Posts from './component/Posts';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const FunandJoyScreen = ({ navigation }) => {







  return (
    <SafeAreaView>
      <Hamburger />
      <View style={{height:"100%",backgroundColor:"skyblue"}}>
        <Posts category={'Fun And Joy'} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    marginVertical: 3,
  },

  menu: {
    height: 20,
    weidth: 20,
    color: 'black',
  },
});
export default FunandJoyScreen;
