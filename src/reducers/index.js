import { combineReducers } from "redux";
import manageUser from './manageUser'
import manageFollowed from './manageFollowed'
import manageErrors from "./manageErrors";
import manageLoading from "./manageLoading";


const rootReducer = combineReducers({
    user: manageUser,
    followedBands: manageFollowed,
    errors: manageErrors,
    loading: manageLoading

})

export default rootReducer