'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './header.module.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuAgendamentoOpen, setSubmenuAgendamentoOpen] = useState(false);
    const [submenuMedicosOpen, setSubmenuMedicosOpen] = useState(false);
    const [submenuPacienteOpen, setSubmenuPacienteOpen]=useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.menuBar}>
                <ul className={`${styles.containerMenu} ${menuOpen ? styles.menuOpen : ''}`}>
                    <li>
                        <Image src="/logo.png" alt="Logo" className="logo" width="150" height="150" />
                    </li>

                    <li><Link href="/">Home</Link></li>
                    <li 
                        className={styles.dropdown} 
                        onMouseEnter={() => setSubmenuMedicosOpen(true)} 
                        onMouseLeave={() => setSubmenuMedicosOpen(false)}
                    >
                        <a href="#">Médicos</a>
                        {submenuMedicosOpen && (
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="/medicos/listar_medicos">Listar médicos</Link></li>
                                <li><Link href="#">Cadastrar médicos</Link></li>
                                <li><Link href="#">Editar médicos</Link></li>

                            </ul>
                        )}
                    </li>
                    <li 
                        className={styles.dropdown} 
                        onMouseEnter={() => setSubmenuAgendamentoOpen(true)} 
                        onMouseLeave={() => setSubmenuAgendamentoOpen(false)}
                    >
                        <a href="#">Agendamento</a>
                        {submenuAgendamentoOpen && (
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="/agendamentos/listar_consulta">Listar consultas</Link></li>
                                <li><Link href="#">Agendar consultas</Link></li>
                                <li><Link href="#">Editar consultas</Link></li>
                            </ul>
                        )}
                    </li>
                    <li 
                        className={styles.dropdown} 
                        onMouseEnter={() => setSubmenuPacienteOpen(true)} 
                        onMouseLeave={() => setSubmenuPacienteOpen(false)}
                    >
                        <a href="#">Pacientes</a>
                        {submenuPacienteOpen && (
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="/pacientes/listar_pacientes">Listar consultas</Link></li>
                                <li><Link href="#">Listar</Link></li>
                                <li><Link href="#">Editar consultas</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            
        </header>
    );
}
