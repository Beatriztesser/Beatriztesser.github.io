// 'use client'
// // import {useState} from React;
// import styles from './header.module.css'
// import Link from "next/link"
// import Image from 'next/image'


// export default function Header(){
//     return(
//         <header>
//             <nav>
//                 <h1>Algo</h1>
//                 <ul className={styles.containerMenu}>
//                     <Image src= "/logo.png" alt= "Logo" className="logo" width= "200" height= "200"/>
//                     <li className={styles.linkMenu}> Médico</li>
//                     <li className={styles.linkMenu}> Médico</li>
//                     <li className={styles.linkMenu}> Médico</li>
//                         <ul className={styles.containerSubMenu}>
//                             {/* <li> <Link className={styles.linkSubMenu} href= "/listar_resgistros" >Listar registros</Link></li> */}
//                             <li> <Link className={styles.linkSubMenu} href="/criar_novo">Buscar</Link></li>
//                         </ul>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './header.module.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuAgendamentoOpen, setSubmenuAgendamentoOpen] = useState(false);
    const [submenuMedicosOpen, setSubmenuMedicosOpen] = useState(false);

    return (
        <header>
            <nav className={styles.menuBar}>
                <ul className={`${styles.containerMenu} ${menuOpen ? styles.menuOpen : ''}`}>
                    <li>
                        <Image src="/logo.png" alt="Logo" className="logo" width="200" height="200" />
                    </li>
                    <li><Link href="#">Home</Link></li>
                    <li 
                        className={styles.dropdown} 
                        onMouseEnter={() => setSubmenuMedicosOpen(true)} 
                        onMouseLeave={() => setSubmenuMedicosOpen(false)}
                    >
                        <a href="#">Médicos</a>
                        {submenuMedicosOpen && (
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="/medicos/listar_medicos">Listar médicos</Link></li>
                                <li><Link href="/medicos/cadastrar">Cadastrar médicos</Link></li>
                                <li><Link href="/medicos/editar">Editar médicos</Link></li>
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
                                <li><Link href="/agendamentos/agendar">Agendar consultas</Link></li>
                                <li><Link href="/agendamentos/editar">Editar consultas</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}


