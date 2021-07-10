# react-redux-hooks


This app is created using the vitejs tool (as opposed to create-react-app). This is super fast, and hence fun.

If you want to create a new react application using vite, use the following instructions:

1. run the command `npm init @vitejs/app <name-of-your-app> --template react
2. once the project is created, `cd` into the project directory
3. install the dependencies using the `npm install` command
4. to start the dev server, run the command `npm run dev`

### Redux stuffs:

#### 1. Reducer: 

todoReducer.js
```javascript
const initialState = [
    { id: 1, text: 'Make this work', done: true, created: Date.now() },
    { id: 2, text: 'Teach this to students', done: false, created: Date.now() },
    { id: 3, text: 'Push this to GitHub', done: false, created: Date.now() },
];
export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'ADD_TODO': {
            const id = Math.max(...state.map((td) => td.id)) + 1;
            return [
                ...state,
                { id, text: action.text, done: false, created: Date.now() },
            ];
        }
        case 'DELETE_TODO': {
            const arr = [...state];
            const index = arr.findIndex((td) => td.id === action.id);
            if (index !== -1) {
                arr.splice(index, 1);
            }
            return [...arr];
        }
        case 'DELETE_ALL_TODOS': {
            return [];
        }
        case 'TOGGLE_DONE': {
            const arr = [...state];
            const index = arr.findIndex((td) => td.id === action.id);
            if (index !== -1) {
                arr[index].done = !arr[index].done;
            }
            return [...arr];
        }

        default:
            return state;
    }
}
```

rootReducer.js:
```javascript
import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

export default combineReducers({
    todoReducer,
});
```

#### 2. creating store:

```javascript
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer);
```

#### 3. using the store:

```javascript
function App() {
    return (
        <Provider store={store}>
            ...
            ...
        </Provider>
    );
}
export default App;
```

#### 4. using the state:

```javascript
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
```

#### 5. using the dispatch:

```javascript
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
```
