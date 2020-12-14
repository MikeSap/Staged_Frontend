export default function manageEvents(state = {music: [], merch: [], shows: []}, action) {
    switch (action.type) {

        case "ADD_MUSIC":
            return {...state, music: action.events}
        
        case "ADD_MERCH":
            return {...state, merch: action.events}
       
        case "ADD_SHOWS":
            return {...state, shows: action.events}

        case "LOGOUT":
            return { music: [], merch: [], shows: [] }
        
        default:
            return state;
    }
}