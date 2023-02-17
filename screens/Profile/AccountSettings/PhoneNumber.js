import { View, Text, SafeAreaView, TouchableWithoutFeedback, StatusBar, TouchableHighlight, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";
import { User } from '../../api';

const PhoneNumber = () => {
  const navigation = useNavigation();
  const phoneInput = useRef(null);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [formattedValue, setFormattedValue] = useState("");
  
  
  const onSubmit = async () => {
   
    try {
      setIsLoading(true);
      console.log("=value=",value);
      let data = {}
       data.phone = value;
       console.log("data",data);

      const { message = "Profile successfully updated!" } = await User.updateProfile(data);

      setIsLoading(false);
      alert(message);

    } catch (error) {
      console.log("=ooo",error);
      setIsLoading(false);
      alert("Error updating profile!");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={tw`bg-[#F7F7FC] flex-1`}>
        <StatusBar barStyle="dark-content" />
        <TouchableHighlight 
          style={tw`ml-6 mt-2 w-8 z-50 absolute top-10`}
          onPress={() => navigation.goBack()}
          underlayColor="#FFFFFF"
          activeOpacity={0.5}
        >
          <Icon 
            name="x" 
            size={36} 
            color="#282828"
          />
        </TouchableHighlight>

        <View style={tw`flex-1 w-11/12 mt-42 mx-auto`}>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-sm text-[#50505A]`}>Phone Number</Text>
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="US"
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              withDarkTheme
              autoFocus
              containerStyle={tw`w-full p-1 rounded-lg mt-2`}
              textContainerStyle={tw`bg-white`}
              onPressFlag={() => {
                phoneInput.current?.blur();
              }}

            />
            <Text style={tw`text-[10px] text-[#C6C6C6] mt-2`}>We will only contact you by phone if there is a problem with your order</Text>
            <Text style={tw`text-base text-[#50505A] mt-4`}>A verification code will be sent to this number</Text>
          </View>
        </View>

        <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
          <TouchableHighlight
            underlayColor="#0D0C0C"
            activeOpacity={0.8}
            style={tw`py-7`}
            onPress={() => onSubmit()}
          >
            <Text 
              style={{
                fontFamily: "HelveticaNeueLight",
                fontSize: 24,
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Update Phone
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default PhoneNumber