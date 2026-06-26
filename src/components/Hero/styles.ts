import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const HeroSectionContainer = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 80px 16px; /* py-20 px-4 */

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px; /* md:px-8 */
  }
`;

export const HeroBackground = styled.div<{ $isDark: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  transition:
    background-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
    border-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
    color 0.6s cubic-bezier(0.76, 0, 0.24, 1);

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #000000;
        `
      : css`
          background: linear-gradient(160deg, #f3eeff 0%, #f8f4ff 40%, #ede8ff 100%);
        `}
`;

export const GlowOrb1 = styled.div<{ $isDark: boolean }>`
  position: absolute;
  top: 25%;
  right: 25%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  filter: blur(130px);
  animation: pulse 2s infinite ease-in-out;
  transition: background-color 0.8s cubic-bezier(0.76, 0, 0.24, 1);

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
  }

  background-color: ${(props) =>
    props.$isDark ? "rgba(109, 40, 217, 0.2)" : "rgba(139, 92, 246, 0.1)"};
`;

export const GlowOrb2 = styled.div<{ $isDark: boolean }>`
  position: absolute;
  bottom: 25%;
  left: 25%;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  filter: blur(110px);
  transition: background-color 0.8s cubic-bezier(0.76, 0, 0.24, 1);

  background-color: ${(props) =>
    props.$isDark ? "rgba(88, 28, 135, 0.3)" : "rgba(168, 85, 247, 0.08)"};
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 20;
  width: 100%;
  max-w: 64rem; /* max-w-5xl */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MicroNotificationTag = styled(motion.div)<{ $isDark: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px; /* gap-2 */
  margin-top: 50px;
  padding: 6px 14px; /* py-1.5 px-3.5 */
  border-radius: 9999px;
  border: 1px solid;
  font-size: 12px; /* text-xs */
  font-weight: 500;
  letter-spacing: 0.025em; /* tracking-wide */
  margin-bottom: 56px;
  transition:
    background-color 0.8s,
    border-color 0.8s,
    color 0.6s;

  ${(props) =>
    props.$isDark
      ? css`
          border-color: rgba(139, 92, 246, 0.3);
          background-color: rgba(76, 29, 149, 0.2);
          color: #c084fc;
        `
      : css`
          border-color: rgba(109, 40, 217, 0.35);
          background: linear-gradient(135deg, rgba(109, 40, 217, 0.1) 0%, rgba(139, 92, 246, 0.06) 100%);
          color: #6d28d9;
          font-weight: 700;
          box-shadow: 0 2px 12px rgba(109, 40, 217, 0.12);
        `}
`;

export const HeroTitle = styled(motion.h1)<{ $isDark: boolean }>`
  font-size: 36px; /* text-4xl */
  line-height: 1; /* leading-none */
  margin-bottom: 24px; /* mb-6 */
  font-weight: 800; /* font-extrabold */
  letter-spacing: -0.05em; /* tracking-tight */
  font-family: var(--font-sans);
  position: relative;
  transition:
    color 0.6s,
    background-color 0.8s;

  @media (min-width: 640px) {
    font-size: 60px; /* sm:text-6xl */
  }

  @media (min-width: 768px) {
    font-size: 96px; /* md:text-8xl */
  }
`;

export const BrandFirstName = styled.span<{ $isDark: boolean }>`
  display: block;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  margin-top: -65px;

  color: ${(props) =>
    props.$isDark ? "#f4f4f5" : "#18181b"}; /* text-zinc-100 / text-zinc-900 */
`;

export const BrandSecondName = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-serif);
  display: inline-block;
  font-style: italic;
  font-weight: 300; /* font-light */
  letter-spacing: 0.025em; /* tracking-wide */
  position: relative;

  /* Gradiente Text */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: all 0.8s cubic-bezier(0.76, 0, 0.24, 1);

  /* glow-purple effect directly integrated */
  text-shadow: ${(props) =>
    props.$isDark
      ? "0 0 20px rgba(167, 139, 250, 0.4)"
      : "0 0 20px rgba(109, 40, 217, 0.2)"};

  background-image: ${(props) =>
    props.$isDark
      ? "linear-gradient(to right, #a78bfa, #d8b4fe, #b490fc)" /* from-violet-400 via-purple-300 to-violet-205 */
      : "linear-gradient(to right, #7c3aed, #9333ea, #6b21a8)"}; /* from-violet-650 via-purple-600 to-purple-800 */
`;

/* ── Caricatura DESKTOP — ao lado do texto "Alves Melo" ──
   Em telas ≤768px ela some, pois nesse caso usamos o
   MobileCaricatureWrapper (centralizado, acima do título). */
export const CaricatureContainer = styled.div`
  position: absolute;

  right: calc(100% - 5px);
  top: -85px;

  width: 480px;
  height: 480px;

  pointer-events: none;
  user-select: none;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ── Caricatura MOBILE — centralizada, acima do título ──
   Visível apenas em telas ≤768px. */
export const MobileCaricatureWrapper = styled.div`
  display: none;

  width: 180px;
  height: 180px;
  margin: 0 auto 16px auto;

  align-items: center;
  justify-content: center;

  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const CaricatureImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
  display: block;
`;

export const HeroSubheading = styled(motion.p)<{ $isDark: boolean }>`
  font-size: 18px; /* text-lg */
  font-weight: 300; /* font-light */
  font-family: var(--font-sans);
  max-width: 42rem; /* max-w-2xl */
  padding-left: 16px;
  padding-right: 16px; /* px-4 */
  margin-bottom: 16px; /* mb-4 */
  line-height: 1.625; /* leading-relaxed */
  letter-spacing: 0.025em; /* tracking-wide */
  transition: all 0.8s;

  @media (min-width: 640px) {
    font-size: 20px; /* sm:text-xl */
  }

  color: ${(props) =>
    props.$isDark ? "#d4d4d8" : "#3f3f46"}; /* text-zinc-300 / text-zinc-700 */
`;

export const CredentialsContainer = styled(motion.div)<{ $isDark: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px; /* gap-4 */
  font-size: 12px; /* text-xs */
  font-family: var(--font-mono);
  letter-spacing: 0.05em; /* tracking-wider */
  margin-bottom: 40px; /* mb-10 */
  transition: all 0.8s;

  @media (min-width: 640px) {
    font-size: 14px; /* sm:text-sm */
  }

  color: ${(props) =>
    props.$isDark ? "#d4d4d8" : "#52525b"}; /* text-zinc-300 / text-zinc-600 */
`;

export const CertificationsTag = styled.span<{ $isDark: boolean }>`
  padding: 4px 12px; /* py-1 px-3 */
  border: 1px solid;
  border-radius: 4px; /* rounded */

  border-color: ${(props) =>
    props.$isDark ? "#27272a" : "rgba(109, 40, 217, 0.3)"};
  color: ${(props) => (props.$isDark ? "#d4d4d8" : "#5b21b6")};
  background: ${(props) =>
    props.$isDark ? "transparent" : "rgba(109, 40, 217, 0.06)"};
`;

export const SeparationDot = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #a78bfa; /* bg-violet-400 */
`;

export const MecTag = styled.span<{ $isDark: boolean }>`
  padding: 4px 12px; /* py-1 px-3 */
  font-size: 12px; /* text-xs */
  border-radius: 4px; /* rounded */
  display: flex;
  align-items: center;
  gap: 6px; /* gap-1.5 */
  font-family: var(--font-sans);
  border: 1px solid;
  transition: all 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          border-color: rgba(109, 40, 217, 0.3); /* border-violet-900/30 */
          background-color: rgba(92, 36, 219, 0.1); /* bg-violet-950/10 */
          color: #c084fc; /* text-violet-300 */
        `
      : css`
          border-color: rgba(109, 40, 217, 0.4);
          background: linear-gradient(135deg, rgba(109, 40, 217, 0.1) 0%, rgba(139, 92, 246, 0.06) 100%);
          color: #5b21b6;
          font-weight: 600;
          box-shadow: 0 2px 10px rgba(109, 40, 217, 0.1);
        `}
`;

export const CtaButtonsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px; /* gap-4 */
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row; /* sm:flex-row */
  }
`;

export const PrimaryButton = styled.button`
  position: relative;
  padding: 16px 32px; /* py-4 px-8 */
  border-radius: 9999px; /* rounded-full */
  background: linear-gradient(
    to right,
    #7c3aed,
    #9333ea
  ); /* bg-gradient-to-r from-violet-600 to-purple-600 */
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 0.025em; /* tracking-wide */
  font-size: 14px; /* text-sm */
  box-shadow: 0 4px 25px rgba(139, 92, 246, 0.35);
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px; /* gap-2 */
  border: none;

  &:hover {
    background: linear-gradient(
      to right,
      #8b5cf6,
      #a855f7
    ); /* hover:from-violet-500 hover:to-purple-505 */
    transform: translateY(-2px);
  }
`;

export const SecondaryButtonLink = styled.a<{ $isDark: boolean }>`
  padding: 16px 32px; /* py-4 px-8 */
  border-radius: 9999px; /* rounded-full */
  font-size: 14px; /* text-sm */
  font-weight: 500;
  transition: all 0.3s;
  border: 1px solid;
  text-decoration: none;
  display: inline-block;

  ${(props) =>
    props.$isDark
      ? css`
          border-color: #27272a; /* border-zinc-800 equivalent */
          color: #d4d4d8; /* text-zinc-300 */
          &:hover {
            background-color: rgba(24, 24, 27, 0.5); /* hover:bg-zinc-900/50 */
            border-color: #52525b; /* hover:border-zinc-600 */
          }
        `
      : css`
          border-color: rgba(109, 40, 217, 0.25);
          background-color: #ffffff;
          color: #4c1d95;
          box-shadow: 0 1px 4px rgba(109, 40, 217, 0.08);

          &:hover {
            background: linear-gradient(135deg, rgba(109, 40, 217, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%);
            border-color: rgba(109, 40, 217, 0.5);
            color: #3b0764;
            box-shadow: 0 4px 16px rgba(109, 40, 217, 0.15);
          }
        `}
`;

export const ScrollIndicatorContainer = styled(motion.div)`
  position: absolute;
  bottom: 40px; /* bottom-10 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; /* gap-2 */
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const GoldenRatioLeftAccent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 160px; /* h-40 */
  width: 1px;
  background: linear-gradient(to top, rgba(139, 92, 246, 0.2), transparent);
`;

export const GoldenRatioRightAccent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 160px; /* h-40 */
  width: 1px;
  background: linear-gradient(to bottom, rgba(139, 92, 246, 0.2), transparent);
`;

export const DecorativeFloatingOrbRight = styled.div`
  position: absolute;
  right: 0;
  top: 33.333%;
  width: 128px;
  height: 256px;
  background-color: rgba(124, 58, 237, 0.05); /* bg-violet-600/5 */
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  filter: blur(64px); /* blur-3xl */
  pointer-events: none;
`;

export const DecorativeFloatingOrbLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 33.333%;
  width: 128px;
  height: 256px;
  background-color: rgba(147, 51, 234, 0.05); /* bg-purple-600/5 */
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  filter: blur(64px); /* blur-3xl */
  pointer-events: none;
`;