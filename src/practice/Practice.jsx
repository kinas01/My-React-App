
import Greeting from "./Greeting";
import ProductCard from "./ProductCard";
import State from "./State";
import Events from "./Event";
import Conditional from "./Conditional";


function Practice() {
    return(
        <div style={{padding: "20px"}}>
            <h2> React Practice Section</h2>
            <p> We will practice Props, State, Hooks, Lists, Events, and more here.</p>

            <ProductCard
            tittle="Wireless Earbuds"
            price="N10,000"
            description="High quality"
            />

             <ProductCard 
        title="Bluetooth Speaker"
        price="₦9,000"
        description="Portable speaker with deep bass."
      />

      <ProductCard 
        title="Smart Watch"
        price="₦18,000"
        description="Tracks fitness, notifications, and heart rate."
      />


      <Greeting name="kinas"
                 age={22}
                 name="Bariyaa"
                 age={30}
                 />


       <State /> 

       <Events /> 

       <Conditional />        

        </div>
    );
}



export default Practice;