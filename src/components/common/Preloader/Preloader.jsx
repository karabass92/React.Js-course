import React from "react";
import style from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif'


const Preloader = () => {
    return (
        <div className={style.preloaderContainer}>
            <img className={style.isFetchingImg} src={preloader} alt='loading'/>
        </div>
    );
};


export default Preloader;