import { useState } from 'react'
import Counter from './Counter'
import Toggle from './Toggle'
import MultipalCondition from './MultipalCondition'
import TernaryOperator from './TernaryOperator'
import ReadProps from './PropsClass/ReadProps'
import InputValue from './Value/InputValue'
import SkillsChecked from './Value/SkillsChecked'
import OptionsValue from './Value/OptionsValue'
import UserMap from './Value/userMap'
import Clock from './Value/Clock'
import Card from './Cards/Card'
import Ref from './Cards/Ref'



function App(){

const name = ["1: Nazir Ahmad", "2: Zohan", "3: Idrees", "4: Qibla Khan", "5: Naveed Ahmad", "6: Safdar", "7: Waseem Khan", "8: Tariq", "9: Fahim", "10: Zohaib"]
const[nameCounter, setNameCounter] = useState(0)
const nameNext = ()=> {
  setNameCounter((prevIndex) => (prevIndex + 1) % name.length )
}

const namePrevious =()=>{
  setNameCounter((prevIndex) => (prevIndex - 1 + name.length) % name.length)
}

    const[color, setColor] = useState("green")

  return(
    <>
    <h1>
    React Cours Practice
    </h1>
     {/* <h2>Update Name: {name[nameCounter]} </h2> */}

     {/* <button onClick={nameNext}>Next</button> */}
     {/* <button onClick={namePrevious}>Previous</button> */}


     <div>

      {/* Ya code Clock waly component k lia hai */}
    {/* <select onChange={(e) => setColor(e.target.value)}
            style={{padding: "6px", width: "100px"}}>
      <option value={"green"}>Green</option>
      <option value={"red"}>Red</option>
      <option value={"white"}>White</option>
      <option value={"yellow"}>Yellow</option>
      <option value={"blue"}>blue</option>
    </select> */}
      

      <div>
        <Ref />
      </div>
      <div>
        <Card />
      </div>

      <div>
        {/* <Clock color={color} /> */}
      </div>

      <div>
        {/* <UserMap /> */}
      </div>

      <div>
        {/* <OptionsValue /> */}
      </div>

      <div>
        {/* <SkillsChecked /> */}
      </div>

      <div>
        {/* <InputValue /> */}
      </div>

      <div>
        {/* <ReadProps/> */}
      </div>
      {/* <Counter /> */}
     </div>
     
     <div>
      {/* <Toggle /> */}
     </div>

     <div>
      {/* <MultipalCondition/> */}
     </div>
     
     <div>
      {/* <TernaryOperator/> */}
     </div>

    </>
  )
}

export default App
