import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Table",
          price: 1200,
          qty: 3,
          img: "",
          id: 1
        },
        {
          title: "Shirt",
          price: 999,
          qty: 10,
          img: "",
          id: 2
        },
        {
          title: "Mobile Phone",
          price: 49999,
          qty: 6,
          img: "",
          id: 3
        }
      ]
    };
    //  this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
