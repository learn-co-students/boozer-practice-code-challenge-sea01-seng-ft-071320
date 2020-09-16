import React from 'react'

const Cocktail = ({ name, id }) => {
  return (
    <li key={id}>{name}</li>
  )
}

export default Cocktail
