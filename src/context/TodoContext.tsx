import React from "react";
import { TodoStatus } from "../common/constants";


export interface Todo {
  id: string,
  title: string,
  status: TodoStatus
};

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

const TodoContext = React.createContext(todosArr);

export default TodoContext;