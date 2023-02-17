import { View, Text, SafeAreaView, Image, StatusBar, TouchableHighlight } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/themed';
import Ring from '../../../components/RepairsItems/Ring';
import Watch from '../../../components/RepairsItems/Watch';
import Bracelet from '../../../components/RepairsItems/Bracelet';
import Earrings from '../../../components/RepairsItems/Earrings';
import Necklace from '../../../components/RepairsItems/Necklace';
import { useState } from 'react';

let details = {
  Ring: {
    title1: 'Resize',
    title2: 'Set Stone',
    title3: 'Stone Related Repair',
    title4: 'Engraving/Remove Engraving',
    title5: 'Shank Repair',
    title6: 'Channel Repair',
    title7: 'Reshaping',
    title8: 'Cleaning/Renew',
    title9: 'Appraisal',
  },
  Necklace: {
    title1: 'Resize',
    title2: 'Set Stone',
    title3: 'Stone Related Repair',
    title4: 'Hinge Repair',
    title5: 'Engraving/Remove Engraving',
    title6: 'Jump Ring Repair/Replacement',
    title7: 'Untangle a Chain',
    title8: 'Chain Repair',
    title9: 'Lock/Clasp Repair',
    title10: 'Bail Repair/Replacement',
    title11: 'Pearl Restringing',
    title12: 'Appraisal',
  },
  Bracelet: {
    title1: 'Resize',
    title2: 'Set Stone',
    title3: 'Stone Related Repair',
    title4: 'Hinge Repair',
    title5: 'Engraving/Remove Engraving',
    title6: 'Jump Ring Repair/Replacement',
    title7: 'Untangle a Chain',
    title8: 'Chain Repair',
    title9: 'Lock/Clasp Repair',
    title10: 'Bail Repair/Replacement',
    title11: 'Pearl Restringing',
    title12: 'Appraisal',
  },
  Earrings: {
    title1: 'Resize',
    title2: 'Stone Related Repair',
    title3: 'Cleanning/Renew',
    title4: 'Hinge Repair',
    title5: 'Jump Ring Repair/Replacement',
    title6: 'Earring Post Repair',
    title7: 'Appraisal',
  },
  Watch: {
    title1: 'Band Resizing/Remove Links',
    title2: 'Band and Case Refinishing',
    title3: 'Pressure Test',
    title4: 'Hinge Repair',
    title5: 'Mechanical Movement',
    title6: 'Band Repair/Replacement',
    title7: 'Clean & Overhaul:Quartz Movement',
    title8: 'Stem/Crown Replacement',
    title9: 'Battery Replacement',
    title10: 'Glass/Crystal Replacement',
    title11: 'Appraisal',
  }
};

const Items = ({
  route: {
    params: { item },
  },
}) => {
  const navigation = useNavigation();

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
      <View style={tw`flex-1 mt-20 relative`}>
        <Text style={tw`text-3xl font-light w-10/12 mx-auto`}>Please choose the relevant <Text style={tw`font-semibold`}>category(s)</Text></Text>
        <Divider style={tw`w-full my-6`} color="#DADADA" />
        {item === "Ring" && <Ring details={details.Ring} />}
        {item === "Watch" && <Watch details={details.Watch} />}
        {item === "Bracelet" && <Bracelet details={details.Bracelet} />}
        {item === "Earrings" && <Earrings details={details.Earrings} />}
        {item === "Necklace" && <Necklace details={details.Necklace} />}  
        <Image
          source={require('../../../assets/backgroundImages/RepairsItems/bottom-bg.png')}
          style={tw`absolute bottom-15 left-0 right-0 w-full h-58 z-0`}
        />
      </View>
    </SafeAreaView>
  )
}

export default Items