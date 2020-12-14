export default function manageSuggestedEvents(state = [], action) {
    switch (action.type) {

        case 'SUGGESTED_BANDS':
            return [...action.suggestedEvents]

        case "LOGOUT":
            return []
        
        default:
          return state;
    }
}