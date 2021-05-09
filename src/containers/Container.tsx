// @flow
import * as React from 'react';
import {Route, Switch as RouteSwitch} from "react-router-dom";
import {ROUTE_CREATE_TASK, ROUTE_HOME} from "../data/route";
import {HomeContainer} from "./homeContainer";
import {CreateTaskContainer} from "./createTaskContainer";
import {
    Container,
    createMuiTheme,
    ThemeProvider,
    Switch,
    MuiThemeProvider,
    Grid,
    Chip,
    Typography
} from "@material-ui/core";
import {useEffect, useState} from "react";
import {UserContext} from '../store/contexts'
import {User} from "../data";

type Props = {

};

export function MainContainer(props: Props) {

    const [darkState , setDarkState] = useState(false);
    const primary = darkState ? "#2c2c2c" : "#ececec";
    const themeLight = createMuiTheme({
        palette: {
            primary : {
                main: "#6b89a5"
            },
            secondary : {
                main: "#1976d2"
            },
            background: {
                paper : "#222222"
            },
            text: {
                primary: "#e4f0e2"
            },
        }
    });
    const themeDark = createMuiTheme({
        palette: {
            primary : {
                main: "#7f7f7f"
            },
            secondary : {
                main: "#717171"
            },
            background: {
                paper : "#cbcbcb"
            },
            text: {
                primary: "#222222"
            },
        }
    });

    useEffect(() => {
        // @ts-ignore
        document.querySelector("body").style.backgroundColor = primary
    } , [darkState])

    return (
        <MuiThemeProvider theme={darkState ? themeDark : themeLight}>
            <Container fixed className={"mt-3"}>
                <Grid container justify={"center"}><Switch checked={darkState} onChange={() => setDarkState(!darkState)} /></Grid>
                <Grid container justify={"center"}>
                    <UserContext.Consumer>
                        {(userData : User) =>
                            <Typography className="text-center" color={"primary"}>{`Welcome : ` + userData.username}</Typography>
                        }
                    </UserContext.Consumer>
                </Grid>
                <Grid container justify={"center"}><Typography className="text-center" color={"primary"}>Task Manager</Typography></Grid>


                <RouteSwitch>

                    <Route path={ROUTE_HOME} exact><HomeContainer /></Route>

                    <Route path={ROUTE_CREATE_TASK}><CreateTaskContainer /></Route>

                </RouteSwitch>
            </Container>
        </MuiThemeProvider>
    );
};