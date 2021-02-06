import { combineReducers } from 'redux';
import filterReduser from './filters';
import stuffReduser from './stuff';

const rootReduser = combineReducers({
    filter: filterReduser,
    stuff: stuffReduser,
});


export default rootReduser;