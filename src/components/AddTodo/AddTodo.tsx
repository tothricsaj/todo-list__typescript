import React, { useRef } from "react";
import { TodoStatus } from "../../common/constants";
import style from './AddTodo.module.css';

const AddTodo = (props: any) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if(inputEl.current && inputEl.current.value) {
      console.log(inputEl.current.value);
      props.addTodo({
        id: Math.random().toString(),
        title: inputEl.current.value,
        status: TodoStatus.PENDING
      });
      inputEl.current.value = '';
    } else {
      console.log('No value');
    }
  }

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.keyCode === 13) addTodo();
  }

  return(
    <div
      className={[
        'wrapper',
        style.wrapper
      ].join(' ')}
    >
      <input
        ref={inputEl}
        className="input"
        style={{width: '75%'}}
        onKeyDown={handleEnterPress}
        type="text"
      />

      <div
        className="button"
        style={{marginLeft: 'auto'}}
        onClick={addTodo}
      >Add todo</div>
    </div>
  )
}

export default AddTodo;