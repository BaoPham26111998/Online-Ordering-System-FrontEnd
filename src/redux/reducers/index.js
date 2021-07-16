import { combineReducers } from "redux";
import listEventReducer from "containers/HomeTemplate/ListEventPage/modules/reducer";
import detailEventReducer from "containers/HomeTemplate/DetailEventPage/modules/reducer";
// import authReducer from "containers/AdminTemplate/AuthPage/modules/reducer";
// import addUserReducer from "containers/AdminTemplate/AddUserPage/modules/reducer";

const rootReducer = combineReducers({
    listEventReducer,
    detailEventReducer,
    // authReducer,
    // addUserReducer,
});

export default rootReducer;