import React, { useMemo } from 'react'

const ExpensiveCalculation = ({ handleClick }) => {

    const jj = useMemo(() => {
        let heavyNum = 3
        for (let i = 0; i < 1000000; i++) {
            heavyNum += 1;
        }
        return heavyNum
    }, [])

    return (
        <>
            <h5>ExpensiveCalculation</h5>
            <h1>{jj}</h1>
            <button onClick={handleClick}>up</button>
        </>
    );
}

export default ExpensiveCalculation


