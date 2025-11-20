

function ProductCard(props) {
    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "16px",
            margin: "16px",
            borderRadius: "8px",
            width: "220px",
        }}>
            <h3>{props.title}</h3>
            <p>Price: {props.price}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default ProductCard;