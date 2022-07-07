import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';
import CardView from '../components/CardView';
import HomeHeader from '../components/HomeHeader';
import arrayData from '../dataStore/DataStore';
import 'react-native-gesture-handler';
import TabBar from '../components/TabBar';
import { Menue } from '../components/Menue';

const Home = () => {
  const [chooseCategoery, setChoosenCategoery] = useState('');
  const [listData, setListtData] = useState(arrayData);
  const [allColor, setAllColor] = useState('darkturquoise');
  const [devColor, setDevColor] = useState('ghostwhite');
  const [serColor, setSerColor] = useState('ghostwhite');
  const [propColor, setPropColor] = useState('ghostwhite');
  const handleSearch = (value) => {
    if (value.length === 0) {
      setListtData(arrayData);
    }

    const filteredData = arrayData.filter((item) =>
      item.value.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setListtData(arrayData);
    } else {
      setListtData(filteredData);
    }
  }

  const handleCate = (value) => {
    if (value.length === 0) {
      setListtData(arrayData);
    }

    const filteredCate = arrayData.filter((item) =>
      item.cat.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredCate.length === 0) {
      setListtData(arrayData);
    } else {
      setListtData(filteredCate);
    }
    if (value === 'all') {
      setAllColor('darkturquoise');
      setSerColor('ghostwhite');
      setDevColor('ghostwhite');
      setPropColor('ghostwhite');
    } else if (value === 'أجهزة') {
      setDevColor('darkturquoise');
      setSerColor('ghostwhite');
      setAllColor('ghostwhite');
      setPropColor('ghostwhite');
    } else if (value === 'خدمات') {
      setSerColor('darkturquoise');
      setDevColor('ghostwhite');
      setAllColor('ghostwhite');
      setPropColor('ghostwhite');
    } else if (value === 'عقارات') {
      setPropColor('darkturquoise');
      setSerColor('ghostwhite');
      setDevColor('ghostwhite');
      setAllColor('ghostwhite');
    }
  }
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <View style={styles.homeScreen}>
      <HomeHeader foSize={70} title={"🐉"} />
      <View style={{ justifyContent: 'center', padding: Platform.OS === 'ios' ? 10 : 5, flexDirection: 'row', borderWidth: 1, borderColor: 'gainsboro', borderRadius: 10, marginHorizontal: Platform.OS === 'ios' ? 20 : 10, marginTop: 20, height: Platform.OS === 'ios' ? 40 : 35 }}>
        <Image
          source={require('../assets/images/search.png')}
          style={{ width: 20, height: 20, tintColor: 'gray' }}
        />
        <TextInput
          style={{ paddingRight: 15, width: 300, textAlign: 'right' }}
          placeholder={"بحث"}
          onChangeText={handleSearch}
        />
      </View>
      <View style={{ backgroundColor: 'ghostwhite', marginTop: 30, paddingBottom: 10, justifyContent:'center'}}>
        <Menue item1Title={'الكل'} allColor={allColor} onAll={() =>
          handleCate('all')
        } item2Title={'أجهزة'} devColor={devColor} onDevice={() =>
          handleCate('أجهزة')
        } item3Title={'خدمات'} serColor={serColor} onServices={() =>
          handleCate('خدمات')
        } item4Title={'عقارات'} propColor={propColor} onProperty={() =>
          handleCate('عقارات')
        } />
      </View>
      <FlatList style={{ marginBottom: 70 }}
        data={listData}
        renderItem={(items) =>
          <CardView data={items} />
        }
        keyExtractor={(item) => item.id}
        onEndReached={({ distanceFromEnd }) => {
          console.log('on end reached ', distanceFromEnd)
          setShouldShow(true);
        }}
      />
      {shouldShow ? (
        <TabBar screen="home" />
      ) : true}
    </View>
  );
}
const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    
  }
})
export default Home;


