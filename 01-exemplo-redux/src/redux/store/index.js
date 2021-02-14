import { createStore } from 'redux';
import combined from '../reducers';

const store = createStore(combined);

export default store;