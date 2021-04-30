import React from 'react'

import ListItem from '../ListItem/ListItem'

import style from './ListContainer.module.css'

interface todoListInterface {
  id: string,
  todoName: string | undefined
}

const ListContainer = (props: any) => {

  const [todoList, setTodoList] = React.useState<todoListInterface[]>([{id: 'fooobarbaz', todoName: 'fooBarBaz'}])
  const [userInput, setUserInput] = React.useState('')

  const addListItem = () => {

    const todoItem = {
      id: Math.ceil(Math.random() * 10000) + '__' + userInput,
      todoName: userInput
    }
    setTodoList([...todoList, todoItem])

    setUserInput('')
  }

  const removeListItem = (todoId: string) => (
    setTodoList(todoList.filter(elem => todoId !== elem.id))
  )

  const changeHandler = (event: any) => {
    setUserInput(event.target.value)
  }

  const keyDownHandler= (event: any) => {
    if(event.keyCode === 13) {
      addListItem()
    }
  }

  return (
    <div className={style.container}>
      <h3>List Container</h3>
      <ul>
        {todoList.map((item, index) => (
          <li key={index} className={style.list_item}>
            <ListItem txt={item.todoName} />
            <span
              className="button button__red"
              style={{
                width: 'calc(20% - 20px)',
              }}
              onClick={() => removeListItem(item.id)}>Delete</span>
          </li>
        ))}
      </ul>
      <div className={style.add_item_wrapper}>
        <div
          className="button"
          onClick={addListItem}
          style={{
            marginLeft: '0'
          }}
          >+</div>
        <input
          className="input"
          onChange={changeHandler}
          value={userInput}
          type="text"
          placeholder="Add Item"
          style={{
            width: '50%'
          }}
          onKeyDown={keyDownHandler}
        />
      </div>
    </div>
  )
}

export default ListContainer