import React from 'react'
import '../styles/style.css';

const Task = ({ title }) => (
    <div className='Task-container'>
        <div className='Task-title'>  {title} </div>
    </div>
);

export default Task