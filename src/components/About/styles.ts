import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const AboutSectionContainer = styled.section<{ $isDark: boolean }>`
  position: relative;
  padding: 112px 16px;
  overflow: hidden;
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
          background-color: #000000;
          color: #f4f4f5;
        `
      : css`
          background: linear-gradient(160deg, #f5f0ff 0%, #faf8ff 50%, #f0ebff 100%);
          color: #27272a;
        `}
`;

export const DecorativeOrbRight = styled.div<{ $isDark: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  width: 384px;
  height: 384px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  transition: all 0.7s;

  background-color: ${(props) =>
    props.$isDark ? "rgba(109, 40, 217, 0.1)" : "rgba(139, 92, 246, 0.05)"};
`;

export const DecorativeOrbLeft = styled.div<{ $isDark: boolean }>`
  position: absolute;
  left: 40px;
  bottom: 0;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  transition: all 0.7s;

  background-color: ${(props) =>
    props.$isDark ? "rgba(147, 51, 234, 0.1)" : "rgba(168, 85, 247, 0.05)"};
`;

/* ─── GRID PRINCIPAL: texto à esquerda, foto à direita ─── */
export const AboutGrid = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 64px;
  }
`;

/* Coluna direita (foto): ocupa 38% do espaço */
export const LeftColumnFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  flex-shrink: 0;
  width: 100%;

  @media (min-width: 1024px) {
    width: 38%;
  }
`;

export const PictureFrame = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 639px) {
    max-width: 340px;
    margin: 0 auto;
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const PictureFrameInner = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.7s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PictureGradientOverlay = styled.div`
  position: absolute;
  inset: 0;
`;

/* Card com nome e role — agora fora da foto, no BelowPhotoRow */
export const FrameMetadataOverlay = styled.div<{ $isDark?: boolean }>`
  flex: 1;
  padding: 14px 16px;
  border-radius: 12px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background-color: ${(props) => props.$isDark === false
    ? 'linear-gradient(135deg, #3b0764 0%, #4c1d95 100%)'
    : 'rgba(9, 9, 11, 0.82)'};
  background: ${(props) => props.$isDark === false
    ? 'linear-gradient(135deg, #3b0764 0%, #4c1d95 100%)'
    : 'rgba(9, 9, 11, 0.82)'};
  border: 1px solid ${(props) => props.$isDark === false
    ? 'rgba(167, 139, 250, 0.3)'
    : 'rgba(255, 255, 255, 0.05)'};
`;

export const OverlayNameText = styled.p`
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 13px;
  color: #f4f4f5;
`;

export const OverlayRoleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  color: #a78bfa;
`;

export const StatusIndicatorCircle = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #34d399;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const FrameOuterBorderDecoration = styled.div`
  position: absolute;
  inset: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  pointer-events: none;
  transition: all 0.5s;

  ${PictureFrame}:hover & {
    inset: 4px;
    border-color: rgba(139, 92, 246, 0.2);
  }
`;

export const PictureBackGlowCard = styled.div`
  position: absolute;
  bottom: 80px;
  left: -24px;
  width: 128px;
  height: 128px;
  border-radius: 12px;
  background-color: rgba(124, 58, 237, 0.1);
  filter: blur(24px);
  z-index: -10;
  pointer-events: none;
`;

/* BelowPhotoRow: flex row abaixo da foto com gap */
export const BelowPhotoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 639px) {
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

/* Card de horário local — agora inline no BelowPhotoRow */
export const LocalTimeStickyCard = styled(motion.div)<{ $isDark: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  border-radius: 12px;
  text-align: center;
  gap: 4px;
  flex-shrink: 0;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid;
  transition:
    background-color 0.8s,
    border-color 0.8s,
    color 0.6s;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  ${(props) =>
    props.$isDark
      ? css`
          border-color: rgba(167, 139, 250, 0.2);
          background-color: rgba(24, 24, 27, 0.4);
          color: #ffffff;
        `
      : css`
          border-color: rgba(167, 139, 250, 0.35);
          background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
          color: #f5f3ff;
          box-shadow: 0 8px 24px rgba(76, 29, 149, 0.3);
        `}
`;

export const LocalTimeLabel = styled.span`
  color: #a1a1aa;
  font-size: 9px;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const LocalTimeClockText = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #ffffff;
`;

export const LocalTimeUtcLabel = styled.span`
  font-size: 9px;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

/* Coluna esquerda (texto): ocupa o restante do espaço (62%) */
export const RightColumnBioDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    flex: 1;
    min-width: 0;
  }
`;

export const NarrativeBioHeader = styled.div`
  margin-bottom: 32px;
`;

export const NarrativeTagline = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  transition: color 0.6s;

  ${(props) =>
    props.$isDark
      ? css`
          color: #a78bfa;
        `
      : css`
          color: #6d28d9;
          font-weight: 700;
        `}
`;

export const NarrativeH2 = styled.h2<{ $isDark: boolean }>`
  font-size: 28px;
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-top: 9px;
  line-height: 1.2;
  transition: color 0.6s;

  @media (min-width: 640px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 42px;
  }

  color: ${(props) => (props.$isDark ? "#ffffff" : "#09090b")};
`;

export const NarrativeGlowText = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
  transition: color 0.6s;

  text-shadow: ${(props) =>
    props.$isDark
      ? "0 0 20px rgba(167, 139, 250, 0.4)"
      : "0 0 20px rgba(109, 40, 217, 0.2)"};

  color: ${(props) => (props.$isDark ? "rgba(167, 139, 250, 0.9)" : "#7c3aed")};
`;

export const HorizontalGlowDivider = styled.div<{ $isDark: boolean }>`
  height: 2px;
  width: 96px;
  margin-top: 16px;

  background: ${(props) =>
    props.$isDark
      ? "linear-gradient(to right, #8b5cf6, transparent)"
      : "linear-gradient(to right, #7c3aed, transparent)"};
`;

export const EditorialNarrativeText = styled.div<{ $isDark: boolean }>`
  font-family: var(--font-sans);
  font-weight: 300;
  line-height: 1.625;
  font-size: 15px;
  transition: color 0.6s;

  & > * + * {
    margin-top: 20px;
  }

  color: ${(props) => (props.$isDark ? "#d4d4d8" : "#3f3f46")};
`;

export const StrongText = styled.strong<{
  $isDark: boolean;
  $purple?: boolean;
}>`
  font-weight: 600;

  ${(props) => {
    if (props.$purple) {
      return props.$isDark
        ? css`
            color: #c084fc;
          `
        : css`
            color: #6d28d9;
          `;
    }
    return props.$isDark
      ? css`
          color: #ffffff;
        `
      : css`
          color: #09090b;
        `;
  }}
`;

export const CoreValuesGrid = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CoreValueCell = styled.div`
  display: flex;
  gap: 14px;
  align-items: start;
`;

export const ValueIconBox = styled.div<{ $isDark: boolean }>`
  padding: 10px;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  transition: all 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: rgba(76, 29, 149, 0.4);
          border-color: rgba(139, 92, 246, 0.2);
          color: #a78bfa;
        `
      : css`
          background: linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%);
          border-color: rgba(139, 92, 246, 0.4);
          color: #e9d5ff;
          box-shadow: 0 4px 12px rgba(76, 29, 149, 0.25);
        `}
`;

export const ValueHeading = styled.h4<{ $isDark: boolean }>`
  font-size: 13px;
  font-weight: 600;
  font-family: var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.6s;

  color: ${(props) => (props.$isDark ? "#ffffff" : "#1e1b4b")};
`;

export const ValueTextDescription = styled.p<{ $isDark: boolean }>`
  font-size: 12px;
  margin-top: 4px;
  transition: color 0.8s;

  color: ${(props) => (props.$isDark ? "#a1a1aa" : "#52525b")};
`;