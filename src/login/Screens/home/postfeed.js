import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import Hamburger from '../component/Hamburger';

import { Context1 } from '../../../../Stackpage';
import Posts from '../component/Posts';
let url = 'http://3.7.194.119:4000/api/post/getposts'

const PostFeedScreen = ({ navigation }) => {
  const { user } = useContext(Context1)


  return (
    <SafeAreaView  >
      <Hamburger />

      <View style={style.container}>
        <View style={style.header}></View>

      </View>
      <View style={{ height: "100%", backgroundColor: "skyblue" }}>
        <Posts category={'Post Feed'} navigation={navigation} />
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
export default PostFeedScreen;
