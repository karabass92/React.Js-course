import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                name="email" 
                placeholder={'login'} 
                component={Input} 
                validate={[requiredField]} />
            </div>
            <div>
                <Field 
                name="password" 
                placeholder={'password'} 
                type={'password'}
                component={Input} 
                validate={[requiredField]} />
            </div>
            <div>
                <Field name="remeberMe" component={'input'} type={'checkbox'} />Remember me
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    );
};


const LoginReduxForm = reduxForm({
    form: 'contact'
  })(LoginForm)


export default LoginReduxForm;