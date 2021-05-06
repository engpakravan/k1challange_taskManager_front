import React, {useState} from 'react';
import {PostTask, Task, TaskStatus} from "../data";
import {LinkButton} from "../components/UI/LinkButton";
import {ROUTE_HOME} from "../data/route";
import {Button, ButtonTypes} from "../components/UI/Button";
import {useHistory} from 'react-router-dom'
import {CreateTaskComponent} from "../components/createTask/CreateTaskComponent";

type Props = {

};

export function CreateTaskContainer(props: Props) {

    const [taskData , setTaskData] = useState<Omit<Task , "_id">>({desc : "" , title : "" , status : TaskStatus.TODO})
    const history = useHistory()

    const handleSubmit = () => {
        console.log(taskData)
        // if(taskData) PostTask(taskData).then(res => {
        //     alert("Created");
        //     history.push(ROUTE_HOME)
        // })
    }

    return (
        <>
            <CreateTaskComponent taskData={taskData} setTaskData={setTaskData}/>

            <Button variant={ButtonTypes.Success} title={"Submit"} handler={handleSubmit}/>
            <LinkButton variant={ButtonTypes.Warning} title={"Back"} link={ROUTE_HOME}/>

        </>
    );
}