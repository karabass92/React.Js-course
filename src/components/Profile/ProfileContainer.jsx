import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {userId = 2};
        usersAPI.getUserProfile(userId).then(data => {
                this.props.setUserProfile(data)
            });
    };
    render() {
        return (
            <Profile profile={this.props.profile} />
        );
    };
};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
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


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));