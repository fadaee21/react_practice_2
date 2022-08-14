import React from 'react'

const ShowTodo = ({ todoArr }) => {
    // console.log(todoArr)
    return (
        <>
            {
                todoArr.map((item, i) => {
                    return (
                        <div key={i} >

                            <h5 >{item.todo}</h5>
                            <span>{item.id}</span>
                        </div>
                    )
                })
            }
            
        </>
    )
}

export default ShowTodo