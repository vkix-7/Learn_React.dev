import React from 'react'
import { useContext } from 'react'
import { inputcontext } from '../context/context'
const Footer1 = () => {
    const ipvalue = useContext(inputcontext); 
  return (
    <div>This is Footer1 and Counter is {ipvalue}</div>
  )
}

export default Footer1