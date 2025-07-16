import React from 'react'

const Filter = ({onCategoryChange}) => {
  return (
    <select onChange={onCategoryChange}></select>
  )
}

export default Filter;