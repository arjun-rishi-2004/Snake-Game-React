
import { useState } from 'react';
import Snake from '../Snake/Snake'
import './Platform.css'

export default function Platform (){

    const [snakeStyle,setSnakeStyle]=useState({
         width: "20px",
            height: "10px",
            backgroundColor: "green",
            position: "relative",
            animation:" move 10s infinite" 
    }
    )



    const [key,setKey]=useState("");


    window.addEventListener("keydown", (event) => {
    //   output.textContent = `You pressed "${event.key}".`;
    setKey(event.key);
    console.log(event.key);
    console.log("Hi")
        
if (event.key=="ArrowUp"){
    setSnakeStyle(
        {
            width: "20px",
            height: "10px",
            backgroundColor: "red",
            position: "relative",
            animation:" move 10s infinite" 
        }

    )
}

    });


    return (
        <div className="box" >
            {/* {console.log("key",key)} */}
            <Snake style={snakeStyle} />
            <h1 style={{color:key=="r" && "red"}}>hi</h1>
           <div>{key}</div>
        </div>
    )
}


