import Button from "../components/Button";

function Home() {

    const handleClick = () => {
        alert("Button Clicked!");
    };
    
    return(
        <div>
            <h2>Welcome to the home page</h2>
            <button text= "click me" onClick={handleClick} />
        </div>
    );
}

export default Home;