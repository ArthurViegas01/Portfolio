# Changelog

Todas as mudanças relevantes deste projeto são documentadas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o versionamento segue [SemVer](https://semver.org/lang/pt-BR/).

Este arquivo é a **fonte de verdade do histórico** do portfólio. As versões
anteriores à `0.4.0` foram reconstruídas a partir do log do git.

---

## [Não lançado] — correções de conversão

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
