"use client";
import { useState } from "react";
import Tasks from "./components/Tasks";

// export default function App(){
//   const [messege, setMessege]= useState()
//   return (
//     <div>
//         <h2> {messege}</h2>
//         <button 
//           onClick={()=>{
//             setMessege("Oi");
//         }}
//         >
//           Mudar menssagem
//         </button>
//     </div>
//   );
// }


export default function Ap(){
  const [tasks, setTasks]=useState([
    {
      id:1,
      title: 'Estudar',
      description: "Estudar programação",
      isCompleted: false
    },
    {
      id:2,
      title: "Estudar Inglês",
      description: "Estudar inglês amanha",
      isCompleted: false
    },

    {
      id:3,
      title: "Estudar matemática",
      description:'Estudarrrrrrr',
      isCompleted:  false
    }
  ])
  return(
    <div>
      <h1>Gerenciador de tarefas</h1>
      {/* <AddTasks/> */}
      <Tasks task={tasks}/>
    </div>
  )
}