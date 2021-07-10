import React from 'react';
import { useDispatch } from 'react-redux';

export default function Todo({ text, id, done, className, style }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'TOGGLE_DONE', id });
    };
    return (
        <div className={className} style={style}>
            <h3
                style={{ textDecoration: done ? 'line-through' : 'none' }}
                onClick={handleClick}
            >
                <button
                    onClick={() => dispatch({ type: 'DELETE_TODO', id })}
                    className='text-danger text-end'
                >
                    &times;
                </button>{' '}
                {text}
            </h3>
        </div>
    );
}
