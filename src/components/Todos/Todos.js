//১১. json placeholder এর ওয়েবসাইট এ গিয়ে todo এর ডাটা লোড করে। সেগুলাকে দেখাতে পারো কিনা দেখো। 

import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <h1>Todos Apps!!{todos.length}</h1>
            <div className="todos_container">
            {
                todos.map(todo => <Todo 
                    todo={todo}
                    key={todo.id}
                    ></Todo>)
            }
            </div>
        </div>
    );
};

export default Todos;