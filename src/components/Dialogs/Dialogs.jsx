import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogItems";
import MessageItem from "./MessageItems/MessageItems";
import SendMessageBlockContainer from "./SendMessageBlock/SendMessageBlockContainer";


const Dialogs = (props) => {

    let dialogs = props.store.getState().dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = props.store.getState().dialogsPage.messagesData.map(m => <MessageItem message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                <div>
                   {messages} 
                </div>
                <SendMessageBlockContainer />
            </div>

        </div>
    );
}


export default Dialogs;