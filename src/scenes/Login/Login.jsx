import React from 'react';
import Button from '../../Components/Button';
import TextField from '../../Components/TextField';
import Paper from '@material-ui/core/Paper';
import './Login.css';
import { AuthConsumer } from '../../Context'


const Login = (props) => {
    return (
        <AuthConsumer>
            {(loginState) => {
                const { setIsLogin } = loginState;
                return (
                    <div className='login-page-div'>
                        <Paper className='login-page'>
                            <TextField placeholder='username' />
                            <TextField password='password' />
                            <Button variant="contained" onClick={() => {
                                setIsLogin(true);
                                props.history.push('/');
                            }}>Login</Button>
                        </Paper>
                    </div>
                );
            }}
        </AuthConsumer>
    )
}
export default Login;
