import {useState,useEffect}from "react"
import MyContext from './MyContext'


export const MyProvider = (props) => {

    const [result, setResult] = useState({
      data: [],
      loading: true,
      error: "",
    });
    const [cart, setCart] = useState([])
    
    const addtoCart = (element) => {
      const addItem = cart.find((item) => item.id === element.id);
      if(addItem===undefined){ 
        setCart([...cart, { ...element, quantity: 1}]);
        
      }else{
        addItem.quantity += 1
        const index = cart.indexOf(addItem)
        const clone =[...cart]
        clone.splice(index,1,addItem)
        setCart(clone)
      }
      
    };
    console.log(cart);

    useEffect(() => {
      try {
        const getData = async () => {
          const resp = await fetch(
            "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
          );
          const data = await resp.json();
          setResult({ data: data, loading: false, error: "" });
        };
        getData();
      } catch (error) {
        console.log(error);
      }
    }, []);

    if (result.loading) return <p>loading...</p>;

function handleDelete(element) {
  const deleteItem=cart.find(item=>item.id === element.id)
  const index=cart.indexOf(deleteItem)
  const clone=[...cart]
  clone.splice(index,1)
  setCart(clone)

}


    return (
        <MyContext.Provider value={{result,addtoCart,cart,handleDelete}}>
            {props.children}
        </MyContext.Provider>
    )
}
export default MyProvider