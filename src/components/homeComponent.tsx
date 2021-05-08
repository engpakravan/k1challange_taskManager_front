import * as React from 'react';
import {useState} from 'react';
import {Task as ITask, TaskStatus} from "../data";
import Task from "./UI/Task";
import {EditTask} from "./Popup/edit-task/Edit";
import {Chip, Grid} from "@material-ui/core";

type Props = {
    tasks : Array<ITask>
};

export function HomeComponent(props: Props) {

    const fetchTasks = (taskStatus : TaskStatus) => props.tasks.map(task => task.status === taskStatus && <Task setEditTask={setEdit} task={task} key={task._id}/>);


    const [edit , setEdit] = useState({
        status : false ,
        id : ""
    })

    return (
        <div className={"mb-3"}>

            { edit.status && <EditTask setEditTask={setEdit} id={edit.id}/>}

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} container justify={"center"}>
                    <Grid container justify={"center"}><Chip color={"primary"} variant={"default"} label={TaskStatus.TODO}/></Grid>
                    { fetchTasks(TaskStatus.TODO) }
                </Grid>
                <Grid item xs={12} sm={4} container justify={"center"}>
                    <Grid container justify={"center"}><Chip color={"secondary"} variant={"outlined"} label={TaskStatus.DOING}/></Grid>
                    { fetchTasks(TaskStatus.DOING) }
                </Grid>
                <Grid item xs={12} sm={4} justify={"center"}>
                    <Grid container justify={"center"}><Chip color={"primary"} variant={"outlined"} label={TaskStatus.DONE}/></Grid>
                    { fetchTasks(TaskStatus.DONE) }
                </Grid>
            </Grid>

        </div>
    );
}