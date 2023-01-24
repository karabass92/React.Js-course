import React from "react";
import classes from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Person 1</div>
                <div className={classes.dialog}>Person 2</div>
                <div className={classes.dialog}>Person 3</div>
                <div className={classes.dialog}>Person 4</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>What's you doing?</div>
                <div className={classes.message}>Fine</div>
            </div>
        </div>
    );
}


export default Dialogs;