import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItems/MessageItems";
import { Navigate } from "react-router-dom";


const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messages = props.messagesData.map(m => <MessageItem key={m.id} message={m.message} />);
    let messageText = React.createRef();
    let onMessageTextChange = () => { props.changeMessageText(messageText.current.value) };
    let onAddMessage = () => { props.addMessage() };

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
                <div className={classes.main}>
                    <textarea placeholder="Type a new message here" ref={messageText} value={props.newMessageText} onChange={onMessageTextChange} className={classes.textInput} />
                    <button onClick={onAddMessage} className={classes.button}>Send message</button>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;