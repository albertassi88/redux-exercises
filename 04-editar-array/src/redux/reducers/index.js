import { combineReducers } from 'redux';
import user from '../reducers/user';

const combine = combineReducers({ user });

export default combine;