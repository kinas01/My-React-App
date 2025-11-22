import { useState } from "react";

function Events() {

    const [count, setcount] useState(0);

    function handleClick() {
        setcount{count = 1};
    }

    function handleMouseOver() {
        console.log("you houver the text");
    }
    
}