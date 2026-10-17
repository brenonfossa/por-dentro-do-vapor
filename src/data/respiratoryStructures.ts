export interface RespiratoryStructure {
  id: string
  name: string
  function: string
  airflow: string
  observation: string
  markerPosition: { left: string; top: string }
}

export const respiratoryStructures: RespiratoryStructure[] = [
  {
    id: 'trachea',
    name: 'Traqueia',
    function:
      'A traqueia é um tubo que conduz o ar da laringe até os brônquios. Anéis de cartilagem ajudam a manter sua passagem aberta, enquanto o revestimento interno participa da remoção de partículas.',
    airflow:
      'O ar inspirado percorre a traqueia antes de se dividir entre os dois pulmões.',
    observation:
      'O aerossol inalado não é apenas vapor de água. Sua composição varia conforme produto, líquido, dispositivo e uso.',
    markerPosition: { left: '50%', top: '15%' },
  },
  {
    id: 'bronchi',
    name: 'Brônquios',
    function:
      'Os brônquios são as duas ramificações principais da traqueia, uma para cada pulmão. Eles conduzem e distribuem o ar por passagens progressivamente menores dentro dos pulmões.',
    airflow:
      'O ar segue da traqueia para os brônquios e depois para ramos menores.',
    observation:
      'Partículas podem entrar em contato com as vias aéreas; onde se depositam depende de suas propriedades e do padrão de inalação.',
    markerPosition: { left: '50%', top: '35%' },
  },
  {
    id: 'bronchioles',
    name: 'Bronquíolos',
    function:
      'Bronquíolos são ramificações finas das vias aéreas, sem anéis de cartilagem como os brônquios. Sua musculatura pode alterar o calibre da passagem e o fluxo de ar em direção às regiões de troca gasosa.',
    airflow:
      'O ar percorre os bronquíolos até chegar às pequenas estruturas alveolares.',
    observation:
      'O destino das partículas não é igual em todas as pessoas ou situações: tamanho, composição e modo de inalação influenciam a deposição.',
    markerPosition: { left: '29%', top: '60%' },
  },
  {
    id: 'alveoli',
    name: 'Alvéolos',
    function:
      'Alvéolos são pequenos sacos de ar rodeados por capilares sanguíneos. A parede fina entre o ar e o sangue permite a troca de oxigênio e dióxido de carbono durante a respiração.',
    airflow:
      'O ar chega aos alvéolos ao fim das vias respiratórias; ali ocorre a troca gasosa.',
    observation:
      'Partículas pequenas podem alcançar regiões profundas dos pulmões, mas a deposição depende de características do aerossol e da respiração.',
    markerPosition: { left: '78%', top: '70%' },
  },
  {
    id: 'lung-tissue',
    name: 'Tecido pulmonar',
    function:
      'O tecido pulmonar inclui as estruturas que sustentam as vias aéreas e as regiões de troca gasosa, além de vasos e tecidos de suporte. Não é uma cavidade vazia: é um conjunto organizado de estruturas vivas.',
    airflow:
      'O ar circula pelos espaços das vias e dos alvéolos; não atravessa o tecido sólido.',
    observation:
      'Componentes do aerossol podem interagir com diferentes superfícies respiratórias. Não se deve supor que todas as substâncias atinjam cada região igualmente.',
    markerPosition: { left: '22%', top: '48%' },
  },
]

export const airflowSequence = [
  { structureId: 'trachea', label: 'Traqueia', caption: 'A passagem principal conduz o ar.' },
  { structureId: 'bronchi', label: 'Brônquios', caption: 'O fluxo se divide para os pulmões.' },
  { structureId: 'bronchioles', label: 'Bronquíolos', caption: 'Ramos menores distribuem o fluxo.' },
  { structureId: 'alveoli', label: 'Alvéolos', caption: 'O ar chega às regiões de troca gasosa.' },
]

export const respiratorySources = [
  {
    label: 'CDC · Efeitos dos cigarros eletrônicos na saúde',
    url: 'https://www.cdc.gov/tobacco/e-cigarettes/health-effects.html',
  },
  {
    label: 'OpenStax · Troca gasosa',
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange',
  },
]
