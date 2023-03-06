import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AgeGroupscreen from './AgeGroup';
import { launchImageLibrary } from 'react-native-image-picker';
import imgLogo from "../../assets/image.png"


const SignUppagescreen = ({ navigation }) => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [tahshil, onChangeTahshil] = useState('');
  const [profileImage, onChangeProfileImage] = useState('');
  const [contactNumber, onChangeContactNumber] = useState('');
  const [state, onChangeState] = useState('');
  const [password, onChangePassword] = useState('');
  const [refCode, onChangeRefCode] = useState('');
  const [pincode, onChangePincode] = useState('');
  const [district, onChangeDistrict] = useState('');
  const [city, onChangeCity] = useState('');
  const [view, setView] = useState(true);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const selectImage = () => {
    const options = {
      title: 'Select an Image',
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
        console.log(source.assets);
        onChangeProfileImage({
          resourcePath: source.assets[0],
        });
      }
    });
  };


  view


  const getAge = (data) => {

  }

  return (
    <SafeAreaView>

      {view ?
        <View
          style={{
            backgroundColor: '#527CEA',
            height: "100%",
          }}>
          <ScrollView
          >

            <View
              style={{
                backgroundColor: 'white',
                height: "100%",
                marginTop: 80,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                elevation: 10,
              }}>

              <Text
                style={{
                  fontSize: 30,
                  textAlign: 'center',
                  color: 'black',
                  marginTop: 10,
                  fontWeight: 'bold',
                }}>
                SignUp
              </Text>

              <TouchableOpacity onPress={selectImage} style={{
                width: "50%", margin: "auto", alignSelf: "center", marginTop: 10, backgroundColor: "yellow", fontSize: 16, borderRadius: 16, textAlign: "center", paddingVertical: 13
              }}>
                {profileImage ? (<>



                  <Image source={profileImage.resourcePath} style={{ width: 76, height: 76, alignSelf: "center" }} />


                  {/* <Text>{JSON.stringify(profileImage.resourcePath.assets[0])}</Text> */}
                </>) : (
                  <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={imgLogo} style={{ width: 56, height: 46 }} />
                    <Text style={{ color: "white", backgroundColor: "gray", paddingHorizontal: 0 }}>Choose Profile Pic</Text></View>)}
              </TouchableOpacity>
              <TextInput
                style={{
                  height: 50,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 10,
                }}
                placeholder="Name"
                onChangeText={onChangeName}
                value={name}
              />
              <TextInput
                style={{
                  height: 50,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 10,
                }}
                placeholder="Contact Number"
                onChangeText={onChangeContactNumber}
                value={contactNumber}
              />
              <TextInput
                style={{
                  height: 50,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  marginTop: 30,
                  borderRadius: 10,
                }}
                placeholder="Email"
                onChangeText={onChangeEmail}
                value={email}
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
              />

              <Button
                style={styles.btn}
                title="Date Of Birth"
                onPress={showDatePicker}
                color="lightblue"
              />

              <DateTimePickerModal
                date={selectedDate}
                isVisible={datePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

                  <TextInput
                    style={{
                      height: 50,
                      margin: 12,
                      borderWidth: 1,
                      padding: 10,
                      marginTop: 10,
                      borderRadius: 10,
                      width: "45%"

                    }}
                    //   style={styles.input}
                    placeholder="State"
                    onChangeText={onChangeState}
                    value={state}
                  />
                  <TextInput
                    style={{
                      height: 50,
                      margin: 12,
                      borderWidth: 1,
                      padding: 10,
                      marginTop: 10,
                      borderRadius: 10,
                      width: "45%"

                    }}
                    //   style={styles.input}
                    placeholder="District"
                    onChangeText={onChangeDistrict}
                    value={district}
                  />
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                  <TextInput
                    style={{
                      height: 50,
                      margin: 12,
                      borderWidth: 1,
                      padding: 10,
                      marginTop: 10,
                      borderRadius: 10,
                      width: "45%"

                    }}
                    //   style={styles.input}
                    placeholder="Tahsil"
                    onChangeText={onChangeTahshil}
                    value={tahshil}
                  />
                  <TextInput
                    style={{
                      height: 50,
                      margin: 12,
                      borderWidth: 1,
                      padding: 10,
                      marginTop: 10,
                      borderRadius: 10,
                      width: "45%"

                    }}
                    //   style={styles.input}
                    placeholder="Pincode"
                    onChangeText={onChangePincode}
                    value={pincode}
                  />

                </View>

                <TextInput

                  style={{
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 10,
                    borderRadius: 10,
                    // width: 170,
                    color: 'black',
                  }}

                  placeholder="city"
                  onChangeText={onChangeCity}
                  value={city}
                />
                <TextInput

                  style={{
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 10,
                    borderRadius: 10,
                    // width: 170,
                    color: 'black',
                  }}

                  placeholder="Referal code"
                  onChangeText={onChangeRefCode}
                  value={refCode}
                />
                <TouchableOpacity onPress={() => {

                  if (!name ||
                    !email ||
                    !tahshil ||
                    !profileImage ||
                    !contactNumber ||
                    !state ||
                    !password ||
                    !refCode ||
                    !pincode ||
                    !district ||
                    !city ||
                    !view
                  ) {

                    alert("all fields are required!...")
                  } else {
                    setView(false)

                  }
                }}>
                  <View
                    style={{
                      height: 50,
                      width: 150,
                      backgroundColor: '#527CEA',
                      marginLeft: 200,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 8,
                        fontSize: 25,
                        color: 'white',

                      }}>
                      Next
                    </Text>
                  </View>
                </TouchableOpacity>

              </View>

            </View>
          </ScrollView>
        </View> : <AgeGroupscreen userData={{
          city, email, profileImage, contactNumber, name, state,
          refralCode: refCode, district, pincode, tahsil: tahshil, password,
          dateOfBirth: `${selectedDate.getFullYear()}-${selectedDate.getMonth() >= 10 ? +selectedDate.getMonth() : '0' + selectedDate.getMonth()}-${selectedDate.getDate() >= 10 ? selectedDate.getDate() : '0' + selectedDate.getDate()}`
        }} getAge={getAge} />}
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
    marginTop: 0,
  },
  //   btn: {
  //     marginLeft: 120,
  //   },
  btn: {
    height: 30,
    marginTop: 90,
    width: 50,
    color: 'red',
  },
});
export default SignUppagescreen;