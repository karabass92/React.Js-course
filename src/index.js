import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, addMessage, updateNewPostText, updateNewMessageText, subscribe } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));


const renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addMessage={addMessage} />
    </React.StrictMode>
  );
};


renderEntireTree(state);

subscribe(renderEntireTree);

reportWebVitals();