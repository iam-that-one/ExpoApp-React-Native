import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TabBar from '../components/TabBar'


 const Message = () => {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
          <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
        <Text> Message </Text>
        </View>
        <View style={{alignItems:'center'}}>
         <TabBar screen={"message"}/>
       </View>
      </View>
    )
  
}

export default Message;