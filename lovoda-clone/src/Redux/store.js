import { legacy_createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer as auth} from './Auth/reducer';


const rootReducer = combineReducers({auth})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))