import React, { useContext } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context1 } from '../../../Stackpage';
// import Loginpage from '../../../login';

const ProfileScreen = () => {
  const { user } = useContext(Context1)


  return (
    <SafeAreaView>
      {/* <View
        style={{
          flex: 1,
          height: 120,
          width: 30,
          backgroundColor: 'red',
        }}></View> */}
      <ScrollView>
        <View
          style={{
            // justifyContent: 'space-around',
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 3,
            backgroundColor: 'lightblue',
            borderColor: 'lightblue',
            textAlign: 'center',
            height: 180,
          }}>
          <Image
            style={{
              height: 25,
              width: 25,
              // borderRadius: 100,
              marginright: 60,
              marginLeft: 10,
              marginTop: 7,
            }}
            source={{
              uri: 'http://cdn.onlinewebfonts.com/svg/img_272299.png',
            }}
          />
          <Image
            style={{
              height: 25,
              width: 25,
              // borderRadius: 100,
              marginright: 60,
              marginLeft: "75%",
              marginTop: 7,
            }}
            source={{
              uri: 'http://cdn.onlinewebfonts.com/svg/img_316859.png',
            }}
          />
        </View>
        <View style={{ marginLeft: 75, marginBottom: 13, flexDirection: 'row' }}>
          <Image
            style={{
              height: 130,
              width: 130,
              borderRadius: 100,
              marginLeft: -53,
              marginTop: -95,
            }}
            source={{
              uri: 'http://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0',
            }}
          />
          <Text
            style={{ marginLeft: 10, bottom: 50, color: 'black', fontSize: 22 }}>
            {user?.name}
          </Text>
        </View>

        {/* <TouchableOpacity style={{ padding: 3 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              marginBottom: 4,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              elevation: 5,
              width: "100%",

            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                // borderRadius: 100,
                // marginright: 60,
                marginLeft: 20,
                marginTop: 7,
              }}
              source={{
                uri: 'http://tse4.mm.bing.net/th?id=OIP.Ve9O3aNxfOTTEluNI6eiKgHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{ marginLeft: 30, marginTop: 10 }}>Shots</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 3 }}>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              marginBottom: 4,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              elevation: 5,
              width: "100%",

            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'http://tse3.mm.bing.net/th?id=OIP.CUp_ZAgqa7D87MgVjZCKRAHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{ marginLeft: 30, marginTop: 10 }}>Likes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 3 }}>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              marginBottom: 4,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              elevation: 5,
              width: "100%",

            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'http://tse4.mm.bing.net/th?id=OIP.xcmCOX3luCN__l15W_YJhQHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{ marginLeft: 30, marginTop: 10 }}>Tags</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              marginBottom: 4,
              elevation: 5,
              width: 363,

            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'http://tse3.mm.bing.net/th?id=OIP.uv8DuKjIIBSdGCPENzXD6AHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{ marginLeft: 30, marginTop: 10 }}>basket</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 3 }}>

          <View
            style={{
              flexDirection: 'row',
                justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              marginBottom: 4,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              elevation: 5,
              width: "100%",

            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'http://tse3.mm.bing.net/th?id=OIP.EyjFrcTRGhxj7X62cgYqbgHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{ marginLeft: 30, marginTop: 10 }}>Download</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 3 }}>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              marginBottom: 4,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              elevation: 5,
              width: "100%",

            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'http://tse3.mm.bing.net/th?id=OIP.rKp8NJQIBWUnsotMElUATwHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{ marginLeft: 30, marginTop: 10 }}>Edit</Text>
          </View>
        </TouchableOpacity> */}
        <View style={styles.info}><Text style={styles.Text}>{user?.email}</Text></View>
        <View style={styles.info}><Text style={styles.Text}>{user?.ageGroup}</Text></View>
        <View style={styles.info}><Text style={styles.Text}>{user?.contactNumber}</Text></View>
        <View style={styles.info}><Text style={styles.Text}>{user?.dateOfBirth?.split('T')[0]}</Text></View>




        {/* <Loginpage /> */}
        {/* <Text>Profile</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  info: {
    borderWidth: 1, padding: 5, margin: 1, marginVertical: 8, flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 4,
    backgroundColor: 'white',
    borderColor: 'white',
    textAlign: 'center',
    height: 50,
    elevation: 5,
    width: "100%",
  },
  Text: {
    fontSize: 18, fontWeight: 'semi-bold', color: 'black'
  }

});

export default ProfileScreen;
