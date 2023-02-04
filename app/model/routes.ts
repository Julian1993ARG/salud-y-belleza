export interface navRoute {
  id: number;
  title: string;
  path: string;
}

export const navRoutes = [
  {
    id: 1,
    title: 'Inicio',
    path: '/'
  },
  {
    id: 2,
    title: 'Novedades',
    path: '/news'
  },
  {
    id: 3,
    title: 'Contacto',
    path: '#footer'
  }
];
