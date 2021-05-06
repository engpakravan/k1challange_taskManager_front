// @flow
import React, {useEffect, useState} from 'react';
import './edit.css'
import {Button, ButtonTypes} from "../UI/Button";
import {getTask, postUpdate, Task, TaskStatus} from "../../data";
import {useHistory} from "react-router-dom";
import {ROUTE_HOME} from "../../data/route";
import {CreateTaskComponent} from "../createTask/CreateTaskComponent";

type Props = {
    setEditTask : React.Dispatch<React.SetStateAction<any>> ,
    id : string
};

export function EditTask(props: Props) {

    const [taskData , setTaskData] = useState<Omit<Task , "_id">>({desc : "" , title : "" , status : TaskStatus.TODO})
    const history = useHistory()

    useEffect(() => {
        getTask(props.id).then(setTaskData)
    } , [props.id])

    const handleSubmit = () => {
        if(taskData) postUpdate(props.id , taskData).then(res => {
            alert("Updated");
            props.setEditTask({status : false})
            history.push(ROUTE_HOME)
        })
    }

    const handleClose = () => {
        props.setEditTask({status : false , id : ""})
    }

    return (
        <div className={"custom-modal pt-5"}>
            <div className="content-modal container">
                <span className="close-modal" onClick={handleClose}>&times;</span>

                <CreateTaskComponent taskData={taskData} setTaskData={setTaskData}/>

                <Button variant={ButtonTypes.Success} title={"Submit"} handler={handleSubmit}/>

            </div>
        </div>
    );
}