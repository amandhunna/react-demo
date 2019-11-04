import React from 'react';
import Button from '../../Components/Button';
import './Dashboard.css';
import { AuthConsumer } from '../../Context';
import RedirectTo from '../../Components/RedirectTo'

const Dashboard = () => {
    return (
        <AuthConsumer>
            {({ isLoggedIn }) => {
                const loginFLag = (typeof isLoggedIn) === 'string' ? isLoggedIn === 'true' : isLoggedIn; 
               console.log(loginFLag, typeof loginFLag)
                if (loginFLag) {
                    return (
                        <>
                            <div className='dashboard-page-div' >
                                <div className='part1' style={{ backgroundImage: `url("/ginni.jpg")` }}>
                                    <h1>People who love cars will like this</h1>
                                    <div className='flex agree-reason'>
                                        <Button className='agree'>Agreed and Explore more</Button>
                                        <Button className='reason'>Need Reasons to Love this</Button>
                                    </div>
                                </div>
                            </div>
                        </>);
                }
                else return RedirectTo('login');
            }}
        </AuthConsumer>
    );
}

export default Dashboard;
