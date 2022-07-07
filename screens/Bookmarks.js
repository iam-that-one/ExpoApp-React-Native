import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TabBar from '../components/TabBar'


 const Bookmarks = () => {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
          <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
        <Text> Bookmarks </Text>
        </View>
        <View style={{alignItems:'center'}}>
         <TabBar screen={"bookmark"}/>
       </View>
      </View>
    )
  
}

export default Bookmarks;