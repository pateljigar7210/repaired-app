import {Storage} from '../api';
//import {KEY} from '../_config';

export default async storageKey => {
    try {
        const thing = await Storage.getItem(storageKey);
        return thing; 
    } catch (error) {
        console.log("error in retriever", error);
        throw error;
    }
}