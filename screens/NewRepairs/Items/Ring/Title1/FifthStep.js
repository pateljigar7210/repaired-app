import { View, Text, SafeAreaView, StatusBar, TouchableHighlight, TextInput, Keyboard, TouchableWithoutFeedback, Switch } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { useState } from 'react';

const FifthStep = ({}) => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={tw`bg-[#ffffff] flex-1`}>
        <StatusBar barStyle="dark-content" />
        <TouchableHighlight 
          style={tw`ml-8 mt-2 w-8 z-50 absolute top-10`}
          onPress={() => navigation.goBack()}
          underlayColor="transparent"
          activeOpacity={0.5}
        >
          <Icon 
            name="chevron-thin-left" 
            size={26} 
            color="#282828"
          />
        </TouchableHighlight>
        <View style={tw`flex-1 my-16`}>
          <View style={tw`flex flex-row items-end`}>
            <Text style={tw`text-3xl font-light ml-8`}>Payment Method</Text>
            <Image 
              source={require("../../../../../assets/icons/NewRepairs/card.png")}
              style={tw`w-12 h-8 ml-6`}
            />
          </View>
          <View style={tw`mt-16 flex-row mx-auto`}>
            <Image
              source={require("../../../../../assets/icons/NewRepairs/visa.png")}
              style={tw`w-22 h-22`}
            />
            <Image
              source={require("../../../../../assets/icons/NewRepairs/mastercard.png")}
              style={tw`w-24 h-24 ml-4`}
            />
            <Image
              source={require("../../../../../assets/icons/NewRepairs/paypal.png")}
              style={tw`w-22 h-22 ml-4`}
            />
          </View>
          <View style={tw`mt-6 flex-col w-10/12 mx-auto`}>
            <TextInput
              style={tw`bg-[#F2F5F8] mt-4 px-6 rounded-[10px] text-[16px] mx-auto w-full h-12 mb-4`}
              keyboardType="numeric"
              placeholder='Cardholder Name'
            />
             <TextInput
              style={tw`bg-[#F2F5F8] mt-4 px-6 rounded-[10px] text-[16px] mx-auto w-full h-12 mb-4`}
              keyboardType="numeric"
              placeholder='Card Number'
            />
            <View style={tw`flex flex-row justify-between`}>
              <TextInput
                style={tw`bg-[#F2F5F8] mt-4 px-6 rounded-[10px] text-[16px] mx-auto w-1/2 h-12 mb-4 mr-4`}
                keyboardType="numeric"
                placeholder='CVC'
              />
              <TextInput
                style={tw`bg-[#F2F5F8] mt-4 px-6 rounded-[10px] text-[16px] mx-auto w-1/2 h-12 mb-4`}
                keyboardType="numeric"
                placeholder='Expiration Date'
              />
            </View>
          </View>
          <View style={tw`mt-4 w-10/12 mx-auto`}>
            <View style={tw`flex flex-row justify-between items-center mb-2`}>
              <Text style={tw`text-black font-semibold text-xs`}>Billing Address Same as Shipping Address</Text>
              <Switch 
                trackColor={{ false: "#FFFFFF", true: "#3e3e3e" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor="#FFFFFF"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={tw`flex flex-row justify-between items-center`}>
              <Text style={tw`text-black font-semibold text-xs`}>Save credit card information&apos;s</Text>
              <Switch 
                trackColor={{ false: "#FFFFFF", true: "#3e3e3e" }}
                thumbColor={isEnabled2 ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor="#FFFFFF"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
          </View>
        </View>
        <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
            style={tw`py-7 bg-[#0D0C0C] w-full`}
            onPress={() => navigation.navigate("SixthStep")}
          >
            <Text 
              style={{
                fontFamily: "HelveticaNeueLight",
                fontSize: 24,
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Review and Pay
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default FifthStep