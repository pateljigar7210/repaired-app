import { View, Text, SafeAreaView, Image, StatusBar, TouchableHighlight, ScrollView, TextInput, Alert } from 'react-native'
import React, { useReducer, useMemo, useEffect, useContext,useState } from 'react';
import tw from "twrnc";
import { choices, user,} from '../api';
import jobReducer from "../../context"
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { getItem } from '../api/storage';

let radio_props = [
  {label: 'Ring', value: 0 },
  {label: 'Necklace', value: 1 },
  {label: 'Earrings', value: 2 },
  {label: 'Bracelet', value: 3 },
  {label: 'Watch', value: 4 }
];

let items_icons = {
  Ring: {
    title: 'Ring',
    icon: require('../../assets/icons/NewRepairs/ring.png'),
    style: tw`w-9.5 h-12.5`
  },
  Necklace: {
    title: 'Necklace',
    icon: require('../../assets/icons/NewRepairs/necklace.png'),
    style: tw`w-10 h-9`
  },
  Bracelet: {
    title: 'Bracelet',
    icon: require('../../assets/icons/NewRepairs/bracelet.png'),
    style: tw`w-10 h-10`
  },
  Earrings: {
    title: 'Earrings',
    icon: require('../../assets/icons/NewRepairs/earrings.png'),
    style: tw`w-9.5 h-10.5`
  },
  Watch: {
    title: 'Watch',
    icon: require('../../assets/icons/NewRepairs/watch.png'),
    style: tw`w-9.5 h-12.5`
  },  
}


export default function NewRepairs ()
 {
   
  const navigation = useNavigation();
  const [value, setValue] = useState(0);
// const [state, dispatch] = useReducer(
//   jobReducer,
//   {
//     isLoading: true,
//     choices: null,
//     user: { name: "" },
  
//     jobItems: [], // array of previously added items
//     gallery: [], // array of images
//     declaredValue: null, // total of all items for job
    
//     location: null, // location object
//     shippingRate: null, // shippingRate object
//     shippingPickup: null, // shippingPickup object

//     card: null,
//     cardLocation: null,
//   }
// );

// const jobMemo = useMemo(() => ({
//   initValues: async () => {
//     try {
//       const user = await getItem('user');
//       console.log(user,"user");
//       const { items } = await choices.list();
//       console.log(items,"items");
      
//       dispatch({ type: 'INIT_VALUES', items, user });
//     } catch (error) {
//       console.log("error loading choices OR user object into context state", error);

//       Alert.alert(
//         "Problem",
//         "Failure to connect, please try again.",
//         [
//           {
//             text: "Cancel",
//             onPress: () => navigation.goBack(),
//             style: "cancel"
//           },
//           { text: "Retry", onPress: () => jobMemo.initValues() }
//         ]
//       );

//     }
//   },

//   // for new services page; replaced setCurrentItem, saveService, saveCurrentItem
//   finishItem: (item, index = null) => {
//     if (Number.isInteger(index)) {
//       console.log("index is true and is being included for dispatch called by finishItem",index);
//       dispatch({ type: 'UPDATE_ITEM', item, index });
//     } else {
//       console.log("index is null and dispatch is type NEW_ITEM");
//       dispatch({ type: 'NEW_ITEM', item });
//     }
//   },
//   removeItem: index => dispatch({ type: 'REMOVE_ITEM', index }),
  
//   // NOTE (2022-08-11): workaround for react-navigation failing to pass params to previous screen 
//   // function not written yet still trying to get parameter to work other otherwise put the function here
  
//   saveGallery: gallery => dispatch({ type: 'SAVE_GALLERY', gallery }),
//   saveDeclaredValue: declaredValue => dispatch({ type: 'SAVE_DEC_VAL', declaredValue }),

//   saveShippingRate: ({rate, pickup, originId}) => dispatch({ type: 'SAVE_SHIPPING_METHOD', rate, pickup, originId }),
//   saveLocation: location => dispatch({ type: 'SAVE_LOCATION', location }),
//   saveCard: card => dispatch({ type: 'SAVE_CARD', card }),
//   saveCardLocation: location => dispatch({ type: 'SAVE_CARD_LOCATION', location }),
// }));


// // // load choices on startup
// useEffect(() => { jobMemo.initValues() }, []);


  
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
          name="x" 
          size={36} 
          color="#282828"
        />
      </TouchableHighlight>
      <ScrollView>
        <View style={tw`flex-1 mx-auto w-10/12 mt-16`}>
          <Text style={tw`text-4xl font-bold `}>Hello, Isaac</Text>
          <Text style={tw`text-3xl font-light mt-2`}>Which item would you like to get fixed ?</Text>

          <View style={tw`flex flex-col mt-14`}>
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
                        isSelected={value === i}
                        onPress={(value) => {
                          setValue(value)
                        }}
                        borderWidth={1}
                        buttonInnerColor={'#2C73D7'}
                        buttonOuterColor={value === i ? '#2196f3' : '#000'}
                        buttonSize={14}
                        buttonOuterSize={28}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={true}
                        onPress={(value) => {setValue(value)}}
                        labelStyle={tw`text-3xl font-light ml-4`}
                      />
                      
                    </View>
                    <Image
                      style={items_icons[obj.label].style}
                      source={items_icons[obj.label].icon}
                     //source={{ uri: image }}
                      //alt={`${title} - ${description}`}
                    />
                  </RadioButton>
                ))
              }  
            </RadioForm>
          </View>
        </View>
      </ScrollView>

      <View style={tw`absolute bottom-0 w-full`}>
        <Text style={tw`text-center py-4 px-8 w-full bg-[#F2F5F8] mx-auto`}>* You can add another item to the same order later in the process.</Text>
        <TouchableHighlight
          underlayColor="#000000"
          activeOpacity={0.9}
          style={tw`pb-9 pt-4 bg-[#000000]`}
          onPress={() => navigation.navigate('Items', { item: items_icons[radio_props[value].label].title })}
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

//export default NewRepairs