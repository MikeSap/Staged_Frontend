export default function manageLoading(state = { user: false, feed: false, calendar: false, miniFeed: false }, action) {
    
    switch (action.type) {

        case "LOGGED_IN":
            return { ...state, user: false }

        case 'LOGOUT':
            return { user: false, feed: false, calendar: false, miniFeed: false }
        
        case 'LOGIN':
            return { ...state, user: true}

        case 'LOGIN_ERROR':
            return { ...state, user: false}

        case 'AUTO_LOG_IN':
            return { ...state, user: false}
        
        case 'AUTO_LOGIN_ERROR':
            return { ...state, user: false}

        case "SIGUP_PAGE":
            return { ...state, user: false}

        case "FETCHING_POSTS":
            return { ...state, feed: true}
       
        case "FETCHING_DATE_EVENTS":
            return { ...state, calendar: true}
        
         case "FETCHING_MANAGED_EVENTS":
            return { ...state, feed: true}
 
        case "FETCHING_SUGGESTED":
            return { ...state, miniFeed: true}

        case "FETCHING_FOLLOWED":
            return { ...state, feed: true}

        case 'SUGGESTED_EVENTS':
            return { ...state, miniFeed: false}

        case 'FOLLOWED_EVENTS':
            return { ...state, feed: false}
       
        case 'DATE_EVENTS':
            return { ...state, calendar: false}

        case 'MANAGED_EVENTS':
            return { ...state, feed: false}
    
        // case "ADD_MUSIC":
        //     return false
        
        // case "ADD_MERCH":
        //     return false
        
        // case "ADD_SHOWS":
        //     return false

        // case "ADD_BANDS":
        //     return false

        case "FETCH_SHOW_BAND":
          return { ...state, miniFeed: true}

        case "POP_SHOW_BAND":
          return { ...state, miniFeed: false}

        default:
             return state;
      }
}