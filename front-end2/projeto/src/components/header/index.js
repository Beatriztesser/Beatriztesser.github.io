'use client';
import Link from "next/link"
import {useState} from "react";
import styles from './header.module.css'

export default function Header () {
    const [showMenu, setShowMenu]=useState(true)
    return(
        <header> 
            <button onClick={()=>setShowMenu (!showMenu)}> clique </button>
            {
                showMenu&&
                <nav className= {styles.nav}>  
                    <ul>
                        <li> <Link href='/'> Home </Link> </li>
                        <li> <Link href='/sobre'>Sobre </Link> </li>
                        <li> <Link href='/contato'> Contato </Link></li>
                        <li> <Link href='/listas'> Listas</Link></li>
                    </ul> 
                </nav>
            }
            
        </header>
    )
}