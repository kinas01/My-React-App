import { useState } from "react";

function Events() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function handleMouseOver() {
        console.log("you houver the text");
    }

    function handleInputChange(event) {
        console.log("input value:", event.target.value);
    }

    return(
        <div style={{padding: "20px"}}>
            <button
               onClick={handleClick}>
               You click me {count}
            </button>

            <p onMouseOver={handleMouseOver} style={{marginTop: "20px"}}>
                houver over this text
                </p>

            <input 
            type="text"
            placeholder="type something"
            onChange={handleInputChange}
            style={{marginTop: "20px", padding: "8px"}}
             />
        </div>
   );     

}

export default Events;
