import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import global from './modules/global';


const reducer = combineReducers({
  global
});


export default createStore(reducer, applyMiddleware(thunk));


