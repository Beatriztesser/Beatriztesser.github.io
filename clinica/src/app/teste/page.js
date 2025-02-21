// 'use client'
// import { useEffect, useState } from "react";

// export default function lista(){
//     const[dados, setDados] = useState('')
//     const[modal, setmodal] = useState('false')

//     useEffect(()=>{
//         const getDados= async()=>{
//             try{
//                 const response= await fetch('https://api-clinica-2a.onrender.com/pacientes')
//                 if(!response.ok){
//                     throw new Error('erro; '+ response.statusText)
//                 }
//                 const data= response.json()
//                 setDados(data)
//                 }catch(error){
//                     console.log('ocorreu algum erro'+error)
//                 }
//             }
//         getDados()
//     },[])

//     return(
        
//         <button onClick={()=>setmodal(true)}> algo </button>
//     )
// }



'use client'
import { useState, useEffect } from "react"
export default function lisstadados(){
    const[dados, setDados]= useState('')

    useEffect(()=>{
        const getDados= async ()=>{
            try{
                const response = await fetch('https://api-clinica-2a.onrender.com/pacientes')
                if (!response.ok){
                    throw new error('errooo: '+ response.statusText)
                }
                const data= response.json()
                setDados(data)
            }catch(error){
                console.log('error'+error)
            }
        }
        getDados()
    },[])

    return(
        <table> 
            {dados.map((medicos)=>{
                <div key={paciente.id}>
                    <li>{paciente.nome}</li>
                </div>
            })}
        </table>
    )
}

