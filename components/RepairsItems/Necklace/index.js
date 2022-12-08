import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import tw from 'twrnc';

const Necklace = ({ details }) => {
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(Array(11).fill(false));

  const handlePress = (index) => {
    const newIsClicked = [...isClicked];
    newIsClicked[index] = !newIsClicked[index];
    setIsClicked(newIsClicked);
  };
  
  return (
    <View style={tw`w-10/12 mx-auto z-50`}>
      <View style={tw`flex-row`}>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(0)}
          style={tw`mr-2`}
        >
          <Text style={tw`text-xl py-1 w-22 border border-[#DADADA] text-center font-light mb-2 ${isClicked[0] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title1}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(1)}
        >
           <View style={tw`flex-row items-start`}>
            <Text style={tw`text-xl py-1 w-28 border border-[#DADADA] text-center font-light mb-2 ${isClicked[1] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title2}</Text>
            <Image
              source={require('../../../assets/icons/NewRepairs/info.png')}
              style={tw`w-10 h-9.5`}
            />
          </View>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(2)}
      >
        <Text style={tw`text-xl py-1 w-52 border border-[#DADADA] text-center font-light mb-2 ${isClicked[2] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title3}</Text>
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
        <Text style={tw`text-xl py-1 w-70 border border-[#DADADA] text-center font-light mb-2 ${isClicked[4] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title5}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(5)}
      >
        <View style={tw`flex-row items-start`}>
          <Text style={tw`text-xl py-1 w-72 border border-[#DADADA] text-center font-light mb-2 ${isClicked[5] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title6}</Text>
          <Image
            source={require('../../../assets/icons/NewRepairs/info.png')}
            style={tw`w-10 h-9.5`}
          />
        </View>
      </TouchableHighlight>
      <View style={tw`flex-row`}>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(6)}
          style={tw`mr-2`}
          >
            <Text style={tw`text-lg py-1 bg-white w-38 border border-[#DADADA] text-center font-light mb-2 ${isClicked[6] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title7}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(7)}
          >
          <View style={tw`flex-row items-start`}>
            <Text style={tw`text-lg py-1 w-36 bg-white border border-[#DADADA] text-center font-light mb-2 ${isClicked[7] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title8}</Text>
            <Image
              source={require('../../../assets/icons/NewRepairs/info.png')}
              style={tw`w-10 h-9.5`}
              />
          </View>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(8)}
      >
        <View style={tw`flex-row items-start`}>
          <Text style={tw`text-xl py-1 w-46 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[8] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title9}</Text>
          <Image
            source={require('../../../assets/icons/NewRepairs/info.png')}
            style={tw`w-10 h-9.5`}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(9)}
      >
        <Text style={tw`text-xl py-1 w-58 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[9] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title10}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(10)}
      >
        <View style={tw`flex-row items-start`}>
          <Text style={tw`text-xl py-1 w-42 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[10] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title11}</Text>
          <Image
            source={require('../../../assets/icons/NewRepairs/info.png')}
            style={tw`w-10 h-9.5`}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={1}
        onPress={() => handlePress(11)}
      >
        <View style={tw`flex-row items-start`}>
          <Text style={tw`text-xl py-1 w-26 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[11] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title12}</Text>
          <Image
            source={require('../../../assets/icons/NewRepairs/info.png')}
            style={tw`w-10 h-9.5`}
          />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default Necklace