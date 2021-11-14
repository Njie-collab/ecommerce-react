import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const Cart = () => {
  const context = useContext(MyContext);
  const { cart, addtoCart, handleDelete, decremnent,totalCalc,login } = context;
  const navigate = useNavigate()

  const checkAndNavigate = () => {
        login.success ? (navigate("/checkout",{ replace: true })) : (navigate("/home" ,{ replace: true }))
    }


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
            <button onClick={()=>addtoCart(item)}>+</button>
            <button onClick={()=>decremnent(item)}>-</button>
          </div>
        )
      )}
      <div className="total" >
              <p>TOTAL PRICE : {(totalCalc(cart)).toFixed(2)} €</p>
              <button onClick={() =>checkAndNavigate()}>checkout</button>
     </div> 
     
    
    </div>
  );
};

export default Cart;
