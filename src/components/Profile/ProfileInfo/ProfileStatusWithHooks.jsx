import React, { useEffect, useState } from "react";
import classes from './ProfileInfo.module.css';
/*
changeStatus = (e) => {
    this.setState({ status: e.currentTarget.value });
}
componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        })
    }
}
*/
const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const changeStatus = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div>
            {!editMode &&
                <div className={classes.statusInfo}>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        className={classes.statusInfo}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                        onChange={changeStatus}>
                    </input>
                </div>
            }
        </div>
    );
};


export default ProfileStatus;