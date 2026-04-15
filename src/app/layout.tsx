import type { Metadata } from 'next';
import { Chivo, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistChivo = Chivo({
  variable: '--font-chivo',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Referência Engenharia e Construções | Galpões e AVCB em todo o Brasil',
  description:
    'Especialistas em construção de galpões industriais, obras comerciais e regularização AVCB com aprovação junto ao Corpo de Bombeiros.',
  keywords: [
    'construção de galpões',
    'regularização AVCB',
    'engenharia industrial',
    'obras comerciais',
    'segurança contra incêndio',
    'projetos aprovados',
    'construção em todo o Brasil',
  ],
  authors: [{ name: 'Referência Engenharia e Construções' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Referência Engenharia e Construções | Galpões e AVCB em todo o Brasil',
    description:
      'Especialistas em construção de galpões industriais, obras comerciais e regularização AVCB com aprovação junto ao Corpo de Bombeiros.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Referência Engenharia e Construções | Galpões e AVCB em todo o Brasil',
    description:
      'Especialistas em construção de galpões industriais, obras comerciais e regularização AVCB com aprovação junto ao Corpo de Bombeiros.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`h-full overflow-x-hidden`}>
      <body
        className={`min-h-full flex flex-col antialiased ${geistChivo.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
