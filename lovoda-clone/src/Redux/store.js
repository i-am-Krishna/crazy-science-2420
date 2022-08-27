import { legacy_createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer as auth} from './Auth/reducer';
import {reducer as newPage} from './NewPage/reducer'
import {reducer as homepage} from "./HomePage/reducer"
import {reducer as app} from './App/reducer'
import {reducer as allPage} from './Allpage/reducer'
const rootReducer = combineReducers({auth,newPage,homepage,allPage,app})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))