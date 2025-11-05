import { useState } from "react";

function Toggle(){

    const[changeName, setChangeName]= useState(true);

    return(
        <>
        <h1>Hide my Name</h1>

        {
            changeName? <h1>Toggle Nazir Ahamd</h1>:null
        }

        <button onClick={()=> {setChangeName(!changeName)}}>Toggle</button>
        </>
    )
}
export default Toggle;