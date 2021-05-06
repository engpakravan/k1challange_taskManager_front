// @flow
import * as React from 'react';
import {Link} from 'react-router-dom'

export enum ButtonTypes {
    Primary = "primary" ,
    Secondary = "secondary" ,
    Danger = "danger" ,
    Success = "success" ,
    Warning = "warning"
}
type Props = {
    variant : ButtonTypes,
    title : string
    link : string
    className ?: string
};

export function LinkButton(props: Props) {
    return (
        <Link to={props.link}>
            <button className={`btn btn-${props.variant} ${props.className}`}>{props.title}</button>
        </Link>
    );
};