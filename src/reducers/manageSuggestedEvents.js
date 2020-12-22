export default function manageSuggestedEvents(state = [], action) {
    switch (action.type) {

        case "LOGOUT":
            return []

        // not needed because SuggestedBandsEventsIsCalled when
        // case "NEW_FOLLOW":
        //     return state.filter(e => e.band.id !== action.band.id)

        case "SUGGESTED_EVENTS":
          return [...action.suggestedEvents]

        default:
          return state;
    }
}