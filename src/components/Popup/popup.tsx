// @flow
import * as React from 'react';
import './popup.css'

type Props = {
    children : React.ReactNode,
    setEditTask : React.Dispatch<React.SetStateAction<any>> ,
};

export function Popup(props: Props) {

    const handleClose = () => {
        props.setEditTask({status : false , id : ""})
    }

    return (
        <div className={"custom-modal pt-5"}>
            <div className="content-modal container">
                <span className="close-modal" onClick={handleClose}>&times;</span>
                {props.children}
            </div>
        </div>
    );
};