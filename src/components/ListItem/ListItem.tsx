import React from 'react'

import './ListItem.css'

const listItem = (props: any) => {
  return (
      <p className="list-item">{props.txt}</p>
  )
}

export default listItem