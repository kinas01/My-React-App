
import { useState } from "react";

function Conditional() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);


  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn); 
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Conditional Rendering Practice</h2>


      {isLoggedIn ? (
        <p>You are logged in 🎉</p>
      ) : (
        <p>You are logged out. Please login.</p>
      )}

      
      <button 
        onClick={toggleLogin} 
        style={{ marginTop: "10px", padding: "10px" }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Conditional;
