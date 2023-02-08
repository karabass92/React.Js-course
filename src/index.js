import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyContext from './StateContext';


const root = ReactDOM.createRoot(document.getElementById('root'));


const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <MyContext.Provider value={store}>
                <App store={store}/>
            </MyContext.Provider>
        </React.StrictMode>
    );
};


renderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});


reportWebVitals();