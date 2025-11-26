
import { useState, useEffect } from "react"

function Hooks() {

    const [text, setText] = useState("");

   useEffect(() => {
    console.log("Text updated:", text);
  }, [text]);
    
    return(
        <div style={{padding: "20px"}}>
            <h1>Hook Practice</h1>

            <input 
            type="text" 
            placeholder="write text"
            style={{padding: "8px", width: "250px"}}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
    ); 
}

export default Hooks;