import React from "react";
import classes from './FormsControls.module.css';


export const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error: '')}>
            <textarea {...input} {...props} />
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    );
};


export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error: '')}>
            <input {...input} {...props} />
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    );
};