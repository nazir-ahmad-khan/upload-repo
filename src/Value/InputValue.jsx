import { useState } from "react";

function InputValue(){

    const[firstName, setFirstName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
    
    const useData = [firstName, email, password ];
    console.log(useData);

    setFirstName('');
    setEmail('');
    setPassword('');
    };
    

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div>
            <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="Enter User Name" />
        </div>
        
        <div>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email" />
        </div>
        
        <div>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" />
        </div>


            {/* <div><button onClick={() => {setFirstName(""); setEmail(""); setPassword("")}}>Clear</button> </div> */}

            <div><button type="submit">Submit</button> </div>

            <h2>{firstName}</h2>
            <h2>{email}</h2>
            <h2>{password}</h2>
        
        </form>

        </>
    )
}
export default InputValue;