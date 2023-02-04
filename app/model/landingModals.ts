import { StaticImageData } from 'next/image';

import imageWork1 from '../../public/images/works1.png';
import imageWork2 from '../../public/images/works2.png';
import imageWork3 from '../../public/images/works3.png';
import imageWork4 from '../../public/images/works4.png';
import imageWork5 from '../../public/images/works5.png';
import imageWork6 from '../../public/images/works6.png';
import imageWork7 from '../../public/images/works7.png';
import imageWork8 from '../../public/images/works8.png';
import imageWork9 from '../../public/images/works9.png';
import imageWork10 from '../../public/images/works10.png';
import imageWork11 from '../../public/images/works11.png';
export interface landingWork{
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  check1: string;
  check2: string;
  check3: string;
}
export const landingWorks:landingWork[] = [
  {
    id: 1,
    title: 'MASAJES DESCONTRACTURANTES',
    description: 'Con el objetivo de liberar los músculos y las articulaciones. Un masaje descontracturante permite aflojar y relajar los músculos rígidos y tensos.',
    image: imageWork1,
    check1: 'Alivio',
    check2: 'Relajación',
    check3: 'Eliminación de contracturas'
  },
  {
    id: 2,
    title: 'REIKI Y MEDITACIÓN',
    description: 'Método curativo en el cual se transmite con las manos al cuerpo del paciente energía universal para curar dolencias y enfermedades.',
    check1: 'Relajación',
    check2: 'Reduce el estrés',
    check3: 'Promueve la curación',
    image: imageWork2
  },
  {
    id: 3,
    title: 'BIOMAGNETISMO',
    description: 'Aplicación de imanes que reustaren el ph. El biomagnetismo es una terápia magnética alternativa en donde se genera un ambiente incómodo a los microorganismos, favoreciendo su eliminación.',
    check1: 'Relajación',
    check2: 'Terapia alternativa',
    check3: 'Eliminación de malestares',
    image: imageWork3
  },
  {
    id: 4,
    description: 'Medicina alternativa en donde se intenta encontrar el origen metafísico de las enfermedades, o su significado emocional, para buscar a partir de allí la forma de sanar.',
    title: 'BIODECODIFICACIÓN',
    check1: 'Alivio',
    check2: 'Relajación',
    check3: 'Terapia alternativa',
    image: imageWork4
  },
  {
    id: 5,
    title: 'PEDICURÍA',
    description: 'Tratamiento completo de uñas y pies. Se limpian las impurezas y se eliminan las células muertas. La pedicuría permite tonificar y activar la circulación sanguínea.',
    check1: 'Belleza',
    check2: 'Esmaltado permanente',
    check3: 'Eliminación de callos',
    image: imageWork5
  },
  {
    id: 6,
    title: 'MANICURÍA',
    description: 'Tratamiento completo de uñas y manos. La manicuría permite mantener nuestras manos y uñas completamente pulcras y limpias.',
    check1: 'Belleza',
    check2: 'Cuidado de manos',
    check3: 'Esmaltado permanente',
    image: imageWork6
  },
  {
    id: 7,
    title: 'COSMETOLOGÍA',
    description: 'Tratamiento para el beneficio de la salud, belleza y la apariencia física de la piel del rostro. ',
    check1: 'Relajación',
    check2: 'Limpieza de cutis',
    check3: 'Eliminación de impurezas',
    image: imageWork7
  },
  {
    id: 8,
    title: 'DEPILACIÓN DEFINITIVA',
    description: 'Tratamientos para mantener la piel sin vello ni pelos enquistados. La depilación definitiva elimina el vello a través del láser.',
    check1: 'Suavidad',
    check2: 'Máquina Soprano',
    check3: 'Mejora en el aspecto de la piel',
    image: imageWork8
  },
  {
    id: 9,
    title: 'DRENAJE LINFÁTICO',
    description: 'Masaje suave y ligero para movilizar líquidos del organismo y así favorecer la eliminación de sustancias de deshecho acumuladas en el líquido que ocupa el espacio entre las células.',
    check1: 'Reduce el estrés',
    check2: 'Combate celulitis',
    check3: 'Favorece la cicatrización',
    image: imageWork9
  },
  {
    id: 10,
    title: 'PERFILADO DE CEJAS',
    description: 'El perfilado permite diseñar y modelar las cejas.',
    check1: 'Belleza',
    check2: 'Diseño de cejas',
    check3: 'Depilación de cejas',
    image: imageWork10
  },
  {
    id: 11,
    title: 'MASAJES REDUCTORES',
    description: 'Masaje que se realiza de forma fuerte y firme, con el fin de desprender los adipocitos o células grasas que se encuentran en la zona de tratar.',
    check1: 'Eliminación de linfa',
    check2: 'Modelación de cuerpo',
    check3: 'Favorece el flujo sanguíneo',
    image: imageWork11
  }
];
export interface dropDownRoute {
  path: string;
  title: string;
}
export const dropDownRoutes = [
  { path: 'work1', title: 'Masajes' },
  { path: 'work2', title: 'Reiki' },
  { path: 'work3', title: 'Biomagnetismo' },
  { path: 'work4', title: 'Biodescodificación' },
  { path: 'work5', title: 'Pedicuría' },
  { path: 'work6', title: 'Cosmetología' },
  { path: 'work7', title: 'Depilación' },
  { path: 'work8', title: 'Drenaje Linfatíco' },
  { path: 'work9', title: 'Perfilado de cejas' },
  { path: 'work10', title: 'Masajes Reductores' }
];
