export default (prevState, action) => {
  switch (action.type) {
    case 'INIT_VALUES':
      return {
        ...prevState,
        choices: action.items,
        user: action.user,
        isLoading: false
      };
    case 'SAVE_GALLERY':
      return {
        ...prevState,
        gallery: action.gallery
      }
    case 'SAVE_DEC_VAL':
      return {
        ...prevState,
        declaredValue: action.declaredValue
      }
    case 'SAVE_SHIPPING_METHOD':
      return {
        ...prevState,
        shippingRate: action.rate,
        shippingPickup: action.pickup,
        shippingOriginId: action.originId,
      }
    case 'SAVE_LOCATION':
      return {
        ...prevState,
        location: action.location
      }
    case 'SAVE_CARD':
      return {
        ...prevState,
        card: action.card
      }
    case 'SAVE_CARD_LOCATION':
      return {
        ...prevState,
        cardLocation: action.location
      }
    case 'NEW_ITEM':
      return {
        ...prevState,
        jobItems: [...prevState.jobItems, action.item]
      }
    case 'UPDATE_ITEM':
      console.log("UPDATE_ITEM REDUCER IS COMPLETELY UNTESTED UPDATE_ITEM REDUCER IS COMPLETELY UNTESTED UPDATE_ITEM REDUCER IS COMPLETELY UNTESTED");
      // got non mutating array method from this link: https://stackoverflow.com/a/58569727/5306522
      return {
        ...prevState,
        jobItems: [...prevState.jobItems.slice(0, action.index), action.item, ...prevState.jobItems.slice(action.index + 1)]
      }
    case 'REMOVE_ITEM':
      console.log("welcome to the reducer", action.index);
      // clone array
      const jobItems = [...prevState.jobItems];
      // remove element, reindexes array, and changes it's length

      const updatedArray = jobItems.splice(0, action.index);

      return {
        ...prevState,
        updatedArray
      }
    default: throw new Error("No case match in jobReducer!");
  }
}