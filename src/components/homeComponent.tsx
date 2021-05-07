import * as React from 'react';
import {useState} from 'react';
import {Task as ITask, TaskStatus} from "../data";
import Task from "./UI/Task";
import {EditTask} from "./Popup/edit-task/Edit";
import {Chip, Grid, Typography} from "@material-ui/core";

type Props = {
    tasks : Array<ITask>
};

export function HomeComponent(props: Props) {

    const [edit , setEdit] = useState({
        status : false ,
        id : ""
    })

    return (
        <div className={"mb-3"}>

            { edit.status && <EditTask setEditTask={setEdit} id={edit.id}/>}

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} container justify={"center"}>
                    <Grid container justify={"center"}><Chip color={"primary"} variant={"default"} label={"TODO"}/></Grid>
                    { props.tasks.map(task => task.status === TaskStatus.TODO && <Task setEditTask={setEdit} task={task} key={task._id}/>) }
                </Grid>
                <Grid item xs={12} sm={4} container justify={"center"}>
                    <Grid container justify={"center"}><Chip color={"secondary"} variant={"outlined"} label={"Doing"}/></Grid>
                    { props.tasks.map(task => task.status === TaskStatus.DOING && <Task setEditTask={setEdit} task={task} key={task._id}/>) }
                </Grid>
                <Grid item xs={12} sm={4} justify={"center"}>
                    <Grid container justify={"center"}><Chip color={"primary"} variant={"outlined"} label={"Done"}/></Grid>
                    { props.tasks.map(task => task.status === TaskStatus.DONE && <Task setEditTask={setEdit} task={task} key={task._id}/>) }
                </Grid>
            </Grid>

        </div>
    );
}