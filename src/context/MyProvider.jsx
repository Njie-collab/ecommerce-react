import { useState, useEffect } from "react";
import MyContext from "./MyContext";

export const MyProvider = (props) => {
  const [result, setResult] = useState({
    data: [],
    loading: true,
    error: "",
  });
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ email: "", address: "" });
  const [error, setError] = useState({ error: "" });
  const [login, setLogin] = useState({ success: false });

  const addtoCart = (element) => {
    const addItem = cart.find((item) => item.id === element.id);
    if (addItem === undefined) {
      setCart([...cart, { ...element, quantity: 1 }]);
    } else {
      addItem.quantity += 1;
      const index = cart.indexOf(addItem);
      const clone = [...cart];
      clone.splice(index, 1, addItem);
      setCart(clone);
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
        data.map(
          (item) =>
            item.product_colors.length === 0 &&
            item.product_colors.push({
              hex_value: "#d87093",
              colour_name: "palevioletred",
            })
        );
        setResult({ data: data, loading: false, error: "" });
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (result.loading) return <p>loading...</p>;

  function handleDelete(element) {
    const deleteItem = cart.find((item) => item.id === element.id);
    const index = cart.indexOf(deleteItem);
    const clone = [...cart];
    clone.splice(index, 1);
    setCart(clone);
  }

  const decremnent = (element) => {
    const subtract = cart.find((item) => item.id === element.id);
    const index = cart.indexOf(subtract);
    subtract.quantity -= 1;
    const clone = [...cart];
    subtract.quantity >= 1
      ? clone.splice(index, 1, subtract)
      : clone.splice(index, 1);
    setCart(clone);
  };
  const totalCalc = (item) => {
    let total = cart.reduce((acc, next) => acc + next.quantity * next.price, 0);
    return total;
  };

  return (
    <MyContext.Provider
      value={{
        result,
        addtoCart,
        cart,
        handleDelete,
        decremnent,
        form,
        setForm,
        error,
        setError,
        login,
        setLogin,
        totalCalc,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
export default MyProvider;
