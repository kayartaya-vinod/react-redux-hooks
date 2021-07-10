import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function TodoForm() {
    const [todoText, setTodoText] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({ type: 'ADD_TODO', text: todoText });
        setTodoText('');
    };

    return (
        <div>
            <h2>Todo Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='form-control'
                    name='todoText'
                    value={todoText}
                    onChange={({ target: { value } }) => setTodoText(value)}
                />
            </form>
        </div>
    );
}
