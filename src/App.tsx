import React, { useEffect, useState } from 'react';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import List from './components/List/List';
import TodoController from './components/TodoController/TodoController';

import TodoContext, { Todo } from './context/TodoContext';
import { TodoStatus, All } from './common/constants';

import './App.css';

const todosArr: Todo[] = [
  {
    id: '12w2',
    title: 'Foo',
    status: TodoStatus.IN_PROGRESS
  },
  {
    id: '12w5',
    title: 'Bar',
    status: TodoStatus.IN_PROGRESS
  },
  {
    id: '12w95',
    title: 'Baz',
    status: TodoStatus.READY
  }
];

function App() {

  const [status, setStatus] = useState<TodoStatus|All>(All.ALL_TODO);
  const [todos, setTodos] = useState(todosArr);

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(el => el.id !== id));
  }

  const toggleInProgress = (id: string) => {
    setTodos(
      todos.map(elem => {
        if(elem.id === id) {
          elem.status === TodoStatus.IN_PROGRESS
            ? elem.status = TodoStatus.PENDING
            : elem.status = TodoStatus.IN_PROGRESS 
          ;
          return elem;
        }
        return elem;
      })
    );
  }

  return (
    <ErrorBoundary>
      <TodoContext.Provider value={todos}>
        <div className="App">
          <h2 style={{marginBottom: '20px'}}>Todo app</h2>
          <TodoController 
            showAll={() => setStatus(All.ALL_TODO)}
            showInProgress={() => setStatus(TodoStatus.IN_PROGRESS)}
            showReady={() => setStatus(TodoStatus.READY)}
          />
          <List
            todoStatus={status}
            deleteTodo={deleteTodo}
            toggleInProgress={toggleInProgress}
          />
        </div>
      </TodoContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
