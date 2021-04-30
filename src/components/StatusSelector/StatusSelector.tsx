import React from 'react'

import style from './StatusSelector.module.css'

const StatusSelector = () => {
 return (
   <div className={style.status_wrapper}>
    <div
      className="button button__selected"
      style={{marginLeft: '0'}}
    >All</div>

    <div className="button">Ready</div>
    <div className="button">Deleted</div>
   </div>
 )
}

export default StatusSelector