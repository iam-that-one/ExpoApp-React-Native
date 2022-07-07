import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
const CardView = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.70} onPress={() => navigation.navigate('Details', { data, navigation })} >
      <LinearGradient colors={['gainsboro','ghostwhite','white']} style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 11, position: 'relative', left: -110 }}>#{data.item.cat}</Text>
            <Text style={{ textAlign: 'right', fontSize: 12, width: 70, paddingEnd: 5 }}>{data.item.value}</Text>
          </View>
        </View>
        <Image
          source={data.item.image}
          resizeMode={'cover'}
          style={{ backgroundColor: 'gray', position: 'absolute', right: 0, width: Platform.OS === 'ios' ? 120 : 90, height: Platform.OS === 'ios' ? 120 : 90 }}
        />
      </LinearGradient>
    </TouchableOpacity>
  
  );

}
export default CardView;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical:10,
    width: '90%',
    height: Platform.OS === 'ios' ? 120 : Platform.OS === 'android' ? 90 : 80,
    shadowColor: 'black',
    shadowOpacity: 1,
    borderRadius: 10,
    elevation: 3, shadowOffset: { width: 3, height: 3 }
  },
   linearGradient: {
   margin:10,
    borderRadius: 5,
   
  }
});
