// @flow
import * as React from 'react';
import {Button as MuiButton} from '@material-ui/core'

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
        <MuiButton variant={"outlined"} color={"secondary"} type={props.type} onClick={props.handler} className={props.className}>{props.title}</MuiButton>
    );
};