export interface SubstanceModule {
  id: 'metals' | 'nicotine' | 'flavorings'
  name: string
  number: string
  title: string
  eyebrow: string
  summary: string
  mechanism: string
  whyItMatters: string
  science: string
  tags: string[]
  sources: { label: string; url: string }[]
}

export const substanceModules: SubstanceModule[] = [
  {
    id: 'metals',
    name: 'METAIS',
    number: '01',
    title: 'VESTÍGIOS METÁLICOS',
    eyebrow: 'ELEMENTOS NO AEROSSOL',
    summary:
      'Análises já identificaram elementos como níquel, estanho e chumbo no aerossol; outros, como cromo, também são investigados. Isso não significa que todo produto contenha todos eles.',
    mechanism:
      'A resistência e outras peças metálicas aquecidas podem contribuir para alguns elementos encontrados. O resultado depende do dispositivo, do líquido e das condições de uso.',
    whyItMatters:
      'Alguns metais podem ser prejudiciais à saúde. O risco depende de qual substância está presente, da quantidade e da exposição — não é possível deduzir um efeito clínico só pela detecção.',
    science:
      'Estudos medem concentrações distintas entre produtos e condições de operação. Uma análise de laboratório descreve as amostras examinadas; não determina a composição de todos os dispositivos disponíveis.',
    tags: ['Níquel', 'Estanho', 'Chumbo', 'Cromo*'],
    sources: [
      {
        label: 'CDC · Substâncias no aerossol',
        url: 'https://www.cdc.gov/tobacco/e-cigarettes/about.html',
      },
      {
        label: 'Olmedo et al. · Metais e bobinas metálicas (2018)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6066345/',
      },
    ],
  },
  {
    id: 'nicotine',
    name: 'NICOTINA',
    number: '02',
    title: 'UMA SUBSTÂNCIA QUE CAUSA DEPENDÊNCIA',
    eyebrow: 'AÇÃO NO ORGANISMO',
    summary:
      'A nicotina é psicoativa e pode causar dependência. Muitos líquidos a contêm, mas a composição varia; a presença não deve ser presumida igual em todos os produtos.',
    mechanism:
      'Após a inalação, a nicotina pode passar dos pulmões para a corrente sanguínea e alcançar o cérebro. Com o uso repetido, o cérebro se adapta, o que pode levar a desejo intenso e abstinência.',
    whyItMatters:
      'A dependência envolve processos biológicos e comportamentais — não é falta de força de vontade. A atenção é especial na adolescência, pois o cérebro ainda está em desenvolvimento.',
    science:
      'Os efeitos associados à nicotina, como dependência e impacto no desenvolvimento cerebral, são diferentes dos possíveis efeitos de partículas, metais e outros compostos presentes no aerossol.',
    tags: ['Psicoativa', 'Dependência', 'Adolescência'],
    sources: [
      {
        label: 'CDC · Efeitos à saúde e dependência',
        url: 'https://www.cdc.gov/tobacco/e-cigarettes/health-effects.html',
      },
      {
        label: 'NIDA · Dispositivos de vaping e cigarros eletrônicos',
        url: 'https://nida.nih.gov/publications/drugfacts/vaping-devices-electronic-cigarettes',
      },
    ],
  },
  {
    id: 'flavorings',
    name: 'AROMATIZANTES',
    number: '03',
    title: 'AROMA NÃO SIGNIFICA SEGURANÇA',
    eyebrow: 'AQUECIMENTO E COMPOSTOS',
    summary:
      'Líquidos podem conter aromatizantes e outros compostos. Inalar uma substância não equivale a ingeri-la: pulmões e sistema digestivo têm formas diferentes de processar substâncias.',
    mechanism:
      'O aquecimento transforma o líquido em aerossol e pode alterar o que é liberado. A composição resultante depende dos ingredientes, do dispositivo, da temperatura e do modo de uso.',
    whyItMatters:
      'Uma substância adequada para uso alimentar não é automaticamente segura para inalação. Isso não quer dizer que todo aromatizante seja tóxico ou cause o mesmo efeito.',
    science:
      'A composição do líquido e do aerossol pode variar, e seus efeitos dependem do composto e da exposição. A avaliação de um ingrediente isolado não descreve necessariamente a mistura aquecida.',
    tags: ['Aromatizantes', 'Compostos', 'Aquecimento'],
    sources: [
      {
        label: 'CDC · Componentes do aerossol e aromatizantes',
        url: 'https://www.cdc.gov/tobacco/e-cigarettes/about.html',
      },
      {
        label: 'OMS · Cigarros eletrônicos e emissões',
        url: 'https://www.who.int/news-room/questions-and-answers/item/tobacco-e-cigarettes',
      },
    ],
  },
]
