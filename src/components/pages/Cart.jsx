import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";

const Cart = () => {
  const context = useContext(MyContext);
  const { cart ,handleDelete} = context;


  return (
    <div>
      {cart.length === 0 ? (
        <p>Cart Is empty</p>
      ) : (
        cart.map(item => 
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img src={item.image_link} alt="" />
            <p>{item.quantity}</p>
            <button onClick={()=>handleDelete(item)}>Remove item</button>
          </div>
        )
      )}
      <Link to="/Checkout">Total Amount</Link>

      <Link to="/productDetails">Add item</Link>
    </div>
  );
};

export default Cart;
