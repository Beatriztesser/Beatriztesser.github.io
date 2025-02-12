// 'use client';
// import { useEffect, useState } from "react";


// export default function  Efeitos(){
//     const [cont, setCont]= useState(0)
//     const [cont2, setCont2]= useState(0)
//     useEfecct(()=>{
//         console.log('Renderizou')
//     },[cont])
//     return(
//         <div>
//             <h1>Efeitos colaterais/ Use effect</h1>
//             <button onClick={()=> (setCont(cont+1))}>Adicionar</button>
//             <p>Renderizações cont: {cont} </p>
//             <button onClick={()=> (setCont2(cont2+1))}>Adicionar</button>
//             <p>Renderizações cont2: {cont2} </p>
//         </div>
//     )
// }

'use client';
import { useCallback, useEffect, useState } from "react";


export default function  Efeitos(){
    const [cont, setCont]= useState(0)
    const [cont2, setCont2]= useState(0)
    useEffect(()=>{
        console.log('Renderizou')
    }, [cont])

    const [ufs, setUfs]= useState([])
    const[selected, setSelected]= useState('')
    const getUfs= async()=>{
        try{
            const response= await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            if(!response.ok){
                throw new Error('Erro ao buscar dados' + response.statusText)
            }
            const data= await response.json()
            setUfs(data)
            console.log(data);
        }catch(error){
            console.log('Ocorreu algum erro: ' + error)
        }
    }
    useEffect(()=>{
        getUfs();
    }, [])

    return(
        <div>
            {
                <select onChange={(ev)=> setSelected(ev.target.value)}>
                    <option value="">Selecione o estado</option>
                    {ufs.map((uf)=>(
                        <option 
                            value={uf.id}
                            key={uf.id}>
                                {uf.nome}
                         </option>
                    ))}
                </select>
            }
        </div>
    )
        
}

