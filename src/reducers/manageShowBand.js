export default function manageShowBand(state = {}, action) {
  switch (action.type) {

      case "POP_SHOW_BAND":
          return { ...action.info, band: {...action.info.band, photo: action.info.photo} }
      
      case "LOGOUT":
          return {}
      
      default:
          return state;
  }
}