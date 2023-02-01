import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import state from './redux/state';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar friendsData={props.state.sideBar.friendsData} />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile
                            postsData={props.state.profilePage.postsData}
                            addPost={props.addPost}
                            newPostText={props.state.profilePage.newPostText}
                            updateNewPostText={props.updateNewPostText} />} />
                        <Route path='/dialogs/*' element={<Dialogs
                            dialogsData={props.state.dialogsPage.dialogsData}
                            messagesData={props.state.dialogsPage.messagesData}
                            newMessageText={state.dialogsPage.newMessageText} 
                            updateNewMessageText={props.updateNewMessageText}
                            addMessage={props.addMessage}/>} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;