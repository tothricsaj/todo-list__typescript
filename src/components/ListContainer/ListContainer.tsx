import React from 'react'

import ListItem from '../ListItem/ListItem'

import './ListContainer.css'

const listContainer = (props: any) => {
  return (
    <div className="container">
      <h3>List Container</h3>
      <ListItem />
    </div>
  )
}

export default listContainer