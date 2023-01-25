import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogItems";
import MessageItem from "./MessageItems/MessageItems";


const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = props.messagesData.map(m => <MessageItem message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
        </div>
    );
}


export default Dialogs;