import React from 'react'
import { useNavigate } from 'react-router-dom'

const FirstPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>FirstPage</div>
      <button className='btn btn-primary'
        onClick={() => navigate('/')}
      >Home Page</button>
      <button className='btn btn-primary mx-2'
        onClick={() => navigate(-2)}
      >navigate to -2</button>
    </>
  )
}

export default FirstPage