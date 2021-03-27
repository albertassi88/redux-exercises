import { combineReducers } from 'redux';
import walletReducers from '../reducers/wallet';

const combined = combineReducers({ walletReducers });

export default combined;