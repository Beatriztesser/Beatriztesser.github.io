"use client";
import { useState } from "react";
import styles from './page.module.css' ;
import React from "react";

import axios from "axios";

export default function Cadastro() {
    const [data, setData] = useState({
        nome: '',
        email: '',
        nascimento: '',
        naturalidade: '',
        cpf: '',
        telefone: '',
        cidade: '',
        estado: '',
        endereco: '',
        bairro: '',
    });

    const [mensagem, setMensagem]= useState("");

    const valorInput = e => setData({ ...data, [e.target.name]: e.target.value });

    const addUser = async (e) => {
        e.preventDefault();

        console.log(`Nome: ${data.nome}`);
        console.log(`Email: ${data.email}`);
        console.log(`CPF: ${data.cpf}`);
        console.log(`Cidade: ${data.cidade}`);
        console.log(`Estado: ${data.estado}`);
        console.log(`Endereço: ${data.endereco}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Telefone: ${data.telefone}`);
        

        const headers={
            'headers':{
                'Content-Type': 'application/json'
            }
        }

        await axios.post('http://localhost:8080/', data, headers)
        .then((response)=>{
            setMensagem(response.data.mensagem);
            setData({
                nome: '',
                email: '',
                nascimento: '',
                naturalidade: '',
                cpf: '',
                telefone: '',
                cidade: '',
                estado: '',
                endereco: '',
                bairro: '',
            });

        }).catch((err)=>{
            setMensagem(err.response.data.mensagem)
        })
    };




    return (
        <div className={styles.containerMaster}>
            <div className={styles.containerForm}>
            <h1 className={styles.title}>Cadastrar</h1>
            {mensagem? <p> {mensagem}</p>:""}
              <form onSubmit={addUser} className={styles.form}>
                  <label className={styles.labelInput}>
                      <span>Nome:</span>
                      <input type="text" placeholder= "Seu nome" name="nome" value={data.nome}  onChange={valorInput} className={styles.input} />
                  </label>
                  <label className={styles.labelInput} >
                      <span>E-mail:</span>
                      <input type="email" name="email"   value={data.email}  onChange={valorInput}  className={styles.input}/>
                  </label>
                  <label className={styles.labelInput}>
                      <span>Data de Nascimento:</span>
                      <input type="text" name="nascimento" value={data.nascimento} onChange={valorInput} className={styles.input} />
                  </label>
                  <label className={styles.labelInput}>
                      <span>Naturalidade:</span>
                      <input type="text" name="naturalidade" value={data.naturalidade}  onChange={valorInput} className={styles.input} />
                  </label >
                  <label className={styles.labelInput}>
                      <span>CPF:</span>
                      <input type="text" name="cpf" value={data.cpf}  onChange={valorInput}  className={styles.input}/>
                  </label>
                  <label className={styles.labelInput}>
                      <span>Telefone:</span>
                      <input type="text" name="telefone" value={data.telefone}  onChange={valorInput} className={styles.input} />
                  </label>
                  <label className={styles.labelInput}>
                      <span>Cidade:</span>
                      <input type="text" name="cidade" value={data.cidade}  onChange={valorInput} className={styles.input} />
                  </label>
                  <label className={styles.labelInput}>
                      <span>Estado:</span>
                      <input type="text" name="estado" value={data.estado}  onChange={valorInput}  className={styles.input}/>
                  </label>
                  <label className={styles.labelInput}>
                      <span>Endereço:</span>
                      <input type="text" name="endereco" value={data.endereco}  onChange={valorInput}  className={styles.input}/>
                  </label>
                  <label className={styles.labelInput}>
                      <span>Bairro:</span>
                      <input type="text" name="bairro" value={data.bairro}  onChange={valorInput} className={styles.input} />
                  </label>

                  <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.buttonSubmit}>Cadastrar</button>
                </div>

              </form>
            </div>
        </div>
    );
}
