import College from "./College";
import Data from "./Data";
import DefaultProps from "./DefaultProps";

function ReadProps(){

    let employe1 = {
        Name:"Nazir Ahmad",
        age: 30,
        email:"nazir@gmail.com"
    }

    let employe2 = {
        Name:"Alam Shar",
        age: 35,
        email:"alam@gmail.com"
    }

    let classes=["Medical", "Engineerning", "ICS", "IC Stat", "FA IT"];
    
    // let Name="Nazir Ahmad";
    // let age= 30;
    // let email= "nazir@gmail.com";

    let emp1 = "Nazir Ahamd"

    return(
        <>
        <h1>Props Data</h1>
        <DefaultProps user={emp1} />
        <DefaultProps  />
        <DefaultProps user="Naveed Ahmad" />


        {/* <Data emp={Name} umer={age} gmail={email} /> */}
       
        <College college={classes}/>
        
        <Data user={employe1} />
        <Data user={employe2} />
        </>
    )
}

export default ReadProps;