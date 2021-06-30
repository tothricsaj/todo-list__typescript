import React, { useContext, useEffect, useState } from "react";
import style from './List.module.css';

import TodoContext, { Todo } from "../../context/TodoContext";
import { TodoStatus, All } from "../../common/constants";

import ListElem from "./ListElem/ListElem";

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
        {todoList.map((todo, i) => <ListElem key={i} index={i} title={todo.title}/>)}
      </ul>
    </div>
  );
}

export default ListComponent;