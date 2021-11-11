import {useContext } from "react";
import MyContext from "../context/MyContext";

const Reducer=()=> {
  const context=useContext(MyContext)
  const {add ,setAdd}=context
  

  
  
 



  return (
    <div>
      <div>count:{}</div>
      <button onClick={() => add({ type: "increment" })}>increment</button>
      <button onClick={() => setAdd({ type: "decriment" })}>decriment</button>
      
    
    </div>
  );
};

export default Reducer;
