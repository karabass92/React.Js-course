import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Person 1' id='1' />
                <DialogItem name='Person 2' id='2' />
                <DialogItem name='Person 3' id='3' />
                <DialogItem name='Person 4' id='4' />
            </div>
            <div className={classes.messages}>
                <Message message='Hello' />
                <Message message='Hi' />
                <Message message="What's you doing?" />
                <Message message='Fine' />
            </div>
        </div>
    );
}


export default Dialogs;