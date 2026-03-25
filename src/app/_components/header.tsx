'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300  ${
        isScrolled
          ? 'bg-white border-b py-6 border-zinc-200'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#inicio"
          data-testid="logo"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-blue-500 flex items-center justify-center">
            <span className="font-black text-white text-xl">R</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-black text-lg text-zinc-900 tracking-tight">
              REFERÊNCIA
            </span>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">
              Engenharia e Construções
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.label.toLowerCase()}`}
              className="nav-link text-sm font-semibold uppercase tracking-wider text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contato"
            data-testid="cta-header"
            className="cta-btn text-sm"
          >
            Solicitar Orçamento
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-900"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold uppercase tracking-wider text-zinc-700 hover:text-zinc-900 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cta-btn text-center mt-4"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
