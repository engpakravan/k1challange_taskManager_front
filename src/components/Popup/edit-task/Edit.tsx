// @flow
import React, {useEffect} from 'react';
import {CustomObject, getTask, postUpdate, Task, Task as ITask, TaskStatus} from "../../../data";
import {useHistory} from "react-router-dom";
import {ROUTE_HOME} from "../../../data/route";
import {useFormik} from "formik";
import * as yup from "yup";
import {i18next} from "../../../lib/i18n";
import {Popup} from "../popup";
import {CreateTaskComponent} from "../../createTaskComponent";

type Props = {
    setEditTask : React.Dispatch<React.SetStateAction<any>> ,
    id : string
};

const initialValues : Task = {title : "" , status : TaskStatus.TODO , desc : ""}

export function EditTask(props: Props) {

    const history = useHistory()

    useEffect(() => {
        getTask(props.id).then((res : CustomObject) => Object.keys(initialValues).forEach(item => formik.setFieldValue(item , res[item])))
    } , [props.id]);

    const formik = useFormik({
        initialValues ,
        validationSchema : yup.object({
            title : yup.string().required(i18next.t("validation.required" , {field : "form.title"})),
            desc : yup.string().required(i18next.t("validation.required" , {field : "form.desc"})),
            status : yup.string().required(i18next.t("validation.required" , {field : "form.status"})),
        }) ,
        onSubmit : (val : ITask) => {
            postUpdate(props.id , val).then(res => {
                alert("Updated");
                props.setEditTask({status : false})
                history.push(ROUTE_HOME)
            })
        }
    })

    return (
        <Popup setEditTask={props.setEditTask}>

            {/*@ts-ignore*/}
            <CreateTaskComponent formik={formik}/>

        </Popup>
    );
}