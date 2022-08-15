import { useDeferredValue, useState, useTransition, useEffect } from "react"

//create list of number
const bigArray = [...Array(20000).keys()]

const Example2 = () => {
    const [inputValue, setInputValue] = useState('')
    const [list, setList] = useState(bigArray)
    const [isPending, startTransition] = useTransition()
    //adding input value -> help to search by delay
    const deferredInput = useDeferredValue(inputValue)

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        //start transition help to see immediately what ever typing in field
        startTransition(() => {
            console.log(deferredInput)
            //adding deferredInput in include() for searching in array of number
            const filtered = bigArray.filter(item => item.toString().includes(deferredInput))
            setList(filtered)
        })
    }, [deferredInput])

    return (
        <div className="App">
            <input type="text" val={inputValue} onChange={handleInput} />
            <section style={isPending ? { opacity: 0.4 } : null}>
                <p>Searching for: {deferredInput || "All"}</p>
                {isPending ? <p>Loading...</p> : null}
                <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
            </section>
        </div>
    );
}
export default Example2