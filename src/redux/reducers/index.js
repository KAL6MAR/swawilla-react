import { combineReducers } from "redux";
import filterReduser from "./filters";
import stuffReduser from "./stuff";
import counterReduser from "./counter";

const rootReduser = combineReducers({
    filter: filterReduser,
    stuff: stuffReduser,
    counter: counterReduser,
});

export default rootReduser;
