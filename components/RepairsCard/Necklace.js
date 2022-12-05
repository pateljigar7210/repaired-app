import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { Divider } from '@rneui/themed';

export const NecklaceCard = () => {
  return (
    <View style={tw`bg-white text-[#232323] w-10/12 mx-auto rounded-[20px] shadow-md mb-15`}>
      <View style={tw`flex flex-col justify-between items-start p-8 px-9`}>
        <View style={tw`flex flex-row justify-between items-center w-full`}>
          <Text style={tw`text-2xl font-bold`}>Necklace Resize</Text>
          <Text style={tw`text-2xl font-semibold`}>$40</Text>
        </View>
        <Text style={tw`text-sm text-[#AFBED3]`}>November 26th</Text>
        <Text style={tw`text-base leading-0 my-5`}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa illo...</Text>
        <Divider style={tw`w-full mb-5`} color="#B8CAEA" />
        <Text style={tw`text-sm`}><Text style={tw`font-semibold`}>Status:</Text>  Shipped to the Vendor</Text>
      </View>

      <Image 
        source={require('../../assets/backgroundImages/RepairsCards/necklace.png')}
        style={tw`w-74 h-72 absolute -top-8 -left-10 opacity-60`}
      />
    </View>
  )
}
