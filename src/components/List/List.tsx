import React, { useContext, useEffect, useState } from "react";
import style from './List.module.css';

import TodoContext, { Todo } from "../../context/TodoContext";
import { All } from "../../common/constants";

import ListElem from "./ListElem/ListElem";

const ListComponent = (props: any) => {
  const todos = useContext(TodoContext);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    if(props.todoStatus === All.ALL_TODO) {
      setTodoList(
        todos.map((todo, i) => todo)
      );
    } else {
      setTodoList(
        todos.filter((todo, i) => todo.status === props.todoStatus)
      );
    }
    console.log('listComponent todos -> ', todos);
    // console.log(props.todoStatus)
  }, [props.todoStatus, todos]);

  return (
    <div className={style.wrapper}>
      <p>{ props.todoStatus }</p>
      <ul>
        {todoList.map((todo, i) => (
          <ListElem
            key={i}
            index={i}
            title={todo.title}
            status={todo.status}
            toggleInProgress={() => props.toggleInProgress(todo.id)}
            toggleReady={() => props.toggleReady(todo.id)}
            deleteElem={() => props.deleteTodo(todo.id)}
          />)
          )}
      </ul>
    </div>
  );
}

export default ListComponent;