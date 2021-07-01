import React, { EventHandler, MouseEventHandler } from "react";
import style from './ListElem.module.css';
import '../../../App.css';

import { TodoStatus } from '../../../common/constants';

const ListElem = (props: any) => {
  const deleteElem = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.deleteElem();
  }
  return (
    <li
      key={props.index}
      className={[
        style.wrapper,
        (props.status === TodoStatus.IN_PROGRESS ? style.inProgress:null)
      ].join(" ")}
      onClick={props.toggleInProgress}
    >
      <label className={style.cbContainer}>
        <input type="checkbox" />
        <span className={style.checkMark}></span>
      </label>
      <p style={{marginLeft: '25px'}}>
        {props.title}
      </p>
      <div
        style={{
          marginLeft: 'auto',
        }}
        className={[
          "button button__red",
          (props.status === TodoStatus.IN_PROGRESS ? style.button__red__inProgress:null)
        ].join(" ")}
        onClick={deleteElem}
      >Delete</div>
    </li>
  );
}

export default ListElem;