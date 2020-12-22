import { combineReducers } from "redux";
import manageUser from './manageUser'
import manageErrors from "./manageErrors";
import manageLoading from "./manageLoading";
import manageSuggestedEvents from "./manageSuggestedEvents";
import manageFollowedEvents from "./manageFollowedEvents";
import manageDateEvents from "./manageDateEvents";
import manageEvents from "./manageEvents";
import manageBands from "./manageBands";
import manageManagedBandEvents from "./manageManagedBandEvents";
import manageManagedBand from "./manageManagedBand";
import manageEditedEvent from "./manageEditedEvent";
import manageShowBand from "./manageShowBand";


const rootReducer = combineReducers({
    user: manageUser,
    errors: manageErrors,
    loading: manageLoading,
    suggestedEvents: manageSuggestedEvents,
    followedEvents: manageFollowedEvents,
    dateEvents: manageDateEvents,
    events: manageEvents,
    bands: manageBands,
    managedBand: manageManagedBand,
    managedBandEvents: manageManagedBandEvents,
    editedEvent: manageEditedEvent,
    showBand: manageShowBand

})

export default rootReducer