import { ReactNode } from 'react';
import { NavBarTemplateProps } from './nav-bar.types';

const NavBarTemplate = ({
    logo,
    searchInput,
    searchButton,
    cartButton, 
    menuButton,
}: NavBarTemplateProps) => {
    return (
        <nav className="flex h-18 w-full items-center justify-between px-4 sm:px-6">
            {/* Sección Izquierda: Logo */}
            <div className="flex shrink-0 items-center">
                {logo || (
                    // Placeholder para el Logo si no se pasa el prop
                    <div className="h-8 w-32 rounded bg-gray-200 animate-pulse text-xs flex items-center justify-center text-gray-500">Logo Atom</div>
                )}
            </div>

            {/* Sección Derecha: Buscador y Acciones */}
            <div className="flex items-center gap-2 sm:gap-3">
                {/* Input de búsqueda (Se oculta en móviles muy pequeños para ahorrar espacio) */}
                <div className="hidden sm:block w-45 md:w-65">
                    {searchInput || (
                        // Placeholder Input
                        <div className="h-10 w-full rounded-lg bg-[#EAECEF] animate-pulse"></div>
                    )}
                </div>

                {/* Botón de Buscar */}
                <div>
                    {searchButton || (
                        // Placeholder Search Btn
                        <div className="h-10 w-10 rounded-lg bg-[#EAECEF] animate-pulse"></div>
                    )}
                </div>

                {/* Botón de Carrito */}
                <div>
                    {cartButton || (
                        // Placeholder Cart Btn
                        <div className="h-10 w-10 rounded-lg bg-[#EAECEF] animate-pulse"></div>
                    )}
                </div>

                {/* Botón de Menú */}
                <div>
                    {menuButton || (
                        // Placeholder Menu Btn
                        <div className="h-10 w-10 rounded-lg bg-[#F97316] animate-pulse">
                        
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBarTemplate;