import React, { useContext } from 'react'
import ComC from './ComC'
import { myName } from './ComA'
const ComB = () => {
  const name = useContext(myName)
  return (
    <>
    <h1>{name}</h1>
       <ComC/>
    </>
  )
}

export default ComB