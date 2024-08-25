import "./product.css"
import Price from "./price"
function Product({ title, idx }) {
  let oldPrices = ["1,299", "999", "1,599", "599"];
  let newPrices = ["1,199", "699", "1,199", "299"];
  let description = [
   ["8,000 DPI", "5 Programmable buttons"],
   ["Intuitive surface", "Designed For I pad pro"],
   ["Designed For I pad pro", "Intuitive surface"],
   ["Wireless", "Optical orientation"]
  ];

  let styles = {
    color: "black",
    fontSize: "15px",
    fontWeight: "bold",
  }
  return (

    <div className="product">
      <h4>{title}</h4>
      <p style={styles}>{description[idx][0]}</p>
      <p style={styles}>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>

  );
};

export default Product