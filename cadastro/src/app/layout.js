
export const metadata = {
  title: "Beatriz Tesser",
  description: "Tela de casdastro ",
  charset: "UTF-8",
  author: "Beatriz Eduarda",
  keywords:"HTML, CSS, JS, React, Next.js"

};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
