export default function manageErrors(state = {}, action) {
    
    switch (action.type) {

        case "LOGIN_ERROR":
            return {...state, user: action.user.errors}

        case "NEW_BAND_ERROR":
          return {...state, newBand: action.newBand.errors }

        case "NEW_BAND":
          return {...state, newBand: "" }

        case "CLEAR_BAND_ERRORS":
          return {...state, newBand: "" }

        case "LOGOUT":
            return {}

        case "CLEAR_LOGIN_ERRORS":
            return {...state, user: "",}
        
        default:
          return state;
      }
}