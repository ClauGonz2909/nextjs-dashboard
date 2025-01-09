'use client' // Este archivo se ejecuta en el lado del cliente en una aplicación Next.js.

/* Importaciones necesarias */
import {
  UserGroupIcon, // Icono para "Customers".
  HomeIcon,       // Icono para "Home".
  DocumentDuplicateIcon, // Icono para "Invoices".
} from '@heroicons/react/24/outline'; // Librería de íconos Heroicons.
import Link from 'next/link'; // Componente de enlace de Next.js para navegación interna.
import { usePathname } from 'next/navigation'; // Hook para obtener la ruta actual del cliente.

/* Arreglo de objetos que contiene los enlaces de navegación. 
   Cada objeto incluye:
   - name: El nombre del enlace que se mostrará.
   - href: La ruta hacia la que apunta el enlace.
   - icon: El icono asociado al enlace.
*/
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

/* Componente principal para generar los enlaces de navegación. */
export default function NavLinks() {
  const pathname = usePathname(); // Hook para obtener la ruta actual de la aplicación.

  return (
    <>
      {/* Mapeamos el arreglo `links` para generar un <Link> por cada objeto. */}
      {links.map((link) => {
        const LinkIcon = link.icon; // Guardamos el icono del enlace actual en una constante.
        return (
          <Link
            key={link.name} // Clave única basada en el nombre del enlace (necesaria para React).
            href={link.href} // Ruta hacia la que apunta el enlace.
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium 
            hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 
            ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}`} // Clases dinámicas:
            // - Aplica estilos "hover" para cuando el usuario pasa el cursor sobre el enlace.
            // - Cambia el color de fondo y texto si el enlace está activo (basado en la ruta actual).
          >
            {/* Icono del enlace */}
            <LinkIcon className="w-6" />
            {/* Nombre del enlace (visible solo en pantallas medianas o mayores) */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
