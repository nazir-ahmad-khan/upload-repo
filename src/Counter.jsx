import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const counting = () => {
        setCount((prev) => (prev + 1))
    }

    const reCounting = () => {
        setCount((prev) => (prev - 1))
    }
    return (
        <>
            <h1>
                This is a Counter
            </h1>

            <h1>Update Number: {count} </h1>
            <h2>Update Number: {count} </h2>

            <button onClick={counting}>Next</button>
            <button onClick={reCounting}>Previous</button>
        </>
    )
}
export default Counter;