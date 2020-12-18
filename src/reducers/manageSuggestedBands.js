export default function manageSuggestedBands(state = {bands: [], events: []}, action) {
    switch (action.type) {

        case "LOGOUT":
            return []

        case "NEW_FOLLOW":
            return {bands: state.bands.filter(b => b.id !== action.band.id), events: state.events.filter(e=> e.band.id !== action.band.id)}
        
        case "SUGGESTED_BANDS":
        return {bands: [...action.suggestedBands], events:[...action.suggestedEvents]}

        default:
          return state;
    }
}