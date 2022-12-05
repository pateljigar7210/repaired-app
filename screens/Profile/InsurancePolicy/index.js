import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableHighlight } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const InsurancePolicy = () => {
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
          <Text style={tw`text-3xl font-light mb-12`}>Insurance Policy</Text>
          <View style={tw`flex-1`}>
            <Text style={tw`mb-5 text-base leading-0 font-semibold text-[#989898]`}>
              Elit mauris, pharetra malesuada nisl tellus id, libero mauris eu. Ac ac nisl, est donec
            </Text>
            <Text style={tw`mb-5 text-base leading-0 text-[#989898]`}>
              in tempus vestibulum, fermentum vehicula, amet integer rhoncus pretium suspendisse quam leo, aliquet enim amet donec. Duis aliquam, ornare egestas lacus morbi odio pharetra sem, sociosqu velit sodales, egestas non a ridiculus scelerisque amet. Suscipit sit blandit neque amet, pede arcu et integer augue volutpat faucibus, nam dolor mus etiam litora cras. Eget ante, malesuada est aliquam iaculis nisl id, magna lectus donec, venenatis morbi eget consequat mattis, ut pretium. Integer sem, facilisi lacus et quisque, iaculis et quis mollis urna tincidunt lacus, et nibh sed. Sapien sit porta magna semper phasellus eros, convallis sagittis quisque vel magna, amet neque arcu augue sed hendrerit bibendum.
            </Text>
            <Text style={tw`mb-5 text-base leading-0 text-[#989898]`}>
              Auctor etiam nam. Volutpat ligula velit malesuada, aliquam metus odio luctus dolor pulvinar, magna suscipit id, et et et blandit, libero proin semper in ac inceptos. Metus ligula in interdum sodales, tellus nisl rutrum elementum diam. Veritatis faucibus vel, sem lorem varius. Quis vel metus enim ante. Ut in ut at lectus tempus habitant, vehicula vel a ut vivamus, nibh quod curabitur, tempor orci bibendum. Nunc sit quis dignissim aliquam, ac diam varius, quia arcu. Justo sit egestas, diam morbi integer, consectetuer dui, vero mattis ante ultrices dui.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default InsurancePolicy