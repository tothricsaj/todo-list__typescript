import React from 'react'

import style from './ListItem.module.css'

const ListItem = (props: any) => {
  const [readyTask, setReadyTask] = React.useState<boolean>(false)

  const toggleReady = () => {
    setReadyTask(!readyTask)
  }

  return (
    <div className={`
      ${style.list_item}
      ${readyTask ? style.list_tem__ready : null}
    `}>
      <input
        type="checkbox"
        className={style.check}
        onClick={toggleReady}
      />
      <p className={style.todo_name}>{props.txt}</p>
      <div className={readyTask ? style.ready_task : style.not_ready_task}></div>
    </div>
  )
}

export default ListItem