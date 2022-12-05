import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableHighlight, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const About = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={tw`flex-1 bg-white`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={tw`bg-white flex-1`}>
          <StatusBar barStyle="dark-content" />
          <TouchableHighlight 
            style={tw`ml-6 mt-2 w-8 z-50 absolute top-10`}
            onPress={() => navigation.goBack()}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Icon 
              name="chevron-left" 
              size={36} 
              color="#282828"
            />
          </TouchableHighlight>

          <ScrollView>
            <View style={tw`flex-1 mt-18 mx-auto`}>
              <Text style={tw`text-3xl font-light mb-12 ml-8`}>About</Text>
              <View style={tw`flex-1 self-center`}>
                <View style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-100`}>
                  <Text style={tw`text-lg text-[#50505A]`}>Who we are</Text>
                  <Icon 
                    name="chevron-thin-right"
                    size={20}
                    color="#C6C6C6"
                  />
                </View>
                <View style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-100`}>
                  <Text style={tw`text-lg text-[#50505A]`}>Service Categories</Text>
                  <Icon 
                    name="chevron-thin-right"
                    size={20}
                    color="#C6C6C6"
                  />
                </View>
                <View style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-100`}>
                  <Text style={tw`text-lg text-[#50505A]`}>Legal</Text>
                  <Icon 
                    name="chevron-thin-right"
                    size={20}
                    color="#C6C6C6"
                  />
                </View>
                <View style={tw`bg-white flex flex-row items-center justify-between w-full px-7 py-3 border-b border-b-gray-100`}>
                  <Text style={tw`text-lg text-[#50505A]`}>Rate us in the App Store</Text>
                  <Icon 
                    name="chevron-thin-right"
                    size={20}
                    color="#C6C6C6"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default About