import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer);
function App() {
    return (
        <Provider store={store}>
            <div className='alert alert-primary'>
                <div className='container'>
                    <h1>React/Redux (using hooks)</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <TodoForm></TodoForm>
                    </div>
                    <div className='col'>
                        <TodoList></TodoList>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
