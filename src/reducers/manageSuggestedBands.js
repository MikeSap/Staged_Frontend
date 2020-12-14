export default function manageSuggestedBands(state = [], action) {
    switch (action.type) {

        case 'SUGGESTED_BANDS':
            return [...action.suggestedBands]

        case "LOGOUT":
            return []
        
        default:
          return state;
    }
}