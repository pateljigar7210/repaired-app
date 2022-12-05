import { View, Text, SafeAreaView, StatusBar, TouchableHighlight, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Entypo';
import tw from "twrnc";


const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={tw`bg-white flex-1`}>
        <StatusBar barStyle="dark-content" />
        <View style={tw`flex flex-row justify-between items-center border-b border-b-[#D8D8D8] pb-4`}>
          <TouchableHighlight  
            style={tw`ml-5 mt-2 w-8`}
            onPress={() => navigation.goBack()}
            underlayColor="#FFFFFF"
            activeOpacity={0.5}
          >
            <Icon 
              name="chevron-thin-left" 
              size={24} 
              color="#282828"
            />
          </TouchableHighlight>
          <Text style={{
            fontFamily: "HelveticaNeueLight",
            fontSize: 15,
            color: "#50505A",
            textTransform: "uppercase",
            marginTop: 7,
          }}>Reset Password</Text>
          <View style={tw`w-14`}></View>
        </View>
        <View style={tw`flex-1 flex justify-center mb-16`}>
          <TextInput 
            style={tw`bg-[#F2F5F8] mt-8 px-4 rounded-[10px] text-base mx-auto w-11/12 h-12`}
            placeholder="New Password"
            secureTextEntry={true}
            placeholderTextColor="#989898"
          />
          <TextInput 
            style={tw`bg-[#F2F5F8] mt-4 px-4 rounded-[10px] text-base mx-auto w-11/12 h-12`}
            placeholder="Confirm Password"
            placeholderTextColor="#989898"
            secureTextEntry={true}
          />
          <View style={tw`mt-6 flex flex-row justify-between w-11/12 mx-auto`}>
            <TouchableHighlight
              style={tw`bg-black px-4 py-4 rounded-full mx-auto w-full`}
              underlayColor="#282727"
              activeOpacity={0.7}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={tw`text-sm text-white text-center font-semibold`}>Reset Password</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ResetPassword