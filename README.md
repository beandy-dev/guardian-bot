# Guardian Bot - Climate Assistant
Tecnologia que cuida de você e do planeta

## Sobre
Guardian Bot é um assistente climático inteligente com um mascote robô interativo que transforma dados ambientais complexos em informações acessíveis e emocionalmente conectadas, ajudando brasileiros a se protegerem dos riscos climáticos diários.

## Problema
- A poluição do ar mata mais de 7 milhões de pessoas por ano no mundo; no Brasil, são cerca de 49 mil mortes por ano apenas por poluição atmosférica.
- A maioria das pessoas não sabe interpretar dados climáticos ou quando o ambiente está perigoso para sua saúde.

## Solução
O Guardian vai além de simplesmente exibir dados climáticos. Ele cria uma conexão emocional com o usuário, transformando informações complexas em uma experiência intuitiva e humana, com alertas, recomendações e interações do robô mascote.

## Como o Guardian Funciona
O Guardian possui um sistema de estados que analisa cinco variáveis ambientais simultaneamente:

- **Qualidade do ar** (good/moderate/poor)  
- **Temperatura** (faixa ideal: 18-28°C)  
- **Umidade** (faixa ideal: 40-70%)  
- **Velocidade do vento** (limite seguro: 20 km/h)  
- **Índice UV** (alertas para níveis high/very-high)  

### Estados Emocionais
- **Perfect**: todas as condições ideais; olhos verdes com brilho, sorriso amplo.  
- **Happy**: qualidade do ar boa e temperatura ≤30°C; sorriso curvado indicando contentamento.  
- **Sad**: qualidade do ar moderada ou ruim; boca invertida demonstrando preocupação.  
- **Neutral**: estado padrão para condições mistas ou sem cidade selecionada.  

### Reações Específicas
- **Alertas UV críticos**: borda vermelha brilhante ao redor do corpo do Guardian.  
- **Clima ensolarado**: tons dourados, sorriso expandido.  
- **Clima chuvoso**: coloração azul intensa, boca invertida.  
- **Clima nublado**: tons acinzentados, expressão equilibrada.  
- **Clima frio**: azul claro com padrão de tremor na boca.  
- **Vento forte (>20 km/h)**: olhos deformados em oval alongado.  
- **Ar seco (<40%)**: olhos vermelhos indicando desconforto respiratório.  
- **Calor extremo (>30°C)**: boca vermelha de alerta.  
- **Frio intenso (<18°C)**: boca azul sinalizando necessidade de aquecimento.  

### Interatividade
Ao passar o mouse sobre o Guardian, seus olhos piscam e a boca se abre, reforçando a sensação de que ele é um companheiro digital vivo e responsivo.

## Funcionalidades
- Sistema de estados emocionais com 15+ reações visuais.  
- Alertas visuais críticos para condições perigosas.  
- Dados climáticos detalhados de 8 cidades brasileiras.  
- Chat inteligente com respostas contextuais.  
- Recomendações personalizadas com base nas condições (`recommendation.json`).  
- Interface responsiva com design futurista eco-tecnológico.  
- Capacidade de exibir múltiplas condições simultaneamente.  

## Tecnologias
- HTML5, CSS3 e JavaScript com modularização.  
- Arquitetura clara: coordenação (`app.js`), carregamento de dados (`data.js`), estados visuais (`robot.js`) e processamento climático (`weather.js`).  
- Algoritmo otimizado de detecção de condições e classes CSS modulares.  
- Transições suaves entre estados usando animações CSS.  
- Código limpo, sem dados hardcoded, com cache de elementos DOM para performance.

## Bases de Dados Simuladas
Para demonstração sem usar APIs externas:

- **cities.json**: dados meteorológicos e qualidade do ar de 8 cidades brasileiras.  
- **chat-knowledge.json**: base de conhecimento para chat inteligente.  
- **recommendation.json**: recomendações personalizadas baseadas nas condições climáticas.  

## Como Usar
- Acesse a aplicação: [https://beandy-dev.github.io/guardian-bot/index.html](https://beandy-dev.github.io/guardian-bot/index.html)  
- Selecione uma cidade no dropdown.  
- Observe o Guardian reagir às condições climáticas.  
- Interaja com o chat para obter informações personalizadas.

### Instalação Local
```bash
git clone https://github.com/beandy-dev/guardian-bot.git
cd guardian-bot
# Abra index.html em um navegador ou use Live Server do VS Code
