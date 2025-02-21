'use client';

import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ListasConsultas() {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [filtro, setFiltro] = useState('medico'); // Estado para controlar o tipo de busca

    useEffect(() => {
        const getConsultas = async () => {
            try {
                const response = await fetch('https://api-clinica-2a.onrender.com/consultas');
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

        getConsultas();
    }, []);

    // Filtrando os dados conforme o tipo de busca
    const consultasFiltradas = dados.filter((consulta) =>
        filtro === 'medico'
            ? consulta.medico.toLowerCase().includes(busca.toLowerCase()) // Filtra por médico
            : consulta.paciente.toLowerCase().includes(busca.toLowerCase()) // Filtra por paciente
    );

    return (
        <div className={styles.container}>
            <div className={styles.containerLista}>
                <h1 className={styles.title}>Lista de Consultas</h1>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => { setFiltro('medico'); setModalAberto(true); }}>
                        Buscar por Médico
                    </button>
                    <button className={styles.button} onClick={() => { setFiltro('paciente'); setModalAberto(true); }}>
                        Buscar por Paciente
                    </button>
                </div>
                

                {/* Modal de busca */}
                            {modalAberto && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <input
                            type="text"
                            className={styles.modalInput}
                            placeholder={`Digite o nome do ${filtro}`}
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                        <button className={styles.closeButton} onClick={() => setModalAberto(false)}>X</button>

                        {/* Lista de Médicos ou Pacientes */}
                        <ul className={styles.medicoList}>
                            {consultasFiltradas.map((consulta) => (
                                <li key={consulta.id}>
                                    {filtro === 'medico' ? consulta.medico : consulta.paciente}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}


                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Médico</th>
                            <th>Especialidade</th>
                            <th>Paciente</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5" className={styles.loading}>Carregando...</td>
                            </tr>
                        ) : (
                            dados.map((consulta) => (
                                <tr key={consulta.id}>
                                    <td>{consulta.id}</td>
                                    <td>{consulta.medico}</td>
                                    <td>{consulta.especialidade}</td>
                                    <td>{consulta.paciente}</td>
                                    <td>{consulta.tipo}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
