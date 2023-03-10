import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/authReducer";
import LoginForm from "./LoginForm/LoginForm";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, { login })(Login);