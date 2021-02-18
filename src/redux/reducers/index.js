import { combineReducers } from "redux";
import filter from "./filters";
import stuff from "./stuff";
import counter from "./counter";
import size from "./size";
import cart from "./cart";
import { loadState } from "./localStorage";

const persistedState = loadState();

const rootReduser = combineReducers({
    filter,
    stuff,
    counter,
    size,
    cart,
    persistedState,
});

export default rootReduser;
