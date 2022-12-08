import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import tw from 'twrnc';

const Earrings = ({details}) => {
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(Array(7).fill(false));

  const handlePress = (index) => {
    const newIsClicked = [...isClicked];
    newIsClicked[index] = !newIsClicked[index];
    setIsClicked(newIsClicked);
  };
  
  return (
    <View style={tw`w-10/12 mx-auto z-50`}>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(0)}
      >
        <Text style={tw`text-xl py-1 w-28 border border-[#DADADA] text-center font-light mb-2 ${isClicked[0] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title1}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(1)}
      >
        <Text style={tw`text-xl py-1 w-52 border border-[#DADADA] text-center font-light mb-2 ${isClicked[1] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title2}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(2)}
      >
        <Text style={tw`text-xl py-1 w-44 border border-[#DADADA] text-center font-light mb-2 ${isClicked[2] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title3}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(3)}
      >
        <View style={tw`flex-row items-start`}>
          <Text style={tw`text-xl py-1 w-34 border border-[#DADADA] text-center font-light mb-2 ${isClicked[3] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title4}</Text>
          <Image
            source={require('../../../assets/icons/NewRepairs/info.png')}
            style={tw`w-10 h-9.5`}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(4)}
      >
        <View style={tw`flex-row items-start`}>
          <Text style={tw`text-xl py-1 w-72 border border-[#DADADA] text-center font-light mb-2 ${isClicked[4] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title5}</Text>
          <Image
            source={require('../../../assets/icons/NewRepairs/info.png')}
            style={tw`w-10 h-9.5`}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(5)}
      >
        <View style={tw`flex-row items-start`}>
          <Text style={tw`text-xl py-1 w-46 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[5] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title6}</Text>
          <Image
            source={require('../../../assets/icons/NewRepairs/info.png')}
            style={tw`w-10 h-9.5`}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(6)}
      >
        <View style={tw`flex-row items-start`}>
          <Text style={tw`text-xl py-1 w-28 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[6] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title7}</Text>
          <Image
            source={require('../../../assets/icons/NewRepairs/info.png')}
            style={tw`w-10 h-9.5`}
          />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default Earrings