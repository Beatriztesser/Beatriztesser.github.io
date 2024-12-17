"use client";
import { useState } from "react";
import styles from './page.module.css';
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
        <div className={styles.container}>
            <h1>Cadastro</h1>
            <form onSubmit={addUser} className={styles.form}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="nome" onChange={valorInput} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" onChange={valorInput} />
                </label>
                <label>
                    <span>Data de Nascimento:</span>
                    <input type="text" name="nascimento" onChange={valorInput} />
                </label>
                <label>
                    <span>Naturalidade:</span>
                    <input type="text" name="naturalidade" onChange={valorInput} />
                </label>
                <label>
                    <span>CPF:</span>
                    <input type="text" name="cpf" onChange={valorInput} />
                </label>
                <label>
                    <span>Telefone:</span>
                    <input type="text" name="telefone" onChange={valorInput} />
                </label>
                <label>
                    <span>Cidade:</span>
                    <input type="text" name="cidade" onChange={valorInput} />
                </label>
                <label>
                    <span>Estado:</span>
                    <input type="text" name="estado" onChange={valorInput} />
                </label>
                <label>
                    <span>Endereço:</span>
                    <input type="text" name="endereco" onChange={valorInput} />
                </label>
                <label>
                    <span>Bairro:</span>
                    <input type="text" name="bairro" onChange={valorInput} />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
