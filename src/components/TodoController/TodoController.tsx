import React from "react";
import style from './TodoController.module.css';


const TodoController = (props: any) => {
  return (
    <div className={style.wrapper}>
      <div
        className="button"
        onClick={props.showAll}
      >All</div>

      <div
        className="button"
        onClick={props.showPending}
      >Pending</div>

      <div
        className="button"
        onClick={props.showInProgress}
      >In progress</div>

      <div
        className="button"
        onClick={props.showReady}
      >Ready</div>
    </div>
  );
}

export default TodoController;