import { Camion, Contract, Hands, Project } from '.'

const secciones = [
  {
    title: 'Gestor de Proyectos',
    icon: Project,
    linkTo: 'gestor-de-proyectos',
    color: '#5cd65c',
  },
  {
    title: 'Gestor de Convenios',
    icon: Contract,
    linkTo: 'gestor-de-convenios',
    color: '#9999ff',
  },
  {
    title: 'Gestor de Contrataciones',
    icon: Hands,
    linkTo: 'gestor-de-contrataciones',
    color: '#ff0066',
  },
  {
    title: 'Gestor de Obras',
    icon: Camion,
    linkTo: 'gestor-de-obras',
    color: '#00cc99',
  },
]

export { secciones }
