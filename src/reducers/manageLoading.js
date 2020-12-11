export default function manageLoading(state = false, action) {
    
    switch (action.type) {

        case("LOGGED_IN"):
            return false

        case 'LOGOUT':
            return false
        
        case 'LOGIN':
            return true

        case 'LOGIN_ERROR':
            return false

        case 'AUTO_LOG_IN':
          return false
        
        case 'AUTO_LOGIN_ERROR':
            return false

        case("SIGUP_PAGE"):
            return false
        
        default:
             return state;
      }
}