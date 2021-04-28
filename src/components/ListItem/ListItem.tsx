import React from 'react'

import './ListItem.css'

const listItem = (props: any) => {
  return (
    <li className="list-item">
      <p>{props.txt}</p>
    </li>
  )
}

export default listItem