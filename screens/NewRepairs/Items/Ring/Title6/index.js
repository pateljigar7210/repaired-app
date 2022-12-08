import { View, Text, SafeAreaView, Image, StatusBar, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input'
import Checkbox from 'expo-checkbox';
import Icon2 from 'react-native-vector-icons/Feather';
import { Divider } from '@rneui/themed';
import { ScrollView } from 'react-native';

const Title6 = ({}) => {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);
  const [isChecked, setChecked] = useState(false);
  const [isClicked, setClicked] = useState([
    true, false, false, false, false,
  ]);

  const handleClicked = (index) => {
    if (isClicked[index] === false) {
      const newClicked = isClicked.map((item, i) => {
        if (i === index) {
          return true;
        } else {
          return false;
        }
      });
      setClicked(newClicked);
    }
  }

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
      <ScrollView>
        <View style={tw`flex-1 my-20`}>
          <Text style={tw`text-3xl font-light w-10/12 mx-auto`}>Please enter the service details</Text>
          <View style={tw`mt-8`}>
            <View style={tw`flex-row justify-between items-center px-6 py-2 bg-[#F7F7FC]`}>
              <Text style={tw`text-xl font-light`}>Channel Repair</Text>
              <Text style={tw`text-xl font-light`}>$20</Text>
            </View>

            <View style={tw`mt-6 mx-auto w-10/12`}>
              <View style={tw`flex-row items-center justify-between ${isChecked ? "opacity-20" : ""}`}>
                <Text style={tw`font-semibold mr-4`}>How many stone is missing ?</Text>
                <NumericInput 
                  value={value} 
                  onChange={value => setValue(value)} 
                  totalWidth={120} 
                  totalHeight={50} 
                  step={1}
                  minValue={0}
                  valueType='real'
                  textColor='#989898' 
                  iconStyle={{ color: '#2C73D7', fontSize: 32 }} 
                  rightButtonBackgroundColor='#FFFFFF' 
                  leftButtonBackgroundColor='#FFFFFF'
                  inputStyle={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF' }}
                  borderColor='#FFFFFF'
                  disabled={isChecked}
                />
              </View>
            </View>
            <Divider style={tw`w-full mt-7`} color="#DADADA" />
            <View style={tw`mt-8 flex-col w-11/12 mx-auto`}>
              <Text style={tw`text-base font-semibold`}>Select Metal</Text>
              <View style={tw`flex-row justify-between mt-6`}>
                <TouchableHighlight
                  onPress={() => handleClicked(0)}
                  underlayColor="#FFFFFF"
                  activeOpacity={0.7}
                >
                  <View style={tw`flex-col items-center mr-3`}>
                    <View style={tw`border-2 ${isClicked[0] ? "border-[#2C73D7]" : "border-[#DADADA]"} rounded-full px-4 py-7 mb-2`}>
                      <Image
                        source={require('../../../../../assets/icons/NewRepairs/silver.png')}
                        style={tw`w-14 h-8`}
                        />
                    </View>
                    <Text style={tw`text-[#989898]`}>Silver</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => handleClicked(1)}
                  underlayColor="#FFFFFF"
                  activeOpacity={0.7}
                >
                <View style={tw`flex-col items-center`}>
                  <View style={tw`border-2 ${isClicked[1] ? "border-[#2C73D7]" : "border-[#DADADA]"} rounded-full px-4 py-7 mb-2`}>
                    <Image
                      source={require('../../../../../assets/icons/NewRepairs/steel.png')}
                      style={tw`w-14 h-8`}
                      />
                  </View>
                  <Text style={tw`text-[#989898]`}>Stainless Steel</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => handleClicked(2)}
                  underlayColor="#FFFFFF"
                  activeOpacity={0.7}
                >
                <View style={tw`flex-col items-center`}>
                  <View style={tw`border-2 ${isClicked[2] ? "border-[#2C73D7]" : "border-[#DADADA]"} rounded-full px-4 py-7 mb-2`}>
                    <Image
                      source={require('../../../../../assets/icons/NewRepairs/gold.png')}
                      style={tw`w-14 h-8`}
                      />
                  </View>
                  <Text style={tw`text-[#989898]`}>Gold</Text>
                  <Text style={tw`text-[#989898]`}>Yellow/White/Rose</Text>
                </View>
                </TouchableHighlight>
              </View>
              <View style={tw`flex-row mt-4`}>
              <TouchableHighlight
                  onPress={() => handleClicked(3)}
                  underlayColor="#FFFFFF"
                  activeOpacity={0.7}
                >
              <View style={tw`flex-col items-center mr-7`}>
                <View style={tw`border-2 ${isClicked[3] ? "border-[#2C73D7]" : "border-[#DADADA]"} rounded-full px-4 py-7 mb-2`}>
                  <Image
                    source={require('../../../../../assets/icons/NewRepairs/platinum.png')}
                    style={tw`w-14 h-8`}
                    />
                </View>
                <Text style={tw`text-[#989898]`}>Platinum</Text>
              </View>
              </TouchableHighlight>
              <TouchableHighlight
                  onPress={() => handleClicked(4)}
                  underlayColor="#FFFFFF"
                  activeOpacity={0.7}
                >
                <View style={tw`flex-col items-center`}>
                  <View style={tw`border-2 ${isClicked[4] ? "border-[#2C73D7]" : "border-[#DADADA]"} rounded-full px-4 py-7 mb-2`}>
                    <Image
                      source={require('../../../../../assets/icons/NewRepairs/other.png')}
                      style={tw`w-14 h-8`}
                      />
                  </View>
                  <Text style={tw`text-[#989898]`}>Other</Text>
                </View>
              </TouchableHighlight>
              </View>
            </View>
            <View style={tw`mx-auto w-10/12 mt-10`}>
              <Text style={tw`text-base font-semibold mb-4`}>Description</Text>
              <Text style={tw`text-[#989898] text-base`}>Enter some details here that you want our vendors to know</Text>
            </View>
            <View style={tw`mx-auto w-10/12 mt-10`}>
              <Text style={tw`text-base font-semibold mb-4`}>Image</Text>
              <View style={tw`flex-row`}>
                <Image 
                  source={require('../../../../../assets/icons/NewRepairs/placeholder.png')}
                  style={tw`w-28 h-22 mr-4`}
                />
                <View style={tw`w-28 h-22 mr-4 bg-[#F2F5F8] rounded-[10px]`}>
                  <View style={tw`w-13 h-13 border-2 border-[#2C73D7] rounded-full flex self-center mt-4`}>
                    <Text style={tw`text-5xl text-center text-[#2C73D7] mt-[1px]`}>+</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={0.9}
          style={tw`py-7 bg-[#0D0C0C] w-full`}
          onPress={() => navigation.navigate("SecondStep")}
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

export default Title6