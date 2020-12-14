import { combineReducers } from "redux";
import manageUser from './manageUser'
import manageFollowed from './manageFollowed'
import manageErrors from "./manageErrors";
import manageLoading from "./manageLoading";
import manageFollowedEvents from "./manageFollowedEvents";
import manageSuggestedBands from "./manageSuggestedBands";
import manageSuggestedEvents from "./manageSuggestedEvents";
import manageDateEvents from "./manageDateEvents";


const rootReducer = combineReducers({
    user: manageUser,
    followedBands: manageFollowed,
    errors: manageErrors,
    loading: manageLoading,
    followedEvents: manageFollowedEvents,
    suggestedBands: manageSuggestedBands,
    suggestedEvents: manageSuggestedEvents,
    dateEvents: manageDateEvents

})

export default rootReducer