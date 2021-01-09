import React from 'react';
import '../App.css';
import CheckinComponent from './CheckinComponent'
import { Link } from 'react-router-dom';

function HomeComponent() {
    return (
        <div className='container'>
            <video className="vid" src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Contact Tracing</h1>
            <Link to='/checkin'>
            <button className='btn' onClick={CheckinComponent}>Check in now!</button>
            </Link>
        </div>
    )
}

export default HomeComponent
