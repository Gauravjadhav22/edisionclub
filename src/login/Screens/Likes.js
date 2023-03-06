import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import man from "../../assets/man.png"

const Likes = ({ navigation, route: { params: { likes } } }) => {

    const [likedUsers, setLikedUsers] = useState([])



    useEffect(() => {


        likes.map(id => {
            let url = `http://3.7.194.119:4000/api/admin/getuser/${id}`

            fetch(url, {
                method: 'GET',

            })
                .then(res => res.json())
                .then(response => {

                    console.log(response.data.profileImage, "the email");
                    const { profileImage, email, name, role, _id } = response.data


                    setLikedUsers((prev) => [...prev, { profileImage, email, name, role, _id }])
                })
                .catch(err => {
                    console.log(err);
                })

        })

    }, [])



    console.log(likes);
    return (
        <View style={{ alignItems: "center", justifyContent: "center", alignContent: "center" }}>

            <ScrollView  >

                <View style={{ marginTop: 12, padding: 3, alignItems: "flex-start", alignContent: "flex-start", justifyContent: "flex-start", }}>
                    {
                        likedUsers?.map((itm, index) => {
                            return (
                                <View key={index} style={{ backgroundColor: "#ecf542", position: "relative", padding: 10, borderRadius: 43, marginHorizontal: 20, flexDirection: "row", marginVertical: 12, alignItems: "center", }}>
                                    <Image source={man} style={{ width: 50, height: 50, marginRight: 22 }} />
                                    <View>
                                        <Text style={{ color: "black", fontSize: 22 }} >{itm?.name}</Text>
                                        <Text style={{ color: "black", fontSize: 22 }} >{itm?.email}</Text>

                                    </View>
                                </View>
                            )
                        })
                    }
                </View>


            </ScrollView>

        </View>
    )
}

export default Likes