
import { useState } from "react";
import img from "./userImage.png";

function Card() {

    const [cardContainer, setCardContainer] = useState(
        {
            border: "1px solid rgb(204 204 204)",
            borderRadius: "10px",
            boxShadow: "1px 1px 1px 1px #cccccc54",
            // background: "#f5f5f5",
            textAlign: "center",
            padding: "15px 25px",
            margin: "2px",
            flex: "1 1 150px"

        })
    const [textColor, setTextColor] = useState('black')
    const [grid, setGrid] = useState(true)

    const updateTheme = (bgColor, textColor) => {
        setCardContainer({ ...cardContainer, backgroundColor: bgColor })
        setTextColor(textColor)
    }

    return (
        <>
            <div>
                <button onClick={() => updateTheme('#f5f5f5', 'red')}>Update Card</button>
                <button onClick={() => updateTheme('white', 'black')}>Update Card</button>
                <button onClick={() => setGrid(!grid)}>Toggle Grid</button>
            </div>


            <h1>Uploded in github One</h1>
            <h1>Dynamic & Conditional Inline Style</h1>
            <div style={{
                // display: "flex", 
                // flexWrap: "wrap", 
                // gap: "10px",
                // display: "grid",
                // gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                

                display: grid ? "grid" : "block",
                gap: "10px",
                gridTemplateColumns: grid ? "repeat(auto-fill, minmax(200px, 1fr))" : "unset",


            }}>

                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>

                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div style={cardContainer}>
                    <img style={{ width: "150px" }}
                        src={img} alt="Profile Image" />
                    <div style={{ color: textColor }}>
                        <h2>Nazir Ahmad</h2>
                        <h3>Nazir Ahmad</h3>
                        <h4>Web Developer</h4>
                    </div>


                </div>





            </div>
        </>
    )
}
export default Card;