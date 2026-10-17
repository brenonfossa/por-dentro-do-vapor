export interface StorySection {
  id: string
  number: string
  title: string
  eyebrow: string
  description: string
}

export const storySections: StorySection[] = [
  {
    id: 'abertura',
    number: '01',
    title: 'Abertura cinematográfica',
    eyebrow: 'Ponto de partida',
    description:
      'Uma introdução visual à investigação do aerossol e do sistema respiratório.',
  },
  {
    id: 'mito-do-vapor',
    number: '02',
    title: 'O mito do vapor inofensivo',
    eyebrow: 'Questionar',
    description:
      'Um espaço para examinar afirmações comuns e distinguir vapor de aerossol.',
  },
  {
    id: 'anatomia-pulmonar',
    number: '03',
    title: 'Mapa anatômico dos pulmões',
    eyebrow: 'Orientar',
    description:
      'A anatomia respiratória será apresentada como referência para o percurso.',
  },
  {
    id: 'laboratorio-substancias',
    number: '04',
    title: 'Laboratório das substâncias',
    eyebrow: 'Investigar',
    description:
      'Três frentes organizam a investigação: metais, nicotina e outros compostos.',
  },
  {
    id: 'alveolos',
    number: '05',
    title: 'Zoom microscópico dos alvéolos',
    eyebrow: 'Observar',
    description:
      'Uma jornada microscópica pelos alvéolos, pela troca gasosa e pela integridade do tecido pulmonar.',
  },
  {
    id: 'evali',
    number: '06',
    title: 'EVALI e lesões pulmonares',
    eyebrow: 'Contextualizar',
    description:
      'Explore EVALI, sinais de alerta e o contexto dos riscos respiratórios associados ao vaping.',
  },
  {
    id: 'componentes-do-vape',
    number: '07',
    title: 'Investigação do dispositivo',
    eyebrow: 'Desmontar',
    description:
      'Identifique as peças de um dispositivo e como o líquido aquecido forma um aerossol.',
  },
  {
    id: 'mitos-e-evidencias',
    number: '08',
    title: 'Mitos versus evidências',
    eyebrow: 'Comparar',
    description:
      'Abra afirmações comuns e compare-as com explicações apoiadas em fontes verificáveis.',
  },
  {
    id: 'desafio-investigativo',
    number: '09',
    title: 'Desafio de investigação',
    eyebrow: 'Participar',
    description:
      'Revise conceitos sobre os pulmões, o aerossol e a busca por atendimento.',
  },
  {
    id: 'conclusao-e-fontes',
    number: '10',
    title: 'Conclusão e referências',
    eyebrow: 'Consultar',
    description:
      'Reúna as principais ideias e consulte as referências utilizadas ao longo do percurso.',
  },
]
