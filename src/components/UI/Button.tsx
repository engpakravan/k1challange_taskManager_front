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
    handler : () => any,
    className ?: string
};

export function Button(props: Props) {
    return (
        <button onClick={props.handler} className={`btn btn-${props.variant} ${props.className}`}>{props.title}</button>
    );
};