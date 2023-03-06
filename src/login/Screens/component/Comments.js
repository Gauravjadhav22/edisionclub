import React, { useContext, useEffect, useState } from 'react'
import { FlatList, View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import share from "../../../assets/share.png";
import deletebtn from "../../../assets/delbtn.png"
import { Context1 } from '../../../../Stackpage';

import man from "../../../assets/man.png"

const Comments = ({ naviagtion, route: { params: { itemId, comments, post } } }) => {

    const { user } = useContext(Context1)

    const [cmtTxt, setCmtTxt] = useState("")
    const [postComments, setPostComments] = useState(comments)
    console.log(comments, itemId);


    useEffect(() => {
        console.log(postComments, "updated comments");
    }, [])

    const postComment = () => {
        console.log("posting cmgdstts", {
            ...post, comments: postComments
        });
        let url = `http://3.7.194.119:4000/api/post/comment`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postId: itemId, comment: cmtTxt
            }),
        },)
            .then(res => res.json())
            .then(response => {
                setPostComments(response.data.comments)

            })
            .catch(err => {
                console.log(42, err);
            });
    }
    const deleteComment = (index, id) => {



        let url = `http://3.7.194.119:4000/api/post/deletecomment/${itemId}/${index}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

        },)
            .then(res => res.json())
            .then(response => {

                setPostComments(response?.data?.comments);

            })
            .catch(err => {
                console.log(42, err);
            });
    }







    return (

        <View style={{ flex: 1 }}>
            <ScrollView  >

                <View style={{ marginTop: 12, padding: 3 }}>
                    {
                        postComments?.map((itm, index) => {
                            return (<View key={index} style={{ marginLeft: 13, marginHorizontal: 3, borderWidth: 1, maxWidth: "100%", marginVertical: 12, marginRight: 233, borderWidth: 0, alignSelf: 'flex-start', flexDirection: 'row', justifyContent: "space-between", width: "100%" }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Image source={man} style={{ height: 54, width: 54 }} />
                                    <Text style={{ backgroundColor: '#52a17d', color: "white", fontSize: 20, padding: 5, paddingHorizontal: 14, borderRadius: 44 }} >{itm?.comment}</Text>
                                </View>

                                {itm?.user === user?._id && <TouchableOpacity style={{ marginRight: 24 }} onPress={() => deleteComment(index, itm?._id)}>
                                    <Image source={deletebtn} style={{ height: 34, width: 34 }} />
                                </TouchableOpacity>}
                            </View>)
                        })
                    }
                </View>


            </ScrollView>
            <View style={{ marginBottom: 22, flexDirection: 'row', justifyContent: 'flex-end', alignContent: "flex-end", alignItems: "flex-end" }}>
                <View style={{ flexDirection: 'row', marginLeft: 24 }}>
                    <TextInput value={cmtTxt} onChangeText={setCmtTxt} placeholder='comment here' style={{ width: "80%", padding: 12, backgroundColor: "white", borderWidth: 2, borderRadius: 23 }} />
                    <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => {
                        setPostComments((prev) => [...prev, { comment: cmtTxt }])
                        postComment()
                        setCmtTxt("")
                    }}>
                        <Image

                            style={{ height: 55, width: 55, marginTop: 5, marginRight: 13 }}
                            source={share}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Comments