import { View, Text, SafeAreaView, StatusBar, TouchableHighlight, TextInput, Keyboard, TouchableWithoutFeedback, Switch } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { useState } from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import { Divider } from '@rneui/themed';
import { ScrollView } from 'react-native';

const SixthStep = ({}) => {
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
        <ScrollView>
          <View style={tw`mt-16`}>
            <Text style={tw`text-3xl font-light ml-8`}>Review Order</Text>
              <View style={tw`flex flex-col`}>
                <Text style={tw`text-xl font-semibold ml-8 mt-8`}>Ring</Text>
                <View style={tw`flex-row justify-between mt-4 w-10/12 mx-auto`}>
                  <View style={tw`flex-row items-end`}>
                    <Text style={tw`text-xl font-light mr-4`}>Resize</Text>
                    <IconFeather
                      name="x" 
                      size={24} 
                      color="#282828"
                      style={tw`opacity-60 mr-4`}
                    />
                    <Text style={tw`text-xl font-light text-[#2C73D7]`}>Edit</Text>
                  </View>
                  <Text style={tw`text-xl font-light`}>$35.00</Text>
                </View>
                <View style={tw`flex-col justify-between mt-4 w-10/12 mx-auto`}>
                  <Text style={tw`text-[#989898] mb-1`}>Material : Silver</Text>
                  <Text style={tw`text-[#989898] mb-1`}>Curent Ring Size: 6</Text>
                  <Text style={tw`text-[#989898] mb-1`}>Desired Ring Size: 7</Text>
                </View>
                <View style={tw`flex-row justify-between mt-4 w-10/12 mx-auto`}>
                  <View style={tw`flex-row items-end`}>
                    <Text style={tw`text-xl font-light mr-4`}>Cleaning</Text>
                    <IconFeather
                      name="x" 
                      size={24} 
                      color="#282828"
                      style={tw`opacity-60 mr-4`}
                    />
                    <Text style={tw`text-xl font-light text-[#2C73D7]`}>Edit</Text>
                  </View>
                  <Text style={tw`text-xl font-light`}>$24.00</Text>
                </View>
                <View style={tw`flex-col justify-between mt-4 w-10/12 mx-auto`}>
                  <Text style={tw`text-[#989898] mb-1`}>Polish</Text>
                </View>
                <View style={tw`flex-row justify-between mt-4 w-10/12 mx-auto`}>
                  <View style={tw`flex-row items-end`}>
                    <Text style={tw`text-xl font-light mr-4`}>Shipping Ground</Text>
                    <Text style={tw`text-xl font-light text-[#2C73D7]`}>Edit</Text>
                  </View>
                  <Text style={tw`text-xl font-light`}>$9.99</Text>
                </View>
                <View style={tw`flex-row justify-between mt-4 w-10/12 mx-auto`}>
                  <View style={tw`flex-row items-end`}>
                    <Text style={tw`text-xl font-light mr-4`}>Insurance</Text>
                    <IconFeather
                      name="x" 
                      size={24} 
                      color="#282828"
                      style={tw`opacity-60 mr-4`}
                    />
                    <Text style={tw`text-xl font-light text-[#2C73D7]`}>Edit</Text>
                  </View>
                  <Text style={tw`text-xl font-light`}>$1.00</Text>
                </View>
                <View style={tw`flex-col justify-between mt-4 w-10/12 mx-auto`}>
                  <Text style={tw`text-[#989898] mb-1`}>Declared Value: $100</Text>
                </View>
                <Divider style={tw`w-[90%] mx-auto mt-6 mb-4`} color="#B8CAEA" />
                <View style={tw`flex-row justify-between w-10/12 mx-auto`}>
                  <Text style={tw`text-xl font-light mr-4`}>Total</Text>
                  <Text style={tw`text-xl text-[#2C73D7]`}>$69.99</Text>
                </View>
              </View>
          </View>
          <View style={tw`mt-6 px-2 py-3 border border-[#dddddd]/30 w-10/12 mx-auto`}>
            <View style={tw`flex flex-row`}>
              <Image 
                source={require("../../../../../assets/icons/NewRepairs/card.png")}
                style={tw`w-12 h-8 ml-6`}
                />
              <Text style={tw`text-xl font-semibold ml-4`}>Payment Method</Text>
            </View>
            <View style={tw`flex flex-row justify-between mt-2 w-10/12 mx-auto`}>
              <Text style={tw`text-base`}>VISA   **** **** **** 4059</Text>
              <Text style={tw`text-base text-[#2C73D7]`}>Edit</Text>
            </View>
          </View>
        </ScrollView>
        <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
            style={tw`py-7 bg-[#0D0C0C] w-full`}
            onPress={() => navigation.navigate("FakeHomeConnected")}
          >
            <Text 
              style={{
                fontFamily: "HelveticaNeueLight",
                fontSize: 24,
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Place the Order
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SixthStep