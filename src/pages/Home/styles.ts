import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const HomeRootContainer = styled.div`
  width: 100%;
`;

export const HomeLayoutWrapper = styled.div<{ $isDark: boolean }>`
  min-height: 100vh;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  transition:
    background-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
    border-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
    color 0.6s cubic-bezier(0.76, 0, 0.24, 1);

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #000000;
          color: #f4f4f5; /* text-zinc-101 */
        `
      : css`
          background-color: #faf8fe;
          color: #181c24; /* text-zinc-900 */
        `}
`;

export const AmbientCursorAura = styled.div<{
  $isDark: boolean;
  $left: number;
  $top: number;
}>`
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  mix-blend-mode: ${(props) => (props.$isDark ? "screen" : "multiply")};
  opacity: 0.95;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: left 0.15s ease-out, top 0.15s ease-out;
  animation: pulse 3s infinite ease-in-out;

  left: ${(props) => props.$left}px;
  top: ${(props) => props.$top}px;

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.75;
      transform: translate(-50%, -50%) scale(1);
    }

    50% {
      opacity: 0.95;
      transform: translate(-50%, -50%) scale(1.08);
    }
  }

  background: ${(props) =>
    props.$isDark
      ? `
        radial-gradient(
          circle,
          rgba(139, 92, 246, 0.55) 0%,
          rgba(139, 92, 246, 0.30) 35%,
          rgba(139, 92, 246, 0.15) 55%,
          rgba(139, 92, 246, 0) 75%
        )
      `
      : `
        radial-gradient(
          circle,
          rgba(139, 92, 246, 0.35) 0%,
          rgba(139, 92, 246, 0.20) 35%,
          rgba(139, 92, 246, 0.10) 55%,
          rgba(139, 92, 246, 0) 75%
        )
      `};
`;

export const StickyLuxuryHeader = styled.header<{ $isDark: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: rgba(0, 0, 0, 0.4); /* bg-black/40 */
          border-color: rgba(255, 255, 255, 0.05); /* border-white/5 */
        `
      : css`
          background-color: rgba(250, 248, 254, 0.82); /* bg-[#FAF8FE]/82 */
          border-color: rgba(139, 92, 246, 0.08); /* border-violet-100/60 */
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.02);
        `}
`;

export const HeaderContainer = styled.div`
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  height: 80px; /* h-20 */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px; /* md:px-8 */
  }
`;

export const LogoSerifButton = styled.button<{ $isDark: boolean }>`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700; /* font-bold */
  font-size: 24px; /* text-2xl */
  letter-spacing: 0.025em; /* tracking-wide */
  display: flex;
  align-items: center;
  gap: 8px; /* gap-2 */
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: color 0.6s;

  color: ${(props) => (props.$isDark ? "#ffffff" : "#09090b")};
`;

export const LogoLetterPeriod = styled.span<{ $isDark: boolean }>`
  transition: color 0.3s;
  color: ${(props) =>
    props.$isDark
      ? "#a78bfa"
      : "#7c3aed"}; /* text-violet-405 / text-violet-605 */

  ${LogoSerifButton}:hover & {
    color: ${(props) =>
      props.$isDark
        ? "#c084fc"
        : "#6d28d9"}; /* group-hover:text-violet-300 / group-hover:text-violet-500 */
  }
`;

export const LogoLetterSurnames = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-sans);
  font-size: 14px; /* text-sm */
  text-transform: uppercase;
  font-weight: 800; /* font-extrabold */
  letter-spacing: 0.25em; /* tracking-[0.25em] */
  transition: color 0.3s;

  color: ${(props) => (props.$isDark ? "#e4e4e7" : "#27272a")};

  ${LogoSerifButton}:hover & {
    color: ${(props) => (props.$isDark ? "#ffffff" : "#09090b")};
  }
`;

export const DesktopNavbar = styled.nav<{ $isDark: boolean }>`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px; /* gap-8 */
  }

  font-family: var(--font-mono);
  font-size: 13px; /* text-[11px] */
  text-transform: uppercase;
  letter-spacing: 0.15em; /* tracking-widest */
  transition: color 0.8s;

  color: ${(props) =>
    props.$isDark ? "#d4d4d8" : "#52525b"}; /* text-zinc-300 / text-[#52525b] */
`;

export const NavActionButton = styled.button<{ $isDark: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s;
  font-family: inherit;
  font-size: inherit;
  text-transform: inherit;
  letter-spacing: inherit;

  color: inherit;
  font-weight: ${(props) => (props.$isDark ? "normal" : "500")};

  &:hover {
    color: ${(props) =>
      props.$isDark
        ? "#c084fc"
        : "#7c3aed"}; /* hover:text-violet-400 : hover:text-violet-650 */
  }
`;

export const ActionsToolbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* gap-4 */
`;

export const MobileMenuTrigger = styled.button<{ $isDark: boolean }>`
  padding: 8px; /* p-2 */
  border-radius: 12px; /* rounded-xl */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.8s;

  @media (min-width: 768px) {
    display: none; /* md:hidden */
  }

  ${(props) =>
    props.$isDark
      ? css`
          border-color: #27272a; /* border-zinc-800 */
          background-color: rgba(39, 39, 42, 0.4); /* bg-zinc-900/40 */
          color: #d4d4d8; /* text-zinc-300 */
        `
      : css`
          border-color: #e4e4e7; /* border-zinc-200 */
          background-color: #f4f4f5; /* bg-zinc-100 */
          color: #3f3f46; /* text-zinc-700 */

          &:hover {
            background-color: rgba(228, 228, 230, 0.8);
          }
        `}
`;

/* MOBILE DRAWER PORTAL OVERLAY CONTAINER styled list */

export const MobileDrawerBackdrop = styled(motion.div)<{ $isDark: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 30;
  user-select: none;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px; /* gap-8 */
  text-align: center;
  transition:
    background-color 0.8s,
    border-color 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: rgba(0, 0, 0, 0.95); /* bg-black/95 */
          color: #ffffff;
        `
      : css`
          background-color: rgba(250, 248, 254, 0.95); /* bg-[#FAF8FE]/95 */
          color: #181c24;
          border-bottom: 1px solid #f5f3ff;
        `}
`;

export const MobileCabinetLogo = styled.button<{ $isDark: boolean }>`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: 30px; /* text-3xl */
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.6s;

  color: ${(props) =>
    props.$isDark
      ? "#a78bfa"
      : "#7c3aed"}; /* text-violet-400 : text-violet-600 */
`;

export const MobileDrawerNavigation = styled.nav<{ $isDark: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px; /* gap-6 */
  font-family: var(--font-mono);
  font-size: 14px; /* text-sm */
  text-transform: uppercase;
  letter-spacing: 0.2em; /* tracking-[0.2em] */
  transition: color 0.8s;

  color: ${(props) =>
    props.$isDark ? "#d4d4d8" : "#3f3f46"}; /* text-zinc-300 / text-zinc-700 */
`;

export const MobileNavButtonOption = styled.button<{ $isDark: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  transition: color 0.3s;

  color: inherit;
  font-weight: ${(props) => (props.$isDark ? "normal" : "500")};

  &:hover {
    color: ${(props) =>
      props.$isDark
        ? "#c084fc"
        : "#6d28d9"}; /* hover:text-violet-400 : hover:text-violet-650 */
  }
`;

export const MobileDrawerCloseButton = styled.button<{ $isDark: boolean }>`
  margin-top: 32px; /* mt-8 */
  padding: 10px 24px; /* py-2.5 px-6 */
  border-radius: 9999px;
  border: 1px solid;
  font-family: var(--font-mono);
  font-size: 10px; /* text-[10px] */
  letter-spacing: 0.15em; /* tracking-widest */
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          border-color: #27272a; /* border-zinc-800 */
          color: #71717a; /* text-zinc-505 */
          &:hover {
            color: #d4d4d8;
          }
        `
      : css`
          border-color: #ddd6fe; /* border-violet-200 */
          color: #4c1d95; /* text-violet-755 */
          &:hover {
            background-color: rgba(
              245,
              243,
              255,
              0.5
            ); /* hover:bg-violet-50/50 */
          }
        `}
`;

/* EDITORIAL CROWN FOOTER BLOCK AND SCROLLS styles details */

export const EditorialFooterBlock = styled.footer<{ $isDark: boolean }>`
  position: relative;
  padding: 48px 16px; /* py-12 px-4 */
  border-top: 1px solid;
  user-select: none;
  text-align: center;
  transition:
    background-color 0.8s,
    border-color 0.8s,
    color 0.6s;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px; /* md:px-8 */
  }

  ${(props) =>
    props.$isDark
      ? css`
          border-color: #181c24; /* border-zinc-900 */
          background-color: #000000;
          color: #71717a; /* text-zinc-505 */
        `
      : css`
          border-color: #f5f3ff; /* border-violet-100 */
          background-color: #faf9fc;
          color: #52525b; /* text-zinc-650 */
        `}
`;

export const FooterContainerInner = styled.div`
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px; /* gap-6 */

  @media (min-width: 768px) {
    flex-direction: row; /* md:flex-row */
  }
`;

export const FooterBrandCreditsCol = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }
`;

export const FooterBrandName = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: 18px; /* text-lg */
  letter-spacing: 0.05em; /* tracking-wider */
  transition: color 0.6s;

  color: ${(props) => (props.$isDark ? "#ffffff" : "#18181b")};
`;

export const FooterPortfolioStamp = styled.span<{ $isDark: boolean }>`
  font-size: 10px;
  font-family: var(--font-mono);
  display: block;
  margin-top: 4px; /* mt-1 */
  text-transform: uppercase;
  letter-spacing: 0.15em; /* tracking-widest */
  transition: color 0.6s;

  color: ${(props) => (props.$isDark ? "#3f3f46" : "#7c3aed")};
  font-weight: ${(props) => (props.$isDark ? "normal" : "500")};
`;

export const FooterTechnicalSpecsCol = styled.div`
  font-size: 11px;
  font-family: var(--font-mono);
  letter-spacing: 0.025em; /* tracking-wider */
  line-height: 1.5;
  & > p + p {
    margin-top: 4px;
  }
`;

export const FooterCreditsMetaSubtext = styled.p<{ $isDark: boolean }>`
  transition: color 0.6s;
  color: ${(props) => (props.$isDark ? "#3f3f46" : "#71717a")};
`;

export const FooterNavigationLinksBox = styled.div<{ $isDark: boolean }>`
  display: flex;
  gap: 16px; /* gap-4 */
  font-size: 12px;
  font-family: var(--font-mono);
  font-weight: 700;
  transition: color 0.6s;

  color: ${(props) => (props.$isDark ? "rgba(167, 139, 250, 0.7)" : "#7c3aed")};
`;

export const FooterNavSelector = styled.span<{ $isDark: boolean }>`
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.$isDark
        ? "#d8b4fe"
        : "#4c1d95"}; /* hover:text-violet-300 : hover:text-violet-800 */
  }
`;

export const ScrollToTopButton = styled(motion.button)<{ $isDark: boolean }>`
  position: fixed;
  bottom: 24px; /* bottom-6 */
  right: 24px;
  z-index: 40;
  padding: 12px; /* p-3 */
  border-radius: 12px; /* rounded-xl */
  border: 1px solid;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);

  ${(props) =>
    props.$isDark
      ? css`
          border-color: rgba(139, 92, 246, 0.2); /* border-violet-500/20 */
          background-color: rgba(9, 9, 11, 0.9); /* bg-zinc-950/90 */
          color: #a78bfa; /* text-violet-400 */

          &:hover {
            color: #ffffff;
            border-color: #a78bfa;
          }
        `
      : css`
          border-color: #ddd6fe; /* border-violet-200 */
          background-color: #ffffff;
          color: #7c3aed; /* text-violet-600 */
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.15);

          &:hover {
            color: #4c1d95; /* text-violet-850 */
            border-color: #a78bfa;
          }
        `}
`;
