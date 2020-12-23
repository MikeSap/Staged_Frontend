export default function manageManagedBand(state = {}, action) {
    switch (action.type) {

        case "POP_BAND_MANAGE":
            return {...action.band}

        case "NEW_BAND":
            return {...action.newBand}   

        case "EDIT_BAND":
          return {...action.editedBand}    

        case "LOGOUT":
            return {}

        default:
            return state;
    }
}