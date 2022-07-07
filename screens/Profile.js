import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TabBar from '../components/TabBar'


 const Profile = () => {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
          <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
        <Text> Profile </Text>
        </View>
        <View style={{alignItems:'center'}}>
         <TabBar screen={"profile"}/>
       </View>
      </View>
    )
  
}

export default Profile;