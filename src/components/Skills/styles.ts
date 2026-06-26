import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const SkillsSectionContainer = styled.section<{ $isDark: boolean }>`
  position: relative;
  padding: 112px 16px;
  border-top: 1px solid;
  transition:
    background-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
    border-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
    color 0.6s cubic-bezier(0.76, 0, 0.24, 1);

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #050308;
          border-color: #09090b;
          color: #ffffff;
        `
      : css`
          background: linear-gradient(to bottom, #faf9fc, #faf8fe);
          border-color: #f5f3ff;
          color: #181c24;
        `}
`;

export const AmbientFlareRight = styled.div<{ $isDark: boolean }>`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 384px;
  height: 384px;
  border-radius: 50%;
  filter: blur(150px);
  pointer-events: none;
  transition: opacity 0.7s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: rgba(124, 58, 237, 0.05);
          opacity: 1;
        `
      : css`
          background-color: rgba(139, 92, 246, 0.05);
          opacity: 0.5;
        `}
`;

export const AmbientFlareLeft = styled.div<{ $isDark: boolean }>`
  position: absolute;
  left: 33.333%;
  top: 40px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  transition: opacity 0.7s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: rgba(147, 51, 234, 0.05);
          opacity: 1;
        `
      : css`
          background-color: rgba(168, 85, 247, 0.05);
          opacity: 0.5;
        `}
`;

export const SectionContentWrapper = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionHeaderBlock = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

export const HeaderTag = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 700;

  color: ${(props) => (props.$isDark ? "#a78bfa" : "#7c3aed")};
`;

export const HeaderH2 = styled.h2<{ $isDark: boolean }>`
  font-size: 30px;
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-top: 4px;

  @media (min-width: 640px) {
    font-size: 48px;
  }

  color: ${(props) => (props.$isDark ? "#ffffff" : "#18181b")};
`;

export const HeaderGlowText = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
  margin-left: 15px;

  text-shadow: ${(props) =>
    props.$isDark
      ? "0 0 20px rgba(167, 139, 250, 0.4)"
      : "0 0 20px rgba(109, 40, 217, 0.2)"};
  color: ${(props) => (props.$isDark ? "rgba(167, 139, 250, 0.9)" : "#7c3aed")};
`;

export const HeaderDescription = styled.p<{ $isDark: boolean }>`
  font-size: 14px;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  margin-top: 12px;
  line-height: 1.5;

  color: ${(props) => (props.$isDark ? "#a1a1aa" : "#4b5563")};
`;

export const HeaderGlowDivider = styled.div`
  height: 3px;
  width: 96px;
  background: linear-gradient(to right, transparent, #8b5cf6, transparent);
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
`;

export const FilterPillsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`;

export const PillButton = styled.button<{
  $isActive: boolean;
  $isDark: boolean;
}>`
  padding: 10px 20px;
  border-radius: 9999px;
  font-size: 12px;
  font-family: var(--font-mono);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s;
  border: 1px solid;
  cursor: pointer;

  ${(props) =>
    props.$isActive
      ? css`
          background: linear-gradient(to right, #7c3aed, #9333ea);
          border-color: #8b5cf6;
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.25);
        `
      : props.$isDark
        ? css`
            background-color: rgba(24, 24, 27, 0.5);
            border-color: #27272a;
            color: #a1a1aa;
            &:hover {
              color: #ffffff;
              border-color: #3f3f46;
            }
          `
        : css`
            background-color: rgba(245, 243, 255, 0.5);
            border-color: #f5f3ff;
            color: #4c1d95;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            &:hover {
              background-color: #f5f3ff;
              color: #1e1b4b;
              border-color: #c084fc;
            }
          `}
`;

/* ─── GRID: sempre 3 colunas lado a lado em telas médias+ ─── */
export const CategoriesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

export const CategoryCard = styled(motion.div)<{ $isDark: boolean }>`
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid;
  overflow: hidden;
  transition:
    background-color 0.8s,
    border-color 0.8s,
    color 0.6s;
  /* Garante altura mínima uniforme para os 3 cards */
  min-height: 400px;

  ${(props) =>
    props.$isDark
      ? css`
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: rgba(139, 92, 246, 0.1);
          background-color: rgba(9, 9, 11, 0.4);
          color: #ffffff;

          &:hover {
            border-color: rgba(139, 92, 246, 0.2);
          }
        `
      : css`
          background: linear-gradient(135deg, #3b0764 0%, #4c1d95 60%, #5b21b6 100%);
          border-color: rgba(167, 139, 250, 0.25);
          color: #ffffff;
          box-shadow: 0 12px 40px rgba(76, 29, 149, 0.2);

          &:hover {
            border-color: rgba(192, 132, 252, 0.5);
            box-shadow: 0 16px 48px rgba(76, 29, 149, 0.3);
          }
        `}
`;

export const CardGlowOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom right,
    rgba(139, 92, 246, 0.05),
    transparent
  );
  opacity: 0;
  transition: opacity 0.5s;
  border-radius: 16px;
  pointer-events: none;

  ${CategoryCard}:hover & {
    opacity: 1;
  }
`;

export const CardHeaderRow = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  border-b: 1px solid;
  padding-bottom: 16px;
  transition: border-color 0.8s;

  border-color: ${(props) =>
    props.$isDark ? "rgba(39, 39, 42, 0.8)" : "rgba(192, 132, 252, 0.25)"};
`;

export const CardIconWrapper = styled.div<{ $isDark: boolean }>`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.8s;

  background-color: ${(props) =>
    props.$isDark ? "rgba(76, 29, 149, 0.35)" : "rgba(255,255,255,0.12)"};
  border-color: ${(props) =>
    props.$isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(255,255,255,0.25)"};
`;

export const CardTitleH3 = styled.h3<{ $isDark: boolean }>`
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: color 0.6s;
  line-height: 1.3;

  @media (min-width: 1024px) {
    font-size: 16px;
  }

  color: ${(props) => (props.$isDark ? "#e4e4e7" : "#f5f3ff")};
`;

export const SkillsWrapper = styled.div`
  & > * + * {
    margin-top: 20px;
  }
`;

export const SkillRow = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
`;

export const SkillLabelRow = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
  margin-bottom: 6px;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 0.8s;

  color: ${(props) => (props.$isDark ? "#d4d4d8" : "#e9d5ff")};
`;

export const SkillPercentageValue = styled.span`
  color: #c084fc;
`;

export const SkillBadgeWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ProgressBarTrack = styled.div<{ $isDark: boolean }>`
  height: 6px;
  width: 100%;
  border-radius: 9999px;
  overflow: hidden;
  border: 1px solid;
  transition: all 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #09090b;
          border-color: #27272a;
        `
      : css`
          background-color: rgba(0, 0, 0, 0.25);
          border-color: rgba(255, 255, 255, 0.1);
        `}
`;

export const ProgressBarFiller = styled(motion.div)`
  height: 100%;
  border-radius: 9999px;
  background: linear-gradient(to right, #7c3aed, #a855f7);
`;

export const ApprovedStampText = styled.div<{ $isDark: boolean }>`
  margin-top: 28px;
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
  font-family: var(--font-mono);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  padding-right: 4px;
  transition: color 0.6s;

  color: ${(props) => (props.$isDark ? "#71717a" : "rgba(233, 213, 255, 0.4)")};
`;