import {
  CategoriesProps,
  ClientsProps,
  ProjectsProps,
  RegionsProps,
} from './types';

import agenciaVP from './agenciavp.png';
import brAutoParts from './brautoparts.png';
import castor from './castor.png';
import comolatti from './comolatti.png';
import express from './express.png';
import iveco from './iveco.png';
import orbid from './orbid.png';
import terraco from './terraco.png';
import viaduto from './viaduto.png';

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: 'Galpão Industrial Comolatti',
    client: 'Grupo Comolatti',
    category: 'Industrial',
    location: 'Santos, SP',
    state: 'SP',
    region: 'Sudeste',
    area: '12.000 m²',
    year: '2024',
    duration: '8 meses',
    description:
      'Reforma em layout de galpão do Grupo Comolatti em Santos – SP',
    services: [
      'Estrutura Metálica',
      'Piso Industrial',
      'Instalações Elétricas',
      'Sistema de Incêndio',
      'Área Administrativa',
    ],
    images: ['/comolatti-santos.jpg'],
    featured: true,
  },
  {
    id: 2,
    title: 'BR Autoparts',
    client: 'BR Autoparts',
    category: 'Industrial',
    location: 'Campinas, SP',
    state: 'SP',
    region: 'Sudeste',
    area: '11.000 m²',
    year: '2024',
    duration: '12 meses',
    description: 'Reforma geral para adequação – 11.000m²',
    services: [
      'Fundação Especial',
      'Estrutura Pré-moldada',
      'Cobertura Termoacústica',
      'Sistema de Docas',
      'Urbanização',
    ],
    images: ['/brautoparts-galpao.jpg'],
    featured: true,
  },
  {
    id: 3,
    title: 'Marilia',
    client: 'Marilia',
    category: 'Comercial',
    location: 'São Paulo, SP',
    state: 'SP',
    region: 'Sudeste',
    area: '6.000 m²',
    year: '2023',
    duration: '4 meses',
    description: 'Reforma geral galpão em Marília – 6.000m²',
    services: [
      'Demolição Controlada',
      'Arquitetura de Interiores',
      'Climatização',
      'Iluminação LED',
      'Fachada',
    ],
    images: ['/marilia.jpg'],
    featured: false,
  },
];

export const categories: CategoriesProps[] = [
  { id: 'all', label: 'Todos' },
  { id: 'Industrial', label: 'Industrial' },
  { id: 'Comercial', label: 'Comercial' },
  { id: 'Residencial', label: 'Residencial' },
  { id: 'AVCB', label: 'AVCB' },
];

export const regions: RegionsProps[] = [
  { id: 'all', label: 'Todas as Regiões' },
  { id: 'Sudeste', label: 'Sudeste' },
  { id: 'Sul', label: 'Sul' },
  { id: 'Centro-Oeste', label: 'Centro-Oeste' },
  { id: 'Nordeste', label: 'Nordeste' },
  { id: 'Norte', label: 'Norte' },
];

export const clients: ClientsProps[] = [
  { name: 'Comolatti', logo: '/comolatti.png' },
  { name: 'Express Grill', logo: '/express.png' },
  { name: 'Agência Ambiental - Vale do Paraíba', logo: '/agenciavp.png' },
  { name: 'Castor', logo: '/castor.png' },
  { name: 'Terraço Itália', logo: '/terraco.png' },
  { name: 'Iveco Cofipe', logo: '/iveco.png' },
  { name: 'Viaduto Empilhadeiras', logo: '/viadutoe.png' },
  { name: 'BR Auto Parts', logo: '/brautoparts.png' },
  { name: 'Orbid', logo: '/orbid.png' },
];
