import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt='logo' />
            <div className={classes.authBlock}>
                {props.isAuth
                ? props.login
                : <NavLink className={classes.authLink} to='/login'>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;