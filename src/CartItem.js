import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: ""
    };
    //  this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  testing() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done");
      }, 5000);
    });

    promise.then(() => {
      this.setState({ qty: 100 });

      console.log("state", this.state);
    });
  }

  increaseQuantity = () => {
    // console.log("this", this.state);

    // //setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    //setState form 2  - if prevState required, use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      };
    });
  };

  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    //setState form 2  - if prevState required, use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      };
    });
  };

  render() {
    const { price, title, qty } = this.state; //object destructuring
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{price}</div>
          <div style={{ color: "#777" }}>{title}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div classNmae="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/128/992/992651.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/128/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/128/3096/3096673.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc"
  }
};

export default CartItem;
