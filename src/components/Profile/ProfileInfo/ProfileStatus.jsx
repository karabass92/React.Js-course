import React from "react";
import classes from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({ editMode: true });
    }
    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    }
    changeStatus = (e) => {
        this.setState({ status: e.currentTarget.value });
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={classes.statusInfo}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            className={classes.statusInfo}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            onChange={this.changeStatus}>
                        </input>
                    </div>
                }
            </div>
        );
    }
};


export default ProfileStatus;