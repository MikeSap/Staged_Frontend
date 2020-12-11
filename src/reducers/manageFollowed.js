export default function manageFollowed(state = [], action) {
    switch (action.type) {

        case 'LOGIN':
            return []

        case 'LOGGED_IN':
            return action.user.user.followed

        case 'AUTO_LOG_IN':
            return action.user.followed

        case 'AUTO_LOGIN_ERROR':
            return []
        
        case 'LOGOUT':
            return []

        case 'LOGIN_ERROR':
            return []

        default:
          return state;
      }
}