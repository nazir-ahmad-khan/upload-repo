
function DefaultProps({user="New User"}){
// function DefaultProps(props){
    return(
        <>
            <h2 style={{color:"blue", border:"2px solid yellow", width:"400px"}}>
                Asalam O Alikum: {user}
            </h2>
            {/* <h2>Asalam O Alikum: {props.user}</h2> */}
        </>
    )
}
export default DefaultProps;