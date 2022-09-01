import React from "react";
import style from "./preloader.module.scss";
import classnames from "classnames";

const Spinner = () => {
    return (
        <>
            <div className={classnames(style.spinner, style["spinner--gray"]) }></div>
        </>

    )
}

export default Spinner;