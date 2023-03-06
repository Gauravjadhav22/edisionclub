import React, { useState, useEffect, useContext } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity, TextInput,
    Dimensions,
    FlatList, AsyncStorage
} from 'react-native';
import like from "../../../assets/like.png"
import commentLogo from "../../../assets/comment.png"
import dislike from "../../../assets/dislike.png"
import { Context1 } from '../../../../Stackpage';

let url = 'http://3.7.194.119:4000/api/post/getposts'

const Posts = ({ navigation, category }) => {
    const { user } = useContext(Context1)

    console.log(user, "inside of posts");
    const [liked, setLiked] = useState(false)
    const [posts, setPosts] = useState(null)
    const [showOptions, setShowOption] = useState({ current: false, id: null })

    useEffect(() => {
        getPosts();
        const willFocusSubscription = navigation.addListener('focus', () => {
            getPosts();
        });

        return willFocusSubscription;
    }, []);

    const getPosts = () => {
        console.log("category", category);
        fetch(url, {
            method: 'GET',

        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                // console.log(41, response.data[0].image[0].img);
                if (response.success == true) {
                    if (category !== 'Home' && category) {

                        setPosts(response?.data?.filter(itm => itm.category === category))
                    }
                    else {

                        console.log(posts);
                        setPosts(response?.data)
                    }

                }
            })
            .catch(err => {
                AsyncStorage.removeItem('token')
                navigation.navigate("Login")
                console.log(42, err);

            });
    }



    const deletePost = (id) => {



        let url = `http://3.7.194.119:4000/api/post/delete/${id}`
        fetch(url, {
            method: 'DELETE'
        },)
            .then(res => res.json())
            .then(response => {
                getPosts()
                console.log(response);

            })
            .catch(err => {
                console.log(42, err);
            });
    }



    const likePost = (post) => {

        let url = `http://3.7.194.119:4000/api/post/likeunlike/${post?._id}`
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        },)
            .then(res => res.json())
            .then(response => {
                getPosts()
                console.log(response);

            })
            .catch(err => {
                console.log(42, err);
            });
    }

    return (
        <ScrollView>
            <View
                style={{


                    textAlign: 'center',
                    height: "100%",
                    marginVertical: 14,
                    marginBottom: 75
                }}>
                {
                    posts?.map((itm, index) => {



                        return <View key={index} style={{ marginHorizontal: 6, backgroundColor: 'white', marginVertical: 24, justifyContent: 'space-between', alignContent: 'space-between', alignItems: 'center', borderRadius: 14, }}>

                            <View
                                style={{

                                    height: 400,
                                    backgroundColor: "white",
                                    width: "100%",

                                }}>

                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderRadius: 3,
                                        backgroundColor: 'white',
                                        borderColor: 'white',
                                        elevation: 20,
                                        height: 45,
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}>
                                        <Image
                                            style={{
                                                height: 35,
                                                width: 35,
                                                marginLeft: 10,
                                                marginTop: 3,
                                                borderRadius: 100,
                                            }}
                                            source={{
                                                uri: 'http://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0',
                                            }}
                                        />
                                        <Text
                                            style={{ marginRight: 120, color: 'black', marginTop: 7 }}>
                                            {itm?.title}
                                        </Text>
                                        <TouchableOpacity onPress={() => setShowOption({ current: !showOptions.current, id: itm._id })}>

                                            <Image
                                                style={{
                                                    height: 25,
                                                    width: 25,
                                                    marginRight: 10,
                                                    marginTop: 7,
                                                }}
                                                source={{
                                                    uri: 'http://icon-library.com/images/android-3-dot-menu-icon/android-3-dot-menu-icon-9.jpg',
                                                }}
                                            />
                                        </TouchableOpacity>

                                        {(showOptions.current && itm._id === showOptions.id) && <TouchableOpacity style={{ position: 'absolute', right: 18, top: 45, zIndex: 100 }} onPress={() => deletePost(itm?._id)}>
                                            <Text style={{ fontSize: 17, borderWidth: 1, padding: 4, }}>delete Post</Text>
                                        </TouchableOpacity>}
                                    </View>


                                    <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                                        <ScrollView style={{ flexDirection: 'row', height: 300 }}>
                                            <View style={{ flexDirection: 'row', }}>
                                                {
                                                    itm?.image?.map((img) => {
                                                        // console.log(img.img, "herew is img");
                                                        return <Image
                                                            style={{
                                                                padding: 33,
                                                                margin: 4,
                                                                height: 350,
                                                                width: 150,

                                                            }}
                                                            source={{
                                                                uri: 'http://edison-club-api.s3.amazonaws.com/1674631907095.jpg'
                                                            }}
                                                        />
                                                    })
                                                }</View>
                                        </ScrollView>
                                    </View>

                                    <View style={{ alignContent: "space-between", }}>
                                        <View style={{ flexDirection: 'row', width: "80%", alignItems: "baseline", marginLeft: 12 }}>

                                            <TouchableOpacity onPress={() => {

                                                setLiked(!liked)
                                                likePost(itm)

                                            }

                                            }>

                                                <Image
                                                    style={{ height: 25, width: 25, marginTop: 5, marginRight: 13 }}
                                                    source={

                                                        itm?.likes.includes(user?._id?.toString()) ? dislike : like


                                                    }


                                                />

                                            </TouchableOpacity>
                                            <View style={{ flexDirection: "row", marginRight: 12, alignItems: "center", alignContent: "center", justifyContent: "center" }}>
                                                <TouchableOpacity onPress={() => {


                                                    navigation.navigate('Likes', {
                                                        itemId: itm?._id,
                                                        likes: itm?.likes,
                                                    })
                                                }

                                                }>
                                                    <Text style={{ marginLeft: 0, marginTop: 7 }}>
                                                        Liked by {itm?.likes?.length >= 1 &&
                                                            <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>{itm?.likes?.length} others</Text>

                                                        }
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>

                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate('Comments', {
                                                itemId: itm?._id,
                                                comments: itm?.comments,
                                                post: itm
                                            });
                                        }} style={{ flexDirection: "row", alignItems: "baseline", alignSelf: "flex-end", marginTop: -37, marginRight: 18 }}>

                                            <Image
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                }}
                                                source={commentLogo}
                                            />
                                            <Text style={{ color: "black", alignSelf: "center", fontSize: 23, fontWeight: 'bold' }}>{itm?.comments.length || 0}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginVertical: 42, alignSelf: 'flex-start', marginHorizontal: 12 }}>
                                <Text style={{ color: "black", fontSize: 19 }}>{itm?.description} ..</Text>
                            </View>

                        </View>
                    })
                }




            </View>
        </ScrollView>
    )
}

export default Posts