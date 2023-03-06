import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, AsyncStorage } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import BottomTabNavigator from '../../bottombar/bottombar';
const NewPost = ({ navigation }) => {
  const [postImage, setPostImage] = useState(null);
  const [title, setTitle] = useState('');
  const [postUrl, setPostUrl] = useState('');
  const [postType, setPostType] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const post = () => {
    let obj = {
      s: title, b: description, c: postImage, postUrl, postType, ageGroup, category
    }

    if (!title || !description || !postImage) {
      alert("all fields are required!..")
    }

    let url = 'http://3.7.194.119:4000/api/post/upload';
    console.log(postImage.resourcePath.assets[0].uri);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("postType", postType);
    formData.append("category", category);
    formData.append("postUrl", postUrl);
    formData.append("ageGroup", ageGroup);
    // formData.append("Image",{uri:postImage.resourcePath?.assets[0]?.uri?.toString()});

    // formData.append('profileImage', { uri: userData.profileImage?.resourcePath?.uri, name: 'image.jpg', type: 'image/jpeg' });
    console.log("fromfsdfs", formData);



    fetch(url, {
      method: 'POST',
      body: formData,
    }).then(res => res.json()).then(res => console.log(res))
      .catch(err => {
        console.log(42, err);
      }).finally(() => navigation.replace('BottomPage',{BottomTabNavigator}));

    console.log(30, obj);

  };
  const selectImage = () => {
    const options = {
      title: 'Select an Image',
      selectionLimit: 0,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        setPostImage({
          resourcePath: source,
        });
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={selectImage}>
          {postImage ? (<>

            {postImage.resourcePath?.assets?.map((itm) => {

              return <Image source={itm} style={styles.image} />

            })}
            {/* <Text>{JSON.stringify(postImage.resourcePath.assets[0])}</Text> */}
          </>) : (
            <Text style={styles.imagePlaceholder}>Select an Image</Text>
          )}
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={openCamera}>
        {postImage ? (<>
          <Image source={{ uri: postImage.resourcePath.assets[0].uri }} />
          <Text>{"JSON.stringify(postImage.resourcePath.assets[0])"}</Text>
        </>) : (
          <Text style={styles.imagePlaceholder}>open camera</Text>
        )}
      </TouchableOpacity> */}
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Write a Title..."
          style={styles.input}
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Write a Description..."
          style={styles.input}
        />
        <TextInput
          value={postUrl}
          onChangeText={setPostUrl}
          placeholder="PostUrl"
          style={styles.input}
        />


        <View
          style={{
            height: 50,
            width: "80%",
            marginLeft: 5,
            backgroundColor: 'white',
            borderColor: 'black',
            marginBottom: 24,
            marginTop: 10,
            borderWidth: 1,
          }}>
          <Picker
            style={{ borderColor: 'black', borderWidth: 5 }}
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) =>
              setCategory(itemValue)
            }>
            <Picker.Item label="  Home" value="Home" />
            <Picker.Item label="  Challenges" value="Challenges" />
            <Picker.Item label="  Post Feed" value="Post Feed" />
            <Picker.Item label="  Fun And Joy" value="Fun And Joy" />
          </Picker>
        </View>

        <View
          style={{
            height: 50,
            width: "80%",
            marginLeft: 5,
            backgroundColor: 'white',
            borderColor: 'black',
            marginBottom: 24,
            marginTop: 10,
            borderWidth: 1,
          }}>
          <Picker
            style={{ borderColor: 'black', borderWidth: 5 }}
            selectedValue={postType}
            onValueChange={(itemValue, itemIndex) =>
              setPostType(itemValue)
            }>
            <Picker.Item label="Image" value="Image" />
            <Picker.Item label="Video" value="Video" />
          </Picker>
        </View>
        <View
          style={{
            height: 50,
            width: "80%",
            marginLeft: 5,
            backgroundColor: 'white',
            borderColor: 'black',
            marginBottom: 24,
            marginTop: 10,
            borderWidth: 1,
          }}>
          <Picker
            style={{ borderColor: 'black', borderWidth: 5 }}
            selectedValue={ageGroup}
            onValueChange={(itemValue, itemIndex) =>
              setAgeGroup(itemValue)
            }>
            <Picker.Item label=" Age Group " value="java" />
            <Picker.Item label="   3 - 6 year old" value="3-6" />
            <Picker.Item label="   7 - 10 year old" value="7-10" />
            <Picker.Item label="   11 - 14 year old" value="11-14" />
            <Picker.Item label="   15 - 16 year old" value="15-16" />
          </Picker>
        </View>
        <TouchableOpacity style={{ marginBottom: 12 }} onPress={post}>
          <Text style={styles.postButton}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 35,
    marginRight: 10,
  },
  imagePlaceholder: {
    marginTop: 33,
    fontSize: 20,
    color: 'gray',
    borderColor: 'yellow',
    padding: 6,
    backgroundColor: "#fe3d",
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    margin: 20,
    width: '90%',
    height: 40,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  postButton: {
    fontSize: 20,
    color: 'white',
    backgroundColor: "blue"
    , paddingLeft: 28
    , paddingRight: 28,
    padding: 8,
    borderRadius: 14
  },
};

export default NewPost;
