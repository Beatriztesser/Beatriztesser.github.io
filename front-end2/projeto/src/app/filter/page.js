import { useState } from "react";

export default function Header(){
    const nomesBusca= nomes.filter(nome=> (nome.toLowerCase().startsWith(busca.toLowerCase)))
    const nums= [1,2,3,4,5,6,7,8,9,10]
    const pares= nums.filter(num=> (num%2==0))
    const nomes= ['Beatriz', 'Beatriz','Ana', 'Mariana', 'João']
    console.log(nums)
    console.log(pares)
    const [busca, setBusca]=useState('')
    
    return(
        
        <div>
            <h1>Filter/ Filtro</h1>
            <input

                value={busca}
                type="text" 
                onChange={ev=>(setBusca(ev.target.value))}/>

            <h2>Lista de nomes</h2>
                {nomes.map((nomes, i)=>(
                    <li key={i}>
                        {nomes}
                    </li>   
                ))}
        </div>
    )
}


