import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  Dimensions, AsyncStorage
} from 'react-native';
// import {Dimensions} from 'react-native';
import StackPageScreen from '../../../Stackpage';
import { Context1 } from '../../../Stackpage';
import Loader from '../../login/Screens/component/Loader';
import Loading from '../../login/Screens/component/Loader';
import Hamburger from '../../login/Screens/component/Hamburger';
import BottomTabNavigator from '../bottombar';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const Loginpagescreen = ({ navigation }) => {
  const { setUserInfo, setTokenInfo } = useContext(Context1)

  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   console.log("inside of the fsdfsldkfs");

  //   const getToken = async () => await AsyncStorage.getItem('token');
  //   getToken().then((token) => {
    

  //     if (token) {
  //       console.log("might be working though");
  //       setTokenInfo(token)

  //       // navigation.replace(
  //       //   'Drawer',
  //       //   { Hamburger }
  //       // )

  //     }
  //   }).catch((err) => {

  //     alert("something went wrong!..", err)
  //     console.log(err)

  //   })

  //   return function () {
  //   }
  // }, [])

  useEffect(() => { }, [loading])

  let url = 'http://3.7.194.119:4000/api/login';
  const login = () => {
    if (!text || !number) {
      setLoading(!loading)
      alert("please enter username and otp!..")
      return
    }

    setLoading(true)
    const obj = {
      text,
      number,
    };

    console.log(30, obj);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: text,
        password: number,
      }),
    })
      .then(res => res.json())
      .then(async (response) => {
        console.log(41, response);

        try {
          await AsyncStorage.setItem(
            'token',
            response.token,
          );
        } catch (error) {
          console.log(error);
        }
        if (response.success == true) {
          setUserInfo(response,navigation)
          // navigation.navigate(
          //   'BottomPage'
          // )

        } else {
          alert('Something went wrong')
        }
      })
      .catch(err => {
        alert("something went wrong")
        console.log(42, err);
      }).finally(() => setLoading(false));
  };




  return (
    <SafeAreaView style={{ height: "100%" }}>


      {/* {
        loading ? (<Loader />) : ( */}
      <View
        style={{
          backgroundColor: '#527CEA',


        }}
      >
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            color: 'white',
            marginBottom: 17,
            fontWeight: 'bold',
            fontSize: 40,
          }}>
          Edison Club jr
        </Text>
        <View

          style={{
            backgroundColor: 'white',
            borderTopEndRadius: 34,
            borderTopLeftRadius: 34,
            height: "100%",


          }}
        >
          <Text style={{ fontSize: 30, textAlign: 'center', color: 'black' }}>
            Login
          </Text>
          <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>
            Welcome Back!
          </Text>
          <TextInput
            style={{
              height: 50,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              marginTop: 40,
              color: "black",
              borderRadius: 10,
            }}
            //   style={styles.input}
            placeholder="Mobile"
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={[styles.input, { color: "black" }]}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="OTP"
            keyboardType="numeric"
          />



          <TouchableOpacity onPress={() => login()}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 8,
                color: 'white',
                backgroundColor: "#527CEA",
                padding: 4,
                borderRadius: 5,
                width: "40%",
                margin: "auto",
                alignSelf: "center",
                marginBottom: 5
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
              paddingBottom: 10,

            }}>
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUppage')}>
              <Text style={{ color: 'blue', fontWeight: 'bold' }}> SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* )
      } */}


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

  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    // marginTop: 20,
  },
  btn: {
    marginLeft: 120,
  },
});
export default Loginpagescreen;
