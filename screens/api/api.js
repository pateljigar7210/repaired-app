import { getItem } from './storage';
// import { KEY, URL } from '../_config';
// import upload from './upload';
import {Platform} from 'react-native';
import * as Device from 'expo-device'; // todo: remember for expo transition.
 //const API_URL = 'https://api.youpick.io/';
   const API_URL = 'http://192.168.0.137:8081/'
// const API_URL = 'http://localhost:8080/';

//     "mailto:email":"devalk367@gmail.com",
//     "password":"123456"


const genFile = file => {
   return {
      name: Platform.OS === 'ios' ? file.uri.replace('file://', '') : file.uri,
      uri: Platform.OS === 'ios' ? file.uri.replace('file://', '') : file.uri,
      type: file.type,
   }
};


export default apiRequest = async (path, method, body) => {
   const url = API_URL + path;

   let data = {
      method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
         'Content-Type': 'application/json',
         'Api-Version': '1.0.0'
      }
   }


   // if upload set headers to multipart, otherwise it's json
   if (path === "upload" || path === "upload-array") {
      const formData = new FormData();

      // single
      if (path === "upload") formData.append('image', genFile(body));

      // array
      else if (path === "upload-array") {
         const imgArray = body.map(image => {
            // todo: should it be each image stored under it's own 'images' key???
            // ??? OR should it be one array under one 'images' key????????
            formData.append('images', genFile(image));
            // fields['images'] = genFile(body); // THIS IS UNTESTED!
            // return genFile(image);
         });

         // console.log("testnig the array we are going to send by appennding to formdata", imgArray)

         // formData.append('images', imgArray);

         
      }

      
      data.headers = {
         'Content-Type': `multipart/form-data; boundary=------some-random-characters`
      }
      data.body = formData;
   }

   // if not GET and not /upload
   // else if (method !== 'GET') data.body = JSON.stringify(body);
   else if (method !== 'GET') data.body = JSON.stringify(body);
   
   // Empty body for GET
   else console.log("GET request, not sending a body.");


   // Auth token for non signup routes
   if (path !== 'register' && path !== 'login' && path !== 'google-signin') data.headers['Authorization'] = 'Bearer ' + await getItem(KEY.TOKEN);


   // Fetches and JSON parses response
   return new Promise((resolve, reject) => {
      console.log(url,method,data?.body);
      // console.log("the body", body);

      const controller = new AbortController();

      // const timeoutId = setTimeout(() => {
      //    console.log("it's been 5 seconds, we are triggering the abort.");
      //    controller.abort();
      // }, 5000); // 5 second timeout

      data.signal = controller.signal;

      fetch(url, data)
         .then(async response => {
            const body = await response.json();
            console.log("=body=",body);

            // add http code to returned json
            body.code = response.status;

            // if (path === "choices") console.log("skips logging for /choices");
            // else if(path === "jobs") console.log("skips logging for /jobs")
            // else console.log("API Response", body);

            // for generic returned server error
            // todo: add check for token invalid code to automatically sign user out

            // if (response.status === 500) reject(body);
            if (response.status === 500) reject(body.message); // 2022-05-12: only returning errors as strings
            else resolve(body);
         })
         .catch(error => {
            console.log("API Request Returned an Error", error);

            const errorResponse = error;
            if (!error.message) errorResponse.message = "No message to display";

            // console.log("what api.js is sending in reject", errorResponse)
            // reject(errorResponse);
            reject(errorResponse.message); // 2022-05-12: only returning errors as strings
         })
   });
}