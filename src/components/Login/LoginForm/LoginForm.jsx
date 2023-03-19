import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";
import classes from './LoginForm.module.css'


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field 
                name="email" 
                placeholder={'login'} 
                component={Input} 
                validate={[requiredField]}
                className={error ? classes.error : null} />
            </div>
            <div>
                <Field 
                name="password" 
                placeholder={'password'} 
                type={'password'}
                component={Input} 
                validate={[requiredField]} 
                className={error ? classes.error : null} />
            </div>
            <div>
                <Field name="remeberMe" component={'input'} type={'checkbox'} />Remember me
            </div>
            {error ? <span className={classes.errorMessage}>{error}</span> : null}
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    );
};


const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)


export default LoginReduxForm;