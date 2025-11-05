import { useState } from "react"

function MultipalCondition() {

    const names=["Nazir", "Muhammad", "Idrees", "Waheed", "Mehran", "Maqbool", "Noor Rehman"];

    const[employe, setEmploye] = useState(0);
    const handelNames = () =>{
        setEmploye((prevEmploye) => (prevEmploye + 1) % names.length)
    }
    
    const prevsNames = () =>{
        setEmploye((prevEmploye) => (prevEmploye - 1 + names.length) % names.length)
    }
        
    return(
        <>
        <h1>Name: {names[employe]}</h1>
        <button onClick={handelNames}>Update Name</button>
        <button onClick={prevsNames}>Previous Name</button>
        
        </>
    )
}

export default MultipalCondition;