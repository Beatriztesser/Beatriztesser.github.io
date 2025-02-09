'use client';

import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ListasMedicos() {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMedicos = async () => {
            try {
                const response = await fetch('https://api-clinica-2a.onrender.com/medicos');
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados: ' + response.statusText);
                }
                const data = await response.json();
                setDados(data);
                setLoading(false);
            } catch (error) {
                console.log('Ocorreu algum erro: ' + error);
                setLoading(false);
            }
        };

        getMedicos();
    }, []); // Chama apenas uma vez ao carregar a página

    return (
        <div className={styles.container}>
            <div className={styles.containerLista}>
                <h1 className={styles.title}>Lista de Médicos</h1>
                <button className={styles.buttons}>Buscar Médico</button>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5" className={styles.loading}>Carregando...</td>
                            </tr>
                        ) : (
                            dados.map((medico) => (
                                <tr key={medico.id}>
                                    <td>{medico.id}</td>
                                    <td>{medico.nome}</td>
                                    <td>{medico.telefone}</td>
                                    <td>{medico.email}</td>
                                    <td>{medico.especialidade}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
