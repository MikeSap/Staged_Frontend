export default function manageManagedBand(state = {}, action) {
    switch (action.type) {

        case "POP_BAND_MANAGE":
            return {...action.band}

        case "LOGOUT":
            return {}
        
        default:
            return state;
    }
}