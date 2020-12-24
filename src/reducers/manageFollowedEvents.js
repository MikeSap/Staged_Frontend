export default function manageFollowedEvents(state = [], action) {
  switch (action.type) {

      case "LOGOUT":
          return []

      // case "NEW_FOLLOW":
      //     return [ ...state, ...action.events ]

      case "FOLLOWED_EVENTS":
        debugger
        return [...state, ...action.followedEvents]

        case "NEW_COMMENT":
          let idx = state.findIndex( e => e.id === action.newComment.event_id)
          let editedEvent = {...state[idx], comments: [...state[idx].comments, action.newComment]} 
          return [...state.slice(0, idx), editedEvent, ...state.slice(idx+1)]

      default:
        return state;
  }
}