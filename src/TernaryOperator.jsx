import { useState } from "react"

function TernaryOperator() {

    const[ternary, setTernary] = useState(0);
    return(
        <>

        <h1>{ternary} </h1>

        {
            ternary==0? <h1>Condition 0</h1>
            :ternary==1? <h1>Condition 1</h1>
            :ternary==2? <h1>Condition 2</h1>
            :ternary==3? <h1>Condition 3</h1>
            :ternary==4? <h1>Condition 4</h1>
            :ternary==5? <h1>Condition 5</h1>
            :ternary==6? <h1>Condition 6</h1>
            :<h1>Other Condition</h1>
        }

        <button onClick={() => setTernary(ternary + 1)}>
            Counting
        </button>

        </>
    )
}
export default TernaryOperator;