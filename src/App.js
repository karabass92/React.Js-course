import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    };
    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/profile/:userId?' element={<ProfileContainer />} />
                            <Route path='/dialogs/*' element={<DialogsContainer />} />
                            <Route path='/news' element={<News />} />
                            <Route path='/music' element={<Music />} />
                            <Route path='/users' element={<UsersContainer />} />
                            <Route path='/settings' element={<Settings />} />
                            <Route path='/login' element={<Login />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = (state) => {
    return {initialized: state.app.initialized}
};


export default connect(mapStateToProps, { initializeApp })(App);