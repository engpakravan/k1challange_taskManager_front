// @flow
import * as React from 'react';
import {FormError} from "./FormError";

type Props = {
    label : string
    name : string
    type : string
    formik : any ,
    width ?: string
};

export function Input(props: Props) {

    return (
        <div className={"row mb-2"}>
            <label className="col-sm-2 col-form-label">{props.label}</label>

            <div className="col-sm-10">
                <input name={props.name} type="text" className="form-control col-sm-10" onBlur={props.formik.handleBlur}
                       onChange={props.formik.handleChange}
                       value={props.formik.values[props.name]}/>
                {props.formik.touched[props.name] && props.formik.errors[props.name] ? (
                    <FormError error={props.formik.errors[props.name]}/>
                ) : null}
            </div>

        </div>
    );
};