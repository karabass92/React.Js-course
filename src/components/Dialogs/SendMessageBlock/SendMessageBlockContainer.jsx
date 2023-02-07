import React from "react";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogsReducer";
import SendMessageBlock from "./SendMessageBlock";


const SendMessageBlockContainer = (props) => {

    let state = props.store.getState();

    let changeMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    return (
        <SendMessageBlock addMessage={addMessage} changeMessageText={changeMessageText} newMessageText={state.dialogsPage.newMessageText} />
    );
};


export default SendMessageBlockContainer;