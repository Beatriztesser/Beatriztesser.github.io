import { useState } from "react";

function App(){

  const [msg, setMsg]= useState('1')
  return(
    <div>
      <div>{msg}</div>
      <button
        onClick={()=>{
          setMsg('2');

       }}
      >
           Clique 
        </button>


    </div>

  );
}

export default App;