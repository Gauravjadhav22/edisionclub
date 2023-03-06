import React, {useState, useEffect} from 'react';
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
} from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const PayOptionScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Screen Dimensions</Text>
        {Object.entries(dimensions.screen).map(([key, value]) => (
          <Text>
            {key} - {value}
          </Text>
        ))}
      </View>
      <View
        style={{
          height: 340,
          backgroundColor: 'lightblue',
          width: '100%',
        }}>
        <Text
          style={{
            marginTop: 30,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 40,
          }}>
          Payment Detail
        </Text>
        <View
          style={{
            height: 1050,
            width: 390,
            backgroundColor: 'white',
            borderRadius: 40,
            marginTop: 60,
          }}>
          <Text
            style={{
              marginTop: 30,
              fontSize: 25,
              textAlign: 'center',
              color: 'black',
            }}>
            Credit Or Debit Card
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Image
              style={{
                height: 50,
                width: 80,
                marginLeft: 20,
                borderWidth: 1,
                borderColor: 'black',
              }}
              source={{
                uri: 'https://tse2.mm.bing.net/th?id=OIP.Tm3bQgMW-mGBo4BvIvH3DQHaFQ&pid=Api&P=0',
              }}
            />
            <Image
              style={{
                height: 50,
                width: 80,
                marginLeft: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}
              source={{
                uri: 'https://www.ave.mx/wp-content/uploads/2021/08/Logo-Mastercard.png',
              }}
            />
            <Image
              style={{
                height: 50,
                width: 80,
                marginLeft: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}
              source={{
                uri: 'https://tse1.mm.bing.net/th?id=OIP.1sCtYs-dM8A3QeYgEwQ7-AHaEK&pid=Api&P=0',
              }}
            />
            <Image
              style={{
                height: 50,
                width: 80,
                marginLeft: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}
              source={{
                uri: 'https://tse2.mm.bing.net/th?id=OIP.c6Azn6hFFWIOYmUscf_OGwHaFT&pid=Api&P=0',
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              fontSize: 23,
              marginLeft: 40,
              fontWeight: 'bold',
            }}>
            Payment Detail
          </Text>
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
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Card Number"
            keyboardType="numeric"
            color="black"
          />
          <TextInput
            style={{
              height: 50,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              marginTop: 0,
              borderRadius: 10,
              // width: 170,
              color: 'black',
            }}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Expiry Date"
            keyboardType="numeric"
          />
          <TextInput
            style={{
              height: 50,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              marginTop: 0,
              borderRadius: 10,
              // width: 170,
              color: 'black',
            }}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Security Code"
            keyboardType="numeric"
          />
          <TextInput
            style={{
              height: 50,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              marginTop: 0,
              borderRadius: 10,
              // width: 170,
              color: 'black',
            }}
            //   style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Postle Code"
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={() => navigation.navigate('BottomPage')}>
            <View
              style={{
                height: 50,
                width: 150,
                backgroundColor: 'lightblue',
                marginLeft: 120,
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 8,
                  fontSize: 25,
                  color: 'white',
                }}>
                Pay Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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

  // text: {
  //   fontSize: 30,
  //   alignSelf: 'center',
  //   color: 'red',
  // },
});

export default PayOptionScreen;
