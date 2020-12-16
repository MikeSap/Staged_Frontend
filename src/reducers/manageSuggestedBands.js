export default function manageSuggestedBands(state = [], action) {
    switch (action.type) {

        case 'SUGGESTED_BANDS':
            return [...action.suggestedBands]

        case "LOGOUT":
            return []

        case "NEW_FOLLOW":
            return state.filter(b => b.id !== action.band.id)
        
        default:
          return state;
    }
}