/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  heroHeading: string;
  heroSubtext?: string;
  celebrationHeading: string;
  celebrationSubtext?: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "Quantum x QuantumByte",
  logoUrl: "https://client-api-stag.quantumbyte.ai/uploads/ec56u0u4/4480/assets/4187ac62-7d44-4d2c-bfa2-ce11374b1dad_1781691241709_0vsu6u.png",
  brandColor: {
    primary: "#f43f5e",
    secondary: "#fb7185",
    accent: "#fda4af",
  },
  heroHeading: "Hello QuantumByte",
  heroSubtext: "A celebration of the Quantum x QuantumByte collaboration.",
  celebrationHeading: "We Love Quantum x QuantumByte",
  celebrationSubtext: "Thank you for this beautiful partnership. Here's to building great things together.",
};
