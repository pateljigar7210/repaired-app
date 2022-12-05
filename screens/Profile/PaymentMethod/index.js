import { View, Text, SafeAreaView, StatusBar, TouchableHighlight, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
// import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

//ADD localhost address of your server
// const API_URL = "http://localhost:3000";


const PaymentMethod = () => {
  const navigation = useNavigation();
  const [cardDetails, setCardDetails] = useState();
  // const { confirmPayment, loading } = useConfirmPayment();

  // const fetchPaymentIntentClientSecret = async () => {
  //   const response = await fetch(`${API_URL}/create-payment-intent`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const { clientSecret, error } = await response.json();
  //   return { clientSecret, error };
  // };

  // const handlePayPress = async () => {
  //   //1.Gather the customer's billing information (e.g., email)
  //   if (!cardDetails?.complete || !email) {
  //     Alert.alert("Please enter Complete card details and Email");
  //     return;
  //   }
  //   const billingDetails = {
  //     email: email,
  //   };
  //   //2.Fetch the intent client secret from the backend
  //   try {
  //     const { clientSecret, error } = await fetchPaymentIntentClientSecret();
  //     //2. confirm the payment
  //     if (error) {
  //       console.log("Unable to process payment");
  //     } else {
  //       const { paymentIntent, error } = await confirmPayment(clientSecret, {
  //         type: "Card",
  //         billingDetails: billingDetails,
  //       });
  //       if (error) {
  //         alert(`Payment Confirmation Error ${error.message}`);
  //       } else if (paymentIntent) {
  //         alert("Payment Successful");
  //         console.log("Payment successful ", paymentIntent);
  //       }
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   //3.Confirm the payment with the card details
  // };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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

        <View style={tw`flex-1 w-10/12 mt-18 mx-auto`}>
          <Text style={tw`text-3xl font-light mb-16`}>My Payment Method</Text>
          {/* <CardField
            postalCodeEnabled={true}
            placeholder={{
              number: "4242 4242 4242 4242",
            }}
            cardStyle={styles.card}
            style={styles.cardContainer}
            onCardChange={cardDetails => {
              setCardDetails(cardDetails);
            }}
          /> */}
        </View>
        <View style={tw`bg-[#0D0C0C] absolute bottom-0 w-full`}>
          <TouchableHighlight
            underlayColor="#0D0C0C"
            activeOpacity={0.8}
            style={tw`py-7`}
            onPress={() => navigation.goBack()}
          >
            <Text 
              style={{
                fontFamily: "HelveticaNeueLight",
                fontSize: 24,
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Add Payment Method
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default PaymentMethod