import React from "react";
import { Field, reduxForm } from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" placeholder={'login'} component={'input'} />
            </div>
            <div>
                <Field name="password" placeholder={'password'} component={'input'} />
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