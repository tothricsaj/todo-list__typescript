import React, { useState } from 'react';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import List from './components/List/List';
import TodoController from './components/TodoController/TodoController';

import TodoContext, { Todo } from './context/TodoContext';
import { TodoStatus, All } from './common/constants';

import './App.css';

const todosArr: Todo[] = [
  {
    title: 'Foo',
    status: TodoStatus.IN_PROGRESS
  },
  {
    title: 'Bar',
    status: TodoStatus.IN_PROGRESS
  },
  {
    title: 'Baz',
    status: TodoStatus.READY
  }
];

function App() {

  const [status, setStatus] = useState<TodoStatus|All>(All.ALL_TODO);

  return (
    <ErrorBoundary>
      <TodoContext.Provider value={todosArr}>
        <div className="App">
          <h2 style={{marginBottom: '20px'}}>Todo app</h2>
          <TodoController 
            showAll={() => setStatus(All.ALL_TODO)}
            showInProgress={() => setStatus(TodoStatus.IN_PROGRESS)}
            showReady={() => setStatus(TodoStatus.READY)}
          />
          <List
            todoStatus={status}
          />
        </div>
      </TodoContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
