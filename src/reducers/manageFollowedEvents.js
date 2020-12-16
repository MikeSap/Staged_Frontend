export default function manageFollowedEvents(state = [], action) {
    switch (action.type) {

        case "ADD_FOLLOWED_EVENTS":
            return [...state, ...action.events]

        case "LOGOUT":
            return []

        case "NEW_FOLLOW":
            return [...state, action.band.events]
        
        default:
            return state;
    }
}