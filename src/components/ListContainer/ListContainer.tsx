import React, { useEffect } from 'react'

import style from './ListContainer.module.css'

import ListItem from '../ListItem/ListItem'
import StatusSelector from '../StatusSelector/StatusSelector'

import { STATUS } from '../../common/constants'

interface todoListInterface {
  id: string,
  todoName: string | undefined,
  status: STATUS,
  readyTask?: boolean
}

const ListContainer = (props: any) => {

  const [todoList, setTodoList] =
    React.useState<todoListInterface[]>([
      {id: 'fooobarbaz', todoName: 'foo', status: STATUS.DO},
      {id: 'fo334oobarbaz', todoName: 'bar', status: STATUS.DO},
      {id: 'f3338odSarbaz', todoName: 'baz', status: STATUS.DO},
      {id: 'b3338oXS98bdz', todoName: 'fooBar', status: STATUS.DO},
      {id: 'b33oiS984dz', todoName: 'fooBarBaz', status: STATUS.DO},
      {id: 'fokobarbaz', todoName: 'foo2', status: STATUS.DO},
      {id: 'fol34oobarbaz', todoName: 'bar2', status: STATUS.DO},
      {id: 'f3i38odSarbaz', todoName: 'baz2', status: STATUS.DO},
      {id: 'b3p38oXS98bdz', todoName: 'fooBar2', status: STATUS.DO},
      {id: 'b3uoiS984dz', todoName: 'fooBarBaz2', status: STATUS.DO}
    ])

  const [userInput, setUserInput] = React.useState('')

  const addListItem = () => {

    const todoItem = {
      id: Math.ceil(Math.random() * 10000) + '__' + userInput,
      todoName: userInput,
      status: STATUS.DO
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
    // TODO(tothricsaj): don't put empty string into todoList
    if(event.keyCode === 13) {
      addListItem()
    }
  }

  const setListElemStatus = (itemId: string) => {
    const listElemIndex = todoList.findIndex(el => itemId === el.id)
    let tmpTDList = [...todoList]

    return function(status: STATUS) {

      tmpTDList[listElemIndex] = {...tmpTDList[listElemIndex], status: status}

      setTodoList(tmpTDList)
      // console.log(tmpTDList[listElemIndex])
    }
  }

  useEffect(() => {
    console.log(todoList)
  })

  return (
    <div className={style.container}>
      <StatusSelector />
      <ul>
        {todoList.filter(el => el.status === STATUS.DO).map((item, index) => (
          <li key={index} className={style.list_item}>
            <ListItem 
              listElemStatus={setListElemStatus(item.id)}
              txt={item.todoName} />
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