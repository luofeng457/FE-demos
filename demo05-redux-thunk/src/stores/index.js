import reducer from '../reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose;
const enhancer = composeEnhancer(applyMiddleware(thunk));

const store = createStore(
    reducer,
    enhancer
);

export default store;