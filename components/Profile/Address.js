import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Feather';
import { Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import ExpoFastImage from 'expo-fast-image';

export const Address = ({ info, address, city }) => {
  const navigation = useNavigation();
  
  return (
    <View style={tw`mb-7`}>
      <View style={tw`flex flex-row justify-between items-center mb-2`}>
        <Text style={tw`font-bold text-lg`}>Sagar Patel</Text>
        <TouchableHighlight
          underlayColor="#FFFFFF"
          activeOpacity={0.8}
          onPress={() => navigation.navigate('EditAddress')}
        >
          <ExpoFastImage 
            source={require('../../assets/icons/Profile/edit2.png')}
            style={tw`w-5 h-5`}
            cacheKey='asdadadadad'
          />
        </TouchableHighlight>
      </View>
      <Text style={tw`text-[#707070] text-lg`}>{address}</Text>
      <Text style={tw`text-[#707070] text-lg`}>{city}</Text>
      {info && 
        <View style={tw`flex flex-row items-center mt-4 opacity-70`}>
          <Icon
            name="info"
            size={24}
            color="#C6C6C6"
          />
          <Text style={tw`text-sm text-[#C6C6C6] ml-2`}>{info}</Text>
        </View>
      }
      <Divider style={tw`w-full mt-7`} color="#DADADA" />
    </View>
  )
}