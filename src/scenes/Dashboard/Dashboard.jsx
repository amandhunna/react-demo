import React from 'react';
import Button from '../../Components/Button';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard-page-div' >
            <div className='part1' style={{ backgroundImage: `url("/ginni.jpg")` }}>
                <h1>People who love cars will like this</h1>
                <div class='flex agree-reason'>
                    <Button className='agree'>Agreed and Explore more</Button>
                    <Button className='reason'>Need Reasons to Love this</Button>
                </div>

            </div>
        </div>);
}

export default Dashboard;
