
import styles from "./page.module.css";


export default function Home() {
  const nome= 'Bea'
  return (
    <div>
       <h1>Página principal</h1>
       <p>Paragrafo da página principal</p>
       <p>Autor: {nome}</p>
    </div>
  );
}