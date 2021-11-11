import React ,{useContext}from 'react'
import MyContext from '../../context/MyContext'

const Products = () => {
    const context=useContext(MyContext)
    //const {result}=context//
    const {result,addtoCart}=context
    
    console.log(result)
    return (
        <div>
            
            <h4>We got some new items in Store</h4>
            {result.data.map((item)=>
               <div key={item.id}>
                 <h3>{item.id}</h3>
                 <img src={item.image_link} alt="" />
                 <button onClick={()=>{addtoCart(item)}}>addtoCart
                 </button>
               </div>

            )}
           
        </div>
    )
}

export default Products
