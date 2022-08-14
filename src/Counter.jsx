import React, { useState } from 'react'
import ExpensiveCalculation from './ExpensiveCalculation'

const Counter = () => {
    const [counting, setCounting] = useState(5)

    const handleClick = () => setCounting(c => c + 1)


    return (
        <div className='mt-3'>
            <h5>Counter</h5>
            <h1>{counting}</h1>
            <button onClick={handleClick}>up</button>
            <ExpensiveCalculation handleClick={handleClick} />
        </div>
    )
}

export default Counter

