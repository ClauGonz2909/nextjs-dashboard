import { montserrat } from './ui/fonts';
import './ui/global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        
        esto es parte del layout 
        {children}
        <footer className='py-10 flex justify-center items-center'>este es el 🦶 de pagina</footer>

      </body>
    </html>
  );
}
