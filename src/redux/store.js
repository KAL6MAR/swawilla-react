import { createStore } from 'redux';
import rootReduser from './reducers';


const store = createStore(rootReduser);


export default store;