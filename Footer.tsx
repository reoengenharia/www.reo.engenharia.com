
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              R&O Engenharia
            </h3>
            <p className="text-gray-300 mb-4">
              Especialistas em soluções elétricas industriais, energia solar, SPDA, aterramento e 
              manutenção preventiva/corretiva de subestações elétricas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-800 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/servicos/projeto-eletrico" className="hover:text-white transition-colors cursor-pointer">Projeto Elétrico</Link></li>
              <li><Link href="/servicos/energia-solar" className="hover:text-white transition-colors cursor-pointer">Energia Solar</Link></li>
              <li><Link href="/servicos/spda" className="hover:text-white transition-colors cursor-pointer">SPDA</Link></li>
              <li><Link href="/servicos/aterramento" className="hover:text-white transition-colors cursor-pointer">Aterramento</Link></li>
              <li><Link href="/servicos/montagem-quadros" className="hover:text-white transition-colors cursor-pointer">Quadros Elétricos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/sobre" className="hover:text-white transition-colors cursor-pointer">Sobre Nós</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog Técnico</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors cursor-pointer">Contato</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors cursor-pointer">Todos os Serviços</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span className="text-sm">Rua General Osório de Paiva, 5636 - Siqueira, Fortaleza - CE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span className="text-sm">Rua das Tilias, Óis do Bairro/Anadia - Portugal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span className="text-sm">+55 85 985223033</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span className="text-sm">+351 968874183</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 R&O Engenharia e Soluções Elétricas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
