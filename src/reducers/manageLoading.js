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

        case("FETCHING_POSTS"):
            return true

        case("ADD_FOLLOWED_EVENTS"):
            return false

        case 'SUGGESTED_BANDS':
            return false
       
        case 'DATE_EVENTS':
            return false
        
        default:
             return state;
      }
}