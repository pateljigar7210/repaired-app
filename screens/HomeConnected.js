import { View, Text, SafeAreaView, StatusBar, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const HomeConnected = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw`mt-4 ml-6 flex flex-col`}>
        <Text style={tw`text-3xl font-bold`}>My Repairs</Text>
        <TouchableHighlight
          style={tw`mt-4 bg-gray-200 rounded-lg p-4 mr-6`}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("FakeHomeConnected")}
        >
          <Text style={tw`text-base text-center font-semibold`}>Tap here for the page with fake data</Text>
        </TouchableHighlight>
      </View>
      <View style={tw`flex-1 items-center w-60 mx-auto mt-40`}>
        <Image  
          source={require('../assets/icons/MyRepairs/diamond.png')}
          style={tw`w-22 h-22`}
        />
        <Text style={tw`text-2xl text-[#989898] font-light leading-[36px] mt-10`}>Looks like you haven&apos;t started an repair yet :)</Text>
      </View>

      <View style={tw`items-center w-66 mx-auto mb-10`}>
        <Text style={tw`text-[#2C73D7] text-base mb-4`}>Start Your first Repair Request Here</Text>
        <Image
          source={require('../assets/icons/MyRepairs/arrow.png')}
          style={tw`w-10 h-17 ml-6`}
        />
      </View>
      <View style={tw`relative`}>
        <View style={tw`w-full bg-white flex flex-row justify-between px-10 items-center border-t border-t-[#DADADA] pt-4 z-10`}>
          <TouchableHighlight
            underlayColor={"#ffffff"}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image 
              source={require('../assets/icons/MyRepairs/dots.png')}
              style={tw`w-6 h-6`}
            />
          </TouchableHighlight>
      
          <TouchableHighlight>
            <Image 
              source={require('../assets/icons/MyRepairs/bell.png')}
              style={tw`w-6 h-7`}
              />
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={tw`bg-[#2C73D7] rounded-full w-16 h-16 items-center justify-center absolute left-[40.9%] -top-4.5 z-30`}
          underlayColor="#2C73D7"
          activeOpacity={0.6}
          onPress={() => navigation.navigate("NewRepairs")}
        >
          <Image 
            source={require('../assets/icons/MyRepairs/plus.png')}
            style={tw`w-16 h-16 absolute bottom-0`}
          />
        </TouchableHighlight>
        <View style={tw`bg-white rounded-full w-17.5 h-16 items-center justify-center absolute left-[40.1%] -top-4.5 z-20`}></View>
        <View style={tw`bg-white border border-[#DADADA] rounded-full w-17.5 h-17 items-center justify-center absolute left-[40.1%] -top-5.5`}></View>
      </View>
    </SafeAreaView>
  )
}

export default HomeConnected