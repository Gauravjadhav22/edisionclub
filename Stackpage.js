import React, { useEffect, useState } from 'react';
import BottomTabNavigator from './src/bottombar/bottombar';
import ChallengeScreen from './src/login/Screens/challenge';
import FunandJoyScreen from './src/login/Screens/fun&joy';
import ProfileScreen from './src/login/Screens/profile';

import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginpagescreen from './src/bottombar/signup/Login';
import SignUppagescreen from './src/bottombar/signup/SignUp';
import AgeGroupscreen from './src/bottombar/signup/AgeGroup';
import PayOptionScreen from './src/bottombar/signup/Payment';
import NewPost from './src/login/Screens/NewPost';
import Home from './src/login/Screens/home';
import Comments from './src/login/Screens/component/Comments';
import jwtDecode from 'jwt-decode';
import Hamburger from './src/login/Screens/component/Hamburger';
import { Text, AsyncStorage } from 'react-native';
import Likes from './src/login/Screens/Likes';

const Stack = createNativeStackNavigator();
export const Context1 = React.createContext(null);
const StackPageScreen = ({ navigation }) => {
  //Context 1
  const context1InitialState = {};
  const [user, setUser] = useState(context1InitialState);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    console.log("logeedfkljsdfsjklfjf", loggedIn);
    return () => {
    }
  }, [loggedIn])



  function setUserInfo(user) {
    console.log("setUser called", user);

    setUser({ user: user.user });

    user?.user?._id && setLoggedIn(true)
  }
  function removeUser() {
    console.log("removeUser called", user);


    setUser(null);
    setLoggedIn(false)
  }

  async function setTokenInfo(tokn) {
    let data = jwtDecode(tokn)
    let url = `http://3.7.194.119:4000/api/admin/getuser/${data?._id}`
  
    fetch(url, {
      method: 'GET',

    })
      .then(res => res.json())
      .then(response => {
        console.log(41, response.data);
        if (response.success == true) {
          setUser({ user: { ...response.data, token: tokn } })

        }
      })
      .catch(err => {

        AsyncStorage.removeItem('token').then((res) => console.log("token removed successfully"))
        navigation.navigate("Login")
        console.log(42, err);
      });


  }

  const context1Setters = {
    setUserInfo, removeUser, setTokenInfo
  }
  useEffect(() => {

    const getToken = async () => await AsyncStorage.getItem('token');
    getToken().then((token) => {


      if (token) {
        console.log("might be working though", token);
        setTokenInfo(token)
        setLoggedIn(true)

      }
    }).catch((err) => {

      alert("something went wrong!..", err)
      console.log(err)

    })

    return () => {
    }
  }, [])

  return (
    <NavigationContainer>
      <Context1.Provider value={{ ...user, ...context1Setters }}>
        <Stack.Navigator >
          {
            loggedIn ? <>
              <Stack.Screen
                name="Drawer"
                options={{ headerShown: false }}
                component={Hamburger}
              />

              <Stack.Screen
                name="BottomPage"
                options={{ headerShown: false }}
                component={BottomTabNavigator}
              />
              <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={Home}
              />
              <Stack.Screen
                name="Likes"
                options={{ headerShown: false }}
                component={Likes}
              />



              <Stack.Screen
                name="PaymentDetail"
                options={{ headerShown: true }}
                component={PayOptionScreen}
              />

              <Stack.Screen
                name="Profile"
                options={{ headerShown: false }}
                component={ProfileScreen}
              />
              <Stack.Screen
                name="NewPost"
                options={{ headerShown: false }}
                component={NewPost}
              />
              <Stack.Screen
                name="Comments"
                options={{ headerShown: false }}
                component={Comments}
              />
            </> : (<>
              <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={Loginpagescreen}
              />
              <Stack.Screen
                name="SignUppage"
                options={{ headerShown: false }}
                component={SignUppagescreen}
              />
              <Stack.Screen
                name="AgeGroupPage"
                options={{ headerShown: true }}
                component={AgeGroupscreen}
              />
            </>)
          }



        </Stack.Navigator>
      </Context1.Provider>
    </NavigationContainer>
  );
};

export default StackPageScreen;
