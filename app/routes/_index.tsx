import { useConfigurables } from "~/modules/configurables";
import { useEffect, useRef } from "react";

const HEARTS = [
  { emoji: "❤️", size: "text-4xl", delay: "0s", left: "8%", dur: "4s" },
  { emoji: "🩷", size: "text-3xl", delay: "0.5s", left: "18%", dur: "5s" },
  { emoji: "💕", size: "text-5xl", delay: "1s", left: "28%", dur: "3.5s" },
  { emoji: "💗", size: "text-3xl", delay: "1.5s", left: "38%", dur: "6s" },
  { emoji: "💖", size: "text-4xl", delay: "0.8s", left: "50%", dur: "4.5s" },
  { emoji: "💓", size: "text-5xl", delay: "0.3s", left: "60%", dur: "5.5s" },
  { emoji: "💝", size: "text-3xl", delay: "2s", left: "70%", dur: "4s" },
  { emoji: "🫀", size: "text-4xl", delay: "1.2s", left: "80%", dur: "3s" },
  { emoji: "❤️", size: "text-5xl", delay: "2.5s", left: "90%", dur: "5s" },
  { emoji: "🩷", size: "text-4xl", delay: "0.7s", left: "14%", dur: "6.5s" },
  { emoji: "💕", size: "text-3xl", delay: "1.8s", left: "45%", dur: "4s" },
  { emoji: "💖", size: "text-5xl", delay: "3s", left: "75%", dur: "5s" },
  { emoji: "💗", size: "text-4xl", delay: "2.2s", left: "55%", dur: "3.5s" },
  { emoji: "💓", size: "text-3xl", delay: "0.4s", left: "5%", dur: "6s" },
  { emoji: "💝", size: "text-5xl", delay: "1.6s", left: "85%", dur: "4.5s" },
  { emoji: "🩷", size: "text-3xl", delay: "3.5s", left: "33%", dur: "5s" },
  { emoji: "❤️", size: "text-4xl", delay: "2.8s", left: "65%", dur: "3.5s" },
  { emoji: "💕", size: "text-5xl", delay: "4s", left: "22%", dur: "4s" },
];

const SCATTERED = [
  { emoji: "❤️", top: "10%", left: "5%", size: "text-3xl", rotate: "-15deg", opacity: 0.7 },
  { emoji: "🩷", top: "20%", left: "92%", size: "text-4xl", rotate: "20deg", opacity: 0.6 },
  { emoji: "💕", top: "5%", left: "50%", size: "text-3xl", rotate: "5deg", opacity: 0.5 },
  { emoji: "💖", top: "80%", left: "10%", size: "text-5xl", rotate: "-10deg", opacity: 0.65 },
  { emoji: "💗", top: "70%", left: "88%", size: "text-3xl", rotate: "12deg", opacity: 0.7 },
  { emoji: "💓", top: "50%", left: "3%", size: "text-4xl", rotate: "-5deg", opacity: 0.55 },
  { emoji: "💝", top: "55%", left: "95%", size: "text-3xl", rotate: "18deg", opacity: 0.6 },
  { emoji: "🫀", top: "88%", left: "50%", size: "text-4xl", rotate: "-8deg", opacity: 0.5 },
  { emoji: "❤️", top: "35%", left: "96%", size: "text-2xl", rotate: "22deg", opacity: 0.65 },
  { emoji: "🩷", top: "38%", left: "2%", size: "text-2xl", rotate: "-18deg", opacity: 0.6 },
  { emoji: "💕", top: "92%", left: "20%", size: "text-3xl", rotate: "10deg", opacity: 0.5 },
  { emoji: "💗", top: "92%", left: "80%", size: "text-3xl", rotate: "-12deg", opacity: 0.55 },
];

export default function IndexPage() {
  const { config, loading } = useConfigurables();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-8 h-8 border-4 border-rose-300 border-t-rose-500 rounded-full animate-spin" />
      </div>
    );
  }

  const heroHeading = config?.heroHeading ?? "Hello QuantumByte Lovee";
  const heroSubtext = config?.heroSubtext ?? "A celebration of the Quantum x QuantumByte collaboration.";
  const celebrationHeading = config?.celebrationHeading ?? "We Love Quantum x QuantumByte";
  const celebrationSubtext = config?.celebrationSubtext ?? "Thank you for this beautiful partnership.";
  const logoUrl = config?.logoUrl ?? "";
  const primary = config?.brandColor?.primary ?? "#f43f5e";
  const secondary = config?.brandColor?.secondary ?? "#fb7185";

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          50% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
        }
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .heart-float {
          position: absolute;
          bottom: -10%;
          animation: floatUp linear infinite;
          pointer-events: none;
          user-select: none;
        }
        .heart-pulse {
          animation: pulse-heart 1.8s ease-in-out infinite;
          display: inline-block;
        }
        .text-shimmer {
          background: linear-gradient(90deg, #f43f5e 0%, #fb7185 25%, #fda4af 50%, #f43f5e 75%, #fb7185 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* Section 1 — Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
        style={{ background: "linear-gradient(160deg, #ffffff 60%, #fff1f2 100%)" }}
      >
        {/* Soft decorative rose blobs */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${secondary}, transparent 70%)` }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-15 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${primary}, transparent 70%)` }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
          {/* Logo */}
          {logoUrl && (
            <div className="flex items-center justify-center">
              <img
                src={logoUrl}
                alt="Logo"
                className="h-20 w-auto object-contain drop-shadow-sm"
              />
            </div>
          )}

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-sm font-semibold tracking-wide"
            style={{ background: `linear-gradient(90deg, ${primary}, ${secondary})` }}
          >
            <span>❤️</span>
            <span>Quantum x QuantumByte</span>
            <span>❤️</span>
          </div>

          {/* Heading */}
          <h1 className="text-shimmer font-black leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}>
            {heroHeading}
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 text-lg sm:text-xl max-w-lg leading-relaxed">
            {heroSubtext}
          </p>

          {/* Heart row decorative */}
          <div className="flex items-center gap-3 text-3xl mt-2 select-none">
            {["❤️","🩷","💕","💖","💗","💓","💝"].map((h, i) => (
              <span
                key={i}
                className="heart-pulse"
                style={{ animationDelay: `${i * 0.25}s` }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-rose-400 opacity-60">
          <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Section 2 — Celebration */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#fff1f2" }}
      >
        {/* Scattered static hearts in background */}
        {SCATTERED.map((h, i) => (
          <span
            key={i}
            className={`absolute ${h.size} pointer-events-none select-none`}
            style={{
              top: h.top,
              left: h.left,
              transform: `rotate(${h.rotate})`,
              opacity: h.opacity,
            }}
          >
            {h.emoji}
          </span>
        ))}

        {/* Floating animated hearts */}
        {HEARTS.map((h, i) => (
          <span
            key={i}
            className={`heart-float ${h.size} select-none`}
            style={{
              left: h.left,
              animationDuration: h.dur,
              animationDelay: h.delay,
            }}
          >
            {h.emoji}
          </span>
        ))}

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-3xl mx-auto">
          {/* Top heart cluster */}
          <div className="flex items-center gap-2 text-4xl sm:text-5xl select-none">
            {["💝","💖","❤️","💗","🩷","💕","💓"].map((h, i) => (
              <span
                key={i}
                className="heart-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Main heading */}
          <h2
            className="font-black leading-tight tracking-tight text-slate-900"
            style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)" }}
          >
            {celebrationHeading}
          </h2>

          {/* Heart row */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-3xl select-none">
            {["❤️","🩷","💕","💖","💗","💓","💝","🫀","❤️","🩷","💕","💖"].map((h, i) => (
              <span
                key={i}
                className="heart-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Subtext */}
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-xl">
            {celebrationSubtext}
          </p>

          {/* Bottom heart cluster */}
          <div className="flex items-center gap-2 text-4xl sm:text-5xl select-none mt-2">
            {["💓","💗","💝","❤️","💕","🩷","💖"].map((h, i) => (
              <span
                key={i}
                className="heart-pulse"
                style={{ animationDelay: `${i * 0.18}s` }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Branded footer line */}
          <div className="mt-4 flex items-center gap-3">
            <div className="h-px w-16" style={{ background: `linear-gradient(to right, transparent, ${primary})` }} />
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: primary }}
            >
              Quantum x QuantumByte
            </span>
            <div className="h-px w-16" style={{ background: `linear-gradient(to left, transparent, ${primary})` }} />
          </div>
        </div>
      </section>
    </>
  );
}
