import { View, Text, SafeAreaView, StatusBar, TouchableHighlight, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';
import { Divider } from '@rneui/themed';

const FourthStep = ({}) => {
  const navigation = useNavigation();

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
          <Text style={tw`text-3xl font-light ml-8`}>Summary</Text>
          <View style={tw`mt-16 flex flex-col w-10/12 mx-auto`}>
            <Text style={tw`text-xl font-light`}>Enter the Total Declared Value</Text>
            <TextInput
              style={tw`bg-[#F2F5F8] mt-4 px-6 rounded-[10px] text-[16px] mx-auto w-full h-12 mb-4`}
              keyboardType="numeric"
            />
            <Text style={tw`absolute text-lg top-13.5 left-3`}>$</Text>
          </View>

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
            <View style={tw`flex-row justify-between mt-4 w-10/12 mx-auto`}>
              <View style={tw`flex-row items-end`}>
                <Text style={tw`text-xl font-light mr-4`}>Shipping Ground</Text>
                <IconFeather
                  name="x" 
                  size={24} 
                  color="#282828"
                  style={tw`opacity-60 mr-4`}
                />
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
            <Divider style={tw`w-[90%] mx-auto mt-6 mb-4`} color="#B8CAEA" />
            <View style={tw`flex-row justify-between w-10/12 mx-auto`}>
              <Text style={tw`text-xl font-light mr-4`}>Total</Text>
              <Text style={tw`text-xl text-[#2C73D7]`}>$69.99</Text>
            </View>
          </View>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
            onPress={() => navigation.navigate("NewRepairs")}
          >
            <Text style={tw`text-xl font-light mx-auto py-2 px-10 border mt-10`}>Add another repair?</Text>
          </TouchableHighlight>
        </View>
        <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
            style={tw`py-7 bg-[#0D0C0C] w-full`}
            onPress={() => navigation.navigate("FifthStep")}
          >
            <Text 
              style={{
                fontFamily: "HelveticaNeueLight",
                fontSize: 24,
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Checkout
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default FourthStep