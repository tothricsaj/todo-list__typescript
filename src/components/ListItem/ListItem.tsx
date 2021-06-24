import React, { useEffect } from 'react'

import style from './ListItem.module.css'

import { STATUS } from '../../common/constants'

const ListItem = (props: any) => {
  const [readyTask, setReadyTask] = React.useState<boolean>(false)

  const toggleReady = () => {
    console.log('clickek -> ', props.txt)
    setReadyTask( prevReadyTask => !prevReadyTask)
  }

  useEffect(() => {
    console.log(readyTask)
    props.listElemStatus(
      readyTask ? STATUS.READY : STATUS.DO,
    )
    if(readyTask) {
      console.log('ready task -> ', props.txt)
    }
  }, [readyTask])

  return (
    <div className={`
      ${style.list_item}
      ${readyTask ? style.list_tem__ready : ''}
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