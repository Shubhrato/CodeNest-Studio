import {
  Building2,
  Briefcase,
  UserRound,
  Rocket,
  ShoppingBag,
  Atom,
  LayoutTemplate,
  Database,
  Blocks,
  PenTool,
  Wrench,
} from "lucide-react";

// Bento capabilities. `span` (1 or 2) controls column span; total is tuned
// to pack cleanly into a 4-column grid with dense flow.
export const capabilities = [
  { icon: Building2, title: "Corporate Websites", desc: "Polished sites for established companies.", span: 2 },
  { icon: Briefcase, title: "Business Websites", desc: "Credibility that turns visits into enquiries.", span: 1 },
  { icon: UserRound, title: "Portfolio Websites", desc: "Showcase work with clarity and taste.", span: 1 },
  { icon: Rocket, title: "Landing Pages", desc: "Focused pages built to convert.", span: 1 },
  { icon: ShoppingBag, title: "E-commerce Websites", desc: "Sell online with the right platform.", span: 2 },
  { icon: Atom, title: "React Applications", desc: "Interactive, app-like web experiences.", span: 2 },
  { icon: LayoutTemplate, title: "WordPress Websites", desc: "Manage your content with ease.", span: 1 },
  { icon: Database, title: "PHP / MySQL Websites", desc: "Custom, database-driven systems.", span: 1 },
  { icon: Blocks, title: "Custom Web Solutions", desc: "Built around your specific logic.", span: 2 },
  { icon: PenTool, title: "Website Redesigns", desc: "Modernize an outdated presence.", span: 1 },
  { icon: Wrench, title: "Maintenance & Updates", desc: "Ongoing care after launch.", span: 2 },
];
