import { useState } from "react";

function SkillsChecked() {

    // This use in Skills Name Stat 1
    // const [skills, setSkills] = useState([])
    // const handleSkills = (event) => {
    //     console.log(event.target.value, event.target.checked);
    //     if (event.target.checked) {
    //         setSkills([...skills, event.target.value])
    //     } else {
    //         setSkills([...skills.filter((item) => item != event.target.value)])
    //     }
    // }















        const[college, setCollege] = useState([]);
        const checkClass =(subject) => {
            console.log(subject.target.value);

            if(subject.target.checked){
                setCollege([...college, subject.target.value])
            } else {
                setCollege([...college.filter((role) => role!=subject.target.value )] )
            }
        }

    return (
        <>
        <h1>This is a New Checkboxs presonal practice</h1>
        <input onChange={checkClass} type="checkbox" id="pre-medical" value="Pre-Medical" />
        <label htmlFor="pre-medical"> Pre-Medical</label>
        <br />
        <br />

        <input onChange={checkClass} type="checkbox" id="pre-engeerning" value=" Pre-Engeerning" />
        <label htmlFor="pre-engeerning"> Pre-Engeerning</label>
        <br />
        <br />

        <input onChange={checkClass} type="checkbox" id="ics" value=" ICS" />
        <label htmlFor="ics"> ICS</label>
        <br />
        <br />

        <input onChange={checkClass} type="checkbox" id="icom" value=" I.Com" />
        <label htmlFor="icom"> I.Com</label>
        <br />
        <br />

        <input onChange={checkClass} type="checkbox" id="fa-it" value=" FA IT" />
        <label htmlFor="fa-it"> FA IT</label>
        
        <h2>
        {college.toString()}
        </h2>





























        {/* This use in Skills Name Stat 1 */}
            {/* <h2>Select Your Skills</h2>
            <input onChange={handleSkills} type="Checkbox" id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <br />

            <input onChange={handleSkills} type="Checkbox" id="java" value="java" />
            <label htmlFor="java">JAVA</label>
            <br />
            <br />

            <input onChange={handleSkills} type="Checkbox" id="js" value="js" />
            <label htmlFor="js">JS</label>
            <br />
            <br />

            <input onChange={handleSkills} type="Checkbox" id="node" value="node" />
            <label htmlFor="node">Node</label>

            <h1>{skills.toString()}</h1> */}

        </>
    )
}
export default SkillsChecked;