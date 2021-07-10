import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

export default function TodoList() {
    const todoList = useSelector((store) => store.todoReducer);
    const list = todoList.map((td) => (
        <Todo
            className='list-group-item'
            style={{ cursor: 'pointer' }}
            key={td.id}
            {...td}
        />
    ));
    return (
        <div>
            <h2>Todo List</h2>
            <hr />
            <div>
                <ul className='list-group'>{list}</ul>
            </div>
        </div>
    );
}
