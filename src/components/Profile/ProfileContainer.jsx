import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) { userId = 2 };
        this.props.getProfile(userId);
    };
    render() {
        if(!this.props.isAuth) {
            return <Navigate to={"/login"} />
        };
        return (
            <Profile profile={this.props.profile} />
        );
    };
};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    };
    return ComponentWithRouterProp;
};


export default connect(mapStateToProps, { getProfile })(withRouter(ProfileContainer));