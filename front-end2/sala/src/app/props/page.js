import Card from '@/components/Card';


export default function Props(){
    const dogs=[
        {
            id:1,
            nome: 'PErigo',
            raca: 'Vira-lata',
            peso: '1.5',
            cor: 'Branca',
        },

        {
            id:2,
            nome: 'Bob',
            raca: 'Pit-bull',
            peso: 30,
            cor: 'marrom',
        },

        {
            id:3,
            nome: 'mel',
            raca: 'Vira-lata',
            peso: '1.5',
            cor: 'Branca',
        },
    ]

    return(
        
        <div>
            <h1>Props</h1>
            <div>
                {dogs.map((dogs) => (
                    <Card 
                    Key= {dogs.id} 
                    nome= {dogs.nome} 
                    raca= {dogs.raca}
                    peso= {dogs.peso}
                    cor= {dogs.cor}/>
                ))}
            </div>
        </div>
    )






}

