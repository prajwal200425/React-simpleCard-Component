import Product from "./product";

function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems: "center"
    }
    return(
        <div style={styles}>
            
       <Product  title = "Logitech MS master 35" idx={0}  />
       <Product  title = "Apple pencile (2nd Gen)" idx={1}/>
       <Product title = "Zebronix Zeb " idx={2}/>
       <Product title = "Wireless Mouse" idx={3}/>
        </div>
    );
}

export default ProductTab