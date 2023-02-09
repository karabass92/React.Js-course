import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));


const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </React.StrictMode>
    );
};


renderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});


reportWebVitals();