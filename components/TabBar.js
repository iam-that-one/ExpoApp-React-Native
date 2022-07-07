import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Platform } from 'react-native';
const TabBar = ({ screen }) => {
    const route = useRoute();
    //console.log(route.name);

    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('Home')
    }
    const navigateToBook = () => {
        navigation.navigate('Bookmarks')
    }

    const navigateToAdd = () => {
        navigation.navigate('Add')
    }
    const navigateToMess = () => {
        navigation.navigate('Message')
    }
    const navigateToProf = () => {
        navigation.navigate('Profile')
    }
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.tabBar}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <TouchableOpacity  style={{ marginLeft: 10, marginLeft: 10, borderRadius: 7, borderBottomWidth: 2, borderColor: screen == "home" ? 'black' : 'ghostwhite' }} onPress={navigateToHome}>
                        <Image source={require('../assets/images/icons8-home.gif')}
                            style={{ width: Platform.OS === 'ios' ? 40 : 30, height: Platform.OS === 'ios' ? 40 : 30}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 20, borderBottomWidth: 2, borderRadius: 7, borderColor: screen == "bookmark" ? 'black' : 'ghostwhite' }} onPress={navigateToBook}>
                        <Image source={require('../assets/images/icons8-bookmark-64.png')}
                            style={{ width: Platform.OS === 'ios' ? 40 : 30, height: Platform.OS === 'ios' ? 40 : 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={navigateToAdd}>
                        <Image source={require('../assets/images/plus-icon-clip-art-clkerm-vector-clip-art-online-6.png')}
                            style={{ width: Platform.OS === 'ios' ? 40 : 30, height: Platform.OS === 'ios' ? 40 : 30, backgroundColor: 'white', borderWidth: 3, borderRadius: 25, borderColor: screen == "add" ? 'black' : 'ghostwhite' }}
                        />
                    </TouchableOpacity >
                    <TouchableOpacity style={{ marginHorizontal: 15, borderBottomWidth: 2, borderRadius: 7, borderColor: screen == "message" ? 'black' : 'ghostwhite' }} onPress={navigateToMess}>
                        <Image source={require('../assets/images/icons8-speech-bubble-30.png')}
                            style={{ width: Platform.OS === 'ios' ? 40 : 30, height: Platform.OS === 'ios' ? 40 : 30, tintColor: 'lightpink' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 10, borderBottomWidth: 2, borderRadius: 7, borderColor: screen == "profile" ? 'black' : 'ghostwhite' }} onPress={navigateToProf}>
                        <Image source={require('../assets/images/icons8-user-male-30.png')}
                            style={{ width: Platform.OS === 'ios' ? 40 : 30, height: Platform.OS === 'ios' ? 40 : 30, padding: 5, tintColor: 'salmon' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 20,
        width: Platform.OS === 'ios' ? 350 : 300,
        height: Platform.OS === 'ios' ? 60 : 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'ghostwhite',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 40,
        shadowColor: 'black',
        shadowOpacity: 5,

    }
});
export default TabBar;
