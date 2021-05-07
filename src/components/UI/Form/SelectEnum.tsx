// @flow
import * as React from 'react';
import {TaskStatus} from "../../../data";
import {FormError} from "./FormError";

type Props = {
    label : string
    name : string
    enumData : string[],
    formik : any ,
    selected ?: string
};

export function SelectEnum(props: Props) {
    const selected = props.formik.values.status
    return (
        <>
            <label>{props.label}</label>
            <select className="form-select mb-2" name={props.name} onChange={props.formik.handleChange}>
                {
                    props.enumData.map((val , index) =>
                        <option selected={selected && selected === val}>{val}</option>
                    )
                }
            </select>
            {props.formik.touched[props.name] && props.formik.errors[props.name] ? (
                <FormError error={props.formik.errors[props.name]}/>
            ) : null}
        </>
    );
};