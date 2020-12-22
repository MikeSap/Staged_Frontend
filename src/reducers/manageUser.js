export default function managUser(state = {
    user: {email: "", id: "", username: "", city: "", bands: [], followed: []}
}, action) {
    switch (action.type) {

        case 'LOGIN':
            return { email: "", id: "", username: "", city: "", bands: [] } 

        case 'LOGGED_IN':
            return { email: action.user.user.email, id: action.user.user.id, username: action.user.user.username, city: action.user.user.city, bands: action.user.user.bands, followed: action.user.user.followed }

        case 'AUTO_LOG_IN':
            return { email: action.user.email, id: action.user.id, username: action.user.username, city: action.user.city, bands: action.user.bands, followed: action.user.followed }

        case 'AUTO_LOGIN_ERROR':
        return { email: "", id: "", username: "", city: "", bands: [], followed: [] }
        
        case 'LOGOUT':
        return { email: "", id: "", username: "", city: "", bands: [], followed: []  }

        case 'LOGIN_ERROR':
            return { email: "", id: "", username: "", city: "", bands: [], followed: []  }

        case "NEW_BAND":
            return {...state, bands: [...state.bands, action.newBand]}

        case "NEW_FOLLOW":
            return { ...state, followed: [...state.followed, action.band]}

        // case "NEW_COMMENT":
        //     let bidx = state.followed.findIndex( b => b.events.map(e => e.id).includes(action.newComment.event_id) )
        //     let idx = state.followed[bidx].events.findIndex(e => e.id === action.newComment.event_id)
        //     let editedEvent = {...state.followed[bidx].events[idx], comments: [...state.followed[bidx].events[idx].comments, action.newComment]}
        //     let editedBand = {...state.followed[bidx], events: [...state.followed[bidx].events.slice(0, idx), editedEvent, ...state.followed[bidx].events.slice(idx+1) ] }
        //     return {...state, followed: [...state.followed.slice(0, bidx), editedBand, ...state.followed.slice(bidx+1)] }

        default:
          return state;
      }
}