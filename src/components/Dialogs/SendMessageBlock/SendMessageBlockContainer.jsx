import React from "react";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogsReducer";
import MyContext from "../../../StateContext";
import SendMessageBlock from "./SendMessageBlock";


const SendMessageBlockContainer = (props) => {

    /*let changeMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    */

    return (
        <MyContext.Consumer>
            {(store) => {
                let changeMessageText = (text) => {store.dispatch(updateNewMessageTextActionCreator(text))};
                let addMessage = () => {store.dispatch(addMessageActionCreator())};
                return (
                    <SendMessageBlock addMessage={addMessage} 
                        changeMessageText={changeMessageText} 
                        newMessageText={store.getState().dialogsPage.newMessageText} />
                )}
            }
        </MyContext.Consumer>
    );
};


export default SendMessageBlockContainer;