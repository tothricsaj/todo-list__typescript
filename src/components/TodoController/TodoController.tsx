import React from "react";
import { All, TodoStatus } from "../../common/constants";
import style from './TodoController.module.css';


const TodoController = (props: any) => {

  const activeClass = (
      status: TodoStatus | All,
      elemStatus: TodoStatus | All
    ) => status === elemStatus ? style.active : null

  return (
    <div className={style.wrapper}>
      <div
        className={[
          "button",
          activeClass(props.status, All.ALL_TODO)
        ].join(' ')}
        onClick={props.showAll}
      >All</div>

      <div
        className={[
          "button",
          activeClass(props.status, TodoStatus.PENDING)
        ].join(' ')}
        onClick={props.showPending}
      >Pending</div>

      <div
        className={[
          "button",
          activeClass(props.status, TodoStatus.IN_PROGRESS)
        ].join(' ')}
        onClick={props.showInProgress}
      >In progress</div>

      <div
        className={[
          "button",
          activeClass(props.status, TodoStatus.READY)
        ].join(' ')}
        onClick={props.showReady}
      >Ready</div>
    </div>
  );
}

export default TodoController;