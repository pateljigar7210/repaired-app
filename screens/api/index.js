import api from "./api";
export { default as Chat } from './chat';
export { default as Storage } from './storage';

export const Media = {
  uploadOne: file => api('upload', 'POST', file),
  uploadArray: fileArray => api('upload-array', 'POST', fileArray)
}

export const choices = {
  list: () => api('choices', 'GET')
}
export const Choices = choices;

export const job = {
  list: () => api('job', 'GET'),
  create: data => api('job', 'POST', data),
  // getLaborPrice: data => api('labor-price', 'POST', data),
  getPriceEstimates: data => api('get-price-estimates', 'POST', data),
}
export const Job = job;

export const Vendor = {
  list: () => api('job/available', 'GET'),
  claimJob: (id, data) => api(`vendor/job/${id}`, 'POST', data),
  update: (id, data) => api(`vendor/job/${id}`, 'PATCH', data), // for providing status updates

  isVerified: async () => api('verified/vendor', 'GET'),

  getServiceChoices: () => api(`vendor/services`, 'GET'), // list of choices that vendor can check if they offer
  updateAvailableServices: data => api('vendor/services', 'POST', data),
}

// todo: this is capital
export const location = {
  save: data => api('location', 'POST', data), // original name
  create: data => api('location', 'POST', data), // new name (same as save)
  update: (id, data) => api(`location/${id}`, 'PATCH', data),
  list: () => api('location', 'GET')
}
export const Location = location;

export const card = {
  save: data => api('card', 'POST', data), // original name
  create: data => api('card', 'POST', data), // new name (same as save)
  update: (id, data) => api(`card/${id}`, 'PATCH', data),
  list: () => api('card', 'GET')
}
export const Card = card;

export const user = {

  getAccount: async () => api('user', 'GET'),
  updateProfile: data => api('user', 'PATCH', data),

  login: async (email, password, vendorLogin) => {
    return await api('login', 'POST', { email, password, vendorLogin })
      .then(response => {
        const { token, user, vendorLogin } = response;
        if (token) return { token, user, vendorLogin };
        else throw response;
      })
      .catch(error => { throw error });
  },

  // maybe replace with generic 'externalSignin' name and use for apple and google
  googleSignin: async (googleProfile, vendorLogin) => {
    const {id, email, name, picture} = googleProfile;
    console.log("googleprofile osnitnueing", googleProfile)
    return await api('google-signin', 'POST', {
      vendorLogin,
      platformUserId: id,
      platformName: 'google',
      email,
      name,
      avatar_img: picture,
    })
      .then(response => {
        const { token, user, vendorLogin } = response;
        if (token) return { token, user, vendorLogin };
        else throw response;
      })
      .catch(error => { 
        console.log("error", error)
        throw error 
      });
  },

  register: async data => api('register', 'POST', data),
}
export const User = user;

export const Shipment = {
  // todo: add parameter to differentiate check between check FRESH rates, or to check rates for parameter already created
  list: async rateParams => api('shipment/rates', "POST", rateParams),
  // todo: makeLabel will be deprecated and all label buying will be handled automatically by the server when conditions are met
  makeLabel: async labelObj => api('shipment/buy-label', "POST", labelObj),
}