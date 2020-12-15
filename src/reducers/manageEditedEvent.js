export default function manageEditedEvent(state = {}, action) {
    switch (action.type) {

        case "POP_EDITED_EVENT":
            return {...action.event}

        case "EDIT_EVENT":
            return {}

        case "LOGOUT":
            return {}
        
        default:
            return state;
    }
}