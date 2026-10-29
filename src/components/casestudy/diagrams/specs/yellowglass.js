/**
 * Yellowglass: page-grained knowledge graph of the Brazilian medical device market.
 *
 * Two lanes share the same columns so the monthly load (col 4) drops straight
 * into the database it replaces, and the revalidation edge climbs back to the
 * Next.js cache (col 2) without crossing the request path.
 */
const yellowglass = {
  i18nNamespace: "yellowglass",
  ariaLabel: { key: "ariaLabel", fallback: "Yellowglass architecture" },
  accent: "orange",
  title: "Next.js · Django · AWS",
  size: { w: 900, h: 420 },

  lanes: [
    { id: "request", y: 50,  labelKey: "lanes.request", divider: false },
    { id: "data",    y: 232, labelKey: "lanes.data",    divider: true, dividerY: 206 },
  ],

  nodes: [
    { id: "browser", lane: "request", col: 0, variant: "blue",
      labelKey: "nodes.browser", sub: "HTML", size: { w: 100, h: 52 } },
    { id: "edge", lane: "request", col: 1, variant: "orange",
      label: "Cloudflare", subKey: "nodes.edgeSub", size: { w: 150, h: 52 } },
    { id: "next", lane: "request", col: 2, variant: "accent",
      label: "Next.js 16", sub: ["SSR · use cache", { key: "nodes.nextSub" }],
      size: { w: 150, h: 68 } },
    { id: "django", lane: "request", col: 3, variant: "green",
      label: "Django + DRF", subKey: "nodes.djangoSub", size: { w: 150, h: 52 } },
    { id: "rds", lane: "request", col: 4, variant: "purple",
      label: "PostgreSQL RDS", sub: "schemas app · etl", size: { w: 150, h: 52 } },

    { id: "raw", lane: "data", col: 1, variant: "orange",
      labelKey: "nodes.raw", sub: "ANVISA · CNES · PNCP", size: { w: 150, h: 52 } },
    { id: "athena", lane: "data", col: 2, variant: "orange",
      label: "Athena SQL", subKey: "nodes.athenaSub", size: { w: 150, h: 52 } },
    { id: "parquet", lane: "data", col: 3, variant: "purple",
      label: "S3 Parquet", subKey: "nodes.parquetSub", size: { w: 150, h: 52 } },
    { id: "load", lane: "data", col: 4, variant: "red",
      labelKey: "nodes.load", subKey: "nodes.loadSub", size: { w: 150, h: 52 } },
  ],

  edges: [
    { from: "browser", to: "edge",   step: 1 },
    { from: "edge",    to: "next",   step: 2 },
    { from: "next",    to: "django", step: 3 },
    { from: "django",  to: "rds",    step: 4 },

    { from: "raw",     to: "athena",  step: 5 },
    { from: "athena",  to: "parquet", step: 6 },
    { from: "parquet", to: "load",    step: 7 },
    { from: "load",    to: "rds",     style: "warning", port: "top-bottom" },
  ],

  // Label beside the vertical swap edge instead of on top of it.
  annotations: [
    { relativeTo: "load", anchor: "above", dx: -10, dy: 58, textAnchor: "end",
      textKey: "edges.swap", style: { fill: "var(--diag-orange)", fontSize: 10, fontWeight: 600 } },
  ],

  sidecars: [
    { label: "OpenAPI",        subKey: "sidecars.openapi" },
    { label: "CodePipeline",   subKey: "sidecars.pipeline" },
    { label: "Terraform",      subKey: "sidecars.terraform" },
    { label: "Secrets Manager", subKey: "sidecars.secrets" },
  ],
  sidecarY: 340,
};

export default yellowglass;
