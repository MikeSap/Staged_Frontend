export default function manageManagedBand(state = {}, action) {
    switch (action.type) {

        case "POP_BAND_MANAGE":
            return {...action.band}

        case "NEW_EVENT":
            return {...state, events:[...state.events, action.newEvent]}

        case "NEW_BAND":
            return {...action.newBand}    
        
        case "LOGOUT":
            return {}
        
        default:
            return state;
    }
}