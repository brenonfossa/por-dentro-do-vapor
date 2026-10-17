# Por Dentro do Vapor

Experiência educacional interativa sobre cigarros eletrônicos e o sistema respiratório.

## Desenvolvimento

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Verificações

```sh
npm run lint
npm run build
```

A abertura cinematográfica inclui uma ilustração anatômica SVG original, partículas
ambientais leves, animações que respeitam movimento reduzido e uma introdução ao
capítulo sobre o mito do vapor. O capítulo 03 oferece um diagrama interativo 2D das
vias respiratórias, informações por estrutura, fontes científicas e um percurso do
ar com controles para iniciar, pausar, avançar e reiniciar. O menu permite navegar
pelas dez seções, acompanha o progresso durante a rolagem e oferece um modo de
apresentação em tela cheia.

O capítulo 04 apresenta o Laboratório de Substâncias: três módulos interativos sobre
metais, nicotina e aromatizantes, com progresso durante a sessão, visualizações SVG
conceituais, análise científica expansível e referências do CDC, da OMS, do NIDA e
de um estudo revisado por pares sobre metais no aerossol. A investigação pode ser
concluída em qualquer ordem; não é necessário completar os módulos para continuar
a navegação.

O capítulo 05 é uma jornada microscópica 2D pelos alvéolos, com transição visual
dos pulmões para um detalhe esquemático, controles da troca gasosa, alternância
entre a função alveolar e respostas conceituais do tecido, painel de evidências e
um desafio de três perguntas. A animação não depende de áudio e a ilustração não
representa escala ou diagnóstico real.

O capítulo 06 contextualiza EVALI, seus sintomas investigados, a associação da
vitamina E acetato no surto dos Estados Unidos e orientações para buscar atendimento.
O capítulo 07 identifica peças de um dispositivo ilustrado; o 08 permite comparar
cinco mitos com evidências; o 09 oferece um quiz final; e o 10 reúne as ideias-chave
e fontes utilizadas no projeto.

As visualizações anatômicas, laboratoriais e do dispositivo são diagramas vetoriais
esquemáticos; não há modelo 3D nem bibliotecas externas de anatomia ou animação.
As referências incluem CDC, Anvisa, OMS, NIDA, OpenStax e um estudo revisado por
pares disponível no PubMed Central.
