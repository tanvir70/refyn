export interface SpecLedgerRow {
  readonly label: string;
  readonly value: string;
}

export interface MonographWork {
  readonly id: "dr-page" | "pristha" | "agro-pos";
  readonly index: "01" | "02" | "03";
  readonly track: "IN-HOUSE VENTURE" | "PARTNER ENGINEERED SYSTEM";
  readonly title: string;
  readonly nativeTitle: string;
  readonly subtitle: string;
  readonly summary: string;
  readonly problemContext: string;
  readonly repositoryUrl: string;
  readonly repositoryLabel: string;
  readonly ledger: readonly SpecLedgerRow[];
}

export interface BrandTokenSwatch {
  readonly name: string;
  readonly token: string;
  readonly hex: string;
  readonly role: string;
}

export interface DrPageQueueState {
  readonly servingSerial: number;
  readonly patientSerial: number;
  readonly patientsAhead: number;
  readonly delayMinutes: number;
  readonly estimatedMinutes: number;
  readonly etaClockDisplay: string;
  readonly isServingPatient: boolean;
  readonly statusBanner: string;
}

export interface PosInvoiceState {
  readonly totalBottles: number;
  readonly dokanUnits: number;
  readonly godownUnits: number;
  readonly dispatchAuditLog: "COUNTER_DOKAN_ISSUE" | "DIRECT_WHOLESALE_DISPATCH";
  readonly retailTotalBdt: string;
  readonly wholesaleCostDisplay: string;
  readonly grossMarginDisplay: string;
  readonly fefoLotCode: string;
  readonly fefoDaysRemaining: number;
}

export const MONOGRAPH_WORKS: readonly MonographWork[] = [
  {
    id: "dr-page",
    index: "01",
    track: "IN-HOUSE VENTURE",
    title: "Dr.Page",
    nativeTitle: "ডাক্তার পেইজ",
    subtitle: "Omnichannel Serial & Chamber Gateway",
    summary:
      "An ultra-lightweight chamber operating system engineered for the sequential serial reality of private specialist consultations in Bangladesh.",
    problemContext:
      "Evening specialist chambers operate on sequential serials (সিরিয়াল ১, ২, ৩...) rather than calendar time slots. Front-desk compounders field 200+ phone calls daily while managing paper ledgers (খাতা), leaving patients in 3-hour waiting room blind spots whenever hospital OT overruns occur.",
    repositoryUrl: "https://github.com/tanvir70/dr-page",
    repositoryLabel: "github.com/tanvir70/dr-page",
    ledger: [
      { label: "Classification", value: "In-House Venture · Healthcare Infrastructure" },
      { label: "Interfaces", value: "Zero-Install Patient Token · Compounder PWA · Doctor Telemetry" },
      { label: "Runtime & Stack", value: "Java 25 Virtual Threads · Spring Modulith 1.3 · PostgreSQL 16 · SSE" },
      { label: "Domain Invariant", value: "Pessimistic row-level lock (SELECT ... FOR UPDATE) · 0% duplicate serials" },
    ],
  },
  {
    id: "pristha",
    index: "02",
    track: "IN-HOUSE VENTURE",
    title: "Pristha",
    nativeTitle: "পৃষ্ঠা",
    subtitle: "Bilingual Literary & Publishing Workspace",
    summary:
      "A unified reading, manuscript authoring, and publishing house workspace built for Bengali and bilingual literature.",
    problemContext:
      "South Asian literary ecosystems suffer from disconnected tools—readers browse static catalogs, writers draft in isolated documents, and publishers track submissions over email. Pristha unifies all three roles under one typed domain architecture.",
    repositoryUrl: "https://github.com/tanvir70/pristha-frontend",
    repositoryLabel: "github.com/tanvir70/pristha-frontend",
    ledger: [
      { label: "Classification", value: "In-House Venture · Cultural & Publishing Platform" },
      { label: "Workspaces", value: "Reader Discovery · Writer Manuscript Studio · Publisher Desk" },
      { label: "Runtime & Stack", value: "Next.js App Router · TypeScript Contracts · Spring Boot API · Cloudflare Workers" },
      { label: "Domain Invariant", value: "Role-scoped workspace boundaries with bilingual (বাংলা / EN) typography" },
    ],
  },
  {
    id: "agro-pos",
    index: "03",
    track: "PARTNER ENGINEERED SYSTEM",
    title: "Rajib Enterprise POS",
    nativeTitle: "মেসার্স রাজীব এন্টারপ্রাইজ",
    subtitle: "Agrochemical POS, FEFO Inventory & Self-Healing Credit Ledger",
    summary:
      "An audit-compliant retail counter, statutory chemical expiry engine, and double-entry credit ledger engineered for rural agrochemical dealerships.",
    problemContext:
      "Agrochemical dealers receive stock in bulk cartons at the Godown (warehouse) and sell loose units at the Dokan (front counter), bargain unit prices per farmer while hiding wholesale cost from onlookers, and must comply with Pesticide Ordinance 1971 expiry rules.",
    repositoryUrl: "https://github.com/tanvir70/pos",
    repositoryLabel: "github.com/tanvir70/pos",
    ledger: [
      { label: "Classification", value: "Partner System · M/S Rajib Enterprise (Sherpur Sadar)" },
      { label: "Core Modules", value: "FEFO Batch Counter · Dokan/Godown Split Dispatch · Quarantine Returns" },
      { label: "Runtime & Stack", value: "Python 3.12 FastAPI · React 19 · SQLite WAL (BEGIN IMMEDIATE) · Spring Boot Ref" },
      { label: "Domain Invariant", value: "Non-negative dues (current_due >= 0.00) · Self-healing ledger audit · 85/85 tests" },
    ],
  },
] as const;

export const BRAND_TOKENS: readonly BrandTokenSwatch[] = [
  {
    name: "Charcoal",
    token: "--color-charcoal",
    hex: "#0F172A",
    role: "Primary ink, structural dark bands, primary controls",
  },
  {
    name: "Slate",
    token: "--color-slate",
    hex: "#64748B",
    role: "Secondary editorial copy, index coordinates, specification keys",
  },
  {
    name: "Mist",
    token: "--color-mist",
    hex: "#E5E7EB",
    role: "Exposed 1px architectural Swiss grid hairlines and specimen frames",
  },
  {
    name: "Warm White",
    token: "--color-warm-white",
    hex: "#F7F7F4",
    role: "Primary monograph paper canvas",
  },
] as const;

export function calculateDrPageQueueState(
  servingSerial: number,
  patientSerial: number,
  delayMinutes: number
): DrPageQueueState {
  const safeServing = Math.min(Math.max(1, servingSerial), patientSerial);
  const safeDelay = Math.max(0, delayMinutes);
  const patientsAhead = Math.max(0, patientSerial - safeServing);
  const isServingPatient = safeServing === patientSerial;
  const consultationPaceMinutes = 7;
  const estimatedMinutes = isServingPatient
    ? 0
    : patientsAhead * consultationPaceMinutes + safeDelay;

  const baseMinutesFrom1900 = 19 * 60 + 10 + estimatedMinutes;
  const hours24 = Math.floor(baseMinutesFrom1900 / 60) % 24;
  const mins = baseMinutesFrom1900 % 60;
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const period = hours24 >= 12 ? "PM" : "AM";
  const etaClockDisplay = isServingPatient
    ? "NOW — ROOM 402"
    : `${hours12}:${String(mins).padStart(2, "0")} ${period}`;

  const statusBanner = isServingPatient
    ? "NOW SERVING SERIAL #18 — PROCEED TO CHAMBER ROOM 402"
    : safeDelay > 0
      ? `OT OVERRUN BROADCAST (+${safeDelay}M) · SSE STREAM SYNCHRONIZED`
      : "CHAMBER ACTIVE · LIVE SSE QUEUE TELEMETRY";

  return {
    servingSerial: safeServing,
    patientSerial,
    patientsAhead,
    delayMinutes: safeDelay,
    estimatedMinutes,
    etaClockDisplay,
    isServingPatient,
    statusBanner,
  };
}

export function calculatePosInvoiceState(
  splitEnabled: boolean,
  pinUnlocked: boolean
): PosInvoiceState {
  const totalBottles = 20;
  const dokanUnits = splitEnabled ? 12 : 20;
  const godownUnits = splitEnabled ? 8 : 0;
  const dispatchAuditLog = splitEnabled
    ? "DIRECT_WHOLESALE_DISPATCH"
    : "COUNTER_DOKAN_ISSUE";

  return {
    totalBottles,
    dokanUnits,
    godownUnits,
    dispatchAuditLog,
    retailTotalBdt: "BDT 16,400.00",
    wholesaleCostDisplay: pinUnlocked ? "BDT 13,600.00 (680/unit)" : "••••••",
    grossMarginDisplay: pinUnlocked ? "+BDT 2,800.00 (17.1%)" : "••••••",
    fefoLotCode: "LOT-SYN-2609A",
    fefoDaysRemaining: 24,
  };
}
