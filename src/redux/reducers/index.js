import { combineReducers } from 'redux';
import fileteReduser from './filters';
import stuffReduser from './stuff';

const rootReduser = combineReducers({
    filete: fileteReduser,
    stuff: stuffReduser,
});


export default rootReduser;