import { combineReducers } from "redux";
import manageUser from './manageUser'
import manageErrors from "./manageErrors";
import manageLoading from "./manageLoading";
import manageSuggestedEvents from "./manageSuggestedEvents";
import manageDateEvents from "./manageDateEvents";
import manageEvents from "./manageEvents";
import manageBands from "./manageBands";
import manageManagedBand from "./manageManagedBand";
import manageEditedEvent from "./manageEditedEvent";


const rootReducer = combineReducers({
    user: manageUser,
    errors: manageErrors,
    loading: manageLoading,
    suggestedEvents: manageSuggestedEvents,
    dateEvents: manageDateEvents,
    events: manageEvents,
    bands: manageBands,
    managedBand: manageManagedBand,
    editedEvent: manageEditedEvent

})

export default rootReducer