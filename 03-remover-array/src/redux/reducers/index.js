import { combineReducers } from 'redux';
import wallet from '../reducers/wallet';

const combine = combineReducers({ wallet });

export default combine;