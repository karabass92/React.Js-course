import React from "react";
import classes from './SendMessageBlock.module.css';


const SendMessageBlock = (props) => {
    
    let messageText = React.createRef();

    let onMessageTextChange = () => {
        let text = messageText.current.value;
        props.changeMessageText(text);
    };

    let onAddMessage = () => {
        props.addMessage();
    };

    return (
        <div className={classes.main}>
            <textarea placeholder="Type a new message here" ref={messageText} value={props.newMessageText} onChange={onMessageTextChange} className={classes.textInput} />
            <button onClick={onAddMessage} className={classes.button}>
                Send message
            </button>
        </div>
    );
};


export default SendMessageBlock;