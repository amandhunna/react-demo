import React from 'react';
import Button from '../../Components/Button';
import TextField from '../../Components/TextField';

const Login = () => {
    return (
        <div>
            <TextField placeholder='username' />
            <TextField password='password' />
            <Button variant="contained">Login</Button>
        </div>);
}

export default Login;