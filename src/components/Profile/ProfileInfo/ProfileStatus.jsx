import React from "react";
import classes from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deactivateEditMode() {
        this.setState(
            {
                editMode: false
            }
        )
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={classes.statusInfo}>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input className={classes.statusInfo} autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.props.status}></input>
                    </div>
                }
            </div>
        );
    }
};


export default ProfileStatus;