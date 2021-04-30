import React from 'react'

import style from './StatusSelector.module.css'

const StatusSelector = () => {
  const [selectedBtn, setSelectedBtn] =
    React.useState({
      all: true,
      ready: false,
      deleted: false
    })

  const selectBtn = (selected: string) => {
    switch (selected) {
      case 'all':
        setSelectedBtn({
          all: true,
          ready: false,
          deleted: false
        })
        break
      case 'ready':
        setSelectedBtn({
          all: false,
          ready: true,
          deleted: false
        })
        break
      case 'deleted':
        setSelectedBtn({
          all: false,
          ready: false,
          deleted: true
        })
        break
      default: 
        setSelectedBtn({
          all: true,
          ready: false,
          deleted: false
        })
    }
  }

  return (
    <div className={style.status_wrapper}>
      <div
        className={`button ${selectedBtn.all ? 'button__selected':null }`}
        style={{marginLeft: '0'}}
        onClick={() => selectBtn('all')}
      >All</div>

      <div
        className={`button ${selectedBtn.ready ? 'button__selected':null }`}
        onClick={() => selectBtn('ready')}
      >Ready</div>

      <div
        className={`button ${selectedBtn.deleted ? 'button__selected':null }`}
        onClick={() => selectBtn('deleted')}
      >Deleted</div>
    </div>
  )
}

export default StatusSelector