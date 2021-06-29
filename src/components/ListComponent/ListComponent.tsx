import React, { useContext, useEffect, useState } from "react";
import style from './ListComponent.module.css';

import TodoContext, { Todo } from "../../context/TodoContext";
import { TodoStatus, All } from "../../common/constants";

const ListComponent = (props: any) => {
  const todos = useContext(TodoContext);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    if(props.todoStatus == All.ALL_TODO) {
      setTodoList(
        todos.map((todo, i) => todo)
      );
    } else {
      setTodoList(
        todos.filter((todo, i) => todo.status === props.todoStatus)
      );
    }
    console.log(todoList);
  }, [props.todoStatus]);

  return (
    <div className={style.wrapper}>
      <p>{ props.todoStatus }</p>
      <ul>
        {todoList.map((todo, i) => <li key={i}>{todo.title}</li>)}
      </ul>
    </div>
  );
}

export default ListComponent;