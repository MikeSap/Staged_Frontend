export default function managUser(state = {
    user: {email: "", id: "", username: "", city: "", bands: []}
}, action) {
    switch (action.type) {

        case 'LOGIN':
            return { email: "", id: "", username: "", city: "", bands: [] } 

        case 'LOGGED_IN':
            return { email: action.user.user.email, id: action.user.user.id, username: action.user.user.username, city: action.user.user.city, bands: action.user.user.bands }

        case 'AUTO_LOG_IN':
            return { email: action.user.email, id: action.user.id, username: action.user.username, city: action.user.city, bands: action.user.bands }

        case 'AUTO_LOGIN_ERROR':
        return { email: "", id: "", username: "", city: "", bands: [] }
        
        case 'LOGOUT':
        return { email: "", id: "", username: "", city: "", bands: [] }

        case 'LOGIN_ERROR':
            return { email: "", id: "", username: "", city: "", bands: [] }

        case "NEW_BAND":
            return {...state, bands: [...state.bands, action.newBand]}

        default:
          return state;
      }
}