import { View, Text, Image, ScrollView, SafeAreaView, StatusBar, TouchableHighlight, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
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
            <View style={tw`flex-1 mt-18`}>
              <Text style={tw`text-3xl font-light mb-6 w-10/12 mx-auto`}>Contact Us</Text>
              <Text style={tw`text-xl text-[#989898] font-light mb-4 w-10/12 mx-auto`}>View Frequently Asked Questions </Text>

              <View style={tw`flex-row items-center mt-8`}>
                <View style={tw`w-1/2 flex flex-col items-center justify-center py-5 border-[#DADADA] border-t border-b`}>
                  <Image
                    source={require('../../../assets/icons/Profile/phone.png')}
                    style={tw`w-7 h-7`}
                    />
                  <Text style={tw`text-base font-light mt-4`}>Call</Text>
                </View>
                <View style={tw`w-1/2 flex flex-col items-center justify-center py-5 border-[#DADADA] border-t border-l border-b`}>
                  <Image
                    source={require('../../../assets/icons/Profile/email.png')}
                    style={tw`w-8 h-8`}
                    />
                  <Text style={tw`text-base font-light mt-3`}>Email</Text>
                </View>
              </View>

              <View style={tw`mt-8 w-10/12 mx-auto`}>
                <Text style={tw`font-semibold text-base text-[#50505A]`}>Leave us a message</Text>
                <TextInput 
                  style={tw`ml-5 mt-5 text-[16px] font-light`} 
                  placeholder="Order Number"  
                  placeholderTextColor="#989898"
                />
                <Text style={tw`ml-1 mt-4 text-xs opacity-60 font-light text-[#989898]`}>*Only if it is related to an order</Text>
                <TextInput 
                  style={tw`ml-5 mt-5 text-[16px] font-light`} 
                  placeholder="Title"  
                  placeholderTextColor="#989898"
                />
                <TextInput 
                  multiline 
                  style={tw`ml-5 mt-5 text-[16px] font-light mb-20`} 
                  placeholder={`Enter some details here that you want us to know`}
                  placeholderTextColor="#989898"
                />
                <TouchableHighlight
                  style={tw`border py-2 w-28`}
                  underlayColor="#F2F2F2"
                  activeOpacity={0.5}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={tw`text-center text-lg font-light`}>Submit</Text>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default ContactUs