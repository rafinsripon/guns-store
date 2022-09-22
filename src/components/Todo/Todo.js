import React from 'react';
import './Todo.css';
const Todo = (props) => {
    console.log(props.todo)
    const {title, userId, completed, id} = props.todo;
    return (
        <div className='toto'>
            <h2>id: {id} userId{userId}</h2>
            <h3>Title: {title}</h3>
            <p>{completed}</p>
        </div>
    );
};

export default Todo;