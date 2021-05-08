// @flow
import * as React from 'react';
import {Link} from 'react-router-dom'
import {Button} from "@material-ui/core";

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
            <Button variant={"contained"} className={"mt-2"} color={"secondary"} >{props.title}</Button>
        </Link>
    );
};