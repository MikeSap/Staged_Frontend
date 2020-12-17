export default function manageManagedBand(state = {}, action) {
    switch (action.type) {

        case "POP_BAND_MANAGE":
            return {...action.band}

        case "NEW_EVENT":
            return {...state, events:[...state.events, action.newEvent]}

        case "NEW_BAND":
            return {...action.newBand}   

        case "EDIT_EVENT":
            let idx = state.events.findIndex(e => e.id === action.editedEvent.id)
            state.events.splice(idx, 1, action.newEvent)
            return state
            
        case "DELETE_EVENT":
            return {...state, events: state.events.filter(e => e.id !== action.eventId)}
        
        case "LOGOUT":
            return {}
        
        default:
            return state;
    }
}