'use client';

import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ListasMedicos() {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca,setBusca]=useState('')
    const[ modalAberto, setModalAberto]=useState(false)

    useEffect(() => {
        const getMedicos = async () => {
            try {
                const response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
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
    }, []); 

    const pacienteFiltrado = dados.filter(paciente =>
        paciente.nome.toLowerCase().includes(busca.toLowerCase())
    );


    const medicofiltrado= dados.filter(medico=>
    medico.nome.toLowerCase().includes(busca.to)
    )
    

    return (
        <div className={styles.container}>
            <div className={styles.containerLista}>
                <h1 className={styles.title}>Lista de Pacientes</h1>
                <button className={styles.button} onClick={()=>setModalAberto(true)}> 
                    Buscar paciente 
                </button>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>CPF</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5" className={styles.loading}>Carregando...</td>
                            </tr>
                        ) : (
                            dados.map((paciente) => (
                                <tr key={paciente.id}>
                                    <td>{paciente.id}</td>
                                    <td>{paciente.nome}</td>
                                    <td>{paciente.telefone}</td>
                                    <td>{paciente.email}</td>
                                    <td>{paciente.cpf}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {modalAberto && (
                    <div className={styles.modalOverlay}>
                        <div className={styles.modal}>
                            <input
                                type="text"
                                className={styles.modalInput}
                                placeholder="Digite o nome do paciente"
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                            />
                            <button className={styles.closeButton} onClick={() => setModalAberto(false)}>X</button>
                            <ul className={styles.pacientesList}>
                                {pacienteFiltrado.map((paciente) => (
                                    <li key={paciente.id}>{paciente.nome}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                


            </div>
        </div>
    );
}
