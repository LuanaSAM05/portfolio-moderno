import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const ProjectsSectionContainer = styled.section<{ $isDark: boolean }>`
  position: relative;
  padding: 112px 16px; /* py-28 px-4 */
  overflow: hidden;
  transition:
    background-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
    border-color 0.8s cubic-bezier(0.76, 0, 0.24, 1),
    color 0.6s cubic-bezier(0.76, 0, 0.24, 1);

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px; /* md:px-8 */
  }

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #000000;
          color: #f4f4f5; /* text-zinc-100 */
        `
      : css`
          background-color: #fcfaff;
          color: #181c24; /* text-zinc-900 */
        `}
`;

export const ProjectsSpotlightLeft = styled.div<{ $isDark: boolean }>`
  position: absolute;
  left: 25%;
  top: 0;
  width: 384px; /* w-96 */
  height: 384px;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  transition: opacity 0.7s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: rgba(124, 58, 237, 0.05); /* bg-violet-605/5 */
          opacity: 1;
        `
      : css`
          background-color: rgba(139, 92, 246, 0.05); /* bg-violet-500/5 */
          opacity: 0.6;
        `}
`;

export const ProjectsSpotlightRight = styled.div<{ $isDark: boolean }>`
  position: absolute;
  right: 25%;
  bottom: 0;
  width: 384px; /* w-96 */
  height: 384px;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  transition: opacity 0.7s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: rgba(147, 51, 234, 0.05); /* bg-purple-600/5 */
          opacity: 1;
        `
      : css`
          background-color: rgba(168, 85, 247, 0.05); /* bg-purple-500/5 */
          opacity: 0.6;
        `}
`;

export const SectionTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 64px; /* mb-16 */
`;

export const InnerContentWrapper = styled.div`
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const TitleTag = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 12px; /* text-xs */
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 700;

  color: ${(props) =>
    props.$isDark
      ? "#a78bfa"
      : "#7c3aed"}; /* text-violet-400 / text-violet-650 */
`;

export const TitleH2 = styled.h2<{ $isDark: boolean }>`
  font-size: 30px; /* text-3xl */
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.025em; /* tracking-tight */
  margin-top: 4px; /* mt-1 */

  @media (min-width: 640px) {
    font-size: 48px; /* sm:text-5xl */
  }

  color: ${(props) =>
    props.$isDark ? "#ffffff" : "#18181b"}; /* text-white / text-zinc-900 */
`;

export const TitleGlowText = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300; /* font-light */

  /* glow-purple */
  text-shadow: ${(props) =>
    props.$isDark
      ? "0 0 20px rgba(167, 139, 250, 0.4)"
      : "0 0 20px rgba(109, 40, 217, 0.2)"};

  color: ${(props) => (props.$isDark ? "rgba(167, 139, 250, 0.9)" : "#7c3aed")};
`;

export const SectionDescription = styled.p<{ $isDark: boolean }>`
  font-size: 14px; /* text-sm */
  max-width: 32rem; /* max-w-lg */
  margin-left: auto;
  margin-right: auto;
  font-weight: 300; /* font-light */
  margin-top: 12px; /* mt-3 */
  line-height: 1.5;

  color: ${(props) =>
    props.$isDark ? "#a1a1aa" : "#4b5563"}; /* text-zinc-400 / text-zinc-650 */
`;

export const TitleGlowDivider = styled.div`
  height: 3px;
  width: 96px; /* w-24 */
  background: linear-gradient(to right, transparent, #8b5cf6, transparent);
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px; /* mt-4 */
`;

export const ExhibitionWallGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
    align-items: start;
  }
`;

export const ProjectCard = styled(motion.div)<{ $isDark: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 16px; /* rounded-2xl */
  border: 1px solid;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
  padding: 24px; /* p-6 */
  transition: all 0.5s ease-in-out;
  position: relative;

  ${(props) =>
    props.$isDark
      ? css`
          /* glass-card properties */
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: rgba(139, 92, 246, 0.1); /* border-violet-500/10 */
          background-color: rgba(24, 24, 27, 0.4); /* bg-zinc-900/40 */

          &:hover {
            border-color: rgba(
              139,
              92,
              246,
              0.3
            ); /* hover:border-violet-500/30 */
            box-shadow: 0 20px 40px rgba(12, 10, 20, 0.5); /* hover:shadow-violet-950/10 */
          }
        `
      : css`
          background-color: rgba(255, 255, 255, 0.95); /* bg-white/95 */
          border-color: rgba(139, 92, 246, 0.08); /* border-violet-100/90 */
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.02);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);

          &:hover {
            border-color: #c084fc; /* hover:border-violet-300 */
            box-shadow: 0 12px 40px rgba(139, 92, 246, 0.06);
          }
        `}
`;

export const HoverSpotlightEffect = styled.div`
  position: absolute;
  top: -40px; /* -top-10 */
  left: 40px;
  width: 176px; /* w-44 */
  height: 176px;
  border-radius: 50%;
  background-color: rgba(139, 92, 246, 0.15); /* bg-violet-500/15 */
  filter: blur(50px);
  opacity: 0;
  transition: opacity 0.7s;
  pointer-events: none;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const CardTopMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px; /* mb-4 */
  z-index: 10;
`;

export const RoomTag = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;

  color: ${(props) =>
    props.$isDark
      ? "#a78bfa"
      : "#7c3aed"}; /* text-violet-400 / text-violet-650 */
`;

export const YearTag = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em; /* tracking-wider */
  color: ${(props) =>
    props.$isDark
      ? "#71717a"
      : "#71717a"}; /* text-zinc-500 / text-zinc-450 equivalent */
`;

export const ProjectCardTitle = styled.h3<{ $isDark: boolean }>`
  font-size: 20px; /* text-xl */
  font-weight: 700; /* font-bold */
  font-family: var(--font-sans);
  letter-spacing: -0.025em; /* tracking-tight */
  margin-bottom: 8px; /* mb-2 */
  z-index: 10;
  transition: color 0.3s;

  color: ${(props) =>
    props.$isDark ? "#f4f4f5" : "#09090b"}; /* text-zinc-101 / text-zinc-900 */

  ${ProjectCard}:hover & {
    color: #8b5cf6; /* hover:text-violet-500 */
  }
`;

export const BriefDescription = styled.p<{ $isDark: boolean }>`
  font-size: 12px; /* text-xs */
  font-weight: 300; /* font-light */
  line-height: 1.625; /* leading-relaxed */
  margin-bottom: 24px; /* mb-6 */
  z-index: 10;

  color: ${(props) =>
    props.$isDark ? "#a1a1aa" : "#52525b"}; /* text-zinc-400 / text-zinc-650 */
`;

export const DeviceSimulatorFrame = styled.div`
  position: relative;
  aspect-ratio: 14/7;
  height: 265px;
  border-radius: 12px; /* rounded-xl */
  overflow: hidden;
  border: 1px solid #27272a; /* border-zinc-800 */
  margin-bottom: 24px; /* mb-6 */
  z-index: 10;
  background-color: #09090b; /* bg-zinc-950 */

  @media (max-width: 640px) {
    height: 190px;
    aspect-ratio: unset;
  }
`;

export const SimulatorHeadControls = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 28px; /* h-7 */
  background-color: rgba(24, 24, 27, 0.9); /* bg-zinc-900/90 */
  border-bottom: 1px solid rgba(39, 39, 42, 0.8); /* border-zinc-800/80 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px; /* px-3 */
  z-index: 20;
`;

export const DotRowActions = styled.div`
  display: flex;
  gap: 6px; /* gap-1.5 */
`;

export const DotSimulated = styled.span<{ $color: string }>`
  width: 10px; /* w-2.5 */
  height: 10px; /* h-2.5 */
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  opacity: 0.8;
`;

export const SimulatedUrlBar = styled.div`
  background-color: rgba(9, 9, 11, 0.6); /* bg-zinc-955/60 */
  border-radius: 4px;
  padding: 2px 16px; /* px-4 py-0.5 */
  font-size: 9px;
  font-family: var(--font-mono);
  color: #71717a; /* text-zinc-505 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 150px;
`;

export const SimulatorScreenArea = styled.div`
  position: absolute;
  inset: 0;
  padding-top: 28px; /* pt-7 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #09090b;
`;

export const TagPillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* gap-2 */
  margin-bottom: 24px; /* mb-6 */
  z-index: 10;
`;

export const TagBadge = styled.span<{ $isDark: boolean }>`
  padding: 4px 10px; /* py-1 px-2.5 */
  font-size: 10px;
  font-family: var(--font-mono);
  border-radius: 4px;
  letter-spacing: 0.025em; /* tracking-wide */

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #09090b; /* bg-zinc-950 */
          color: #d4d4d8; /* text-zinc-300 */
          border: 1px solid #18181b; /* border-zinc-909 */
        `
      : css`
          background-color: #f5f3ff; /* bg-violet-50 */
          color: #4c1d95; /* text-violet-750 font-medium */
          border: 1px solid rgba(139, 92, 246, 0.1); /* border-violet-100/60 */
          font-weight: 500;
        `}
`;

export const ExploreButton = styled.button<{ $isDark: boolean }>`
  width: 100%;
  padding: 14px; /* py-3.5 */
  border-radius: 12px; /* rounded-xl */
  text-align: center;
  font-weight: 500;
  font-size: 14px; /* text-sm */
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* gap-2 */
  border: 1px solid transparent;

  ${(props) =>
    props.$isDark
      ? css`
          border-color: rgba(139, 92, 246, 0.1); /* border-violet-500/10 */
          background-color: rgba(92, 36, 219, 0.1); /* bg-violet-955/10 */
          color: #d4d4d8; /* text-zinc-300 */

          &:hover {
            border-color: rgba(
              139,
              92,
              246,
              0.3
            ); /* hover:border-violet-500/30 */
            background-color: rgba(
              92,
              36,
              219,
              0.2
            ); /* hover:bg-violet-955/20 */
            color: #ffffff;
          }
        `
      : css`
          background: linear-gradient(
            to right,
            #7c3aed,
            #4338ca
          ); /* bg-gradient-to-r from-violet-600 to-indigo-650 */
          border-color: rgba(139, 92, 246, 0.5); /* border-violet-500/50 */
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.18);

          &:hover {
            background: linear-gradient(
              to right,
              #6d28d9,
              #3730a3
            ); /* hover:from-violet-700 hover:to-indigo-700 */
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.25);
          }
        `}
`;

/* DETAILED EXHIBITION CATALOG OVERLAY MODAL STYLES */

export const ModalFixedBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media (min-width: 768px) {
    padding: 24px; /* md:p-6 */
  }
`;

export const ModalClickCloser = styled.div`
  position: absolute;
  inset: 0;
`;

export const ModalContentCard = styled(motion.div)<{ $isDark: boolean }>`
  position: relative;
  width: 100%;
  max-width: 950px; /* max-w-[950px] (4xl fallback) */
  max-height: 85vh;
  border-radius: 16px; /* rounded-2xl */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px; /* p-6 */
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 10;
  border: 1px solid;
  transition:
    background-color 0.8s,
    border-color 0.8s,
    color 0.6s;

  @media (min-width: 768px) {
    padding: 32px; /* md:p-8 */
  }

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #0a060f; /* bg-[#0a060f] */
          border-color: rgba(139, 92, 246, 0.2); /* border-violet-500/20 */
          color: #e4e4e7; /* text-zinc-101 */
        `
      : css`
          background: linear-gradient(
            to bottom right,
            #ffffff,
            #ffffff,
            rgba(245, 243, 255, 0.3)
          ); /* bg-gradient-to-br from-white via-white to-violet-50/30 */
          border-color: #ddd6fe; /* border-violet-200 */
          color: #1a1727; /* text-zinc-805 */
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        `}
`;

export const ModalHeaderBar = styled.div<{ $isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-b: 1px solid;
  padding-bottom: 20px; /* pb-5 */
  transition: border-color 0.8s;

  border-color: ${(props) =>
    props.$isDark
      ? "#27272a"
      : "#e4e4e7"}; /* border-zinc-800 / border-zinc-150 */
`;

export const ModalCategoryStampText = styled.span<{ $isDark: boolean }>`
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em; /* tracking-widest */

  color: ${(props) => (props.$isDark ? "#8b5cf6" : "#7c3aed")};
  font-weight: ${(props) => (props.$isDark ? "normal" : "700")};
`;

export const ModalProjectTitleH3 = styled.h3<{ $isDark: boolean }>`
  font-size: 24px; /* text-2xl */
  font-family: var(--font-sans);
  font-weight: 700; /* font-bold */
  letter-spacing: -0.025em; /* tracking-tight */
  margin-top: -35px; /* mt-1 */

  @media (min-width: 768px) {
    font-size: 30px; /* md:text-3xl */
  }

  color: ${(props) =>
    props.$isDark ? "#ffffff" : "#09090b"}; /* text-white / text-zinc-950 */
`;

export const ModalCloseButton = styled.button<{ $isDark: boolean }>`
  padding: 4px 12px; /* py-1 px-3 */
  font-size: 12px; /* text-xs */
  font-family: var(--font-mono);
  letter-spacing: 0.05em; /* tracking-wider */
  border-radius: 9999px; /* rounded-full */
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid;

  ${(props) =>
    props.$isDark
      ? css`
          border-color: #27272a; /* border-zinc-800 */
          background-color: transparent;
          color: #a1a1aa; /* text-zinc-400 */

          &:hover {
            border-color: #3f3f46; /* hover:border-zinc-700 */
            background-color: #27272a; /* hover:bg-zinc-800 */
            color: #ffffff;
          }
        `
      : css`
          border-color: #e4e4e7; /* border-zinc-200 */
          background-color: transparent;
          color: #52525b; /* text-zinc-650 */

          &:hover {
            border-color: #a1a1aa; /* hover:border-zinc-350 */
            background-color: #f4f4f5; /* hover:bg-zinc-50 */
            color: #09090b; /* hover:text-zinc-950 */
          }
        `}
`;

export const ModalMainBodyGrid = styled.div<{ $centered?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: stretch;
  width: 100%;
`;

export const ModalRightQuickPanelRail = styled.div<{ $isDark: boolean }>`
  border-radius: 12px;
  border: 1px solid;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition:
    background-color 0.8s,
    border-color 0.8s;

  width: fit-content;
  min-width: 700px;
  max-width: 820px;
  margin: 0 auto;

  ${(props) =>
    props.$isDark
      ? css`
          border-color: #27272a;
          background-color: #0e0a14;
        `
      : css`
          border-color: #e4e4e7;
          background-color: #f9f9fb;
        `}
`;

export const RailSectionTitle = styled.h4<{ $isDark: boolean }>`
  font-size: 12px; /* text-xs */
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.05em; /* tracking-widest */
  margin-bottom: 12px; /* mb-3 */

  color: ${(props) =>
    props.$isDark ? "#71717a" : "#71717a"}; /* text-zinc-500 / text-zinc-450 */
`;

export const RailMetaDataList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px; /* space-y-3.5 */
  font-size: 12px; /* text-xs */
`;

export const RailMetadataRowItem = styled.div<{ $isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-b: 1px solid;
  padding-bottom: 8px; /* pb-2 */
  transition: border-color 0.8s;

  border-color: ${(props) =>
    props.$isDark
      ? "#18181b"
      : "#e4e4e7"}; /* border-zinc-900 / border-zinc-200/60 */
`;

export const MetalabelTag = styled.span<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px; /* gap-1.5 */

  color: ${(props) =>
    props.$isDark ? "#a1a1aa" : "#52525b"}; /* text-zinc-400 / text-zinc-650 */
`;

export const MetaValueHighlight = styled.span<{
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

export const ToolsWrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px; /* gap-1.5 */
`;

export const ToolPanelBadge = styled.span<{ $isDark: boolean }>`
  padding: 4px 10px; /* py-1 px-2.5 */
  font-size: 10px;
  font-family: var(--font-mono);
  border-radius: 4px;
  border: 1px solid;
  letter-spacing: 0.025em; /* tracking-wide */
  transition: all 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #18181b; /* bg-zinc-900 */
          border-color: #27272a; /* border-zinc-800 */
          color: #d4d4d8; /* text-zinc-300 */
        `
      : css`
          background-color: #ffffff;
          border-color: #e4e4e7; /* border-zinc-200 */
          color: #3f3f46; /* text-zinc-700 */
        `}
`;

export const ModalCTAsGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px; /* gap-2 */
  padding-top: 8px; /* pt-2 */
`;

export const ModalActionPrimaryButton = styled.button`
  width: 25%;
  padding: 14px; /* py-3.5 */
  border-radius: 12px; /* rounded-xl */
  background-color: #7c3aed; /* bg-violet-605 */
  color: #ffffff;
  font-weight: 600;
  font-size: 14px; /* text-sm */
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* gap-2 */
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #6d28d9; /* hover:bg-violet-700 */
    transform: translateY(-2px);
  }
`;

export const ModalActionSecondaryButton = styled.button<{ $isDark: boolean }>`
  width: 28%;
  padding: 14px; /* py-3.5 */
  border-radius: 12px; /* rounded-xl */
  border: 1px solid;
  text-align: center;
  font-weight: 600;
  font-size: 12px; /* text-xs */
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px; /* gap-1 */

  ${(props) =>
    props.$isDark
      ? css`
          border-color: #27272a; /* border-zinc-800 */
          background-color: #18181b; /* bg-zinc-900 */
          color: #a1a1aa; /* text-zinc-400 */

          &:hover {
            border-color: #3f3f46; /* hover:border-zinc-700 */
            color: #ffffff;
          }
        `
      : css`
          border-color: #e4e4e7; /* border-zinc-200 */
          background-color: #ffffff;
          color: #52525b; /* text-zinc-650 */

          &:hover {
            border-color: #a1a1aa; /* hover:border-zinc-350 */
            color: #09090b; /* hover:text-zinc-950 */
          }
        `}
`;

export const ModalLeftScopeCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const ScopeTabsHeader = styled.div<{ $isDark: boolean }>`
  display: flex;
  border-b: 1px solid;
  font-size: 12px; /* text-xs */
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.05em; /* tracking-wider */
  gap: 24px; /* gap-6 */
  transition: border-color 0.8s;

  border-color: ${(props) =>
    props.$isDark
      ? "rgba(39, 39, 42, 0.85)"
      : "#e4e4e7"}; /* border-zinc-800/85 : border-zinc-150 */
`;

export const TabHeaderTrigger = styled.button<{
  $isActive: boolean;
  $isDark: boolean;
}>`
  padding-bottom: 12px; /* pb-3 */
  border-bottom: 2px solid;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
  background-color: transparent;
  border-left: none;
  border-right: none;
  border-top: none;

  ${(props) =>
    props.$isActive
      ? props.$isDark
        ? css`
            border-bottom-color: #8b5cf6; /* border-violet-500 */
            color: #ffffff;
          `
        : css`
            border-bottom-color: #7c3aed; /* border-violet-605 */
            color: #4c1d95; /* text-violet-700 */
            font-weight: 700;
          `
      : props.$isDark
        ? css`
            border-bottom-color: transparent;
            color: #a1a1aa; /* text-zinc-400 */
            &:hover {
              color: #ffffff;
            }
          `
        : css`
            border-bottom-color: transparent;
            color: #71717a; /* text-zinc-500 */
            &:hover {
              color: #09090b;
            } /* hover:text-zinc-900 */
          `}
`;

export const TabContentArea = styled.div`
  min-height: 160px; /* min-h-[160px] */
`;

export const NarrativeSummaryBox = styled(motion.div)<{ $isDark: boolean }>`
  font-family: var(--font-sans);
  font-weight: 300; /* font-light */
  transition: color 0.6s;

  /* espaço padrão entre filhos */
  & > * + * {
    margin-top: 16px;
  }

  /* título → parágrafo: espaço menor */
  & > h3 + * {
    margin-top: -15px;
  }

  color: ${(props) =>
    props.$isDark ? "#d4d4d8" : "#3f3f46"}; /* text-zinc-300 / text-zinc-700 */
`;

export const VibeIndicatorBanner = styled.div<{ $isDark: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  margin-top: 16px;
  border: 1px solid;
  width: fit-content;
  max-width: 100%;
  transition: all 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          background-color: rgba(76, 29, 149, 0.2);
          border-color: rgba(139, 92, 246, 0.1);
          color: #c084fc;
        `
      : css`
          background-color: #f5f3ff;
          border-color: rgba(139, 92, 246, 0.2);
          color: #4338ca;
          font-weight: 500;
        `}
`;

export const VibeDotSpin = styled.span<{ $isDark: boolean }>`
  height: 8px; /* h-2 */
  width: 8px; /* w-2 */
  border-radius: 50%;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

  background-color: ${(props) =>
    props.$isDark ? "#a78bfa" : "#4f46e5"}; /* bg-violet-400 : bg-violet-600 */
`;

export const VibeTextStamp = styled.span`
  font-size: 11px; /* text-[11px] */
  font-family: var(--font-mono);
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const KpiHeading = styled.h4<{ $isDark: boolean }>`
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 16px; /* text-base */
  transition: color 0.6s;

  color: ${(props) => (props.$isDark ? "#ffffff" : "#09090b")};
`;

export const SpecsHolderGrid = styled.div`
  display: grid;
  grid-template-cols: 1fr;
  gap: 16px; /* gap-4 */
  margin-top: 8px; /* mt-2 */

  @media (min-width: 640px) {
    grid-template-cols: repeat(3, minmax(0, 1fr)); /* sm:grid-cols-3 */
  }
`;

export const SpecBlockItem = styled.div<{ $isDark: boolean }>`
  padding: 16px; /* p-4 */
  border-radius: 12px; /* rounded-xl */
  border: 1px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.8s;

  ${(props) =>
    props.$isDark
      ? css`
          border-color: #27272a; /* border-zinc-800 */
          background-color: #09090b; /* bg-zinc-950 */
          color: #ffffff;
        `
      : css`
          border-color: #e4e4e7; /* border-zinc-200 */
          background-color: rgba(244, 244, 245, 0.5); /* bg-zinc-50/50 */
          color: #09090b;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01);
        `}
`;

export const SpecLabelTextCode = styled.span<{ $isDark: boolean }>`
  font-size: 10px; /* text-[10px] */
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.05em; /* tracking-wider */

  color: ${(props) =>
    props.$isDark
      ? "#71717a"
      : "#71717a"}; /* text-zinc-500 : text-zinc-450 equivalent */
`;

export const SpecValueBold = styled.span<{ $isDark: boolean }>`
  font-weight: 700;
  font-size: 18px; /* text-lg */
  margin-top: 4px; /* mt-1 */
  letter-spacing: -0.025em; /* tracking-tight */

  color: ${(props) =>
    props.$isDark ? "#ffffff" : "#4c1d95"}; /* text-white : text-violet-700 */
`;

export const SandboxWarningSpan = styled.p<{ $isDark: boolean }>`
  font-size: 11px; /* text-xs */
  line-height: 1.625;
  font-family: var(--font-sans);
  font-style: italic;
  font-weight: 300;

  color: ${(props) =>
    props.$isDark ? "#71717a" : "#71717a"}; /* text-zinc-500 : text-zinc-450 */
`;

export const ArchitectureColTitle = styled.h4<{ $isDark: boolean }>`
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 12px; /* text-xs */
  letter-spacing: 0.05em; /* tracking-wider */
  text-transform: uppercase;
  font-family: var(--font-mono);

  color: ${(props) =>
    props.$isDark
      ? "#c084fc"
      : "#7c3aed"}; /* text-violet-300 : text-violet-650 */
`;

export const ArchitectureTableBox = styled.div<{ $isDark: boolean }>`
  padding: 16px; /* p-4 */
  font-family: var(--font-mono);
  font-size: 12px; /* text-xs */
  border-radius: 12px; /* rounded-xl */
  border: 1px solid;
  transition: all 0.8s;

  /* space-y-2 */
  & > * + * {
    margin-top: 8px;
  }

  ${(props) =>
    props.$isDark
      ? css`
          background-color: #09090b; /* bg-zinc-950 */
          border-color: #27272a; /* border-zinc-800 */
          color: #a1a1aa; /* text-zinc-400 */
        `
      : css`
          background-color: #f4f4f5; /* bg-zinc-50 */
          border-color: rgba(228, 228, 230, 0.6); /* border-zinc-200/60 */
          color: #52525b; /* text-zinc-650 */
        `}
`;

export const ArchitectureTableHeaderRow = styled.div<{ $isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding-bottom: 4px; /* pb-1 */
  margin-bottom: 4px; /* mb-1 */
  font-size: 10px; /* text-[10px] */
  text-transform: uppercase;
  font-weight: 600;
  transition: border-color 0.8s;

  border-color: ${(props) =>
    props.$isDark
      ? "#18181b"
      : "#e4e4e7"}; /* border-zinc-909 : border-zinc-200 */
  color: ${(props) =>
    props.$isDark ? "#71717a" : "#71717a"}; /* text-zinc-500 : text-zinc-450 */
`;

export const ArchitectureRowItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GreenModelTextType = styled.span<{ $isDark: boolean }>`
  color: ${(props) =>
    props.$isDark
      ? "#34d399"
      : "#059669"}; /* text-emerald-400 : text-emerald-600 */
  font-weight: ${(props) => (props.$isDark ? "normal" : "700")};
`;

export const PurpleModelTextType = styled.span<{ $isDark: boolean }>`
  color: ${(props) =>
    props.$isDark
      ? "#a78bfa"
      : "#2563eb"}; /* text-violet-400 : text-violet-600 */
  font-weight: ${(props) => (props.$isDark ? "normal" : "700")};
`;

export const NeutralModelTextType = styled.span<{ $isDark: boolean }>`
  color: ${(props) =>
    props.$isDark ? "#d4d4d8" : "#09090b"}; /* text-zinc-350 : text-zinc-900 */
`;