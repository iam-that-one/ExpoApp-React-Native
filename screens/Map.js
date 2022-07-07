import { useNavigation } from '@react-navigation/native'
import React, {useState } from 'react'
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import API_KEY from '../Keys'
import {
    Text, 
    View, 
    StyleSheet, 
    Platform, 
    Image,
    TouchableOpacity,
    Linking
 } from 'react-native'
 
import MapViewDirections from 'react-native-maps-directions';
import DetailsHeader from '../components/DetailsHeader';
const Map = ({ route }) => {
  const { data } = route.params;
  const [pin, setPin] = useState({
    latitude: data.item.lat,
    longitude: data.item.lon
  })

  const [selectedLat, setSelectedLat] = useState(0.0);
  const [selectedLon, setSelectedLon] = useState(0.0);

  const regonChangeHandler = (args) => {
    setSelectedLat(args.latitude);
    setSelectedLon(args.longitude);
  }

  const [distance, setDistance] = useState(0.0);
  const [duration, setDuration] = useState(0.0);

  const readyHandler = (args) =>{
    setDistance(args.distance);
    setDuration(args.duration);
  }
  const [map_type, setMapType] = useState('')
  
  const [region, setRegion] = useState({
    latitude: data.item.lat,
    longitude: data.item.lon,
    latitudeDelta: 0.090150,
    longitudeDelta: 0.090150,
  })
  var url = `https://www.google.com/maps/dir/?api=1&origin=24.169905,47.311116&destination=${data.item.lat},${data.item.lon}`;
  return (
    <View style={styles.container}>
      <View>
        <DetailsHeader title="الخريطة" image={require('../assets/images/google-maps-icon-png-2.jpg.png')}
          moveTo={() => {
            Linking.canOpenURL(url).then(supported => {
              if (!supported) {
                console.log('Can\'t handle url: ' + url);
              } else {
                return Linking.openURL(url);
               
              }
            }).catch(err => console.error('An error occurred', err));
          }} />
        <View style={{ backgroundColor: 'darkturquoise', height: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ height: 40, width: 170, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20, borderWidth: 2 }}>
            <TouchableOpacity onPress={() => setMapType('satellite')}>
              <Image source={require('../assets/images/93059_google_map_satellite_icon.png')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            <Text style={{ paddingTop: 10, paddingHorizontal: 10 }}>وضع الأقمار الصناعية</Text>
          </View>
          <Text style={{ paddingBottom: 10, fontSize: 30 }}>🐉</Text>
          <View style={{ height: 40, width: 170, flexDirection: 'row', paddingRight: 20, borderWidth: 2 }}>
            <TouchableOpacity  onPress={() => setMapType('standard')}>
              <Image source={require('../assets/images/c74dcbb563e50eff165861e6dca5be7c--features-of-android.jpg')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            <Text style={{ paddingTop: 10, paddingHorizontal: 10 }}>الوضع العادي</Text>
          </View>
        </View>
      </View>
      <MapView style={styles.map}
        initialRegion={region}
        provider='google'
        mapType={map_type}
        onRegionChange={regonChangeHandler}    
      >
        {Platform.OS === 'ios' ? (
          <Marker
            coordinate={pin}
          >
            <Callout>
              <Text> أنا هنا</Text>
            </Callout>
            <View style={{ backgroundColor: 'rgba(1,1,1,0.90)', width: 125 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>المسافة: {distance.toFixed(2)} كم</Text>
              <Text style={{ color: 'white', textAlign: 'center' }}>الوقت:{Math.ceil(duration.toFixed(2))} دقيقة</Text>
            </View>
            <Text style={{ color: 'white', textAlign: 'center', width: 125, backgroundColor: 'rgba(1,1,1,0.50)', zIndex: 0 }}>{data.item.value}</Text>
            <View style={{ flexDirection: 'row', zIndex: 0 }} >
              <Image
                source={data.item.image}
                resizeMode={Platform.OS === 'ios' ? 'cover' : 'center'}
                style={{ margin: 2, width: 40, height: 40, borderRadius: 10 }}
              />
              <Image
                source={require('../assets/images/nft02.jpeg')}
                resizeMode='cover'
                style={{ margin: 2, width: 40, height: 40, borderRadius: 10 }}
              />
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                }}
                resizeMode='cover'
                style={{ margin: 2, width: 40, height: 40, borderRadius: 10 }}
              />
            </View>
          </Marker>
        ) : null}
        {Platform.OS === 'android' ?
          <Marker
            coordinate={pin}
          >
            <View style={{ backgroundColor: 'rgba(1,1,1,0.90)', width: 125 }}>
              
        

              <Text style={{ color: 'white', textAlign: 'center' }}>المسافة: {distance.toFixed(2)} كم</Text>
              <Text style={{ color: 'white', textAlign: 'center' }}>الوقت: {Math.ceil(duration).toFixed(2)} دقيقة</Text>
            </View>
            <View style={{ flexDirection: 'row', zIndex: 0 }} >
              <Image
                source={data.item.image}
                resizeMode={Platform.OS === 'ios' ? 'cover' : 'center'}
                style={{ margin: 2, width: 40, height: 40, borderRadius: 10 }}
              />
              <Image
                source={require('../assets/images/nft02.jpeg')}
                resizeMode='cover'
                style={{ margin: 2, width: 40, height: 40, borderRadius: 10 }}
              />
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                }}
                resizeMode='cover'
                style={{ margin: 2, width: 40, height: 40, borderRadius: 10 }}
              />

            </View>
          </Marker>
          : null}

        <MapViewDirections
          origin={{ latitude: 24.148865, longitude: 47.283879 }}
          destination={pin}
          strokeColor="blue"
          strokeWidth={3}
          apikey={API_KEY}
         onReady = {readyHandler}
          onError={(error) => console.log(error)}

        />
        <Circle center={pin} radius={1300} strokeWidth={4} fillColor={() => setFillColor.bind('rgba(1,1,1,0.50)')} />

      </MapView>

    </View>
  )
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',


  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1

  },
});
