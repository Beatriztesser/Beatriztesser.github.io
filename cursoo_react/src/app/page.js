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


import { useState } from "react";

export default function Ap() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "Estudar programação",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudar inglês amanhã",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudarrrrrrr",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask); 
  }

  return (
    <div>
      <h1>Gerenciador de tarefas</h1>
      {/* <AddTasks /> */}
      <Tasks task={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
    </div>
  );
}
