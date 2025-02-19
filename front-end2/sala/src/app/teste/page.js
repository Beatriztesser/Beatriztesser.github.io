export default function pisseos(){
    const pessoas=[
        {
            id:1,
            nome: "beatriz",
            cargo: "Policial",
            ativo: true,
    
        },
        {
            id:2,
            nome: "Ana",
            cargo: "Policial",
            ativo: true,
    
        },
        {
            id: 3,
            nome: "Mariana",
            cargo: "ADS",
            ativo: false,
        }
    
    ];

    return (
      <div>
        {dados.map((medico) => (
            <div key={medico.id}>
                <p>{medico.id}</p>
            </div>
        ))}
   </div>
      );
}


