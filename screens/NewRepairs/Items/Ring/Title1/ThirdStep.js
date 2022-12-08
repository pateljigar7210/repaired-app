import { View, Text, SafeAreaView, Image, StatusBar, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

let radio_props = [
  {label: 'FedEx Ground - $9.99', value: 0 },
  {label: 'FedEx Priority Overnight - $25.00', value: 1 },
];

const ThirdStep = ({}) => {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);

  return (
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
        <Text style={tw`text-3xl font-light ml-8`}>Shipping Method</Text>
        <View style={tw`mt-16 flex flex-col w-11/12 mx-auto`}>
          <RadioForm animation={true}>
            {/* To create radio buttons, loop through your array of options */}
            {
              radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} style={tw`w-76 flex flex-row justify-between mb-6`}>
                  {/*  You can set RadioButtonLabel before RadioButtonInput */}
                  <View style={tw`flex flex-row items-center`} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      key={i}
                      isSelected={value === i}
                      onPress={(value) => {
                        setValue(value)
                      }}
                      borderWidth={1}
                      buttonInnerColor={'#2C73D7'}
                      buttonOuterColor={value === i ? '#2196f3' : '#000'}
                      buttonSize={10}
                      buttonOuterSize={24}
                      buttonStyle={{}}
                      buttonWrapStyle={{marginLeft: 10}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={(value) => {setValue(value)}}
                      labelStyle={tw`text-lg ml-2`}
                    />
                  </View>
                </RadioButton>
              ))
            }  
          </RadioForm>
        </View>
        <Image
          source={require("../../../../../assets/backgroundImages/RepairsItems/shipping_bg.png")}
          style={tw`w-full h-96 absolute bottom-0`}
        />
      </View>
      <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={0.9}
          style={tw`py-7 bg-[#0D0C0C] w-full`}
          onPress={() => navigation.navigate("FourthStep")}
        >
          <Text 
            style={{
              fontFamily: "HelveticaNeueLight",
              fontSize: 24,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

export default ThirdStep