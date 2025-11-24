# Guardian Bot - Climate Assistant
Tecnologia que cuida de você e do planeta

## Sobre
Guardian Bot é um assistente climático inteligente que transforma dados ambientais complexos em informações acessíveis e emocionalmente conectadas, ajudando brasileiros a se protegerem dos riscos climáticos diários.

## Problema
- Segundo a OMS, a poluição do ar mata mais de 7 milhões de pessoas anualmente no mundo. No Brasil, são cerca de 49 mil mortes por ano apenas por poluição atmosférica.
- A maioria das pessoas não sabe interpretar dados climáticos ou quando o ambiente está perigoso para sua saúde.

## Solução
O Guardian vai além de simplesmente exibir dados climáticos. Ele cria uma conexão emocional com o usuário, transformando informações complexas em uma experiência intuitiva e humana.

### Como o Guardian Funciona
O Guardian possui um sistema de estados que analisa cinco variáveis ambientais simultaneamente:

- **Qualidade do ar** (good/moderate/poor)
- **Temperatura** (faixa ideal: 18-28°C)
- **Umidade** (faixa ideal: 40-70%)
- **Velocidade do vento** (limite seguro: 20 km/h)
- **Índice UV** (alertas para níveis high/very-high)

### Estados Emocionais
- **Perfect**: Todas as condições ideais; olhos verdes com brilho, sorriso amplo.
- **Happy**: Qualidade do ar boa e temperatura ≤30°C; sorriso curvado indicando contentamento.
- **Sad**: Qualidade do ar moderada ou ruim; boca invertida para demonstrar preocupação.
- **Neutral**: Estado padrão para condições mistas ou sem cidade selecionada.

### Reações Específicas
- **Alertas UV Críticos**: Borda vermelha brilhante ao redor do corpo do Guardian.
- **Clima Ensolarado**: Tons dourados, sorriso expandido.
- **Clima Chuvoso**: Coloração azul intensa, boca invertida.
- **Clima Nublado**: Tons acinzentados, expressão equilibrada.
- **Clima Frio**: Azul claro com padrão de tremor na boca.
- **Vento Forte (>20 km/h)**: Olhos deformados em oval alongado.
- **Ar Seco (<40%)**: Olhos vermelhos indicando desconforto respiratório.
- **Calor Extremo (>30°C)**: Boca vermelha de alerta.
- **Frio Intenso (<18°C)**: Boca azul sinalizando necessidade de aquecimento.

### Interatividade
Ao passar o mouse sobre o Guardian, seus olhos piscam e a boca se abre, reforçando a sensação de que ele é um companheiro digital vivo e responsivo.

## Funcionalidades
- Sistema de estados emocionais com 15+ reações visuais
- Alertas visuais críticos para condições perigosas
- Dados climáticos detalhados de 8 cidades brasileiras
- Chat inteligente com respostas contextuais
- Recomendações personalizadas com base nas condições
- Interface responsiva com design futurista eco-tecnológico
- Capacidade de exibir múltiplas condições simultaneamente

## Tecnologias
- HTML5, CSS3 e JavaScript (ES6) com modularização
- Arquitetura clara: coordenação (app.js), carregamento de dados (data.js), estados visuais (robot.js) e processamento climático (weather.js)
- Algoritmo otimizado de detecção de condições e classes CSS modulares
- Transições suaves entre estados usando animações CSS
- Código limpo, sem dados hardcoded e com cache de elementos DOM para performance

## Bases de Dados e APIs Simuladas
Para demonstração sem extrapolar a complexidade da Imersão Dev:

- **OpenWeatherMap**: substituída por `cities.json` com dados de 8 cidades
- **OpenAQ**: substituída por dados de qualidade do ar em `cities.json`
- **Google Gemini API**: substituída por `chat-knowledge.json` com base estruturada

## Como Usar
1. Acesse `landing.html`
2. Clique em "Entrar no App" para acessar a aplicação
3. Selecione uma cidade no dropdown
4. Observe o Guardian reagir às condições climáticas
5. Interaja com o chat para obter informações personalizadas

### Instalação Local
```bash
git clone https://github.com/beandy-dev/guardian-bot.git
cd guardian-bot
# Abra app.html em um navegador ou use Live Server do VS Code
