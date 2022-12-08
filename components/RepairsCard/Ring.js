import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { Divider } from '@rneui/themed';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const RingCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('Ring')}
      underlayColor="#F2F2F2"
      style={tw`w-10/12 mx-auto mb-15 rounded-[20px]`}
      activeOpacity={0.7}
    >
      <View style={tw`text-[#232323] bg-white shadow-md relative`}>
        <View style={tw`flex flex-col justify-between items-start p-8 px-9`}>
          <View style={tw`flex flex-row justify-between items-center w-full`}>
            <Text style={tw`text-2xl font-bold`}>Ring Resize</Text>
            <Text style={tw`text-2xl font-semibold`}>$40</Text>
          </View>
          <Text style={tw`text-sm text-[#AFBED3]`}>November 26th</Text>
          <Text style={tw`text-base leading-0 my-5`}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa illo...</Text>
          <Divider style={tw`w-full mb-5`} color="#B8CAEA" />
          <Text style={tw`text-sm`}><Text style={tw`font-semibold`}>Status:</Text>{' '}Shipped to the Vendor</Text>
        </View>

        <Image 
          source={require('../../assets/backgroundImages/RepairsCards/ring.png')}
          style={tw`w-54 h-70 absolute -top-8 -right-5 opacity-60`}
          />
      </View>
    </TouchableHighlight>
  )
}
