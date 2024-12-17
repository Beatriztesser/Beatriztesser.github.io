"use client";
import { useState } from "react";
import styles from './page.module.css' ;
import React from "react";



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
        sexo: ''
    });

    const valorInput = e => setData({ ...data, [e.target.name]: e.target.value });

    const addUser = (e) => {
        e.preventDefault();

        console.log(`Nome: ${data.nome}`);
        console.log(`Email: ${data.email}`);
        console.log(`CPF: ${data.cpf}`);
        console.log(`Cidade: ${data.cidade}`);
        console.log(`Estado: ${data.estado}`);
        console.log(`Endereço: ${data.endereco}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Telefone: ${data.telefone}`);
    };

    return (
        <div className={styles.containerMaster}>
            <div className={styles.containerForm}>
            <h1 className={styles.title}>Cadastrar</h1>
              <form onSubmit={addUser} className={styles.form}>
                  <label className={styles.labelInput}>
                      <span>Nome:</span>
                      <input type="text" name="nome" onChange={valorInput} className={styles.input} />
                  </label>
                  <label className={styles.labelInput} >
                      <span>E-mail:</span>
                      <input type="email" name="email" onChange={valorInput}  className={styles.input}/>
                  </label>
                  <label className={styles.labelInput}>
                      <span>Data de Nascimento:</span>
                      <input type="text" name="nascimento" onChange={valorInput} className={styles.input} />
                  </label>
                  <label className={styles.labelInput}>
                      <span>Naturalidade:</span>
                      <input type="text" name="naturalidade" onChange={valorInput} className={styles.input} />
                  </label >
                  <label className={styles.labelInput}>
                      <span>CPF:</span>
                      <input type="text" name="cpf" onChange={valorInput}  className={styles.input}/>
                  </label>
                  <label className={styles.labelInput}>
                      <span>Telefone:</span>
                      <input type="text" name="telefone" onChange={valorInput} className={styles.input} />
                  </label>
                  <label className={styles.labelInput}>
                      <span>Cidade:</span>
                      <input type="text" name="cidade" onChange={valorInput} className={styles.input} />
                  </label>
                  <label className={styles.labelInput}>
                      <span>Estado:</span>
                      <input type="text" name="estado" onChange={valorInput}  className={styles.input}/>
                  </label>
                  <label className={styles.labelInput}>
                      <span>Endereço:</span>
                      <input type="text" name="endereco" onChange={valorInput}  className={styles.input}/>
                  </label>
                  <label className={styles.labelInput}>
                      <span>Bairro:</span>
                      <input type="text" name="bairro" onChange={valorInput} className={styles.input} />
                  </label>

              </form>
              <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.buttonSubmit}>
                      Cadastrar
                    </button>
                  </div>

            </div>
        </div>
    );
}
