import React ,{useContext}from 'react'
import MyContext from '../../context/MyContext'
import { Link } from 'react-router-dom'

const Products = () => {
    const context=useContext(MyContext)
    //const {result}=context//
    const {result,addtoCart}=context
    
    console.log(result)
    return (
      <div className="product-container" style={{ color: "purple" }}>
        <h4>We got some new items in Store</h4>
        {result.data.map((item) => (
          <div className="item-container" key={item.id}>
            <h3>{item.id } Id</h3>
            <h4>{item.name}</h4>
            <h3>{item.price}</h3>
            <Link to="/product-detail" state={item}>
              <img src={item.image_link} alt="" />
            </Link>

            <button
              onClick={() => {
                addtoCart(item);
              }}
            >
              addtoCart
            </button>
          </div>
        ))}
      </div>
    );
}

export default Products
