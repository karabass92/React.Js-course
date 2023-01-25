import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogItems";
import MessageItem from "./MessageItems/MessageItems";


const Dialogs = (props) => {

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

    let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = messagesData.map(m => <MessageItem message={m.message} />);

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