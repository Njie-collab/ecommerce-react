import React from 'react'
import { useContext } from 'react'
import MyContext from '../../context/MyContext'

const Checkout = () => {
     const context = useContext(MyContext)
     const{result,TotalAmount}=context

    return (
      <div>
        <p>Total€/$</p>
        {result.data.map((item) => (
          <div key={item.id}>
            <h3>{item.id}</h3>
            <img src={item.image_link} alt="" />
            <button
              onClick={() => {
                TotalAmount(item);
              }}
            >
              addtoCart
            </button>
          </div>
        ))}
      </div>
    );
}

export default Checkout
