import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { TouchableOpacity, View, Image, Text, TextInput, Animated, AsyncStorage, DrawerLayoutAndroid, Button } from 'react-native'
// import FunandJoyScreen from '../fun&joy';
// import ProfileScreen from '../profile';
// import ChallengeScreen from '../challenge';
// import PostFeedScreen from '../home/postfeed';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../home';
import BottomTabNavigator from '../../../bottombar/bottombar';
import { Context1 } from '../../../../Stackpage';

const Drawer = createDrawerNavigator()







const Hamburger = () => {


    const { setUserInfo, removeUser } = useContext(Context1)
    const Logout = async (navigation) => {
        let url = 'http://3.7.194.119:4000/api/logout';
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
    
                }
            })
            console.log(res);
            // navigation.navigate('Login')
        } catch (err) {
            console.log(42, err);
        }
        finally {
            removeUser()
            await AsyncStorage.removeItem('token');
        }
    
    
    
    
    }
    
    
    function HomeScreen({ navigation }) {
        console.log(navigation);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title="More Options" onPress={() => navigation.openDrawer()} />
            </View>
        );
    }
    
    function LogoutScreen({navigation}) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="click here to logout" onPress={() => Logout(navigation)} />
    
            </View>
        );
    }
    function FeedbackScreen() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Feedback</Text>
    
            </View>
        );
    }
    
    function PrivacyScreen() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
                <Text>Privacy Policy</Text>
    
            </View>
        );
    }
    function ShareWithFriendsScreen() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Share With Friends</Text>
    
            </View>
        );
    }
    


    return (

        <Drawer.Navigator  initialRouteName="Home" drawerPosition="left"
            gestureEnabled={true} independent={true}>
            <Drawer.Screen options={{ headerShown: false }} name="Home" component={BottomTabNavigator} />
            <Drawer.Screen options={{ headerShown: false }} name="Logout" component={LogoutScreen} />
            <Drawer.Screen options={{ headerShown: false }} name="Feedback" component={FeedbackScreen} />
            <Drawer.Screen options={{ headerShown: false }} name="Share" component={ShareWithFriendsScreen} />
            <Drawer.Screen options={{ headerShown: false }} name="Privacy" component={PrivacyScreen} />
        </Drawer.Navigator>






    )
}



export default Hamburger
{/* <>
            <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => 
                setNavOpen(!navOpen)


            }>
                <Image
                    style={{ height: 50, width: 50, marginLeft: -10, marginTop: -10, marginVertical: 8, marginHorizontal: 5 }}
                    source={{
                        uri: 'http://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg',
                    }}
                />

            </TouchableOpacity>

            {navOpen &&

                <View style={{
                    fontSize: 22, color: "black", backgroundColor: "white", padding: 15, position: 'absolute', zIndex: 10, height: 800, width: 200, elevation: 10, marginTop: 28,

                }}>

                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <TextInput placeholder='search..' style={{ backgroundColor: "gray", padding: 5, color: "white" }} />





                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text>Feedback</Text>





                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text>Privacy Policy</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text>Share With Friends</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text>Update</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ borderTopWidth: 1, marginTop: 20, width: "100%", padding: -22, marginHorizontal: -10, }} >
                        <Text style={{ textAlign: "center" }}>About Us</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => Logout()}>
                        <Text style={{ textAlign: "center", marginLeft: -20 }}>Log Out</Text>

                    </TouchableOpacity>

                </View>


            }
        </View>
            </> */}
