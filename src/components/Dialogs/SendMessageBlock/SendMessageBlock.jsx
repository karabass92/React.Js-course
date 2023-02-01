import React from "react";
import classes from './SendMessageBlock.module.css';


const SendMessageBlock = (props) => {

    let messageText = React.createRef();

    let onMessageTextChange = () => {
        let newText = messageText.current.value;
        props.updateNewMessageText(newText)
    };

    return (
        <div className={classes.main}>
            <textarea ref={messageText} value={props.newMessageText} onChange={onMessageTextChange} className={classes.textInput} />
            <button onClick={props.addMessage} className={classes.button}>
                Send message
            </button>
        </div>
    );
};


export default SendMessageBlock;