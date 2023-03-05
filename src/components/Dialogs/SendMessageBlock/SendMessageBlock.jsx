import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from './SendMessageBlock.module.css';



const SendMessageBlock = (props) => {
    return (
        <form className={classes.main} onSubmit={props.handleSubmit}>
            <Field name={'newMessageText'} component={'textarea'} placeholder="Type a new message here" className={classes.textInput} />
            <button type={'submit'} className={classes.button}>Send message</button>
        </form>
    );
}


const SendMessageForm = reduxForm({
    form: 'contact'
})(SendMessageBlock)


export default SendMessageForm;