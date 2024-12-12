export default function Tasks(props){
    console.log(props)
    return(
        <h1>{props.task[0].title}</h1>
    )
}