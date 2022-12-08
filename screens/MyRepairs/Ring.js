import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import tw from "twrnc";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Ring = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={tw`flex-1 relative bg-white`}>
      <Image 
        source={require("../../assets/backgroundImages/MyRepairs/ring.png")}
        style={tw`w-full h-100`}
      />
      <TouchableHighlight  
        style={tw`top-14 left-6 w-8 z-50 absolute`}
        onPress={() => navigation.goBack()}
        underlayColor="#transparent"
        activeOpacity={0}
        >
        <Icon 
          name="chevron-thin-left" 
          size={24} 
          color="#fff"
        />
      </TouchableHighlight>
      <View style={tw`flex flex-row w-6 items-center justify-between absolute top-94 left-[46%]`}>
        <View style={tw`w-1 h-1 bg-[#fff] rounded-full`}></View>
        <View style={tw`w-1 h-1 bg-[#fff] rounded-full`}></View>
        <View style={tw`w-1 h-1 bg-[#fff] rounded-full`}></View>
      </View>

      <View style={tw`mt-6`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`bg-black py-1.5 pr-2 pl-8 text-white`}>Assigned 01/23/2019</Text>
          <Text style={tw`pr-8 text-xl font-medium`}>$40</Text>
        </View>

        <Text style={tw`text-black text-2xl font-medium mt-6 ml-8`}>Resize Ring</Text>
        <Text style={tw`text-black font-medium mt-6 ml-8`}>Details</Text>
        <Text style={tw`text-[#343339]/80 text-sm mt-4 ml-8 leading-[23px] text-[16px]`}>
          With all of the styling tool options available in today&apos;s market, it can be very confusing to choose the best compoments…. 
          Read more
        </Text>

        <View style={tw`mt-16`}>
          <Text style={tw`text-black font-medium ml-8`}>Assigned Vendor</Text>
          <View style={tw`flex-row items-center mt-5 ml-8`}>
            <Image
              source={require("../../assets/icons/MyRepairs/repairVendor.png")}
              style={tw`w-14 h-14 rounded-full mr-4`}
            />
            <Text style={tw`text-xl font-medium text-[#0D0C0C]/80`}>NYC Jewlwery Repair LLC </Text>
          </View>
        </View>

        <View style={tw`mt-16`}>
          
        </View>
      </View>
    </ScrollView>
  )
}

export default Ring