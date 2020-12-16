export default function manageSuggestedEvents(state = [], action) {
    switch (action.type) {

        case 'SUGGESTED_BANDS':
            return [...action.suggestedEvents]

        case "LOGOUT":
            return []

        case "NEW_FOLLOW":
            return state.filter(e => e.band.id !== action.band.id)
    
        default:
          return state;
    }
}