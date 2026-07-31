/* ============================================================
   SKILLS — single source of truth (language-neutral)
   ------------------------------------------------------------
   Mirrors skills/skills-inventory — every entry is backed by
   verified source code across the personal projects (or by the
   professional experience at Dataglass, flagged with `pro`).

   Skill names are technology nouns and stay untranslated; only
   category labels and UI copy live in translations.js, keyed by
   the category `id`. Each skill carries its provenance (`proof`)
   so the UI can surface *where* it was proven, not just claim it.
   ============================================================ */

// Provenance codenames → display label + whether it is professional
// (closed-source) experience. Keys are referenced by `proof` below
// and mirror the case-study project codenames.
export const PROJECTS = {
  encaixe:   { label: "Encaixe",   pro: false },
  context:   { label: "Context",   pro: false },
  devscope:  { label: "Devscope",  pro: false },
  synth:     { label: "Synth",     pro: false },
  poweratlas:{ label: "PowerAtlas",pro: false },
  portfolio: { label: "Portfolio", pro: false },
  general:   { label: "General",   pro: false },
  dely:      { label: "Dely",      pro: false },
  dataglass: { label: "Dataglass", pro: true  },
};

// Helper to keep skill literals terse: name, provenance, and an
// optional `core` flag marking signature strengths.
const s = (name, proof, core = false) => ({ name, proof, core });

export const CATEGORIES = [
  {
    id: "ai",
    icon: "uil uil-robot",
    accent: "purple",
    skills: [
      s("RAG pipelines", ["context", "encaixe"], true),
      s("Hybrid search + RRF", ["context"], true),
      s("LangGraph agents", ["encaixe"], true),
      s("Durable checkpointing", ["encaixe"]),
      s("MCP / FastMCP", ["devscope"], true),
      s("LangChain", ["devscope", "context", "encaixe"]),
      s("Multi-provider LLM", ["synth", "context"], true),
      s("Anthropic SDK (Claude)", ["encaixe", "synth"]),
      s("Groq + Llama 3.1-70b", ["devscope"]),
      s("Ollama (local LLM)", ["synth", "context"]),
      s("pgvector + HNSW", ["context", "encaixe"], true),
      s("Voyage AI embeddings", ["encaixe"]),
      s("fastembed / ONNX", ["context"]),
      s("Postgres FTS (pt stemming)", ["context"]),
      s("Token-by-token streaming", ["devscope", "synth"]),
      s("Intent classification", ["encaixe"]),
      s("Structured JSON extraction", ["encaixe"]),
      s("Prompt engineering", ["encaixe", "synth", "devscope"], true),
      s("Token / cost tracking", ["encaixe"]),
      s("Vertex AI · Gemini · Tools", ["dataglass"]),
    ],
  },
  {
    id: "languages",
    icon: "uil uil-brackets-curly",
    accent: "blue",
    skills: [
      s("Python 3.11 / 3.12", ["encaixe", "context", "devscope", "dataglass", "poweratlas"], true),
      s("TypeScript (strict)", ["synth", "devscope", "encaixe", "dely", "poweratlas"], true),
      s("JavaScript ES2022", ["portfolio", "general", "dataglass"], true),
      s("SQL (PostgreSQL)", ["encaixe", "context", "dataglass", "poweratlas"], true),
      s("HTML5 / CSS3", ["portfolio", "synth", "general", "poweratlas"]),
      s("Bash / PowerShell", ["context", "encaixe", "devscope", "dataglass"]),
    ],
  },
  {
    id: "backend",
    icon: "uil uil-server-network",
    accent: "accent",
    skills: [
      s("FastAPI", ["context", "devscope", "encaixe", "poweratlas"], true),
      s("Async Python (asyncio)", ["encaixe", "context", "devscope", "poweratlas"], true),
      s("asyncpg + pooling", ["encaixe", "context", "poweratlas"]),
      s("SQLAlchemy 2.0 (async)", ["context", "encaixe"]),
      s("Celery + Redis", ["context", "encaixe", "dataglass", "poweratlas"], true),
      s("Pydantic v2", ["encaixe", "context", "devscope", "poweratlas"]),
      s("ASGI middleware", ["devscope"]),
      s("Gunicorn / Uvicorn", ["context", "dataglass"]),
      s("Idempotent webhooks", ["encaixe"]),
      s("Node.js / Next API", ["synth"]),
      s("REST API design", ["context", "dataglass", "poweratlas"], true),
      s("Django / DRF", ["dataglass"]),
    ],
  },
  {
    id: "frontend",
    icon: "uil uil-desktop",
    accent: "green",
    skills: [
      s("React 18", ["portfolio", "context", "devscope", "dely", "synth", "dataglass"], true),
      s("Next.js 14 / 15", ["synth", "encaixe"], true),
      s("Vue 3 (Composition API)", ["general", "poweratlas"], true),
      s("Pinia / Vue Router", ["general", "poweratlas"]),
      s("Vite", ["portfolio", "context", "dely", "devscope", "general", "poweratlas"], true),
      s("Tailwind CSS", ["synth", "devscope", "dely", "encaixe", "poweratlas"]),
      s("Zustand", ["synth"]),
      s("Context + useReducer", ["dely"]),
      s("Custom SVG diagram engine", ["portfolio"], true),
      s("Monaco Editor", ["synth"]),
      s("In-browser TSX (Babel)", ["synth"]),
      s("iframe sandbox", ["synth"]),
      s("Recharts", ["dely"]),
      s("deck.gl (WebGL layers)", ["poweratlas"], true),
      s("MapLibre GL", ["poweratlas"], true),
      s("GSAP (motion + a11y gating)", ["poweratlas"]),
      s("Swiper", ["portfolio", "context", "devscope"]),
      s("i18n (PT / EN)", ["portfolio"]),
      s("Zod", ["encaixe"]),
      s("Accessibility (ARIA)", ["portfolio", "synth"]),
    ],
  },
  {
    id: "data",
    icon: "uil uil-database",
    accent: "orange",
    skills: [
      s("PostgreSQL 16", ["encaixe", "context", "poweratlas"], true),
      s("PostGIS (geospatial SQL)", ["poweratlas"], true),
      s("pgvector (HNSW)", ["encaixe", "context"], true),
      s("Row-Level Security", ["encaixe"], true),
      s("Redis", ["encaixe", "context", "devscope", "dataglass", "poweratlas"], true),
      s("Lua scripting (Redis)", ["devscope"]),
      s("Supabase", ["encaixe"]),
      s("Upstash Redis", ["devscope"]),
      s("Alembic migrations", ["encaixe", "context"]),
      s("Data retention / purge", ["encaixe"]),
      s("AWS S3 · RDS · ElastiCache", ["dataglass"]),
    ],
  },
  {
    id: "cloud",
    icon: "uil uil-cloud-data-connection",
    accent: "blue",
    skills: [
      s("Docker + Compose", ["encaixe", "context", "devscope", "dataglass", "poweratlas"], true),
      s("Terraform / IaC", ["devscope", "encaixe"], true),
      s("GitHub Actions CI/CD", ["encaixe", "context", "devscope"], true),
      s("AWS (EB · EC2 · ECR)", ["dataglass"], true),
      s("CodePipeline / CodeBuild", ["dataglass"]),
      s("GHCR", ["devscope"]),
      s("Railway", ["context", "devscope", "encaixe"]),
      s("Netlify", ["portfolio", "synth", "dely", "context", "devscope", "poweratlas"]),
      s("Vercel", ["encaixe"]),
      s("Hetzner VPS", ["encaixe"]),
      s("Nginx", ["context"]),
      s("Secret management", ["encaixe", "devscope", "dataglass"]),
    ],
  },
  {
    id: "reliability",
    icon: "uil uil-heartbeat",
    accent: "red",
    skills: [
      s("Rate limiting", ["encaixe", "devscope"], true),
      s("Circuit breaker / fail-open", ["encaixe"], true),
      s("Retry / backoff (tenacity)", ["encaixe", "context"]),
      s("Sentry", ["encaixe"]),
      s("structlog (JSON)", ["devscope", "encaixe"]),
      s("Request-ID tracing", ["encaixe"]),
      s("Health / readiness checks", ["context", "devscope", "encaixe", "poweratlas"]),
    ],
  },
  {
    id: "testing",
    icon: "uil uil-check-circle",
    accent: "green",
    skills: [
      s("pytest (asyncio · cov)", ["context", "devscope", "encaixe", "poweratlas"], true),
      s("mypy (strict)", ["devscope", "encaixe", "poweratlas"], true),
      s("Ruff (lint + format)", ["devscope", "encaixe", "poweratlas"]),
      s("respx / fakeredis", ["devscope", "encaixe"]),
      s("RLS isolation tests", ["encaixe"]),
      s("Infra-free mocking", ["context"]),
      s("Vitest / Testing Library", ["encaixe", "dely", "poweratlas"]),
      s("ESLint", ["devscope", "synth"]),
    ],
  },
  {
    id: "architecture",
    icon: "uil uil-sitemap",
    accent: "purple",
    skills: [
      s("Multi-tenant SaaS (RLS)", ["encaixe"], true),
      s("Ports & Adapters", ["encaixe"], true),
      s("Event-driven systems", ["encaixe", "context", "poweratlas"]),
      s("State-machine orchestration", ["encaixe"]),
      s("Layered / stateless services", ["context", "synth", "devscope", "poweratlas"], true),
      s("Service layer (pure modules)", ["dely"]),
      s("Declarative data-driven UI", ["portfolio", "poweratlas"]),
      s("Security sandboxing", ["synth"]),
    ],
  },
  {
    id: "integrations",
    icon: "uil uil-plug",
    accent: "orange",
    skills: [
      s("WhatsApp (Evolution API)", ["encaixe"], true),
      s("GitHub REST API", ["devscope"], true),
      s("Google Calendar OAuth2", ["encaixe"]),
      s("LLM APIs (Groq · OpenAI · Voyage)", ["encaixe", "context", "synth"], true),
      s("IBGE / open-gov data pipelines", ["poweratlas"], true),
      s("EmailJS", ["portfolio"]),
      s("Tableau Cloud API", ["dataglass"]),
    ],
  },
  {
    id: "security",
    icon: "uil uil-shield-check",
    accent: "red",
    skills: [
      s("LGPD compliance", ["encaixe", "dataglass"], true),
      s("OAuth2 / JWT", ["encaixe", "dataglass"], true),
      s("Least-privilege webhook auth", ["encaixe"]),
      s("Non-root containers", ["devscope", "encaixe"]),
      s("Restricted CORS", ["devscope", "encaixe"]),
      s("Security headers", ["devscope", "encaixe"]),
      s("Masked secrets", ["devscope", "encaixe"]),
    ],
  },
  {
    id: "practices",
    icon: "uil uil-rocket",
    accent: "accent",
    skills: [
      s("Git / Git Flow", ["encaixe", "devscope", "dataglass"], true),
      s("Monorepos", ["encaixe", "devscope"]),
      s("Technical documentation", ["encaixe", "context", "devscope"], true),
      s("Unit-economics awareness", ["encaixe"]),
      s("Code review & mentoring", ["dataglass"], true),
      s("Agile / Scrum / Kanban", ["dataglass"]),
    ],
  },
];

// Derived aggregates for the stats strip — computed once, never
// hand-maintained, so the numbers can never drift from the data.
export const TOTAL_SKILLS = CATEGORIES.reduce(
  (sum, c) => sum + c.skills.length,
  0
);
export const TOTAL_CATEGORIES = CATEGORIES.length;
export const TOTAL_PROJECTS = Object.keys(PROJECTS).length;
