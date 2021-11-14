import {useContext ,useState} from "react";
import MyContext from "../context/MyContext";

const Reducer=()=> {

  const context=useContext(MyContext)
  const {}=context
  const [count,setCount]=useState(0)
  
  return (
    <div>
      <div>count:{count}</div>
      <button onClick={() => setCount(count+ 1)}>+</button>
      <button onClick={() => setCount(count -1)}>-</button>
      
    
    </div>
  );
};

export default Reducer;
