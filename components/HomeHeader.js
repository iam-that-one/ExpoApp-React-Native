import { View, Text,StyleSheet, Platform } from 'react-native'
import React, { Component } from 'react'


const  HomeHeader = (props, foSize) => {
    return (
      <View style={styles.header}>
        <Text style={{
           color:'black',
           fontSize:Platform.OS === 'ios' ? 70 : 40,
           fontWeight:'bold',
           paddingTop:20,

        }}> {props.title}  </Text>
      </View>
    );
  
}

export default HomeHeader;


const styles = StyleSheet.create({
  header:{
      width: '100%',
      height: Platform.OS === 'ios' ? 120 : 90,
      backgroundColor:'darkturquoise',
      borderBottomEndRadius:20,
      borderBottomStartRadius:20,
      justifyContent:'center',
      alignItems:'center',
     
  },
  headerText:{
   
  
  }
})
