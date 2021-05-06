import React , {useState} from 'react';
import {Task, TaskStatus} from "../../data";

type Props = {
    taskData : Omit<Task , "_id"> ,
    setTaskData : React.Dispatch<React.SetStateAction<Omit<Task, "_id">>>
};

export function CreateTaskComponent({taskData , setTaskData}: Props) {

    return (
        <>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Task Title : </label>
                <div className="col-sm-10">
                    <input type="text" value={taskData.title || ""} className="form-control" onChange={(e) => {
                        setTaskData({ ...taskData , title : e.target.value})
                    }}/>
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Task Desc : </label>
                <div className="col-sm-10">
                    <textarea className="form-control" rows={10} onChange={(e) => {
                        setTaskData({ ...taskData , desc : e.target.value})
                    }} value={taskData.desc}/>
                </div>
            </div>

            <select className="form-select mb-2" aria-label="Default select example" onChange={(e) => {setTaskData({...taskData, status: e.target.value as TaskStatus})}}>
                {
                    Object.values(TaskStatus).map((taskStatus , index) =>
                        <option selected={taskData.status === taskStatus}>{taskStatus}</option>
                    )
                }
            </select>
        </>
    );
};