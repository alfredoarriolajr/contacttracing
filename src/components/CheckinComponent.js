import React from 'react'
import HomeComponent from './HomeComponent'
import {  FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function CheckinComponent() {
    return (
        <div className='container'>
            <h1>Contact Tracing</h1>
            <video className="vid" src='/videos/video-2.mp4' autoPlay loop muted />
                <div className="col-sm-4">
                <FormGroup row>
                    <Label className='label'>Name</Label>
                    <Col>
                        <Input className='input' type="text" placeholder="Your Name" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className='label'>email</Label>
                    <Col>
                        <Input className='input' type="text" placeholder="Your email" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className='label'>Phone Number</Label>
                    <Col>
                        <Input className='input' type="text" placeholder="(___)-___-____." />
                    </Col>
                </FormGroup>
                </div>
                <hr />
                <Link to='/'>
                <button className='btn' onClick={HomeComponent}>Submit</button>
                </Link>
        </div>
    )
}

export default CheckinComponent
