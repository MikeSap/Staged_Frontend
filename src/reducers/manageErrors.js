export default function manageErrors(state = {}, action) {
    
    switch (action.type) {

        case "LOGIN_ERROR":
            return {...state, user: action.user.errors}

        case "LOGOUT":
            return {}

        case "CLEAR_LOGIN_ERRORS":
            return {...state, user: ""}
        
        default:
          return state;
      }
}