import React from 'react';
import Button from '../../Components/Button';
import TextField from '../../Components/TextField';
import Paper from '@material-ui/core/Paper';
import './Login.css';
const Login = () => {


    return (
        <div className='login-page-div'>
            <Paper className='login-page'>
                <TextField placeholder='username' />
                <TextField password='password' />
                <Button variant="contained">Login</Button>
            </Paper>
        </div>);
}

export default Login;
