import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../../utils/validators/validators";
import { TextArea } from "../../../common/FormsControls/FormsControls";
import classes from './AddPostForm.module.css'


const AddPostForm = (props) => {
    return (
        <form className={classes.createPostBlock} onSubmit={props.handleSubmit}>
            <div>
                <Field 
                component={TextArea} 
                name={'newPostText'} 
                placeholder="Input a new post here" 
                className={classes.newPostText} 
                validate={[requiredField, maxLengthCreator(10)]} />
            </div>
            <div>
                <button type={'submit'} className={classes.addPostBtn}>
                    Add post
                </button>
            </div>
        </form>
    );

};


const AddPostFormRedux = reduxForm({form: 'ProfileAddNewPost'})(AddPostForm);


export default AddPostFormRedux;