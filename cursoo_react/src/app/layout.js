
import "./globals.css";


export const metadata = {
  title: "Minha primeira aplicação",
  description: "Aplicação front-end2",
  charset: 'UTF-8',
  author: 'Beatriz Eduarda',
  keywords: 'HTML, CSS, JavaScript, react, Next.js',
};


const Bemvindo= (props)=> {
    return(
      <div>
        <h2>Bem vindo {props.nome}</h2>
      </div>
    )
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Bemvindo nome='Bea'/>
        
        {children}
      </body>
    </html>
  );
}
