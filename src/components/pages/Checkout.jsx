import React, { useContext } from "react";
/* import {useNavigate} from 'react-router-dom' */
import MyContext from "../../context/MyContext";

const Checkout = () => {
  const context = useContext(MyContext);
  const { cart } = context;

  return (
    <section>
      <h1>CHECKOUT</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <span>item price :{item.price * item.quantity}</span>
          <span>item quantity : {item.quantity}</span>
          <h1>thank you for shopping with us</h1>
        </div>
      ))}
    </section>
  );
};

export default Checkout;
