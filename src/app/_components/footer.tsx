import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer data-testid="footer" className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 flex items-center justify-center">
                <span className="font-black text-white text-xl">R</span>
              </div>
              <div>
                <span className="font-black text-lg tracking-tight">
                  REFERÊNCIA OBRAS
                </span>
                <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">
                  Engenharia e Construções
                </span>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6 max-w-md">
              Mais de 15 anos construindo o futuro do Brasil. Galpões
              industriais, obras comerciais e soluções completas de engenharia
              com qualidade, segurança e aprovação garantida.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                className="w-10 h-10 bg-zinc-800 flex items-center justify-center hover:bg-blue-500 hover:text-zinc-900 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-linkedin"
                className="w-10 h-10 bg-zinc-800 flex items-center justify-center hover:bg-blue-500 hover:text-zinc-900 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                className="w-10 h-10 bg-zinc-800 flex items-center justify-center hover:bg-blue-500 hover:text-zinc-900 transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-6">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-blue-500 mt-1" />
                <div className="text-zinc-400">
                  <a
                    href="tel:+5511999999999"
                    className="hover:text-blue-500 transition-colors block"
                  >
                    (11) 98539-4947
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-blue-500 mt-1" />
                <a
                  href="mailto:contato@referenciaobras.com.br"
                  className="text-zinc-400 hover:text-blue-500 transition-colors break-all"
                >
                  contato@referenciaobras.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-500 mt-1" />
                <span className="text-zinc-400">
                  Rua Ilha Dourada, 26
                  <br />
                  São Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {currentYear} Referência Obras - Engenharia e Construções. Todos
            os direitos reservados. Desenvolvido por{' '}
            <a
              className="text-blue-500"
              href="https://guijsweb.com.br"
              target="_blank"
            >
              GuiJsWeb
            </a>
          </p>
          <p className="text-sm text-zinc-600">CNPJ: 13.054.344/0001-25</p>
        </div>
      </div>
    </footer>
  );
}
