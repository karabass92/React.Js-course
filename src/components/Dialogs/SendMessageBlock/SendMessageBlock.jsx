import React from "react";
import classes from './SendMessageBlock.module.css';


const SendMessageBlock = (props) => {

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    };

    return (
        <div className={classes.main}>
            <textarea ref={newMessage} className={classes.textInput}></textarea>
            <button onClick={addMessage} className={classes.button}>
                Send message
            </button>
        </div>
    );
}


export default SendMessageBlock;