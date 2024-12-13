"use client";
import { useState } from "react";
import styles from './page.module.css';


import React from "react";

export default function Cadastro() {
    const [data, stateData]= useState({
        name: '',
        cpf:'',
        endereco: '',
        bairro: '',
        email: '',
        telefone: ''
    });

    const valorInput = e => stateData({...data,  [e.target.name]: e.target.value })

    

    const sendMsg= (e)=>{

        e.preventDefault();

        console.log(`Nome: ${data.name}`);
        console.log(`Email: ${data.email}`);
        console.log(`CPF: ${data.cpf}`);
        console.log(`Endereço: ${data.endereco}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Telefone: ${data.telefone}`);
    }




  return (

    <div>
      <h1>Cadastro</h1>
      <form onSubmit={sendMsg}>
        <div>
          <label>Nome:</label>
          <input type="text"  name="nome"  onChange={valorInput}/>
        </div>
        <div>
          <label >CPF:</label>
          <input type="text" id="cpf" name="cpf" onChange={valorInput}/>
        </div>
        <div>
          <label>Endereço:</label>
          <input type="text" id="endereco" name="endereco" onChange={valorInput} />
        </div>
        <div>
          <label>Bairro:</label>
          <input type="text" id="bairro" name="bairro" onChange={valorInput} />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" id="email" name="email" onChange={valorInput}/>
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" id="telefone" name="telefone" onChange={valorInput}/>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}


        
  