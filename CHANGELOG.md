# Changelog

Todas as mudanças relevantes deste projeto são documentadas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o versionamento segue [SemVer](https://semver.org/lang/pt-BR/).

Este arquivo é a **fonte de verdade do histórico** do portfólio. As versões
anteriores à `0.4.0` foram reconstruídas a partir do log do git.

---

## [Não lançado]: projetos conferidos contra os repositórios

A seção de projetos não era atualizada desde 19/08. Cada texto abaixo foi
conferido no código, nos READMEs e no git log dos repositórios em
`Central/Projetos/` em 26/10/2026; o que não deu para comprovar saiu.

### Adicionado
- **Yellowglass** (card + case study completo, PT e EN). Grafo navegável do
  mercado brasileiro de dispositivos médicos, projeto da Dataglass do qual o
  Arthur é responsável de ponta a ponta (arquitetura, backend, banco, ETL,
  frontend e infra).
  Repositórios privados: card e case study **sem link**; o rodapé do case study
  explica o motivo. Aba própria de **Pipeline de Dev**.
  - Thumbs dark/light (`Yellowglass.png`, `Yellowglass (1).png`, 1920×1080) com
    o wordmark da marca em Hanken Grotesk e o símbolo `2a-pin-lente`, que **ainda
    é candidato** no guia de identidade: trocar quando a marca fechar.
  - Screenshot real (`yellowglass-app.jpg`, 1600×900) da página de Registro
    ANVISA rodando o frontend localmente, com os dados ilustrativos do repo.
  - Diagrama `specs/yellowglass.js`: fluxo de requisição e carga mensal em duas
    faixas com colunas alinhadas.

### Alterado
- **`CaseStudy.jsx`**: a aba CI/CD aparece para qualquer projeto com
  `content.cicd` (antes era fixa na Dataglass), o diagrama dessa aba só renderiza
  se existir spec `<id>:cicd`, e o CTA aceita projeto sem link público
  (`privateNote`). A seleção do conteúdo virou `cs[activeProject]` em vez da
  cadeia de ternários.
- **Mirante**: deixou de ser "single-user". Multiusuário com aprovação do admin,
  import via GitHub OAuth, agregador de vagas, OpenTelemetry e LLM multi-provider.
- **PowerAtlas**: o card agora diz que os rankings de influência são
  **fictícios por design** (só os indicadores são reais), além das novidades até
  a v0.18.0.
- **Encaixe**: endurecimento de segurança no card (RLS forçado, segredos
  cifrados, webhook fail-closed, fences de prompt injection); badges de deploy
  corrigidos de "Railway, Netlify" para **Vercel, Hetzner, Terraform**.
- **Synth**: provider trocável por env (Groq com Llama 3.3 70B por padrão) e o
  rate limit que já existia (Upstash, 3 janelas). O nó do diagrama dizia
  "Groq SDK", que o projeto não usa: virou "LLM provider".
- **Transportadora**: o texto em PT ganhou a frase da reescrita que só o EN tinha.
- **Gutter lateral em todas as seções** (`App.css`): a `.container` tem
  `max-width: 1280px` com margens automáticas e só ganhava margem lateral abaixo
  de 992px. Entre 993px e ~1310px, navbar, Skills, System Design, About, Contato
  e Footer encostavam nas bordas. Nova regra `max-width: 1328px` (1280 + 2 ×
  1.5rem) dá 1.5rem de cada lado; as regras menores (350px) continuam valendo.
  Medido: 24px dos dois lados em todas as `.container` de 390 a 1300px.
- **Grade de projetos** (`work.css`): sobrescreve a margem da `.container`, então
  recebeu o mesmo 1.5rem como `padding-inline`.
- **Ordem dos projetos**: Yellowglass, Dataglass, PowerAtlas e Context (RAG)
  abrem a grade; depois Mirante, Encaixe, Jogo General e Devscope (página 1) e
  Synth, Transportadora e Donut 3D (página 2).
- **PowerAtlas** publicado: o botão principal do card aponta para
  `poweratlas.netlify.app`; o GitHub virou o botão secundário do modal.
- **Thumbs da Dataglass** refeitas (`Dataglass.png`, `Dataglass (1).png`,
  1920×1080, ~100 KB): fundo com grid e brilho como as demais, painel de vidro
  com gráfico de área e wordmark em Poppins ("Data" 600 + "glass" 500 em azul).
  O símbolo é original, não o logo da empresa.
- **Skills**: removida a faixa de estatísticas (124+ skills, 12 categorias,
  9 projetos, 100% comprovado em código), com o CSS, os textos PT/EN e as
  constantes `TOTAL_CATEGORIES` e `TOTAL_PROJECTS`, que só ela usava.
  `TOTAL_SKILLS` fica: é a contagem do filtro "Todas".
- **System Design**: removido o badge "System Design Case Study" acima do
  título de cada case study (o título da seção já diz isso).
- **Linha do tempo** (`Qualification.jsx`): eventos de vários anos viraram
  cards largos. Engenharia de Software ocupa de 2021 a 2025 e Desenvolvedor Full
  Stack de 2024 a 2026; 2025 e 2026 entraram no eixo e o marcador "atual" passou
  de 2024 para 2026. As colunas de ano têm largura igual, o que permite calcular
  a haste do card largo sobre o ano de início
  (`calc((100% - (span - 1) * gap) / span / 2)`), conferida com diferença de no
  máximo 1px. Saiu a faixa iluminada atrás do período 2021-2025.
  - Coluna mínima de 128px e gutter de 1,5rem: a grade cabe sem rolar a partir de
    ~1135px. Antes, com 7 anos, ela rolava já em ~1240px e a barra de rolagem
    aparecia como uma linha sob os cards. Abaixo de 1130px rola com fade de borda.
  - Títulos dos cards com `hyphens: auto`: "Desenvolvedor" já transbordava o card
    antes desta versão; agora quebra como "Desen-volvedor".
- **`<html lang>`**: estava fixo em `en` com o conteúdo padrão em português, o
  que faz leitores de tela lerem o PT com voz em inglês e impedia a hifenização.
  `index.html` passou a `pt-BR` e o `LanguageContext` sincroniza `lang` com o
  idioma escolhido.

### Corrigido
- **Context (RAG)** afirmava coisas que o código não faz: chunks de "512 tokens
  / 50" (são 800/150 caracteres), "Sentence Transformers" (é fastembed/ONNX),
  busca só por cosseno (é **híbrida com RRF k=60**), `ef_construction=128` (é
  64), validação por magic bytes, retry com dead letter queue e isolamento por
  namespace (nada disso existe). Trocados pelo que existe: JWT por usuário, cota
  diária de upload, SlowAPI, time limits na task e fences contra prompt
  injection. Novo trade-off explícito: o `to_tsvector` é calculado na consulta,
  sem índice GIN.
- **Devscope**: modelo era "Llama 3" (é `gpt-oss-120b`), transporte "stdio /
  HTTP-SSE" (é Streamable HTTP), "PyGithub" (é httpx), cache de "15 min" (é
  1 h) e "fastapi-limiter" (é middleware ASGI com script Lua). As métricas de
  latência sem medição viraram números de configuração verificáveis. O botão de
  GitHub do case study apontava para `Reporeaver` em vez de `Devscope`, e o de demo
  para o README em vez do app no ar.

### Pendente
- Não foi possível abrir os links ao vivo (Netlify/Railway) a partir desta
  sessão: conferir no navegador que contextrag, devscopeai,
  uicomponentgenerator, jogogeneral, delytransporte, poweratlas e o Mirante
  respondem.
- Malha e Lumni (site) ficaram de fora por decisão; os textos já levantados
  estão no histórico desta conversa se entrarem depois.

---

## [Não lançado]: nova foto de perfil

### Alterado
- **Foto de perfil das seções Home e About trocada** por um retrato novo
  (Canon EOS R50, set/2026). Em vez de reaproveitar os nomes `perfil2.jpg` e
  `perfil3.jpg`, que não diziam onde cada um era usado, os arquivos agora são
  nomeados pelo destino:
  - `src/assets/perfil-home.jpg`: recorte quadrado 900×900, para o blob animado
    de 300×300 da Home (`background-size: cover`), com margem de 3× para telas
    retina. 88 KB.
  - `src/assets/perfil-about.jpg`: recorte retrato 4:5 em 1120×1400, a mesma
    proporção da foto anterior, para não mudar a altura do bloco do About. 160 KB.
- Ambos gerados a partir do original de 6000×4000 (5,3 MB) com JPEG progressivo,
  qualidade 82, sRGB e **metadados EXIF removidos** (modelo da câmera, data e
  demais dados de captura não vão para o site público).
- `home.css` também perdeu a barra dupla em `url(../../assets//perfil2.jpg)`.

### Pendente
- `perfil.jpg`, `perfil2.jpg`, `perfil3.jpg` e `perfil3.png` ficaram sem nenhuma
  referência no código. O Vite não os empacota, então não pesam no build, mas
  podem ser removidos do repositório.

---

## [Não lançado]: segunda rodada

### Adicionado
- **Identidade visual própria do PowerAtlas** (`src/assets/PowerAtlas.png` e
  `PowerAtlas (1).png`). As duas thumbs que vieram no commit `a157708` eram
  **cópias byte a byte das do Mirante** (mesmo blob, `901a3254…` e `1bee2780…`),
  como o `// TODO` ao lado dos imports admitia: no ar, os dois cards apareceriam
  idênticos. As novas seguem o padrão das demais (1920×1080, fundo sólido, cor de
  marca própria, símbolo geométrico e wordmark em Poppins 600), com um âmbar que
  não colide com o teal do Mirante nem com o roxo do Devscope. O símbolo é o
  gesto central do produto: um arco de fluxo sobre a esfera do atlas. 118 KB e
  114 KB, quantizadas em 128 cores, abaixo das thumbs existentes. O `TODO` saiu.

### Alterado
- **Travessões longos removidos do texto voltado ao leitor** (`resumeData.js`,
  `index.html` e o CV). O `—` em profusão é um dos tells mais reconhecíveis de
  texto gerado por LLM, e num currículo isso trabalha contra quem assina. Cada
  ocorrência virou a pontuação que a frase pedia (dois-pontos, vírgula ou ponto),
  não um hífen solto, que é o mesmo tell de outra forma. Nos títulos de projeto o
  separador passou a ser o `·` que o portfólio já usa em todo lugar; nos períodos,
  hífen simples. `resumeData.js` foi de 28 ocorrências a zero, `index.html` de 9 a
  zero. A OG image foi regerada pelo mesmo motivo (e caiu de 161 KB para 54 KB).
- **Formatação do CV.** As datas passaram a viver numa coluna fixa de 2200 dxa,
  em tabelas de duas colunas sem borda, em vez de um tab stop. Um tab stop se
  desloca conforme a largura do texto à esquerda, e era por isso que a linha da
  AGES não alinhava com as outras; a tabela alinha igual em Word, Google Docs e
  LibreOffice. Cada projeto ganhou `nome | stack` numa linha de cabeçalho própria,
  e o documento voltou a caber em uma página.

---

## [Não lançado]: correções de conversão

Bloco P0 do [diagnóstico de 2026-08-18](../Mirante/docs/carreira/diagnostico-2026-08-18.md).
Nada aqui é feature: é fechar buracos por onde o site vinha perdendo candidatura.

### Corrigido
- **A URL canônica apontava para um domínio que não existe.** `index.html`
  (`<link rel="canonical">` e `og:url`), `README.md`, `src/studio/resumeData.js`
  e os documentos em `skills/` declaravam `arthurviegas.netlify.app` — que
  responde **404**. O site publicado é `arthurviegasdev.netlify.app`. Duas
  consequências, ambas silenciosas: todo recruiter que clicou no link do CV caiu
  numa página de erro, e um canonical apontando para 404 instrui o buscador a
  **não** indexar a página real. Corrigido em todos os arquivos.
- **LinkedIn tinha três URLs diferentes** — `arthur-viegas-899083205` no
  `Social.jsx`, `arthur-viegas` no `Contact.jsx`/`Footer.jsx` e `arthurpviegas`
  nos documentos de `skills/`. Nenhuma delas é a verdadeira. Tudo padronizado em
  **`linkedin.com/in/arthur-viegas-dev`**.
- **E-mail errado em `skills/SKILLS.md` e `skills/skills-inventory.en.md`**
  (`arthurviegas@gmail.com`, sem o `p`). Quem copiasse dali escrevia para um
  endereço que não é meu. Padronizado em `arthurpviegas@gmail.com`.

### Desempenho
- **Peso do build: 19 MB → 3,5 MB (−82%).** Nove imagens respondiam por 25 MB do
  bundle, e três delas eram PNG com o nome trocado para `.jpg` — o que dobrava o
  arquivo sem ninguém notar:

  | Arquivo | Antes | Depois | Onde aparece |
  |---|---:|---:|---|
  | `perfil2.jpg` | 8,65 MB | 0,30 MB | fundo do hero — **é o elemento de LCP** |
  | `danillo.png` → `.jpg` | 6,94 MB | 0,02 MB | avatar de depoimento, exibido a ~60px em 2048×2048 |
  | `perfil3.png` → `.jpg` | 6,79 MB | 0,29 MB | foto da seção About |
  | `TransportadoraDely.png` → `.jpg` | 1,15 MB | 0,08 MB | thumbnail de projeto |
  | `brenno`, `kevin`, `work6`, `work7`, `donutblender` | 1,47 MB | 0,26 MB | depoimentos e thumbnails |

  Todas foram reamostradas para o tamanho em que de fato são exibidas (Lanczos) e
  reencodadas em JPEG progressivo q82; nenhuma usava canal alfa, então nada se
  perdeu na conversão. As que trocaram de extensão tiveram o import atualizado em
  `About.jsx`, `testimonials/Data.jsx` e `work/Data.jsx` — os `.png` originais
  ficaram órfãos e podem sair com `git rm`.

  Um recruiter abrindo o portfólio em 4G esperava mais de 20 MB para ver a
  primeira dobra. Era, na prática, o maior custo de conversão do site.

### Adicionado
- **`og:image` 1200×630** (`public/og-image.png`) mais `og:image:width/height/alt`,
  `og:site_name`, `twitter:image` e `twitter:image:alt`. O `twitter:card` já
  declarava `summary_large_image` **sem imagem nenhuma**, então todo link colado
  no LinkedIn ou no WhatsApp renderizava um retângulo vazio — justamente onde o
  link é compartilhado com quem contrata.
- **Conteúdo estático para crawlers** (`<noscript>` no `index.html`) com headline,
  stack e os cinco projetos principais. O site é uma SPA renderizada no cliente:
  quem não executa JavaScript — LinkedIn, WhatsApp, a maioria dos ATS — enxergava
  uma casca com meta tags e **nenhuma** ocorrência de "RAG", "LangGraph" ou
  "pgvector". Toda a diferenciação estava invisível para máquina.
- **JSON-LD `schema.org/Person`** com `jobTitle`, `knowsAbout`, `alumniOf` e
  `sameAs` (GitHub + LinkedIn), consolidando a identidade para os buscadores.
- **`robots.txt` e `sitemap.xml`** em `public/`.
- **`.gitattributes`** com `* text=auto eol=lf`. Sem ele, o checkout no Windows
  marcava **53 arquivos como modificados** (11.463 inserções e 11.463 deleções —
  número idêntico; `git diff -w` voltava vazio) só por fim de linha. O efeito
  colateral era pior que a sujeira: `git status` deixou de distinguir trabalho
  pendente de ruído.
- **AGES (PUCRS) na experiência do CV mestre** (`src/studio/resumeData.js`). O
  summary reivindica quatro anos, mas a linha do tempo do documento só mostrava
  ~3,3 anos de engenharia — a entrada da DELL é análise de fórum e Excel, e um
  leitor de fora conta o que está escrito, não o que é verdade. Os quatro ciclos
  anuais da AGES (I–IV), entregando software para clientes externos que contratam
  a agência da PUCRS, são o que sustenta a frase. Sem essa linha, os quatro anos
  liam como exagero; com ela, leem como fato.
- **Mirante na lista de projetos do CV mestre** — o artefato mais sênior do
  conjunto (monólito modular em Go, oito ADRs, anti-SSRF, OAuth com PKCE) estava
  fora do gerador de CV.
- **`openTo` reescrito** para o que um recruiter internacional precisa saber:
  fuso (UTC-3), sobreposição com EUA/Europa e disponibilidade para contrato PJ.
- **CV v2** (`skills/Arthur-Viegas-CV.docx` / `.pdf` e `src/assets/CVarthurviegas.pdf`,
  que é o arquivo servido pelo botão de download do site). Preset *AI-First*, uma
  página. Mudanças que importam: o **link do portfólio passou a existir** no
  cabeçalho (não havia nenhum), o LinkedIn foi corrigido, entrou a linha da AGES,
  entrou uma seção **SELECTED PROJECTS** com Mirante, Encaixe, Context e Devscope
  — que simplesmente não existia — e o link dos ADRs foi para dentro do documento.
- **PowerAtlas** no bloco `<noscript>` e na lista de projetos do CV mestre,
  acompanhando o commit `a157708` que o trouxe para a seção Work.
- **Este `CHANGELOG.md`**, no mesmo padrão do Mirante.

### Segurança
- O `script-src` da CSP em `netlify.toml` passou a carregar o **sha256 do bloco
  JSON-LD**. Navegador nenhum executa `application/ld+json`, mas o hash tira a
  decisão do campo da interpretação. O comando para regerar o hash está no
  comentário ao lado do bloco no `index.html` — **editar o JSON-LD sem regerar o
  hash deixa a CSP dessincronizada.**
- `Cache-Control` de 7 dias para `/og-image.png`. Como as prévias de link ficam
  em cache nas plataformas, um redesenho pede **nome de arquivo novo**, não
  sobrescrita.

---

## [0.4.0] - 2026-07-22

### Adicionado
- Card do Devscope atualizado com link do app publicado e novo screenshot.

### Segurança
- **P0.1 — anti-abuso no formulário de contato:** campo honeypot escondido e
  tempo mínimo até o submit, derrubando submissão automatizada no cliente antes
  de consumir cota do EmailJS.
- **P0.2 — security headers no `netlify.toml`:** CSP (`default-src 'self'`, com
  as CDNs de ícones e `api.emailjs.com` na allowlist), `X-Frame-Options: DENY`,
  `frame-ancestors 'none'`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy` e HSTS.
- **P1.1 — passphrase do Studio fora do código-fonte:** removido o texto em
  claro, hash rotacionado e sobrescrevível por `VITE_STUDIO_HASH`.
- `.gitignore` passou a cobrir toda variante de `.env`; CVs antigos removidos do
  repositório.

### Corrigido
- Google Fonts e Typekit liberados na CSP — o endurecimento anterior tinha
  quebrado o carregamento das fontes em produção.

---

## [0.3.0] - 2026-06-15

### Adicionado
- **Studio** (`#/studio`): gerador de CV a partir de `src/studio/resumeData.js`,
  com motor de ATS e exportação, atrás de portão por passphrase.
- Mirante e as demais atualizações da seção Work.
- Nova foto de perfil e limpeza geral do App Engine.

---

## [0.2.0] - 2026-04-29

### Adicionado
- **Engine própria de diagramas de arquitetura** (v2): case studies escritos como
  **specs declarativas** (nós, arestas, lanes — sem coordenadas) que um motor de
  layout converte em SVG acessível, com alinhamento automático de colunas,
  roteamento de arestas e internacionalização.
- Case studies de Encaixe (ex-ZapAgent), Context (RAG), Dataglass, Devscope e Synth.
- Novos cards e arte para as thumbnails da seção Work.
- Traduções PT/EN ampliadas para todo o conteúdo de case study.

---

## [0.1.0] - 2023-01-27

### Adicionado
- Primeira versão do portfólio em React: Header, Home, About, Skills,
  Qualification, Services, Testimonials, Contact, Footer e ScrollUp, todos
  responsivos.
- Alternância de tema claro/escuro persistida.
- Formulário de contato via EmailJS e carrossel de depoimentos com Swiper.
