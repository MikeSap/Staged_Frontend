export default function manageManagedBandEvents(state = [], action) {
  let idx
  switch (action.type) {

      case "NEW_EVENT":
          return [...state, action.newEvent]

      case "EDIT_EVENT":
          idx = state.findIndex(e => e.id === action.editedEvent.id)
          return [...state.slice(0, idx), action.editedEvent, ...state.slice(idx+1)]
          
      case "DELETE_EVENT":
          return [ ...state.filter(e => e.id !== action.eventId) ]

      case "NEW_SELF_COMMENT":
        idx = state.findIndex(e => e.id === action.newComment.event_id)
        let editedEvent = {...state[idx], comments: [...state[idx].comments, action.newComment]}
        return [...state.slice(0, idx), editedEvent, ...state.slice(idx+1)]

      case "MANAGED_EVENTS":
        return [...state, ...action.managedEvents]  
      
      case "LOGOUT":
        return []
    
      default:
          return state;
  }
}