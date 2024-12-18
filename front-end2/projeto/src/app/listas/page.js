export default function Listas(){
    const racas= ['Vira-lata', 'Pit-bull', 'Pug', 'shitzu', 'Labrador', 'Golden']
    const racasObj= [
        {
            id:1,
            raca:'Vira-lata',

        },

        {
            id:2,
            raca:'Pit-bulllll',

        },
        {
            id:3,
            raca:'Pug',

        },
        {
            id:4,
            raca:'Shitzu',

        },
        {
            id:5,
            raca:'Labrador',

        },
        {
            id: 6,
            raca:'Golden',

        }
    ]
    return(
        <div>
            <h1>Listas</h1>
            <p>{racasObj[0].raca}</p>
            <h2>Lista comum </h2>
            <ul>
                {
                    racas.map((raca,i)=>(
                        <li key= {i}>{i+1} - {raca}</li>
                    ))
                }
            </ul>

            <div>
                <h2>Lista de Objetos</h2>
                {racasObj.map((racaObj)=>(
                    <div key={racaObj.id}>
                        <h3>{racaObj.id}</h3>
                        <p>{racaObj.raca}</p>
                    </div>   
                ))}
            </div>
        </div>
    )
}