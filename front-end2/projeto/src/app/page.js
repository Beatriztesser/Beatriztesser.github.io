// import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome= 'Bea'
  return (
    <div>
       <h1>Página principal</h1>
       <p>Paragrafo da página principal</p>
       <p>Autor: {nome}</p>
       <Image 
       className={styles.imagem}
       src="/images/pao.jpg"
       alt="Pao" 
       width= {600} 
       height={500}/>

    </div>
  );
}
