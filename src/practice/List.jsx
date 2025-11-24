
function List() {

    const fruit = ['orange', 'mango', 'pear'];

    return(
        <div style={{padding: "20px"}}>

            <h2>List Rendering</h2>
            {fruit.map((fruit, index) => (
            <p key={index}>{fruit}</p>
        ))}
            
        </div>
    );
}

export default List;