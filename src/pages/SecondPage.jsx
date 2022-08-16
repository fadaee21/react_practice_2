import React from 'react'
import { useLocation } from 'react-router-dom'

const SecondPage = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div>SecondPage</div>
  )
}

export default SecondPage