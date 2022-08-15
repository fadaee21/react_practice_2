import { useState, useTransition, useDeferredValue, useEffect } from "react"

const Example1 = () => {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    const [isPending, startTransition] = useTransition()
    //adding count state in defer hook
    const deferredCount = useDeferredValue(count)

    const handleClick = () => {
        setCount(count + 1)
        startTransition(() => {
            const myArr = Array(20000).fill(1).map((el, i) => (count + 20000) - i)
            setItems(myArr)
        })
    }

    useEffect(() => {
        console.log("count:" + count)
        console.log("deferredCount:" + deferredCount)
    }, [count, deferredCount])


    const content = (
        <div className="App">
            <button onClick={handleClick}>{count}</button>
            {isPending ? <p>Loading...</p> : null}
            {/* put count in defer hook and see when it will update (immediate or normal) */}
            <p>Deferred: {deferredCount}</p>
            <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
    )

    return content
}
export default Example1