import React from 'react';
import App from './components/App';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

let store = createStore(rootReducer);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)