export default function manageSuggestedBands(state = [], action) {
    switch (action.type) {

        case 'SUGGESTED_BANDS':
            return [...action.suggestedBands]
        
        default:
          return state;
    }
}