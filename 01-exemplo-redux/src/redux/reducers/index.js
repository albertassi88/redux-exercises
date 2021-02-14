import { combineReducers } from 'redux';
import account from './account';

const combined = combineReducers({ account });

export default combined;