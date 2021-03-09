import React from 'react';
import { Button,Colors } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    // console.log(props.course);
    const { name, price, instructor, image } = props.course;
    return (
        <div className="course">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="col-md-6">
                <h2 className="text-secondary">Course Title: {name}</h2>
                <h2 className="text-info">Price: {price}</h2>
                <h2 className="text-danger">Instructor: {instructor}</h2>
                <Button variant="warning" onClick={()=>(props.handleButton(props.course))}>Enroll Now</Button>
            </div>
        </div>
    );
};

export default Course;