import fetchDate from "./show";
import itemAdded from "./add";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    fetchDate,
    itemAdded
})


export default rootReducer;