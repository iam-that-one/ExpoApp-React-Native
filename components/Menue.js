import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { ScrollView } from 'react-native';

export const Menue = ({
  onAll,
  onDevice,
  onServices,
  onProperty,
  allColor,
  devColor,
  propColor,
  serColor,
  item1Title,
  item2Title,
  item3Title,
  item4Title,
}) => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.50} onPress={onAll}>
          <View style={{ borderWidth: 2, borderColor: 'saddlebrown', backgroundColor: allColor, justifyContent: 'center', alignItems: 'center', width: Platform.OS === 'ios' ? 80 : 70, height: Platform.OS === 'ios' ? 80 : 70, shadowColor: 'black', shadowOpacity: 0.70, marginVertical: Platform.OS === 'ios' ? 15 : 4, marginHorizontal: Platform.OS === 'ios' ? 15 : 7, borderRadius: 10 }}>
            <Text>{item1Title}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.50} onPress={onDevice}>
          <View style={{ borderWidth: 2, borderColor: 'saddlebrown', backgroundColor: devColor, justifyContent: 'center', alignItems: 'center', width: Platform.OS === 'ios' ? 80 : 70, height: Platform.OS === 'ios' ? 80 : 70, shadowColor: 'black', shadowOpacity: 0.70, marginVertical: Platform.OS === 'ios' ? 15 : 4, marginHorizontal: Platform.OS === 'ios' ? 15 : 7, borderRadius: 10 }}>
            <Text>{item2Title}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.50} onPress={onServices}>
          <View style={{ borderWidth: 2, borderColor: 'saddlebrown', backgroundColor: serColor, justifyContent: 'center', alignItems: 'center', width: Platform.OS === 'ios' ? 80 : 70, height: Platform.OS === 'ios' ? 80 : 70, shadowColor: 'black', shadowOpacity: 0.70, marginVertical: Platform.OS === 'ios' ? 15 : 4, marginHorizontal: Platform.OS === 'ios' ? 15 : 7, borderRadius: 10 }}>
            <Text>{item3Title}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.50} onPress={onProperty}>
          <View style={{ borderWidth: 2, borderColor: 'saddlebrown', backgroundColor: propColor, justifyContent: 'center', alignItems: 'center', width: Platform.OS === 'ios' ? 80 : 70, height: Platform.OS === 'ios' ? 80 : 70, shadowColor: 'black', shadowOpacity: 0.70, marginVertical: Platform.OS === 'ios' ? 15 : 4, marginHorizontal: Platform.OS === 'ios' ? 15 : 7, borderRadius: 10 }}>
            <Text>{item4Title}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.50}>
          <View style={{ borderWidth: 2, borderColor: 'saddlebrown', backgroundColor: 'ghostwhite', justifyContent: 'center', alignItems: 'center', width: Platform.OS === 'ios' ? 80 : 70, height: Platform.OS === 'ios' ? 80 : 70, shadowColor: 'black', shadowOpacity: 0.70, marginVertical: Platform.OS === 'ios' ? 15 : 4, marginHorizontal: Platform.OS === 'ios' ? 15 : 7, borderRadius: 10 }}>
            <Text>أزياء</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }


