import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
  { id: 1, name: 'Person 1' },
  { id: 2, name: 'Person 2' },
  { id: 3, name: 'Person 3' },
  { id: 4, name: 'Person 4' },
];


let messagesData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'Hi' },
  { id: 3, message: "What's you doing?" },
  { id: 4, message: 'Fine' },
];


let postsData = [
  { id: 1, message: 'Hello i am post 1', likesCount: 12 },
  { id: 2, message: 'Hello i am post 2', likesCount: 14 },
  { id: 3, message: 'Hello i am post 3', likesCount: 16 },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>
);


reportWebVitals();