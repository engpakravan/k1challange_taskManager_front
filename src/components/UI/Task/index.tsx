import React , {memo} from 'react';
import './task.css'
import { Task as ITask } from "../../../data";
import { Avatar , Grid, makeStyles, Paper, Typography, withStyles} from "@material-ui/core";

type Props = {
    task : ITask ,
    setEditTask : React.Dispatch<React.SetStateAction<any>>
};

const useStyles = makeStyles((theme) => ({
    paper : {
        margin : `${theme.spacing(1)}px 0 10px 0 `,
        padding : theme.spacing(2) ,
        width : 400 ,
        overflowX : "hidden",
        transition : ".3s ease" ,
        '&:hover' : {
            transition : ".3s ease" ,
            backgroundColor : theme.palette.secondary.main ,
            cursor : "pointer"
        }
    }
}))


function Task({task , setEditTask}: Props) {

    const classes = useStyles()

    const handleClick = () => setEditTask({status : true , id : task._id});

    return (
        <Paper onClick={handleClick} className={classes.paper}>
            <Grid container spacing={2} >
                <Grid item>
                    <Avatar alt={""} src={"https://media-exp1.licdn.com/dms/image/C4E03AQEZAZFJfpUb-Q/profile-displayphoto-shrink_400_400/0/1619871996062?e=1625702400&v=beta&t=9BHmL1hQtU0bnvcnI0DnE4vrSUpi0E3ea3KVuUpfR_w"}></Avatar>
                </Grid>
                <Grid item>
                    <Typography>{task.title}</Typography>
                    <p>{task.desc}</p>
                </Grid>
                {/*<button className="btn btn-primary" onClick={() => }>Detail</button>*/}
            </Grid>
        </Paper>
    );
}

export default Task