// @flow
import React, {useEffect} from 'react';
import './edit.css'
import {CustomObject, getTask, postUpdate, Task, Task as ITask, TaskStatus} from "../../data";
import {useHistory} from "react-router-dom";
import {ROUTE_HOME} from "../../data/route";
import {CreateTaskComponent} from "../createTask/CreateTaskComponent";
import {useFormik} from "formik";
import * as yup from "yup";
import {i18next} from "../../lib/i18n";

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

    const handleClose = () => {
        props.setEditTask({status : false , id : ""})
    }

    return (
        <div className={"custom-modal pt-5"}>
            <div className="content-modal container">
                <span className="close-modal" onClick={handleClose}>&times;</span>

                {/*@ts-ignore*/}
                <CreateTaskComponent formik={formik}/>

            </div>
        </div>
    );
}