import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableHighlight } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const HowWeWork = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <StatusBar barStyle="dark-content" />
      <TouchableHighlight 
        style={tw`ml-6 mt-2 w-8 z-50 absolute top-10`}
        onPress={() => navigation.goBack()}
        underlayColor="#FFFFFF"
        activeOpacity={0.5}
      >
        <Icon 
          name="chevron-left" 
          size={36} 
          color="#282828"
        />
      </TouchableHighlight>

      <ScrollView>
        <View style={tw`flex-1 mt-18 w-10/12 mx-auto`}>
          <Text style={tw`text-3xl font-light mb-12`}>How We Work</Text>
          <View style={tw`flex-1`}>
            <View style={tw`mb-12`}>
              <Text style={tw`text-lg font-semibold`}>SELECT YOUR REPAIR</Text>
              <Text style={tw`text-base leading-0 text-[#989898]`}>
                Add all desired services to your cart and customize the details for each item to receive final pricing at checkout.
              </Text>
            </View>
            <View style={tw`mb-12`}>
              <Text style={tw`text-lg font-semibold`}>SHIP YOUR ITEM TO US</Text>
              <Text style={tw`text-base leading-0 text-[#989898]`}>
                Once your order is complete simply follow the instructions provided with the shipping label to properly ship your item(s) to our facility via FedEx.
              </Text>
            </View>
            <View style={tw`mb-12`}>
              <Text style={tw`text-lg font-semibold`}>RECEIVE YOUR REPAIR</Text>
              <Text style={tw`text-base leading-0 text-[#989898]`}>
                Most orders are completed and sent back the same day your items arrive to our repair facility. Once your items ready to ship back you will be notified and sent a FedEx tracking number.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HowWeWork