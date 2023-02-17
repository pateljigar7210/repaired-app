import {createContext} from 'react';

export const FetchContext = createContext();
export const AuthContext = createContext();
export const JobContext = createContext();

export {default as jobReducer} from './jobReducer.js';