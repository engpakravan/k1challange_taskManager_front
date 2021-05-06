// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {HomeComponent} from "../components/home";
import {getTasks, Task} from "../data";
import {LinkButton, ButtonTypes} from "../components/UI/LinkButton";

type Props = {

};

export function Home(props: Props) {

    const [tasks , setTasks] = useState<Array<Task>>()

    useEffect(() => {
        getTasks().then(setTasks)
    } , []);

    return (
        <>
            <h1 className="text-center">Task Manager</h1>
            <hr/>
            {!tasks ? <h5>Loading...</h5> : <HomeComponent tasks={tasks}/>}

            <LinkButton variant={ButtonTypes.Success} title={"Create Task"} link={"/createTask"}/>
        </>
    );
};