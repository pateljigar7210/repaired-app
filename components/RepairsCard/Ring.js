import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { Divider } from '@rneui/themed';

export const RingCard = () => {
  return (
    <View style={tw`bg-white text-[#232323] w-10/12 mx-auto rounded-[20px] shadow-md mb-15 relative`}>
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
  )
}