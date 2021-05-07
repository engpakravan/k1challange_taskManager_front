import React from 'react';
import {TaskStatus} from "../data";
import {useFormik} from "formik";
import {Input} from "./UI/Form/Input";
import {Textarea} from "./UI/Form/Textarea";
import {SelectEnum} from "./UI/Form/SelectEnum";
import {Button, ButtonTypes} from "./UI/Button";

type Props = {
    formik : Pick<ReturnType<typeof useFormik>, "validateForm" | "handleSubmit" | "setFieldValue" | "errors" | "touched" | "handleChange" | "handleBlur" | "initialValues">
};

export function CreateTaskComponent({formik}: Props) {

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input label={"Title"} name={"title"} type={"text"} formik={formik}/>
            <Textarea label={"Desc"} name={"desc"} formik={formik}/>

            <SelectEnum label={"Status"} name={"status"} enumData={Object.values(TaskStatus)} formik={formik}/>

            <Button variant={ButtonTypes.Success} title={"Submit"} type={"submit"}/>
        </form>
    );
};