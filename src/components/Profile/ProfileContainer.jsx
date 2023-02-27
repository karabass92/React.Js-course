import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) { userId = 2 };
        this.props.getProfile(userId);
    };
    render() {
        return (
            <Profile profile={this.props.profile} />
        );
    };
};


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


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


export default compose(
    connect(mapStateToProps, { getProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);