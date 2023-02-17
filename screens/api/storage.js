import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        // console.log("the json value", jsonValue);
        if (jsonValue != null) return JSON.parse(jsonValue);
        else throw "key was not found in storage, or null was stored";
     } catch (error) {
        throw error;
     }
}

export async function setItem(key, value) {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function removeItem(key) {
    return await AsyncStorage.removeItem(key);
}

export default{
    getItem,
    setItem,
    removeItem
}