import React from "react";
import { NavLink } from "react-router-dom";
import classes from './DialogItem.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialogsItems}>
            <NavLink to={path}>
                <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="avatar" />
            </NavLink>
            <NavLink to={path} className={(linkClass) => linkClass.isActive ? classes.active : classes.item}>
                {props.name}
            </NavLink>
        </div>
    );
}


export default DialogItem;