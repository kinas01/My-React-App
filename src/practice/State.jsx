import { useState } from "react";

function State() {
    const [count, setcount] = useState(0);

    return(
        <div>
            <h2>Set counting</h2>

            <button onClick={ () => setcount(count + 1)}>Increase</button>

            <button onClick={ () => setcount(count - 1)} style={{ marginLeft: "10px"}}>decrease</button>

            <button onClick={ () => setcount(0)}  style={{ marginLeft: "10px"}}>councel </button>

        </div>
    );
}

export default State;