export default function manageManagedBand(state = {}, action) {
    let idx
    switch (action.type) {

        case "POP_BAND_MANAGE":
            return {...action.band}

        // case "NEW_EVENT":
        //     return {...state, events:[...state.events, action.newEvent]}

        case "NEW_BAND":
            return {...action.newBand}   

        // case "EDIT_EVENT":
        //     idx = state.events.findIndex(e => e.id === action.editedEvent.id)
        //     return { ...state, events: [...state.events.slice(0, idx), action.editedEvent, ...state.events.slice(idx+1)] }
            
        // case "DELETE_EVENT":
            // return {...state, events: state.events.filter(e => e.id !== action.eventId)}
        
        case "LOGOUT":
            return {}

        // case "NEW_SELF_COMMENT":
        //   idx = state.events.findIndex(e => e.id === action.newComment.event_id)
        //   let editedEvent = {...state.events[idx], comments: [...state.events[idx].comments, action.newComment]}
        //   return {...state, events: [...state.events.slice(0, idx), editedEvent, ...state.events.slice(idx+1)] }
        
        default:
            return state;
    }
}