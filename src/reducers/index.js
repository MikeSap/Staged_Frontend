import { combineReducers } from "redux";
import manageUser from './manageUser'
import manageFollowed from './manageFollowed'


const rootReducer = combineReducers({
    user: manageUser,
    followedBands: manageFollowed

})

export default rootReducer