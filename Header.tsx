'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
              R&O Engenharia
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Sobre
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Serviços
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Blog
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contato
            </Link>
            <a 
              href="https://wa.me/5585985223033" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              WhatsApp Brasil
            </a>
          </div>

          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Início
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Sobre
              </Link>
              <Link href="/servicos" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Serviços
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Blog
              </Link>
              <Link href="/contato" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contato
              </Link>
              <a 
                href="https://wa.me/5585985223033" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap w-fit"
              >
                WhatsApp Brasil
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
