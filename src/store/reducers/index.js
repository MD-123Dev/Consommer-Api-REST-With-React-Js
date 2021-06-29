import { combineReducers } from 'redux';
import productReducer from './postReducer';

export default combineReducers({
    post: productReducer
})