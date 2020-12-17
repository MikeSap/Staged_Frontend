export default function manageFollowedEvents(state = [], action) {
    switch (action.type) {

        case "ADD_FOLLOWED_EVENTS":
            return [...state, ...action.events]

        case "LOGOUT":
            return []

        case "NEW_FOLLOW":
            return [...state, ...action.band.events]

        case "NEW_COMMENT":
            let idx = state.findIndex(e => e.id === action.newComment.event_id)
            let addedCom = {...state[idx], comments: [...state[idx].comments, action.newComment]}
            return [...state.slice(0, idx), addedCom, ...state.slice(idx+1)]
        
        default:
            return state;
    }
}