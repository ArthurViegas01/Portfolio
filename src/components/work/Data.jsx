import ImgDonut from "../../assets/donutblender.jpg";

// Thumbs com variantes dark / light  [(1) = light mode]
import ImgEncaixeDark  from "../../assets/Encaixe.png";
import ImgEncaixeLight from "../../assets/Encaixe (1).png";

import ImgContextRagDark  from "../../assets/Context _RAG_.png";
import ImgContextRagLight from "../../assets/Context _RAG_ (1).png";

import ImgDataglassDark  from "../../assets/Dataglass.png";
import ImgDataglassLight from "../../assets/Dataglass (1).png";

import ImgDelyDark  from "../../assets/Dely.png";
import ImgDelyLight from "../../assets/Dely (1).png";

import ImgJogoGeneralDark  from "../../assets/Jogo General.png";
import ImgJogoGeneralLight from "../../assets/Jogo General (1).png";

import ImgSynthDark  from "../../assets/Synth _AI Component Generator_.png";
import ImgSynthLight from "../../assets/Synth _AI Component Generator_ (1).png";

import ImgDevscopeDark  from "../../assets/Devscope.png";
import ImgDevscLight    from "../../assets/Devscope (1).png";

import ImgMiranteDark  from "../../assets/Mirante.png";
import ImgMiranteLight from "../../assets/Mirante (1).png";

import ImgPowerAtlasDark  from "../../assets/PowerAtlas.png";
import ImgPowerAtlasLight from "../../assets/PowerAtlas (1).png";

import ImgYellowglassDark  from "../../assets/Yellowglass.png";
import ImgYellowglassLight from "../../assets/Yellowglass (1).png";

// Screenshots reais dos apps (exibidas no hover dos cards)
import ScreenEncaixe        from "../../assets/encaixe.jpg";
import ScreenContextRag     from "../../assets/work3.jpg";
import ScreenDataglass      from "../../assets/work6.jpg";
import ScreenTransportadora from "../../assets/TransportadoraDely.jpg";
import ScreenJogoGeneral    from "../../assets/work4.jpg";
import ScreenSynth          from "../../assets/work7.jpg";
import ScreenDevscope       from "../../assets/devscope-app.png";
import ScreenYellowglass    from "../../assets/yellowglass-app.jpg";

export const projectsData = [
  // Ordem de exibição (8 por página): os projetos de maior peso primeiro.
  // ── Página 1 ────────────────────────────────────────────────────────────────
  {
    id: 10,
    image: ImgYellowglassDark,
    imageLight: ImgYellowglassLight,
    screenshot: ScreenYellowglass,
    title: "Yellowglass",
    category: ["fullstack", "web"],
    description_pt:
      "Grafo navegável do mercado brasileiro de dispositivos médicos: cruza seis bases públicas de saúde (ANVISA, CATMAT, PNCP, CNES, SIGTAP e TUSS) numa página por entidade, renderizada no servidor. Projeto da Dataglass do qual sou responsável de ponta a ponta: arquitetura, backend em Django + DRF com contrato OpenAPI, PostgreSQL com schemas separados para aplicação e ETL, carga mensal via Athena e Parquet, frontend em Next.js 16 (Cache Components com revalidação por tag, tipos gerados do OpenAPI) e infra na AWS com Terraform, CodePipeline e uma API sem endereço público atrás de Cloudflare Tunnel.",
    description_en:
      "Navigable knowledge graph of the Brazilian medical device market: joins six public health datasets (ANVISA, CATMAT, PNCP, CNES, SIGTAP and TUSS) into one server-rendered page per entity. A Dataglass project I own end to end: architecture, a Django + DRF backend with an OpenAPI contract, PostgreSQL with separate schemas for the application and the ETL, a monthly load through Athena and Parquet, a Next.js 16 frontend (Cache Components with tag-based revalidation, types generated from OpenAPI) and AWS infra with Terraform, CodePipeline and an API with no public address behind a Cloudflare Tunnel.",
    technologies: ["Next.js 16", "TypeScript", "Django", "PostgreSQL", "Cloudflare", "AWS", "Terraform"],
    // Repositórios privados e app atrás do Cloudflare Access: o modal não mostra botões.
    link: null,
    github: null,
  },
  {
    id: 2,
    image: ImgDataglassDark,
    imageLight: ImgDataglassLight,
    screenshot: ScreenDataglass,
    title: "Dataglass",
    category: ["fullstack", "web"],
    description_pt:
      "Plataforma SaaS brasileira de Business Intelligence integrada ao Tableau. Gerencia dashboards, controla acesso por perfis de empresa e processa dados com Celery e Redis. Deploy em produção na AWS com Docker, Elastic Beanstalk, ECR e S3. Integração com Mailgun, Bugsnag e Intercom.",
    description_en:
      "Brazilian SaaS Business Intelligence platform integrated with Tableau Server. Manages dashboards, controls access per company profile, and processes data with Celery and Redis. Deployed on AWS with Docker, Elastic Beanstalk, ECR, and S3. Integrated with Mailgun, Bugsnag, and Intercom.",
    technologies: ["Django", "DRF", "Celery", "Docker", "AWS", "Tableau"],
    link: "https://dataglass.co",
    github: null,
  },
  {
    id: 9,
    image: ImgPowerAtlasDark,
    imageLight: ImgPowerAtlasLight,
    title: "PowerAtlas",
    category: ["fullstack", "web"],
    description_pt:
      "HUD tático interativo que mapeia poder e influência no Brasil (nacional, 27 UFs e 5.570 municípios) sobre um mapa MapLibre + deck.gl: coropleto por estado, colunas 3D nas capitais, arcos de fluxo fiscal e heatmap ambiente, com coreografia GSAP respeitando prefers-reduced-motion. Front em Vue 3 + Pinia; backend FastAPI read-only sobre PostgreSQL + PostGIS (asyncpg cru) e pipeline de ingestão em Celery/Redis. Os indicadores (IBGE, Receita Federal, Tesouro Nacional) são reais; os rankings de influência são fictícios por design até existir um pipeline com revisão humana. Inclui console de dados, drill-down abaixo do município, linha do tempo do comércio exterior e busca dos 5.570 municípios na paleta Ctrl-K; stack completa em Docker Compose.",
    description_en:
      "Interactive tactical HUD mapping power and influence across Brazil (national, 27 states, 5,570 municipalities) over a MapLibre + deck.gl map: state choropleth, 3D capital columns, fiscal-flow arcs and an ambient heatmap, with GSAP choreography gated behind prefers-reduced-motion. Vue 3 + Pinia front end; read-only FastAPI backend over PostgreSQL + PostGIS (raw asyncpg) with a Celery/Redis ingestion pipeline. The indicators (IBGE, Receita Federal, Tesouro Nacional) are real; the influence rankings are fictional by design until a human-reviewed pipeline exists. Includes a data console, drill-down below the municipality, a foreign-trade timeline and search across all 5,570 municipalities in the Ctrl-K palette; full stack via Docker Compose.",
    technologies: ["Vue 3", "deck.gl", "MapLibre GL", "FastAPI", "PostGIS", "Celery", "Docker"],
    link: "https://poweratlas.netlify.app",
    github: "https://github.com/ArthurViegas01/PowerAtlas",
  },
  {
    id: 1,
    image: ImgContextRagDark,
    imageLight: ImgContextRagLight,
    screenshot: ScreenContextRag,
    title: "Context (RAG)",
    category: "ai",
    description_pt:
      "Pipeline RAG end-to-end com FastAPI e Celery para processamento assíncrono de PDFs e DOCXs. Busca híbrida: similaridade vetorial no pgvector (HNSW) mais busca full-text do PostgreSQL em português, fundidas por Reciprocal Rank Fusion. Embeddings locais via fastembed/ONNX (all-MiniLM-L6-v2, sem PyTorch na imagem), LLM trocável por variável de ambiente (Groq, Ollama ou OpenAI) e respostas com citação da fonte. Sessões JWT com isolamento por usuário, rate limit e cota diária de upload.",
    description_en:
      "End-to-end RAG pipeline with FastAPI and Celery for async processing of PDF and DOCX files. Hybrid retrieval: vector similarity in pgvector (HNSW) plus Portuguese PostgreSQL full-text search, merged with Reciprocal Rank Fusion. Local embeddings via fastembed/ONNX (all-MiniLM-L6-v2, no PyTorch in the image), an LLM switchable by environment variable (Groq, Ollama or OpenAI) and answers with source attribution. JWT sessions with per-user isolation, rate limiting and a daily upload quota.",
    technologies: ["FastAPI", "Celery", "pgvector", "Hybrid search · RRF", "fastembed", "Groq / Ollama"],
    link: "https://contextrag.netlify.app",
    github: "https://github.com/ArthurViegas01/RAG",
  },
  {
    id: 8,
    image: ImgMiranteDark,
    imageLight: ImgMiranteLight,
    title: "Mirante",
    category: ["fullstack", "ai"],
    description_pt:
      "Central de comando que unifica gestão de projetos, monitoramento de serviços ao vivo e a busca de carreira: agregador de vagas em fontes públicas, CV mestre adaptável por IA e CRM de candidaturas. Multiusuário por isolamento, com cadastro aprovado pelo admin e import de repositórios via GitHub OAuth. Backend em Go (monólito modular, domain-driven, 9 ADRs) com SQLite via libSQL/Turso, tempo real por SSE, OpenTelemetry e LLM multi-provider (Anthropic, Groq, OpenAI) com saída estruturada via JSON Schema. Front em SvelteKit (Svelte 5, runes) sobre design system próprio em CSS nativo moderno. Deploy em containers no Railway.",
    description_en:
      "Command center unifying project management, live service monitoring and the full job hunt: a job aggregator over public sources, an AI-adaptable master CV and an applications CRM. Multi-user by isolation, with admin-approved sign-up and repository import via GitHub OAuth. Go backend (domain-driven modular monolith, 9 ADRs) with SQLite via libSQL/Turso, real-time over SSE, OpenTelemetry and a multi-provider LLM layer (Anthropic, Groq, OpenAI) with structured output via JSON Schema. SvelteKit front end (Svelte 5, runes) on a custom design system in modern native CSS. Deployed in containers on Railway.",
    technologies: ["Go", "SvelteKit", "Svelte 5", "libSQL / Turso", "SSE", "OpenTelemetry", "Railway"],
    link: "https://mirante-web-production.up.railway.app",
    github: null,
  },
  {
    id: 0,
    image: ImgEncaixeDark,
    imageLight: ImgEncaixeLight,
    screenshot: ScreenEncaixe,
    title: "Encaixe",
    category: "ai",
    description_pt:
      "SaaS multi-tenant de atendimento via WhatsApp com IA. Agente LangGraph classifica intencao, busca FAQ por similaridade (pgvector + Voyage AI), agenda no Google Calendar e transfere para humano quando a confianca e baixa. Arquitetura hexagonal com adapter pluggable de provider WhatsApp (Evolution / WPP / Meta Cloud) e fallback Stub para E2E sem rede. Endurecido como SaaS público: RLS forçado nas tabelas por tenant, segredos de integração cifrados em repouso, webhook fail-closed e fences contra prompt injection.",
    description_en:
      "Multi-tenant WhatsApp customer-service SaaS powered by AI. A LangGraph agent classifies intent, retrieves FAQ via similarity search (pgvector + Voyage AI), books appointments in Google Calendar, and hands off to a human when confidence drops. Hexagonal architecture with a pluggable WhatsApp provider adapter (Evolution / WPP / Meta Cloud) and a Stub fallback for E2E without network. Hardened as a public SaaS: forced RLS on tenant-scoped tables, integration secrets encrypted at rest, a fail-closed webhook and prompt-injection fences.",
    technologies: ["FastAPI", "LangGraph", "Claude Haiku", "pgvector", "Next.js 14", "Supabase", "Evolution API"],
    link: "https://github.com/ArthurViegas01/ZapAgent",
    github: "https://github.com/ArthurViegas01/ZapAgent",
  },
  {
    id: 3,
    image: ImgJogoGeneralDark,
    imageLight: ImgJogoGeneralLight,
    screenshot: ScreenJogoGeneral,
    title: "Jogo General",
    category: "web",
    description_pt:
      "Implementação web do clássico jogo de dados General (Yahtzee). Desenvolvido com Vue 3 (Composition API) e Pinia para gerenciamento de estado, com lógica completa de pontuação e interface interativa.",
    description_en:
      "Web implementation of the classic dice game General (Yahtzee). Built with Vue 3 (Composition API) and Pinia for state management, featuring complete scoring logic and an interactive UI.",
    technologies: ["Vue 3", "Pinia", "JavaScript", "CSS3"],
    link: "https://jogogeneral.netlify.app",
    github: "https://github.com/ArthurViegas01/general",
  },
  {
    id: 4,
    image: ImgDevscopeDark,
    imageLight: ImgDevscLight,
    screenshot: ScreenDevscope,
    title: "Devscope",
    category: "ai",
    description_pt:
      "Servidor MCP (Model Context Protocol) sobre Streamable HTTP que expõe quatro ferramentas de análise de perfis GitHub para Claude e outros clientes MCP: análise de perfil, avaliação de repositório, aderência a vaga e um relatório de recrutador transmitido em progress events. Rate limit por IP com script Lua atômico no Redis (middleware ASGI puro, para não quebrar o SSE), bearer token injetado por uma Netlify Function e nunca exposto no browser, e infra em Terraform. Construí uma IA para analisar portfólios de devs, começando pelo meu.",
    description_en:
      "MCP (Model Context Protocol) server over Streamable HTTP exposing four GitHub profile analysis tools to Claude and other MCP clients: profile analysis, repository evaluation, job matching and a recruiter report streamed as progress events. Per-IP rate limiting with an atomic Lua script in Redis (a pure ASGI middleware, so SSE keeps working), a bearer token injected by a Netlify Function and never exposed to the browser, and Terraform-managed infra. I built an AI to analyze developer portfolios, starting with my own.",
    technologies: ["Python", "FastMCP", "GitHub API", "LangChain", "Groq", "Upstash Redis", "Railway", "Terraform"],
    link: "https://devscopeai.netlify.app",
    github: "https://github.com/ArthurViegas01/Devscope",
  },

  // ── Página 2 ────────────────────────────────────────────────────────────────
  {
    id: 5,
    image: ImgSynthDark,
    imageLight: ImgSynthLight,
    screenshot: ScreenSynth,
    title: "Synth",
    category: "ai",
    description_pt:
      "Gerador de componentes UI em tempo real com IA. Utiliza streaming via ReadableStream com LLM trocável por variável de ambiente (Groq com Llama 3.3 70B por padrão, Anthropic, OpenAI ou Ollama) e um sandbox seguro em iframe com Babel Standalone para compilar e renderizar código TSX/Tailwind instantaneamente. Inclui editor Monaco, estado com Zustand, validação contra alucinações e rate limit em três janelas (por IP, por hora e por dia) no Upstash Redis.",
    description_en:
      "Real-time AI-powered UI component generator. Features streaming via ReadableStream with an LLM switchable by environment variable (Groq with Llama 3.3 70B by default, Anthropic, OpenAI or Ollama) and a secure iframe sandbox using Babel Standalone to compile and render TSX/Tailwind code instantly. Includes Monaco Editor, Zustand state, hallucination checks and rate limiting over three windows (per IP, hourly and daily) in Upstash Redis.",
    technologies: ["Next.js 15", "Groq · Anthropic · OpenAI", "Zustand", "Monaco Editor", "Upstash Redis", "Tailwind CSS"],
    link: "https://uicomponentgenerator.netlify.app",
    github: "https://github.com/ArthurViegas01/componentgenerator",
  },
  {
    id: 6,
    image: ImgDelyDark,
    imageLight: ImgDelyLight,
    screenshot: ScreenTransportadora,
    title: "Transportadora",
    category: "web",
    description_pt:
      "Reescrita completa de um projeto legado (CRA + jQuery) para uma stack moderna. Sistema de gestão de transporte de cargas com calculadora de rotas (dados DNIT), formulário multi-step, dashboard analítico com gráficos de custo por rota, exportação CSV e estado global com Context API + useReducer.",
    description_en:
      "Full rewrite of a legacy project (CRA + jQuery) to a modern stack. Freight transport management system with a route calculator (DNIT data), multi-step form, analytics dashboard with cost-per-route charts, CSV export, and global state via Context API + useReducer.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "React Router"],
    link: "https://delytransporte.netlify.app",
    github: "https://github.com/ArthurViegas01/TransporteCargas",
  },
  {
    id: 7,
    image: ImgDonut,
    title: "Donut 3D",
    category: "3d",
    description_pt:
      "Modelagem e renderização 3D de um donut realista criado durante o curso Blender Guru. Foco em modelagem, iluminação e texturização com Blender.",
    description_en:
      "3D modeling and rendering of a realistic donut, created during the Blender Guru course. Focused on modeling, lighting, and texturing with Blender.",
    technologies: ["Blender", "3D Modeling", "Rendering"],
    link: "https://www.youtube.com/watch?v=B_ymnGZIKK4",
    github: null,
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "ai" },
  { name: "fullstack" },
  { name: "web" },
  { name: "3d" },
];
