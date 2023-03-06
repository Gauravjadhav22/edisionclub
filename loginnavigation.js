import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const LoginNavigation = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Text>mi vaishnavi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginNavigation;
