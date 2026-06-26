import styled, { css } from 'styled-components';
import { motion } from 'motion/react';

export const ContactSectionContainer = styled.section<{ $isDark: boolean }>`
  position: relative;
  padding: 112px 16px;
  border-top: 1px solid;
  transition: background-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
              border-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
              color 0.6s cubic-bezier(0.76, 0, 0.24, 1);

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  ${props => props.$isDark
    ? css`
        background-color: #030105;
        border-color: #09090b;
        color: #ffffff;
      `
    : css`
        background-color: #FCFAFF;
        border-color: #f5f3ff;
        color: #181c24;
      `}
`;

export const ContactGlowOrbRight = styled.div<{ $isDark: boolean }>`
  position: absolute;
  right: 40px;
  top: 25%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  filter: blur(130px);
  pointer-events: none;
  transition: all 0.7s;
  background-color: ${props => props.$isDark ? 'rgba(124, 58, 237, 0.05)' : 'rgba(139, 92, 246, 0.03)'};
`;

export const ContactGlowOrbLeft = styled.div<{ $isDark: boolean }>`
  position: absolute;
  left: 80px;
  bottom: 40px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(110px);
  pointer-events: none;
  transition: all 0.7s;
  background-color: ${props => props.$isDark ? 'rgba(147, 51, 234, 0.05)' : 'rgba(168, 85, 247, 0.03)'};
`;

export const CenteredHeaderBlock = styled.div`
  max-width: 42rem;
  margin: 0 auto 56px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const ContactGridContainer = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: stretch;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1.25fr;
    gap: 40px;
  }
`;

export const LinksCardPanel = styled.div<{ $isDark: boolean }>`
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border: 1px solid;
  height: 100%;
  justify-content: center;
  transition: background-color 0.8s, border-color 0.8s;

  @media (min-width: 768px) {
    padding: 32px;
  }

  ${props => props.$isDark
    ? css`
        background: rgba(255, 255, 255, 0.02);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-color: rgba(139, 92, 246, 0.1);
        background-color: rgba(9, 9, 11, 0.4);
      `
    : css`
        background-color: rgba(255, 255, 255, 0.95);
        border-color: rgba(139, 92, 246, 0.08);
        box-shadow: 0 12px 45px rgba(139, 92, 246, 0.03);
      `}
`;

export const LinksPanelTitle = styled.h3<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 700;
  margin: 0 0 4px 4px;
  color: ${props => props.$isDark ? '#a78bfa' : '#7c3aed'};
`;

export const TagLabel = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 700;
  color: ${props => props.$isDark ? '#a78bfa' : '#7c3aed'};
`;

export const H2TitleText = styled.h2<{ $isDark: boolean }>`
  font-size: 28px;
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-top: 4px;
  line-height: 1.2;

  @media (min-width: 640px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }

  color: ${props => props.$isDark ? '#ffffff' : '#09090b'};
`;

export const TitleGlowTextItalic = styled.span<{ $isDark: boolean }>`
  margin-left: 10px;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
  text-shadow: ${props => props.$isDark ? '0 0 20px rgba(167, 139, 250, 0.4)' : '0 0 20px rgba(109, 40, 217, 0.2)'};
  color: ${props => props.$isDark ? 'rgba(167, 139, 250, 0.9)' : '#7c3aed'};
`;

export const SegmentDividerLine = styled.div<{ $isDark: boolean }>`
  height: 3px;
  width: 96px;
  margin: 5px auto 0;
  background: ${props => props.$isDark
    ? 'linear-gradient(to right, transparent, #8b5cf6, transparent)'
    : 'linear-gradient(to right, transparent, #7c3aed, transparent)'};
`;

export const InfoNarrativeIntro = styled.p<{ $isDark: boolean }>`
  font-size: 15px;
  line-height: 1.65;
  font-weight: 300;
  margin-top: 5px;
  max-width: 38rem;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.$isDark ? '#a1a1aa' : '#52525b'};
`;

export const LinkRowsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

/* ─── Ícone container: já nasce com a cor de marca ─── */
export const ActionIconContainerLeft = styled.div<{
  $isDark: boolean;
  $brandColor: string;
}>`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  background-color: ${props => `${props.$brandColor}18`};
  border-color: ${props => `${props.$brandColor}40`};
  color: ${props => props.$brandColor};
`;

/* ─── Texto valor: muda de cor no hover da row ─── */
export const RowActualTextValue = styled.span<{
  $isDark: boolean;
  $brandColor: string;
}>`
  font-size: 14px;
  font-weight: 600;
  font-family: var(--font-sans);
  letter-spacing: 0.025em;
  transition: color 0.3s ease;
  color: ${props => props.$isDark ? '#ffffff' : '#09090b'};
`;

/* ─── Row: no hover, propaga a cor da marca para filhos via CSS vars ─── */
export const InfoCardRow = styled.a<{
  $isDark: boolean;
  $brandColor: string;
  $isClickable: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid;
  text-decoration: none;
  cursor: ${props => props.$isClickable ? 'pointer' : 'default'};
  transition: border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  ${props => props.$isDark
    ? css`
        background-color: rgba(9, 9, 11, 0.4);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-color: rgba(139, 92, 246, 0.1);
      `
    : css`
        background-color: #ffffff;
        border-color: rgba(139, 92, 246, 0.08);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
      `}

  ${props => props.$isClickable && css`
    &:hover {
      border-color: ${props.$brandColor};
      transform: translateX(4px);
      box-shadow: 0 4px 20px ${props.$brandColor}22;

      ${ActionIconContainerLeft} {
        background-color: ${props.$brandColor}28;
        border-color: ${props.$brandColor}66;
        color: ${props.$brandColor};
      }

      ${RowActualTextValue} {
        color: ${props.$brandColor};
      }
    }
  `}
`;

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const RowSuperMeta = styled.span`
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #71717a;
`;

/* ════════════════════════════════════════════════
   CARD WHATSAPP — coluna direita
════════════════════════════════════════════════ */

export const WhatsAppCardPanel = styled.div<{ $isDark: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid;
  padding: 48px 40px;
  height: 100%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  transition: background-color 0.8s, border-color 0.8s;

  ${props => props.$isDark
    ? css`
        background: rgba(9, 9, 11, 0.5);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-color: rgba(37, 211, 102, 0.15);
        box-shadow: 0 0 60px rgba(37, 211, 102, 0.04) inset;
      `
    : css`
        background-color: rgba(255, 255, 255, 0.97);
        border-color: rgba(37, 211, 102, 0.2);
        box-shadow: 0 12px 48px rgba(37, 211, 102, 0.06);
      `}
`;

export const WhatsAppGlowOrb = styled.div`
  position: absolute;
  bottom: -60px;
  right: -60px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(37, 211, 102, 0.12) 0%, transparent 70%);
  pointer-events: none;
`;

export const WhatsAppCardEyebrow = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 700;
  color: #25D366;
`;

export const WhatsAppCardTitle = styled.h3<{ $isDark: boolean }>`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
  font-size: 36px;
  line-height: 1.2;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 42px;
  }

  color: ${props => props.$isDark ? '#ffffff' : '#09090b'};
`;

export const WhatsAppCardSubtitle = styled.p<{ $isDark: boolean }>`
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.7;
  font-weight: 300;
  margin: 0;
  color: ${props => props.$isDark ? '#a1a1aa' : '#52525b'};
`;

export const WhatsAppCardButton = styled(motion.button)<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 32px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-top: 8px;
  transition: box-shadow 0.3s ease;

  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  box-shadow: 0 4px 24px rgba(37, 211, 102, 0.3);

  &:hover {
    box-shadow: 0 8px 32px rgba(37, 211, 102, 0.45);
  }
`;