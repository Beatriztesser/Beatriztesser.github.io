'use client'
// import {useState} from React;
import styles from './header.module.css'
import Link from "next/link"


export default function Header(){
    return(
        <header>
            <nav>
                <h1>Algo</h1>
                <ul className={styles.containerMenu}>
                    <li> Médico</li>
                    <li> Médico</li>
                    <li> Médico</li>
                        <ul className={styles.containerSubMenu}>
                            {/* <li> <Link className={styles.linkSubMenu} href= "/listar_resgistros" >Listar registros</Link></li> */}
                            <li> <Link className={styles.linkSubMenu} href="/criar_novo">Buscar</Link></li>
                        </ul>
                </ul>
            </nav>
        </header>
    )
}