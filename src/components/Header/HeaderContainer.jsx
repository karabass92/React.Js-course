import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.getAuth().then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login);
                }
            });
    };
    render() {
        return (
            <Header {...this.props} />
        );
    };
};


const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);