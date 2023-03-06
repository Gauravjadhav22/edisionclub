import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View, TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Hamburger from './component/Hamburger';

import Posts from './component/Posts';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');
let url = 'http://3.7.194.119:4000/api/post/getposts'

const ChallengeScreen = ({ navigation }) => {
 
  return (
    <SafeAreaView>
      <Hamburger />
      <ScrollView>
    

        <View style={{ height: "100%", backgroundColor: "skyblue" }}>
          <Posts category={'Challenges'} navigation={navigation} />
        </View>


      </ScrollView>
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
export default ChallengeScreen;
