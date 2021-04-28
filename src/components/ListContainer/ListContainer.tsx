import React from 'react'

import ListItem from '../ListItem/ListItem'

import './ListContainer.css'



const ListContainer = (props: any) => {

  const [todoList, setTodoList] = React.useState<(string | undefined)[]>([])
  const [userInput, setUserInput] = React.useState('')

  const addListItem = () => {
    setTodoList([...todoList, userInput])
    setUserInput('')
  }

  const changeHandler = (event: any) => {
    setUserInput(event.target.value)
  }

  return (
    <div className="container">
      <h3>List Container</h3>
      <ul>
        {todoList.map((item, index) => <ListItem txt={item} key={index} />)}
      </ul>
      <div className="add-item-wrapper">
        <div className="button" onClick={addListItem}>+</div>
        <input
          className="input"
          onChange={changeHandler}
          value={userInput}
          type="text"
          placeholder="Add Item"
        />
      </div>
    </div>
  )
}

export default ListContainer