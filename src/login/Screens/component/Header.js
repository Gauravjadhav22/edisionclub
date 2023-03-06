import React from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import Hamburger from './Hamburger'
import hamimg from "../../../assets/hamburger.png"
import userimg from "../../../assets/user.png"
const Header = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "skyblue", }}>
            <View style={{
                backgroundColor: "white",
                borderRadius: 23, padding: 13,
                paddingHorizontal: 13, marginHorizontal: 2,
                flexDirection: 'row',
                justifyContent: "space-between", alignItems: 'center'

            }}>
                <View style={{ margin: 1 }}>

                    <TouchableOpacity onPress={() => {
                        navigation.openDrawer()
                    }} title="Press Me"
                    >
                        <Image source={hamimg} style={{ width: 35, height: 35 }} />
                    </TouchableOpacity>

                </View>
                <View style={{ margin: 1 }}>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Profile')
                    }} title="Press Me"
                    >
                        <Image source={userimg} style={{ width: 35, height: 35 }} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    )
}

export default Header