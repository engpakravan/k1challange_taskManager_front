import React, {useState} from 'react';
import {PostTask, Task, TaskStatus} from "../data";
import {LinkButton} from "../components/UI/LinkButton";
import {ROUTE_HOME} from "../data/route";
import {ButtonTypes} from "../components/UI/Button";
import {CreateTaskComponent} from "../components/createTaskComponent";
import {useFormik} from "formik";
import {useHistory} from "react-router-dom";
import * as yup from 'yup'
import {i18next} from "../lib/i18n";
import {useMutation} from "react-query";

type Props = {

};

export function CreateTaskContainer(props: Props) {

    const history = useHistory()
    const mutation = useMutation(PostTask , {onSuccess : () => {
        alert("Created");
        history.push(ROUTE_HOME)
    }})
    const formik = useFormik({
        initialValues : {title : "" , desc : "" , status : TaskStatus.TODO} ,
        validationSchema : yup.object({
            title : yup.string().required(i18next.t("validation.required" , {field : "form.title"})),
            desc : yup.string().required(i18next.t("validation.required" , {field : "form.desc"})),
            status : yup.string().required(i18next.t("validation.required" , {field : "form.status"})),
        }) ,
        onSubmit : (val) =>  mutation.mutate(val)
    })

    return (
        <>
            {/*@ts-ignore*/}
            <CreateTaskComponent formik={formik}/>

            <LinkButton variant={ButtonTypes.Warning} title={"Back"} link={ROUTE_HOME} className={"mt-2"}/>

        </>
    );
}