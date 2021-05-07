// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {HomeComponent} from "../components/homeComponent";
import {getTasks, Task} from "../data";
import {LinkButton, ButtonTypes} from "../components/UI/LinkButton";
import {useQuery} from "react-query";

type Props = {

};

export function HomeContainer(props: Props) {

    const {data} = useQuery("getTasks" , getTasks)

    return (
        <>
            <h1 className="text-center">Task Manager</h1>
            <hr/>
            {data && <HomeComponent tasks={data}/>}

            <LinkButton variant={ButtonTypes.Success} title={"Create Task"} link={"/createTask"}/>
        </>
    );
}