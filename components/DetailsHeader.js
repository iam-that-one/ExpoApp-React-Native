import { useNavigation } from "@react-navigation/native";
import { View, Text,StyleSheet,Image, TouchableOpacity, Platform } from "react-native";
const  DetailsHeader = (props) => {
  const navigation = useNavigation()
    return (
      <View style={styles.header}>
        <Text style={{
           color:'black',
           fontSize:20,
           fontWeight:'bold',
           paddingTop:30,
        }}> {props.title}  
        
        </Text>
        <View style={{position:'absolute',left:10}}>
        <TouchableOpacity onPress={navigation.goBack} >
                    <Image
                        source={require('../assets/images/left.png')}
                        resizeMode={'cover'}
                        style={{
                           padding:5, width:40, height:40
                        }}
                    />
                </TouchableOpacity>

                </View>
                <View style={{position:'absolute',right:10}}>
        <TouchableOpacity onPress={props.moveTo} >
                    <Image
                        source={props.image}
                        resizeMode={'cover'}
                        style={{
                           padding:5, width:40, height:40,
                           transform: [{ rotate: "0deg" }],
                           borderWidth:2
                        }}
                    />
                </TouchableOpacity>

                </View>
      </View>
    );
  
  }

  export default DetailsHeader;

  const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: Platform.OS === 'ios' ? 120 : 90,
        backgroundColor:'darkturquoise',
      
        justifyContent:'center',
        alignItems:'center',
       
    },
    headerText:{
     
    
    }
  })