import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItems/MessageItems";
import { Navigate } from "react-router-dom";
import SendMessageForm from "./SendMessageBlock/SendMessageBlock";


const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messages = props.messagesData.map(m => <MessageItem key={m.id} message={m.message} />);

    const onSubmit = (formData) => {
        props.addMessage(formData.newMessageText);
    };

    if(!props.isAuth) {
        return <Navigate to={"/login"} />
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                <div>
                    {messages}
                </div>
                <SendMessageForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}


export default Dialogs;