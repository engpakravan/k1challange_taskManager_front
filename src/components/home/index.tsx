import * as React from 'react';
import {Task as ITask} from "../../data";
import Task from "../UI/Task";
import {useState} from "react";
import {EditTask} from "./Edit";

type Props = {
    tasks : Array<ITask>
};

export function HomeComponent(props: Props) {

    const [edit , setEdit] = useState({
        status : false ,
        id : ""
    })

    console.log(props.tasks)

    return (
        <div className={"mb-3"}>

            { edit.status && <EditTask setEditTask={setEdit} id={edit.id}/>}

            { props.tasks.map(task => <Task setEditTask={setEdit} task={task} key={task._id}/>) }

        </div>
    );
}