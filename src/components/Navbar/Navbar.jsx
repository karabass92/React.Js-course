import React from "react";
import { NavLink } from "react-router-dom";
import FriendsBlockContainer from "./FriendsBlock/FriendsBlockContainer";
import classes from './Navbar.module.css'


const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={(linkClass) => linkClass.isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={(linkClass) => linkClass.isActive ? classes.active : classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={(linkClass) => linkClass.isActive ? classes.active : classes.item}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={(linkClass) => linkClass.isActive ? classes.active : classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' className={(linkClass) => linkClass.isActive ? classes.active : classes.item}>Find users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={(linkClass) => linkClass.isActive ? classes.active : classes.item}>Settings</NavLink>
            </div>
            <FriendsBlockContainer />
        </nav>
    );
}


export default Navbar;