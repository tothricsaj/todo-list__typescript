import React, { useState } from 'react';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import List from './components/List/List';
import TodoController from './components/TodoController/TodoController';
import AddTodo from './components/AddTodo/AddTodo';

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
          if(elem.status !== TodoStatus.IN_PROGRESS) {
            elem.status = TodoStatus.IN_PROGRESS;
          } else if(elem.status === TodoStatus.IN_PROGRESS) {
            elem.status = TodoStatus.PENDING;
          }

          return elem;
        }
        return elem;
      })
    );
  }

  const toggleReady = (id: string) => {
    console.log('toggleReady');
    setTodos(
      todos.map(elem => {
        if(elem.id === id) {
          if(elem.status !== TodoStatus.READY) {
            console.log('elem title -> ', elem.title);
            console.log('if statment before -> ', elem.status);
            elem.status = TodoStatus.READY;
            console.log('if statment after -> ', elem.status);
          } else if (elem.status === TodoStatus.READY) {
            console.log('else if statment before -> ', elem.status);
            elem.status = TodoStatus.PENDING;
            console.log('else if statment after -> ', elem.status);
          }
          return elem;
        }
        return elem;
      })
    );
  }

  const addTodo = (todo: Todo) => setTodos([...todos, todo])

  return (
    <ErrorBoundary>
      <TodoContext.Provider value={todos}>
        <div className="App">
          <h2 style={{marginBottom: '20px'}}>Todo app</h2>
          <AddTodo
            addTodo={addTodo}
          />
          <TodoController 
            status={status}
            showAll={() => setStatus(All.ALL_TODO)}
            showPending={() => setStatus(TodoStatus.PENDING)}
            showInProgress={() => setStatus(TodoStatus.IN_PROGRESS)}
            showReady={() => setStatus(TodoStatus.READY)}
          />
          <List
            todoStatus={status}
            deleteTodo={deleteTodo}
            toggleInProgress={toggleInProgress}
            toggleReady={toggleReady}
          />
        </div>
      </TodoContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
