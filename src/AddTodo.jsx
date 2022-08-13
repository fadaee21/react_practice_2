import React, { useState } from 'react'
import ShowTodo from './ShowTodo'

const AddTodo = () => {
    const [todo, setTodo] = useState("")
    const [todoArr, setTodoArr] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            todo: todo, id: Date.now().toString()
        }
        setTodoArr(old => [...old, newTask])
    }
    return (
        <>
            <div className="App">
                <form onSubmit={handleSubmit} >
                    <input type={'text'} onChange={e => setTodo(e.target.value)} />
                    <button type='submit' >add todo</button>
                </form>
            </div>

            <ShowTodo todoArr={todoArr} />
        </>
    );
}

export default AddTodo