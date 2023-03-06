import React, { useState, useEffect, useDebugValue } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';



let url = 'http://3.7.194.119:4000/api/user/register';


const AgeGroupscreen = ({ navigation, userData }) => {
  console.log(55,userData);
  const [selectedLanguage, setSelectedLanguage] = useState();

  



  const signUp = async () => {
    var responseClone; // 1


    let data = {
      email: "gaureravr433@gmail.com",
      password: "dfsd",
      contactNumber: 913072222,
      dateOfBirth: "2010-08-22",
      state: "2010-08-22",
      city: "pune",
      tahsil: "upune",
      pincode: 431604,
      name: "gaurav"
    }
    const formData = new FormData();
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("contactNumber", userData.contactNumber);
    formData.append("dateOfBirth", userData.dateOfBirth);
    formData.append("state", userData.state);
    formData.append("city",userData.city);
    formData.append("tahsil", userData.tahsil);
    formData.append("pincode", userData.pincode);
    formData.append("name", userData.name);
    formData.append('profileImage', { uri: userData.profileImage?.resourcePath?.uri, name: 'image.jpg', type: 'image/jpeg' });
    console.log("fromfsdfs", formData);

    console.log(30, data);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    }).then(function (response) {
      responseClone = response.clone(); // 2
      return response.json();
  })
  .then(function (data) {
      // Do something with data
      console.log(data);
  }, function (rejectionReason) { // 3
      console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
      responseClone.text() // 5
      .then(function (bodyText) {
          console.log('Received the following instead of valid JSON:', bodyText); // 6
      });
  });
  }


  return (
    <SafeAreaView>
    
      <View
        style={{
          height: 340,
          backgroundColor: 'lightblue',
          width: '100%',
        }}>
        <View
          style={{
            height: 1050,
            width: 390,
            backgroundColor: 'white',
            borderRadius: 40,
            marginTop: 200,
          }}>
          {/* <View>
            <Picker
              selectedValue={this.state.user}
              onValueChange={this.updateUser}>
              <Picker.Item label="Steve" value="steve" />
              <Picker.Item label="Ellen" value="ellen" />
              <Picker.Item label="Maria" value="maria" />
            </Picker>
            <Text style={styles.text}>{this.state.user}</Text>
          </View> */}
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 40,
              color: 'black',
            }}>
            select Age Group
          </Text>
          <View
            style={{
              height: 50,
              width: 380,
              marginLeft: 5,
              backgroundColor: 'white',
              borderColor: 'black',
              marginTop: 20,
              borderWidth: 1,
            }}>
            <Picker
              style={{ borderColor: 'black', borderWidth: 5 }}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label=" Select " value="java" />
              <Picker.Item label="   3 - 6 year old" value="java" />
              <Picker.Item label="   7 - 10 year old" value="js" />
              <Picker.Item label="   11 - 14 year old" value="js" />
              <Picker.Item label="   15 - 16 year old" value="js" />
            </Picker>
          </View>
          <TouchableOpacity
            onPress={() => {
              return signUp()
              // navigation.navigate('PaymentDetail')
            }}>
            <View
              style={{
                height: 50,
                width: 150,
                backgroundColor: '#527CEA',
                marginLeft: 200,
                marginTop: 60,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 8,
                  fontSize: 25,
                  color: 'white',
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },

  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
});
export default AgeGroupscreen;
