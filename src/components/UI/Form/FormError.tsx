// @flow
import * as React from 'react';

type Props = {
    error : string
};

export function FormError(props: Props) {
    return (
        <span className={"text-danger"}>{props.error}</span>
    );
};