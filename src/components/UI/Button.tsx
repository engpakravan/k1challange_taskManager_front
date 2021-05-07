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
    handler ?: () => any,
    className ?: string ,
    type ?: "submit" | "button" | "reset"
};

export function Button(props: Props) {
    return (
        <button type={props.type} onClick={props.handler} className={`btn btn-${props.variant} ${props.className}`}>{props.title}</button>
    );
};