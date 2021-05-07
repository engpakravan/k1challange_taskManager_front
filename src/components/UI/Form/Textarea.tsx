// @flow
import * as React from 'react';
import {FormError} from "./FormError";

type Props = {
    label : string
    name : string
    formik : any ,
    width ?: string
    rows ?: number
};

export function Textarea(props: Props) {

    return (
        <div className={"row mb-2"}>
            <label className="col-sm-2 col-form-label">{props.label}</label>

            <div className="col-sm-10">
                <textarea name={props.name} className="form-control col-sm-10" onBlur={props.formik.handleBlur} rows={props.rows || 10}
                       onChange={props.formik.handleChange}
                       value={props.formik.values[props.name]}/>
                {props.formik.touched[props.name] && props.formik.errors[props.name] ? (
                    <FormError error={props.formik.errors[props.name]}/>
                ) : null}
            </div>

        </div>
    );
};