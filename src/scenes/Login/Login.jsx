import React from 'react';
import Button from '../../Components/Button';
import TextField from '../../Components/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Login = () => {

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(3, 2),
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <TextField placeholder='username' />
                <TextField password='password' />
                <Button variant="contained">Login</Button>
            </Paper>
        </div>);
}

export default Login;
