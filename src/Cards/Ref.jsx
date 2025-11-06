import { useRef } from "react"

function Ref(){
    const handlePara = useRef(null);
    const hideAndShow =()=>{
        if(handlePara.current.style.display!="none"){
            handlePara.current.style.display="none"
        }else{
            handlePara.current.style.display="inline"
        }
    }

    const HandleColor = () => {
        if(handlePara.current.style.color!="red"){
            handlePara.current.style.color="red"
        }else{
            handlePara.current.style.color="black"
        }
    }



    return(
        <>
        <h1 ref={handlePara}>useRef is a hook in React JS ya kisi DOM element ya Mutlobla value ko store karny k lia use hota hai </h1>
        <br/>
        <button onClick={hideAndShow}>Update</button>
        <button onClick={HandleColor}>Update Color</button>
        </>
    )
}
export default Ref;