export default function manageSuggestedBands(state = [], action) {
    switch (action.type) {

        case "LOGOUT":
            return []

            // Remove if already pulls this out on follow
        case "NEW_FOLLOW":
            return [ state.events.filter(e=> e.band.id !== action.band.id) ]

        case "SUGGESTED_EVENTS":
          return [...action.suggestedEvents]

        default:
          return state;
    }
}