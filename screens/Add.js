
import { Image, View, Text, StyleSheet, Platform, TextInputBase, TextInput, Button, ScrollView } from 'react-native'
import TabBar from '../components/TabBar'
import Geocoder from 'react-native-geocoding';
import React, { useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import API_KEY from '../Keys'
Geocoder.init(API_KEY);
import * as Location from 'expo-location';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import arrayData from '../dataStore/DataStore'
const Add = () => {


  const [image, setImage] = useState('https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png');
  const [image2, setImage2] = useState('https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png');
  const [image3, setImage3] = useState('https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png');
  const [image4, setImage4] = useState('https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickImage2 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage2(result.uri);
    }
  };
  const pickImage3 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage3(result.uri);
    }
  };
  const pickImage4 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage4(result.uri);
    }
  };


  const onchangeRegion = (args) => {
    setLat(args.latitude);
    setLon(args.longitude);
    console.log(lat)
    console.log(lon)
    //  setLatit(lat)
    //setLotit(lon)
  }

      

  const [lat, setLat] = useState(0.0)
  const [lon, setLon] = useState(0.0)

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [cityName, setCityName] = useState('بانتظار اختيار موقعك من الخريطة ...');
  const [latit, setLatit] = useState(0.0)
  const [lotit, setLotit] = useState(0.0)
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords.latitude) + "," + JSON.stringify(location.coords.longitude);

    Geocoder.from(latit, lotit)
      .then(json => {
        setCityName(json.results[1].address_components[3].long_name.toString());
        console.log('cityName', cityName);

      })
      .catch(error => console.warn(error));
  }
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
      <View style={{
        width: '100%',
        height: Platform.OS === 'ios' ? 120 : 90,
        backgroundColor: 'darkturquoise',
        justifyContent: 'center',
        alignItems: 'center',
      }}><Text style={{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
      }}>إضافة إعلان جديد</Text></View>
      <ScrollView>

        <View style={styles.container}>
          <View>
            <TextInput
              placeholder='عنوان المنتج'
              style={{ width: 300, height: 30, borderWidth: 1, borderRadius: 10, margin: 10, textAlign: 'right', paddingHorizontal: 10 }}
            />
            <TextInput
              multiline={true}
              placeholder='وصف المنتج'
              style={{ width: 300, height: 100, borderWidth: 1, borderRadius: 10, margin: 10, textAlign: 'right', paddingHorizontal: 10 }}
            />
            <TextInput
              placeholder='سعر المنتج'
              style={{ width: 300, height: 30, borderWidth: 1, borderRadius: 10, margin: 10, textAlign: 'right', paddingHorizontal: 10 }}
            />

            <TextInput
              placeholder='المدينة'
              style={{ width: 300, height: 30, borderWidth: 1, borderRadius: 10, margin: 10, textAlign: 'right', paddingHorizontal: 10 }}
              value={cityName}

            />
            <View style={{ flexDirection: 'row', width: 300, justifyContent: 'flex-end' }}>
              <Text>{lat.toFixed(5)}</Text>
              <Text>,</Text>
              <Text>{lon.toFixed(5)}</Text>
            </View>

          </View>
          <MapView
            initialRegion={{
              latitude: 24.711338,
              longitude: 46.698714,
              latitudeDelta: 0.50,
              longitudeDelta: 0.50,

            }}
            provider='google'
            style={{ width: Platform.OS === 'ios' ? 300 : 300, height: Platform.OS === 'ios' ? 300 : 300, alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}
            onRegionChange={onchangeRegion}
          >
            {Platform.OS === 'android' ? (
              <Marker coordinate={{ latitude: lat, longitude: lon }} pinColor={'red'} />

            ) :
              null
            }

            {Platform.OS === 'ios' ? (
              <Image source={require('../assets/images/5888925dbc2fc2ef3a1860ad.png')} style={{ width: 40, height: 40 }} resizeMode='contain' />
            ) : null}

          </MapView>
          <TouchableOpacity activeOpacity={0.40} onPress={() => {
            setLatit(lat)
            setLotit(lon)
          }}><LinearGradient colors={['gray', 'white']} style={{ marginTop: 10, backgroundColor: 'gold', width: 300, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}><Text>اضغط هنا لاعتماد موقعك</Text></LinearGradient></TouchableOpacity>

          <View style={{ marginBottom: 200 }}>
            <TouchableOpacity activeOpacity={0.70} onPress={pickImage}>
              <View style={{ backgroundColor: 'gray', width: 300, height: 100, margin: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 10 }}>
                  {image &&
                    <Image source={{ uri: image }} style={{ backgroundColor: 'gold', width: 100, height: 100 }} resizeMode='cover' />}
                  <Text>اختر الصورة الأولى</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.70} onPress={pickImage2}>
              <View style={{ backgroundColor: 'gray', width: 300, height: 100, margin: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 10 }}>
                  {image2 &&
                    <Image source={{ uri: image2 }} style={{ backgroundColor: 'gold', width: 100, height: 100 }} resizeMode='cover' />}
                  <Text>اختر الصورة الثانية</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.70} onPress={pickImage3}>
              <View style={{ backgroundColor: 'gray', width: 300, height: 100, margin: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 10 }}>
                  {image3 && <Image source={{ uri: image3 }} style={{ backgroundColor: 'gold', width: 100, height: 100 }} resizeMode='cover' />}
                  <Text>اختر الصورة الثالثة</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.70} onPress={pickImage4}>
              <View style={{ backgroundColor: 'gray', width: 300, height: 100, margin: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 10 }}>
                  {image4 && <Image source={{ uri: image4 }} style={{ backgroundColor: 'gold', width: 100, height: 100 }} resizeMode='cover' />}
                  <Text>اختر الصورة الرابعة</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <Button title='Add' onPress={
        console.log('')
          }/>
        </View>

      </ScrollView>
      <TabBar screen={'add'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    padding: 20,
    margin: 30
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Add;