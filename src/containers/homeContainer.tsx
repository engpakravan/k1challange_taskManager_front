// @flow
import * as React from 'react';
import {HomeComponent} from "../components/homeComponent";
import {getTasks, Task} from "../data";
import {LinkButton, ButtonTypes} from "../components/UI/LinkButton";
import {useQuery} from "react-query";
import {LinearProgress, Typography} from "@material-ui/core";

type Props = {

};

export function HomeContainer(props: Props) {

    const {data , isLoading} = useQuery("getTasks" , getTasks)

    return (
        <>
            <hr/>
            {isLoading && <LinearProgress color={"primary"}/>}
            {data && <HomeComponent tasks={data}/>}

            <LinkButton className={"mt-5"} variant={ButtonTypes.Success} title={"Create Task"} link={"/createTask"}/>
        </>
    );
}