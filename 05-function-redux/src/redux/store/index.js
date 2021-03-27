import { createStore } from 'redux';
import reducersCombine from '../reducers'; 

const store = createStore(
    reducersCombine,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

export default store;