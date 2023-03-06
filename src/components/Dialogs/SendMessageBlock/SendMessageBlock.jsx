import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormsControls/FormsControls";
import classes from './SendMessageBlock.module.css';



const SendMessageBlock = (props) => {
    return (
        <form className={classes.main} onSubmit={props.handleSubmit}>
            <Field 
            name={'newMessageText'} 
            component={TextArea} 
            placeholder="Type a new message here" 
            className={classes.textInput} 
            validate={[requiredField, maxLengthCreator(10)]} />
            <button type={'submit'} className={classes.button}>Send message</button>
        </form>
    );
}


const SendMessageForm = reduxForm({
    form: 'contact'
})(SendMessageBlock)


export default SendMessageForm;