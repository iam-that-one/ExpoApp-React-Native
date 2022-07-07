import { View, Text, StyleSheet, ScrollView, PlatformColor } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import DetailsHeader from "../components/DetailsHeader";
import TabBar from "../components/TabBar";
import { Linking } from 'react-native'
import { Platform } from "react-native";

const Details = ({ route, navigation }) => {
    const { data } = route.params;
    var phoneNumber = '+966547105745'
    return (
        <View style={styles.homeScreen}>
            <DetailsHeader title={data.item.value} image={require('../assets/images/Circle-icons-profile.svg.png')} moveTo={()=>navigation.navigate('UserProfile')} />
            <ScrollView >
                <View style={{ alignItems: 'center' }}>
                    <View style={{
                        width: 350,
                        height: Platform.OS === 'ios' ? 380 : 220,
                        alignItems: 'center',
                        backgroundColor: 'paleturquoise',
                        borderRadius: 20,
                        marginTop: 10
                    }}>
                        <ScrollView horizontal pagingEnabled={true} showsHorizontalScrollIndicator={false} >
                            <View style={{ width: 310, height: Platform.OS === 'ios' ? 310 : 210, marginHorizontal: 20 }}>
                                <Image
                                    source={data.item.image}
                                    resizeMode={Platform.OS === 'ios' ? 'cover' : 'center'}
                                    style={{ margin: 10, width: 300, height: Platform.OS === 'ios' ? 310 : 150, borderRadius: 10 }}
                                />
                            </View>
                            <View style={{ width: 310, height: Platform.OS === 'ios' ? 310 : 210, marginHorizontal: 20 }} >
                                <Image
                                    source={require('../assets/images/nft02.jpeg')}
                                    resizeMode='cover'
                                    style={{ margin: 10, width: 300, height: Platform.OS === 'ios' ? 310 : 150, borderRadius: 10 }}
                                />
                            </View >
                            <View style={{ width: 310, height: 310, marginHorizontal: 20 }}>
                                <Image
                                    source={{
                                        uri:
                                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                                    }}
                                    resizeMode='cover'
                                    style={{ margin: 10, width: 300, height: Platform.OS === 'ios' ? 310 : 150, borderRadius: 10 }}
                                />
                            </View>
                        </ScrollView>
                        <Text style={{ height: 40, fontSize: 30, color: 'rosybrown', paddingBottom: 10 }}>. . .</Text>
                    </View>
                    <View style={{ flex: 1, width: 300, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>{data.item.value}</Text>
                        <Text style={{ textAlign: 'right' }}>
                            {data.item.description}
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 30,
                        width: 100,
                        height: 40,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Image
                                source={require('../assets/images/online1.jpeg')}
                                resizeMode='cover'
                                style={{
                                    width: Platform.OS === 'ios' ? 50 : 40,
                                    height: Platform.OS === 'ios' ? 50 : 40,
                                    borderRadius: 20, marginTop: 5
                                }}
                            />
                            <Text>متصل</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.60} onPress={() => { Linking.openURL(`tel:${phoneNumber}`) }}>
                            <Image
                                source={require('../assets/images/Circle-icons-phone.svg.png')}
                                resizeMode='cover'
                                style={{
                                    width: Platform.OS === 'ios' ? 50 : 40, height: Platform.OS === 'ios' ? 50 : 40,
                                    borderRadius: 30, margin: 10
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.60}>
                            <Image
                                source={require('../assets/images/message-icon.jpg')}
                                resizeMode='cover'
                                style={{
                                    width: Platform.OS === 'ios' ? 50 : 40,
                                    height: Platform.OS === 'ios' ? 50 : 40, borderRadius: 30
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.60}>
                            <Image
                                source={require('../assets/images/book.png')}
                                resizeMode='cover'
                                style={{
                                    width: Platform.OS === 'ios' ? 80 : 70,
                                    height: Platform.OS === 'ios' ? 80 : 70, borderRadius: 30
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Map',{data}) }} activeOpacity={0.60}>
                            <Image
                                source={require('../assets/images/mapIcon.png')}
                                resizeMode='cover'
                                style={{
                                    width: Platform.OS === 'ios' ? 50 : 40,
                                    height: Platform.OS === 'ios' ? 50 : 40, borderRadius: 30
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{ alignItems: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                <TabBar screen={"details"} />
            </View>
        </View>
    );
};
export default Details

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        paddingVertical: 20

    }
})