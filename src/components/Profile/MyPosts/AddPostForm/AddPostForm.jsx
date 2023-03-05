import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from './AddPostForm.module.css'


const AddPostForm = (props) => {
    return (
        <form className={classes.createPostBlock} onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder="Input a new post here" className={classes.newPostText} />
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