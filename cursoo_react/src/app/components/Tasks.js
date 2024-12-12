export default function Tasks(props){
    return (
        <ul>
            {props.task.map((taskk)=> 
            <li key={taskk.id}> 
            {/* quando vc tem um prop que é uma função, e vc chama ela ao clicar em um botão, voce usa a arrow funtion */}
                <button
                 onClick={()=>props.onTaskClick(taskk.id)}
                className={taskk.isCompleted && "Line-through"}
                 >
                    {taskk.title}
                    {taskk.isCompleted? "COMPLETO": "INCOMPLETO"}
                </button>
                <button>Ver detalhes </button>
                <button > Apagar </button>
         </li>    
        )} 
    </ul>
  );
}

