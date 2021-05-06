import React , {memo} from 'react';
import './task.css'
import {Task as ITask, TaskStatus} from "../../../data";

type Props = {
    task : ITask ,
    setEditTask : React.Dispatch<React.SetStateAction<any>>
};

const getBadge = (status : TaskStatus) => {
    switch (status) {
        case TaskStatus.DELETED:
            return <span className={"badge bg-danger"}>Deleted</span>
        case TaskStatus.DOING:
            return <span className={"badge bg-primary"}>Doing</span>
        case TaskStatus.DONE:
            return <span className={"badge bg-success"}>Done</span>
        case TaskStatus.TODO:
            return <span className={"badge bg-warning"}>Todo</span>
    }
}

function Task({task , setEditTask}: Props) {
    return (
        <div className={"task"}>
            <h3>{task.title} {getBadge(task.status)}</h3>
            <p>{task.desc}</p>
            <button className="btn btn-primary" onClick={() => setEditTask({status : true , id : task._id})}>Detail</button>
        </div>
    );
}

export default Task