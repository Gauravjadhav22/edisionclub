import React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
// import BottomTabNavigator from './src/bottombar/bottombar';
// import ChallengeScreen from './src/login/Screens/challenge';
// import FunandJoyScreen from './src/login/Screens/fun&joy';
// import ProfileScreen from './src/login/Screens/profile';
import {LogBox} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Loginpage from './login';
// import ProfileScreen from './src/login/Screens/profile';
// import StackPageScreen from './Stackpage';
// import Loginpagescreen from './src/bottombar/signup/Login';
import Loginpagescreen from './src/bottombar/signup/Login';
import StackPageScreen from './Stackpage';
LogBox.ignoreAllLogs();
// const Stack = createNativeStackNavigator();
const App = () => {
  return (
    //     <NavigationContainer>
    //       <Stack.Navigator>
    //         <Stack.Screen
    //           name="Homes"
    //           options={{headerShown: false}}
    //           component={BottomTabNavigator}
    //         />
    //         <Stack.Screen
    //           name="Challenge"
    //           options={{headerShown: false}}
    //           component={ChallengeScreen}
    //         />
    //         <Stack.Screen
    //           name="Fun&Joy"
    //           options={{headerShown: true}}
    //           component={FunandJoyScreen}
    //         />
    //         <Stack.Screen
    //           name="Profile"
    //           options={{headerShown: true}}
    //           component={ProfileScreen}
    //         />
    //         <Stack.Screen
    //           name="login"
    //           options={{headerShown: false}}
    //           component={Loginpage}
    //         />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //
    //

    <StackPageScreen />
  );
};

export default App;
