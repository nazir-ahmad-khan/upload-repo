import { useState } from "react";

function OptionsValue() {

    const[gender, setGender] = useState("female");
    const[city, setCity] = useState("dikhan")


    return(
        <>
        <h2>Select Gender</h2>
        <input type="radio" name="gender" onChange={(event) => setGender (event.target.value)} id="male" 
        checked={gender == 'male'} value={"male"} />
        <label htmlFor="male">Male</label>

        <input type="radio" name="gender" onChange={(event) => setGender (event.target.value)} id="female" 
        checked={gender == 'female'} value={"female"} />
        <label htmlFor="female">Female</label>
        <h3>Choise Gender: {gender}</h3>

        <h2>Select City</h2>
        <select onChange={(event) => setCity(event.target.value)} defaultValue={"dikhan"}>
            <option value="tank">Tank</option>
            <option value="dikhan">D I Khan</option>
            <option value="rawalpindi">Rawalpindi</option>
        </select>

        <h3>Choise City: {city}</h3>

        </>
    )
}
export default OptionsValue;