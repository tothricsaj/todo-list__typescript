import React from "react";
import style from './AddTodo.module.css';

const AddTodo = (props: any) => {
  return(
    <div
      className={[
        'wrapper',
        style.wrapper
      ].join(' ')}
    >
      <input
        className="input"
        style={{width: '75%'}}
        type="text"
      />

      <div
        className="button"
        style={{marginLeft: 'auto'}}
      >Add todo</div>
    </div>
  )
}

export default AddTodo;