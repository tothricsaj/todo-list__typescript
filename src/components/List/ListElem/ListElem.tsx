import React from "react";
import style from './ListElem.module.css';
import '../../../App.css';

import { TodoStatus } from '../../../common/constants';

const ListElem = (props: any) => {
  const deleteElem = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.deleteElem();
  }

  const toggleReady = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    props.toggleReady();
  }

  return (
    <li
      key={props.index}
      className={[
        style.wrapper,
        (props.status === TodoStatus.IN_PROGRESS ? style.inProgress : null),
        (props.status === TodoStatus.READY ? style.inReady : null),
      ].join(" ")}
      onClick={props.toggleInProgress}
    >
      <div
        className={[
          style.checkReady,
          (props.status === TodoStatus.READY ? style.readyTodo : null)
        ].join(' ')}
        onClick={toggleReady}
      ></div>
      {props.status === TodoStatus.READY
        ? (
          <div style={{
            width: '75%',
            borderBottom: '1px solid var(--dark-blue)',
            position: 'absolute',
            left: '5%'
          }}></div>
        )
        : null
      }

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