# Guardian Bot - Climate Assistant

**Tecnologia que cuida de você e do planeta**

Um assistente climático inteligente que transforma dados ambientais complexos em informações acessíveis e emocionalmente conectadas, ajudando brasileiros a se protegerem dos riscos climáticos diários.

## O Problema Real

Segundo a OMS, a poluição do ar mata mais de 7 milhões de pessoas anualmente no mundo. No Brasil, são cerca de 49 mil mortes por ano apenas por poluição atmosférica. O problema é que a maioria das pessoas não sabe interpretar dados climáticos ou quando o ambiente está perigoso para sua saúde.

## A Solução: O Guardian

O coração do projeto é o Guardian, um robot digital que vai além de simplesmente exibir dados. Ele cria uma conexão emocional genuína com o usuário, transformando informações climáticas complexas em uma experiência intuitiva e humana.

**Como o Guardian Funciona**

O Guardian possui um sistema inteligente de estados que analisa múltiplas variáveis ambientais simultaneamente para determinar sua aparência e comportamento:

**Sistema de Análise Inteligente**

O robot avalia cinco critérios principais:
- Qualidade do ar (good/moderate/poor)
- Temperatura (faixa ideal: 18-28°C)
- Umidade (faixa ideal: 40-70%)
- Velocidade do vento (limite seguro: 20 km/h)
- Índice UV (alertas para níveis high/very-high)

**Estados Emocionais do Guardian**

**Estado Perfect**: Ativado quando todas as condições estão ideais. Seus olhos ganham um gradiente verde brilhante com efeito de brilho, e sua boca forma um sorriso amplo e curvado. Este é o estado mais raro e especial.

**Estado Happy**: Quando a qualidade do ar está boa e a temperatura não ultrapassa 30°C. A boca forma um sorriso curvado para baixo, indicando contentamento e segurança para atividades ao ar livre.

**Estado Sad**: Acionado quando a qualidade do ar está moderada ou ruim. A boca inverte para uma curva voltada para cima (como uma frown), demonstrando preocupação com as condições ambientais.

**Estado Neutral**: O estado padrão, mantendo uma expressão neutra quando as condições são mistas ou quando nenhuma cidade foi selecionada.

**Reações Específicas às Condições**

**Sistema de Alertas Visuais**

**Alertas UV Críticos**: Quando o índice UV está alto ou muito alto, o Guardian desenvolve uma borda vermelha brilhante ao redor da cabeça e corpo com efeito de sombra luminosa, funcionando como um alerta visual de perigo imediato.

**Adaptação Climática Dinâmica**

**Clima Ensolarado**: Transforma-se em tons dourados (#ffdd57 na cabeça, #ffcd38 no corpo) com sorriso expandido, indicando condições ideais para atividades externas.

**Clima Chuvoso**: Adota coloração azul intensa (#6ec5ff na cabeça, #47a7d9 no corpo) com boca invertida em formato de arco, sugerindo cautela.

**Clima Nublado**: Assume tons acinzentados neutros (#d3d3d3 na cabeça, #bfbfbf no corpo) mantendo expressão equilibrada.

**Clima Frio**: Desenvolve tonalidade azul clara (#b3e5fc na cabeça, #81d4fa no corpo) com padrão listrado na boca simulando tremor.

**Reações Ambientais Extremas**

**Vento Forte (>20 km/h)**: Seus olhos se deformam em formato oval alongado, simulando o efeito visual do vento forte no rosto.

**Ar Seco (<40% umidade)**: Os olhos mudam para vermelho intenso (#ff4444), indicando desconforto respiratório e necessidade de hidratação.

**Calor Extremo (>30°C)**: A boca adquire coloração vermelha de alerta, sinalizando risco de insolação e necessidade de proteção.

**Frio Intenso (<18°C)**: A boca fica azul, indicando necessidade de aquecimento e proteção contra o frio.

**Interatividade Emocional**

O Guardian também possui comportamentos interativos: ao passar o mouse sobre ele, seus olhos piscam e sua boca se abre, como se estivesse tentando se comunicar. Essa interação reforça a sensação de que ele é um companheiro digital vivo e responsivo.

**Arquitetura das Reações**

O sistema de reações do Guardian é implementado através de um algoritmo inteligente que:

1. **Análise Multivariável**: Processa simultaneamente 5 parâmetros ambientais (qualidade do ar, temperatura, umidade, vento, UV)
2. **Hierarquia de Estados**: Prioriza condições críticas (UV alto, ar ruim) sobre condições menores
3. **Combinação de Classes CSS**: Aplica múltiplas classes visuais simultaneamente para criar reações complexas
4. **Transições Suaves**: Utiliza animações CSS para mudanças graduais entre estados
5. **Feedback Imediato**: Responde instantaneamente a mudanças de cidade ou condições

O sistema foi projetado para que cada mudança visual tenha significado prático, transformando dados técnicos em sinais emocionais que qualquer pessoa pode interpretar instantaneamente.

## Funcionalidades

**Robot Expressivo Avançado**: Sistema de estados emocionais com 15+ reações visuais distintas que respondem dinamicamente às condições climáticas

**Alertas de Segurança**: Sistema de avisos visuais críticos para condições perigosas (UV alto, temperatura extrema, ar seco)

**Dados Climáticos Completos**: Informações detalhadas de 8 cidades brasileiras com análise de qualidade do ar, temperatura, umidade, vento e índice UV

**Chat Inteligente**: Sistema de conversação com base de conhecimento estruturada e respostas contextuais

**Recomendações Personalizadas**: Sugestões contextuais baseadas no estado atual do Guardian e condições ambientais

**Interface Responsiva**: Design futurista eco-tecnológico com glass morphism e animações interativas

**Sistema de Reações Combinadas**: Capacidade de exibir múltiplas condições simultaneamente (ex: clima chuvoso + UV alto + vento forte)

## Tecnologias Utilizadas

HTML5, CSS3 e JavaScript vanilla com módulos ES6. O projeto utiliza arquitetura modular profissional com separação clara de responsabilidades entre coordenação (app.js), carregamento de dados (data.js), estados visuais (robot.js) e processamento climático (weather.js).

**Melhorias Técnicas Implementadas**:
- Sistema de cache de elementos DOM para melhor performance
- Algoritmo otimizado de detecção de condições perfeitas
- Classes CSS modulares para combinação de efeitos visuais
- Transições suaves entre estados com CSS animations
- Código limpo sem métodos desnecessários ou dados hardcoded

## Conformidade com a Imersão Dev

Este projeto segue rigorosamente o conteúdo da Imersão Dev 10ª Edição:

- HTML, CSS e JavaScript vanilla sem frameworks
- Manipulação de dados JSON estruturados
- Variáveis, loops e funções aplicados na prática
- Busca inteligente através do sistema de chat
- Interface responsiva com Flexbox
- Modularização com ES6 modules
- GitHub para versionamento e deploy

## APIs Futuras e Bases de Conhecimento Atuais

Para manter conformidade com o escopo da Imersão, foram criadas bases de conhecimento estruturadas que simulam dados reais:

**OpenWeatherMap API**
Função: Dados climáticos em tempo real
Substituída por: cities.json com dados meteorológicos de 8 cidades brasileiras incluindo temperatura, umidade, vento e índice UV

**OpenAQ API**
Função: Qualidade do ar e poluição atmosférica
Substituída por: Dados de qualidade do ar integrados no cities.json com status, PM2.5, PM10 e ozônio

**Google Gemini API**
Função: Processamento de linguagem natural para chat
Substituída por: chat-knowledge.json com base de conhecimento estruturada por categorias, palavras-chave e respostas contextuais

Essas bases de dados foram criadas para demonstrar a funcionalidade completa sem extrapolar a complexidade ensinada na Imersão.

## Como Usar

1. Acesse a landing page através do landing.html
2. Clique em "Entrar no App" para acessar a aplicação principal
3. Selecione uma cidade no seletor dropdown
4. Observe o Guardian reagir às condições climáticas mudando de estado
5. Interaja com o chat para obter informações ambientais personalizadas

## Instalação Local

```
git clone [seu-repositorio]
cd guardian-bot
```

Abra o arquivo app.html em um navegador ou use um servidor local como Live Server do VS Code.

## Design System

Tema futurista eco-tecnológico com cores verde neon e azul cibernético sobre fundo escuro. Utiliza glass morphism com bordas brilhantes e animações sutis de escaneamento e pulsação holográfica.

## Impacto Social

O Guardian Bot democratiza informações ambientais, transformando dados complexos em ações simples que podem prevenir doenças respiratórias, educar sobre riscos ambientais e conscientizar sobre sustentabilidade.

## Visão de Futuro

Este projeto representa apenas o primeiro passo de uma jornada maior. A arquitetura modular foi pensada para evolução contínua, permitindo que o Guardian se torne uma plataforma completa de proteção ambiental.

## Próximos Passos

**Integração de Dados Reais**: Implementação das APIs OpenWeatherMap, OpenAQ e Google Gemini para dados em tempo real

**Inteligência Preditiva**: Sistema de alertas antecipados baseado em tendências climáticas e padrões de poluição

**Personalização Avançada**: Perfis de usuário com histórico de saúde e preferências de atividades ao ar livre

**Rede Colaborativa**: Comunidade de usuários compartilhando condições locais e criando uma rede de monitoramento cidadão

**Gamificação Ambiental**: Sistema de pontuação e conquistas para incentivar comportamentos sustentáveis

**Expansão Geográfica**: Cobertura para todas as capitais brasileiras e principais cidades da América Latina

**Integração IoT**: Conexão com sensores pessoais de qualidade do ar e dispositivos wearables

**Impacto Mensurável**: Dashboard de impacto mostrando vidas protegidas e comportamentos mudados através da plataforma

O Guardian Bot não é apenas um projeto de programação. É o protótipo de uma revolução na forma como as pessoas se relacionam com o meio ambiente, usando tecnologia para criar consciência, proteção e ação coletiva.

**Desenvolvido para um futuro mais sustentável**
