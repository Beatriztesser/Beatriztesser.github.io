'use client'
// import {useState} from React;
import styles from './header.module.css'
import Link from "next/link"


export default function Header(){
    return(
        <header className={styles.navegador}>
            <nav className={styles.nav}>
                <ul>
                    <li> <Link className={styles.linkMenu} >Médico</Link>
                        <ul className={styles.containerSubMenu}>
                            <li> <Link className={styles.linkSubMenu} href= "/listar_resgistros" >Listar registros</Link></li>
                            <li> <Link className={styles.linkSubMenu} href="/criar_novo">Buscar</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}