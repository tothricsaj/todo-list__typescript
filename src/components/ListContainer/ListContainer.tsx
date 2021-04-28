import React from 'react'

import ListItem from '../ListItem/ListItem'

import './ListContainer.css'

interface todoListInterface {
  id: string,
  todoName: string | undefined
}

const ListContainer = (props: any) => {

  const [todoList, setTodoList] = React.useState<todoListInterface[]>([])
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

  return (
    <div className="container">
      <h3>List Container</h3>
      <ul>
        {todoList.map((item, index) => (
          <li key={index} className="list-item">
            <ListItem txt={item.todoName} />
            <span
              className="button button__red"
              style={{
                width: '20%',
              }}
              onClick={() => removeListItem(item.id)}>Delete</span>
          </li>
        ))}
      </ul>
      <div className="add-item-wrapper">
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
        />
      </div>
    </div>
  )
}

export default ListContainer