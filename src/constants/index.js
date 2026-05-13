import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
} from "../assets";

/** Primary CTA — Telegram bot */
export const yappixTelegramBotUrl = "https://t.me/yappix_bot";

/** Stripe Checkout — Pilot tier */
export const yappixStripePilotCheckoutUrl =
  "https://buy.stripe.com/aEUg3462w0EA5QQdR3";

/** Stripe Checkout — Production tier */
export const yappixStripeProductionCheckoutUrl =
  "https://buy.stripe.com/14kaIKbmQgDyfrq5ky";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Process",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Delivery",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Talk to us",
    url: yappixTelegramBotUrl,
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Email us",
    url: "mailto:help@yappix.net",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  "/Logos/001.svg",
  "/Logos/003.svg",
  "/Logos/005.svg",
  "/Logos/006.svg",
  "/Logos/009.svg",
];

export const yappixServices = [
  "Hallucination-free AI assistants — RAG, citations, critic agent",
  "Image & video — Flux, Stable Diffusion, Sora, Runway, Kling",
  "Voice & TTS — ElevenLabs, OpenAI, Azure, real-time agents",
];

export const yappixServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Discovery & ROI",
    text: "2–5 days. We map your process, identify which AI agent solves which pain, and calculate hours saved. You get a financial model and rollout plan. No green light without confirmed ROI.",
    date: "2–5 days",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Data prep & pilot",
    text: "5–10 days. Clean documents, label your corpus, spin up a sandbox. Launch a pilot on 50–100 real questions. First RAGAS metrics on day 10, live demo by end of step.",
    date: "5–10 days",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Production rollout",
    text: "10–14 days. Integration with your channels (web, Telegram, Slack, CRM), Grafana dashboard, alerting, escalation flows, and operator training.",
    date: "10–14 days",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Iteration & growth",
    text: "Ongoing. Weekly regression on a golden set, fine-tuning on operator corrections, new scenarios on demand. Retainer or full handover to your team.",
    date: "ongoing",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "YappiX has been building products at the intersection of AI and automation since 2015. We've shipped 1,000+ websites and 250+ mobile apps. Today our focus is multimodal AI agents and RAG systems that don't hallucinate. Skolkovo residents, IT-Park alumni, Microsoft for Startups participants, Y Combinator program. Backed by US investors.";

export const collabContent = [
  {
    id: "0",
    title: "Discovery & ROI",
    text: "We map your process, identify which AI agent solves which pain, and calculate hours saved. You get a financial model and rollout plan.",
  },
  {
    id: "1",
    title: "Data prep & pilot",
    text: "Clean documents, label your corpus, spin up a sandbox. Pilot on 50–100 real questions with RAGAS metrics and a live demo.",
  },
  {
    id: "2",
    title: "Production rollout",
    text: "Channel integration, Grafana dashboard, alerting, escalation flows, and operator training — then iterate with your team.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Pilot",
    description: "2–3 weeks · Sandbox demo",
    price: "2,499",
    features: [
      "1 scenario + golden set up to 100 questions",
      "Base RAG system with citations",
      "Faithfulness & Relevancy metrics",
    ],
  },
  {
    id: "1",
    title: "Production",
    description: "30 days · Live deployment",
    price: "5,499",
    features: [
      "1–2 scenarios + golden set up to 500 questions",
      "Critic agent + full anti-hallucination stack",
      "Multimodal: text + image + video + voice",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "6–10 weeks · On-premise",
    price: null,
    features: [
      "Multiple processes / departments",
      "On-premise / air-gapped deployment",
      "GDPR, SOC 2 readiness, 99.9% SLA",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "No hallucinations — contractually",
    text: "Faithfulness ≥ 0.95 on RAGAS, citations in every response, critic agent verifies the first. Written into the SLA.",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Multimodal in one system",
    text: "One assistant writes text, generates images, edits video, voices it over. Single API, single bill, single team.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Production in 30 days",
    text: "From kickoff to live deployment — 30 days. Sandbox pilot in 2–3 weeks. Timelines fixed in contract.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "GDPR, SOC 2, on-premise",
    text: "Deploy in your cloud (AWS, GCP, Azure) or fully air-gapped on self-hosted models. Full data sovereignty.",
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Transparent metrics 24/7",
    text: "Grafana dashboard with Faithfulness, Relevancy, Citation Integrity. Slack and PagerDuty alerts.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "No vendor lock-in",
    text: "Open-source stack (Qdrant, LangChain, pgvector). Full code, weights, and docs transfer.",
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
