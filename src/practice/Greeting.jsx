
function Greeting({name, age}) {
    return (
        <div style={{marginBottom: "10px"}}>
            <h3>Hello {name}!</h3>
            <p>You are {age} years old</p>
        </div>
    );
}

export default Greeting;