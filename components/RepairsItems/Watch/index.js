import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import tw from 'twrnc';

const Watch = ({details}) => {
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(Array(11).fill(false));
  const [isDisabled, setIsDisabled] = useState(true);

  const handlePress = (index) => {
    const newIsClicked = [...isClicked];
    newIsClicked[index] = !newIsClicked[index];
    setIsClicked(newIsClicked);
    setIsDisabled(false);
  };
  
  return (
    <View style={tw`flex-1 relative`}>
      <View style={tw`w-10/12 mx-auto z-50`}>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(0)}
        >
          <View style={tw`flex-row`}>
            <Text style={tw`text-xl bg-white py-1 w-68 border border-[#DADADA] text-center font-light mb-2 ${isClicked[0] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title1}</Text>
            <Image
              source={require('../../../assets/icons/NewRepairs/info.png')}
              style={tw`w-10 h-9.5`}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(1)}
        >
          <View style={tw`flex-row`}>
            <Text style={tw`text-xl bg-white py-1 w-64 border border-[#DADADA] text-center font-light mb-2 ${isClicked[1] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title2}</Text>
            <Image
              source={require('../../../assets/icons/NewRepairs/info.png')}
              style={tw`w-10 h-9.5`}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(2)}
        >
          <View style={tw`flex-row`}>
            <Text style={tw`text-xl bg-white py-1 w-34 border border-[#DADADA] text-center font-light mb-2 ${isClicked[2] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title3}</Text>
            <Image
              source={require('../../../assets/icons/NewRepairs/info.png')}
              style={tw`w-10 h-9.5`}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(3)}
        >
          <View style={tw`flex-row items-start`}>
            <Text style={tw`text-xl bg-white py-1 w-34 border border-[#DADADA] text-center font-light mb-2 ${isClicked[3] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title4}</Text>
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
            <Text style={tw`text-xl bg-white py-1 w-54 border border-[#DADADA] text-center font-light mb-2 ${isClicked[4] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title5}</Text>
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
            <Text style={tw`text-xl py-1 w-62 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[5] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title6}</Text>
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
            <Text style={tw`text-lg py-1 w-74 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[6] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title7}</Text>
            <Image
              source={require('../../../assets/icons/NewRepairs/info.png')}
              style={tw`w-10 h-9.5`}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(7)}
        >
          <View style={tw`flex-row items-start`}>
            <Text style={tw`text-xl py-1 w-62 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[7] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title8}</Text>
            <Image
              source={require('../../../assets/icons/NewRepairs/info.png')}
              style={tw`w-10 h-9.5`}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(8)}
        >
          <View style={tw`flex-row items-start`}>
            <Text style={tw`text-xl py-1 w-52 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[8] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title9}</Text>
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
          <View style={tw`flex-row items-start`}>
            <Text style={tw`text-xl py-1 w-64 border bg-white border-[#DADADA] text-center font-light mb-2 ${isClicked[9] ? "bg-[#2C73D7] text-white border-white" : ""}`}>{details.title10}</Text>
            <Image
              source={require('../../../assets/icons/NewRepairs/info.png')}
              style={tw`w-10 h-9.5`}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={1}
          onPress={() => handlePress(10)}
        >
          <View style={tw`flex-row items-start`}>
            <Text style={tw`text-xl py-1 w-28 border bg-white border-[#DADADA] text-center font-light mb-2 bg-[#2C73D7] text-white border-white`}>{details.title11}</Text>
            <Image
              source={require('../../../assets/icons/NewRepairs/info.png')}
              style={tw`w-10 h-9.5`}
            />
          </View>
        </TouchableHighlight>
      </View>
      {isClicked[0] ? ( 
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
            style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title1", { details: details.title1 })}
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
      ) : isClicked[1] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
             style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title2", { details: details.title2 })}
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
      ) : isClicked[2] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
            style={tw`py-7 "bg-[#0D0C0C] w-full`}
            onPress={() => navigation.navigate("Title3", { details: details.title3 })}
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
      ) : isClicked[3] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
             style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title4", { details: details.title4 })}
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
      ) : isClicked[4] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
             style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title5", { details: details.title5 })}
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
      ) : isClicked[5] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
             style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title6", { details: details.title6 })}
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
      ) : isClicked[6] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
             style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title7", { details: details.title7 })}
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
      ) : isClicked[7] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
             style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title8", { details: details.Ring })}
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
      ) : isClicked[8] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
             style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title9", { details: details.title9 })}
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
      ) : isClicked[9] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
             style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title10", { details: details.title10 })}
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
      ) : isClicked[10] ? (
        <View style={tw`bg-[#0D0C0C] absolute -bottom-10 w-full`}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.9}
             style={tw`py-7 ${isDisabled ? "bg-[#DADADA]" : "bg-[#0D0C0C]"} w-full`}
            disabled={isDisabled}
            onPress={() => navigation.navigate("Title10", { details: details.title10 })}
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
      ) : null}
    </View>
  )
}

export default Watch