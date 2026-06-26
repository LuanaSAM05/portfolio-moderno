import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const CertificatesSectionContainer = styled.section<{
  $isDark: boolean;
}>`
  position: relative;
  padding: 112px 16px;
  border-top: 1px solid;
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
          background-color: #030105;
          border-color: #09090b;
          color: #ffffff;
        `
      : css`
          background-color: #fafafe;
          border-color: #f5f3ff;
          color: #181c24;
        `}
`;

export const AmbientOrbLeft = styled.div<{ $isDark: boolean }>`
  position: absolute;
  left: 0;
  top: 30%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  background-color: ${(props) =>
    props.$isDark ? "rgba(109, 40, 217, 0.06)" : "rgba(139, 92, 246, 0.04)"};
`;

export const AmbientOrbRight = styled.div<{ $isDark: boolean }>`
  position: absolute;
  right: 0;
  bottom: 20%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  filter: blur(130px);
  pointer-events: none;
  background-color: ${(props) =>
    props.$isDark ? "rgba(147, 51, 234, 0.06)" : "rgba(168, 85, 247, 0.04)"};
`;

export const InnerContentWrapper = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
`;

/* ─── HEADER ─── */
export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 56px;
`;

export const CategoryTag = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 700;
  color: ${(props) => (props.$isDark ? "#a78bfa" : "#7c3aed")};
`;

export const SectionHeading = styled.h2<{ $isDark: boolean }>`
  font-size: 30px;
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-top: 4px;

  @media (min-width: 640px) {
    font-size: 48px;
  }

  color: ${(props) => (props.$isDark ? "#ffffff" : "#09090b")};
`;

export const GlowStyledText = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
  text-shadow: ${(props) =>
    props.$isDark
      ? "0 0 20px rgba(167, 139, 250, 0.4)"
      : "0 0 20px rgba(109, 40, 217, 0.2)"};
  color: ${(props) => (props.$isDark ? "rgba(167, 139, 250, 0.9)" : "#7c3aed")};
`;

export const UnderlineDivider = styled.div`
  height: 3px;
  width: 96px;

  margin: 15px auto 5px;

  background: linear-gradient(
    to right,
    transparent,
    #8b5cf6,
    transparent
  );
`;

export const HeaderParagraph = styled.p<{ $isDark: boolean }>`
  font-size: 14px;
  max-width: 36rem;
  margin: 16px auto 0;
  font-weight: 300;
  line-height: 1.6;
  color: ${(props) => (props.$isDark ? "#a1a1aa" : "#52525b")};
`;

/* ─── CROWN JEWEL — card destaque full-width ─── */
export const CrownJewelWrapper = styled.div`
  margin-bottom: 48px;
`;

export const CrownJewelCard = styled(motion.div)<{ $isDark: boolean }>`
  border-radius: 20px;
  border: 1px solid;
  padding: 28px 32px;
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }

  ${(props) =>
    props.$isDark
      ? css`
          background: linear-gradient(
            135deg,
            rgba(76, 29, 149, 0.15) 0%,
            rgba(9, 9, 11, 0.8) 60%
          );
          border-color: rgba(217, 119, 6, 0.35);
          box-shadow:
            0 0 60px rgba(217, 119, 6, 0.08),
            inset 0 1px 0 rgba(217, 119, 6, 0.1);
        `
      : css`
          background: linear-gradient(135deg, #fffbeb 0%, #fefce8 60%);
          border-color: rgba(217, 119, 6, 0.3);
          box-shadow: 0 8px 40px rgba(217, 119, 6, 0.06);
        `}
`;

export const CrownJewelGlow = styled.div`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(217, 119, 6, 0.12) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

export const CrownJewelBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(217, 119, 6, 0.4);
  background: rgba(217, 119, 6, 0.08);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #d97706;
  font-weight: 700;
  margin-bottom: 12px;
  width: fit-content;
`;

export const CrownJewelLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CrownJewelTitle = styled.h3<{ $isDark: boolean }>`
  font-family: var(--font-sans);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: ${(props) => (props.$isDark ? "#ffffff" : "#09090b")};

  @media (min-width: 640px) {
    font-size: 26px;
  }
`;

export const CrownJewelMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
`;

export const CrownMetaItem = styled.span<{ $golden?: boolean }>`
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: ${(props) => (props.$golden ? "#d97706" : "#71717a")};
`;

export const CrownMetaDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #d97706;
  flex-shrink: 0;
`;

export const CrownJewelDescription = styled.p<{ $isDark: boolean }>`
  font-size: 14px;
  line-height: 1.65;
  font-weight: 300;
  margin-top: 16px;
  color: ${(props) => (props.$isDark ? "#a1a1aa" : "#52525b")};
`;

export const CrownJewelTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
`;

export const CrownTag = styled.span`
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px solid rgba(217, 119, 6, 0.25);
  background: rgba(217, 119, 6, 0.06);
  color: #d97706;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const CrownJewelStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  font-family: var(--font-sans);
  font-size: 13px;
  color: #d97706;
  font-weight: 500;
`;

export const CrownJewelRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 8px;
`;

export const CrownSealCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid rgba(217, 119, 6, 0.4);
  background: radial-gradient(
    circle,
    rgba(217, 119, 6, 0.1) 0%,
    transparent 70%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d97706;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const CrownSealText = styled.div`
  font-family: var(--font-mono);
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #71717a;
  text-align: center;
`;

export const CrownFooter = styled.div<{ $isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(217, 119, 6, 0.15);
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${(props) => (props.$isDark ? "#52525b" : "#a1a1aa")};
`;

/* ─── PILLS DE FILTRO ─── */
export const PillsGroupRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const CategoryFilterPill = styled.button<{
  $isActive: boolean;
  $isDark: boolean;
}>`
  padding: 8px 18px;
  border-radius: 9999px;
  font-size: 11px;
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
            &:hover {
              background-color: #f5f3ff;
              color: #1e1b4b;
              border-color: #c084fc;
            }
          `}
`;

/* ─── GRID: 3 cards por linha ─── */
export const CertificatesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }
`;

export const CertificateCard = styled(motion.div)<{ $isDark: boolean }>`
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid;
  overflow: hidden;
  cursor: pointer;
  min-height: 160px;
  transition:
    background-color 0.8s,
    border-color 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: rgba(139, 92, 246, 0.1);
          background-color: rgba(9, 9, 11, 0.4);

          &:hover {
            border-color: rgba(139, 92, 246, 0.25);
            background-color: rgba(9, 9, 11, 0.6);
          }
        `
      : css`
          background: linear-gradient(135deg, #3b0764 0%, #4c1d95 60%, #5b21b6 100%);
          border-color: rgba(167, 139, 250, 0.25);
          box-shadow: 0 4px 20px rgba(76, 29, 149, 0.15);
          color: #ffffff;

          &:hover {
            border-color: rgba(192, 132, 252, 0.5);
            box-shadow: 0 8px 32px rgba(76, 29, 149, 0.28);
          }
        `}
`;

export const HoverRadialGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 0%,
    rgba(139, 92, 246, 0.06),
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;

  ${CertificateCard}:hover & {
    opacity: 1;
  }
`;

export const CardHeaderMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const IssuerStampCode = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: ${(props) => (props.$isDark ? "#a78bfa" : "#7c3aed")};
`;

export const DurationTag = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 9px;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-color: ${(props) =>
    props.$isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.2)"};
  color: ${(props) => (props.$isDark ? "#c084fc" : "#e9d5ff")};
  background: ${(props) =>
    props.$isDark ? "rgba(76, 29, 149, 0.15)" : "rgba(255, 255, 255, 0.1)"};
`;

export const CertificateTitleH3 = styled.h3<{ $isDark: boolean }>`
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 8px;
  color: #ffffff;
`;

export const CertificateCodeInfo = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  padding-top: 10px;
  border-top: 1px solid;
  border-color: ${(props) =>
    props.$isDark ? "rgba(39, 39, 42, 0.6)" : "rgba(255, 255, 255, 0.15)"};
  color: ${(props) => (props.$isDark ? "#52525b" : "rgba(192, 132, 252, 0.7)")};
`;

export const VerifyBadgeLink = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 14px;
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  padding: 9px 14px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${(props) =>
    props.$isDark ? "rgba(139, 92, 246, 0.25)" : "rgba(255, 255, 255, 0.2)"};
  color: ${(props) => (props.$isDark ? "#a78bfa" : "#e9d5ff")};
  background: transparent;

  &:hover {
    border-color: ${(props) =>
      props.$isDark ? "rgba(139, 92, 246, 0.5)" : "rgba(255, 255, 255, 0.35)"};
    color: ${(props) => (props.$isDark ? "#c4b5fd" : "#ffffff")};
    background: ${(props) =>
      props.$isDark ? "rgba(139, 92, 246, 0.06)" : "rgba(255, 255, 255, 0.08)"};
  }
`;

/* ─── LIGHTBOX ─── */
export const LightboxBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const LightboxGridContent = styled(motion.div)<{ $isDark: boolean }>`
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid;
  max-height: 90vh;
  overflow-y: auto;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #0a090f;
          border-color: rgba(139, 92, 246, 0.15);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
        `
      : css`
          background-color: #ffffff;
          border-color: rgba(139, 92, 246, 0.1);
          box-shadow: 0 25px 80px rgba(139, 92, 246, 0.08);
        `}
`;

export const LightboxVisualFrame = styled.div<{ $isDark: boolean }>`
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$isDark
      ? "linear-gradient(135deg, rgba(76, 29, 149, 0.2) 0%, rgba(9, 9, 11, 0.9) 100%)"
      : "linear-gradient(135deg, #f5f3ff 0%, #faf5ff 100%)"};
  border-right: 1px solid;
  border-color: ${(props) =>
    props.$isDark ? "rgba(139, 92, 246, 0.1)" : "#f5f3ff"};
`;

export const GoldenCertificatePlate = styled.div<{ $isDark: boolean }>`
  width: 100%;
  max-width: 280px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(217, 119, 6, 0.3);
  background: ${(props) =>
    props.$isDark
      ? "linear-gradient(135deg, rgba(217, 119, 6, 0.06) 0%, rgba(9, 9, 11, 0.9) 100%)"
      : "linear-gradient(135deg, #fffbeb 0%, #fefce8 100%)"};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PlateFiligree = styled.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 20px,
    rgba(217, 119, 6, 0.02) 20px,
    rgba(217, 119, 6, 0.02) 21px
  );
  pointer-events: none;
`;

export const SealSymbol = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(217, 119, 6, 0.4);
  background: rgba(217, 119, 6, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d97706;
  align-self: flex-end;
`;

export const LightboxDetailsRail = styled.div<{ $isDark: boolean }>`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  background-color: ${(props) => (props.$isDark ? "#0a090f" : "#ffffff")};
`;

export const LightboxIssuerTag = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: ${(props) => (props.$isDark ? "#a78bfa" : "#7c3aed")};
`;

export const LightboxH3Title = styled.h3<{ $isDark: boolean }>`
  font-size: 20px;
  font-weight: 700;
  font-family: var(--font-sans);
  line-height: 1.3;
  margin-top: 8px;
  color: ${(props) => (props.$isDark ? "#ffffff" : "#09090b")};
`;

export const LightboxNarrativeText = styled.p<{ $isDark: boolean }>`
  font-size: 13px;
  line-height: 1.6;
  font-weight: 300;
  margin-top: 12px;
  color: ${(props) => (props.$isDark ? "#a1a1aa" : "#52525b")};
`;

export const LightboxMetaSheet = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MetadataSheetRow = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 8px;
  background: ${(props) =>
    props.$isDark ? "rgba(255,255,255,0.02)" : "#f9f9fb"};
  border: 1px solid
    ${(props) => (props.$isDark ? "rgba(39,39,42,0.6)" : "#f4f4f5")};
`;

export const LabelWithIcon = styled.span<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(props) => (props.$isDark ? "#71717a" : "#a1a1aa")};
`;

export const ValueHighlightLabel = styled.span<{
  $isDark: boolean;
  $purple?: boolean;
}>`
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${(props) =>
    props.$purple ? "#a78bfa" : props.$isDark ? "#ffffff" : "#09090b"};
`;

export const ActionsPillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LightboxVerifyPrimaryBtn = styled.button`
  width: 100%;
  padding: 12px 20px;
  border-radius: 10px;
  background: linear-gradient(to right, #7c3aed, #9333ea);
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(to right, #8b5cf6, #a855f7);
    transform: translateY(-1px);
  }
`;

export const LightboxCloseBtn = styled.button<{ $isDark: boolean }>`
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 12px;
  font-family: var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.3s;
  background: transparent;

  border-color: ${(props) => (props.$isDark ? "#27272a" : "#e4e4e7")};
  color: ${(props) => (props.$isDark ? "#71717a" : "#52525b")};

  &:hover {
    border-color: ${(props) => (props.$isDark ? "#3f3f46" : "#d4d4d8")};
    color: ${(props) => (props.$isDark ? "#a1a1aa" : "#27272a")};
  }
`;

/* ─── ACERVO HEADER + SEARCH ─── */
export const AcervoHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;

`;

export const AcervoTitle = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${(props) => (props.$isDark ? "#ffffff" : "#09090b")};
  margin-top: 50px;

  svg {
    color: ${(props) => (props.$isDark ? "#a78bfa" : "#7c3aed")};
  }
`;

export const SearchBarWrapper = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid;
  min-width: 260px;
  margin-top: 50px;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  border-color: ${(props) =>
    props.$isDark ? "rgba(139, 92, 246, 0.2)" : "#ddd6fe"};
  background: ${(props) =>
    props.$isDark ? "rgba(255,255,255,0.02)" : "#ffffff"};

  &:focus-within {
    border-color: ${(props) =>
      props.$isDark ? "rgba(139, 92, 246, 0.5)" : "#8b5cf6"};
    box-shadow: ${(props) =>
      props.$isDark
        ? "0 0 0 3px rgba(139, 92, 246, 0.1)"
        : "0 0 0 3px rgba(139, 92, 246, 0.08)"};
  }

  svg {
    flex-shrink: 0;
    color: ${(props) => (props.$isDark ? "#52525b" : "#a1a1aa")};
  }
`;

export const SearchInput = styled.input<{ $isDark: boolean }>`
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.05em;
  width: 100%;
  color: ${(props) => (props.$isDark ? "#ffffff" : "#09090b")};

  &::placeholder {
    color: ${(props) => (props.$isDark ? "#52525b" : "#a1a1aa")};
  }
`;

/* ─── SKILL TAGS ON CARDS ─── */
// Each category gets a distinct color palette that harmonizes with the dark purple/violet site
export const CardSkillTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
  margin-bottom: 4px;
`;

export const CardSkillTag = styled.span<{
  $color: "violet" | "cyan" | "amber" | "emerald" | "rose" | "indigo";
}>`
  font-family: var(--font-mono);
  font-size: 9px;
  padding: 3px 8px;
  border-radius: 5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  ${(props) => {
    const map = {
      violet: css`
        background: rgba(139, 92, 246, 0.12);
        color: #c084fc;
        border: 1px solid rgba(139, 92, 246, 0.2);
      `,
      cyan: css`
        background: rgba(6, 182, 212, 0.1);
        color: #22d3ee;
        border: 1px solid rgba(6, 182, 212, 0.2);
      `,
      amber: css`
        background: rgba(217, 119, 6, 0.1);
        color: #fbbf24;
        border: 1px solid rgba(217, 119, 6, 0.2);
      `,
      emerald: css`
        background: rgba(16, 185, 129, 0.1);
        color: #34d399;
        border: 1px solid rgba(16, 185, 129, 0.2);
      `,
      rose: css`
        background: rgba(244, 63, 94, 0.1);
        color: #fb7185;
        border: 1px solid rgba(244, 63, 94, 0.2);
      `,
      indigo: css`
        background: rgba(99, 102, 241, 0.12);
        color: #818cf8;
        border: 1px solid rgba(99, 102, 241, 0.2);
      `,
    };
    return map[props.$color];
  }}
`;
/* ════════════════════════════════════════════════
   LIGHTBOX — Imagem real, sem coluna de detalhes
════════════════════════════════════════════════ */

export const LightboxImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 900px;
  width: 95vw;
  padding: 12px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const LightboxImageEl = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 12px;
  display: block;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6);
`;

export const PendingCertPlaceholder = styled.div<{ $isDark: boolean }>`
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 12px;
  border: 2px dashed;
  border-color: ${(props) =>
    props.$isDark ? "rgba(167, 139, 250, 0.3)" : "rgba(109, 40, 217, 0.25)"};
  background: ${(props) =>
    props.$isDark ? "rgba(76, 29, 149, 0.08)" : "rgba(109, 40, 217, 0.04)"};
`;

export const PendingCertIcon = styled.div`
  color: #a78bfa;
  opacity: 0.5;
`;

export const PendingCertText = styled.p<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${(props) => (props.$isDark ? "#71717a" : "#9ca3af")};
`;