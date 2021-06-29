import React from "react";
import { TodoStatus } from "../common/constants";


export interface Todo {
  title: string,
  status: TodoStatus
};

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

const TodoContext = React.createContext(todosArr);

export default TodoContext;