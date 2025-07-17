'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      title: "Projeto Elétrico: Normas e Boas Práticas da NBR 5410",
      excerpt: "Guia completo sobre projetos elétricos residenciais, comerciais e industriais seguindo as normas brasileiras.",
      image: "https://readdy.ai/api/search-image?query=Professional%20electrical%20engineering%20blueprints%20and%20technical%20drawings%20on%20modern%20desk%20with%20engineering%20tools%20and%20NBR%20standards%20documentation%2C%20clean%20office%20environment%20with%20electrical%20project%20plans&width=400&height=250&seq=blog001&orientation=landscape",
      date: "15 Nov 2024",
      category: "Projetos Elétricos",
      href: "/blog/projeto-eletrico-nbr-5410"
    },
    {
      title: "Sistemas de Energia Solar: Benefícios e Instalação",
      excerpt: "Como os sistemas fotovoltaicos podem reduzir custos e contribuir para a sustentabilidade energética.",
      image: "https://readdy.ai/api/search-image?query=Modern%20solar%20panel%20installation%20guide%20with%20technical%20diagrams%20and%20energy%20efficiency%20charts%2C%20professional%20solar%20energy%20documentation%20with%20blue%20sky%20background&width=400&height=250&seq=blog002&orientation=landscape",
      date: "12 Nov 2024",
      category: "Energia Solar",
      href: "/blog/sistemas-energia-solar"
    },
    {
      title: "SPDA: Proteção Contra Raios Conforme NBR 5419",
      excerpt: "Entenda como funciona o Sistema de Proteção contra Descargas Atmosféricas e sua importância.",
      image: "https://readdy.ai/api/search-image?query=Lightning%20protection%20system%20technical%20documentation%20with%20NBR%205419%20standards%20and%20SPDA%20installation%20guides%2C%20professional%20electrical%20safety%20documentation&width=400&height=250&seq=blog003&orientation=landscape",
      date: "10 Nov 2024",
      category: "Proteção Elétrica",
      href: "/blog/spda-protecao-raios"
    },
    {
      title: "Relatórios SPDA: Importância da Inspeção Periódica",
      excerpt: "Por que realizar inspeções regulares em sistemas de proteção contra raios é fundamental para a segurança.",
      image: "https://readdy.ai/api/search-image?query=Professional%20electrical%20inspector%20examining%20lightning%20protection%20system%20with%20measuring%20equipment%20and%20technical%20reports%2C%20SPDA%20inspection%20documentation%20process&width=400&height=250&seq=blog004&orientation=landscape",
      date: "08 Nov 2024",
      category: "Laudos Técnicos",
      href: "/blog/relatorios-spda-inspecao"
    },
    {
      title: "Aterramento Elétrico: NBR 5410 e NBR 14039",
      excerpt: "Guia técnico sobre sistemas de aterramento e sua importância na segurança elétrica.",
      image: "https://readdy.ai/api/search-image?query=Electrical%20grounding%20system%20technical%20documentation%20with%20NBR%20standards%20and%20ground%20resistance%20measurement%20equipment%2C%20professional%20electrical%20safety%20guides&width=400&height=250&seq=blog005&orientation=landscape",
      date: "05 Nov 2024",
      category: "Aterramento",
      href: "/blog/aterramento-eletrico-normas"
    },
    {
      title: "Manutenção Preventiva de Subestações: Checklist Completo",
      excerpt: "Roteiro detalhado para manutenção preventiva de subestações elétricas industriais.",
      image: "https://readdy.ai/api/search-image?query=Electrical%20substation%20preventive%20maintenance%20checklist%20with%20professional%20technicians%20and%20high%20voltage%20equipment%20inspection%20procedures%2C%20industrial%20maintenance%20documentation&width=400&height=250&seq=blog006&orientation=landscape",
      date: "03 Nov 2024",
      category: "Manutenção",
      href: "/blog/manutencao-preventiva-subestacoes"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.6)), url('https://readdy.ai/api/search-image?query=Technical%20blog%20and%20knowledge%20sharing%20concept%20with%20engineering%20documentation%2C%20electrical%20technical%20articles%20and%20professional%20learning%20materials%2C%20modern%20educational%20content%20environment&width=1920&height=600&seq=bloghero001&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Técnico</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Conhecimento especializado em engenharia elétrica e energia renovável
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={post.href} className="cursor-pointer">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm">
                      <span>Ler artigo</span>
                      <div className="w-4 h-4 flex items-center justify-center ml-2">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Receba Conteúdo Técnico por E-mail
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Inscreva-se em nossa newsletter e receba artigos técnicos, dicas de segurança 
            e novidades sobre engenharia elétrica
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Seu e-mail profissional"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}