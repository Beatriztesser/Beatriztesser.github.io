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

'use client'

import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
    return (
        <header>
            <nav >

                <ul className={styles.containerMenu}>
                <Image src= "/logo.png" alt= "Logo" className="logo" width= "200" height= "200"/>
                    <li><Link className={styles.linkMenu} href="#"></Link></li>
                    <li><Link className={styles.linkMenu} href="#">Link Menu 2</Link></li>
                    <li><Link className={styles.linkMenu} href="#">Link Menu 3</Link></li>
                    <li><Link className={styles.linkMenu} href="#">Link Menu 4</Link></li>
                    <li className={styles.dropdown}>
                        <Link className={styles.linkMenu} href="#">Link Menu 5</Link>
                        <ul className={styles.containerSubMenu}>
                            <li><Link className={styles.linkSubMenu} href="#">Link Sub Menu 1</Link></li>
                            <li><Link className={styles.linkSubMenu} href="#">Link Sub Menu 2</Link></li>
                            <li><Link className={styles.linkSubMenu} href="#">Link Sub Menu 3</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

