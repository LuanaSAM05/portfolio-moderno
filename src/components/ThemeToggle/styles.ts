import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const ToggleContainer = styled.div`
  position: relative;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 12px; /* gap-3 */
  user-select: none; /* select-none */
`;

export const ThemeLabel = styled.span<{ $isDark: boolean }>`
  display: none;
  @media (min-width: 640px) {
    display: inline;
  }
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 700;
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.$isDark
      ? css`
          color: #a78bfa; /* text-violet-400 */
          opacity: 0.8;
        `
      : css`
          color: #4c1d95; /* text-violet-750 / violet-900 equivalent */
          opacity: 0.9;
        `}
`;

export const SwitchButton = styled.button<{ $isDark: boolean }>`
  position: relative;
  overflow: hidden;
  width: 64px; /* w-16 */
  height: 36px; /* h-9 */
  border-radius: 9999px; /* rounded-full */
  transition: all 0.5s ease-in-out;
  padding: 4px; /* p-1 */
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid;

  ${(props) =>
    props.$isDark
      ? css`
          border-color: rgba(139, 92, 246, 0.25); /* border-violet-500/25 */
          background-color: #08050e; /* bg-[#08050e] */
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
        `
      : css`
          border-color: #ddd6fe; /* border-violet-200 */
          background: linear-gradient(
            to right,
            #f5f3ff,
            #faf5ff
          ); /* bg-gradient-to-r from-violet-50 to-purple-50 */
          box-shadow: inset 0 2px 5px rgba(139, 92, 246, 0.06);
        `}
`;

export const IndicatorBall = styled(motion.div)<{ $isDark: boolean }>`
  width: 28px; /* w-7 */
  height: 28px; /* h-7 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  position: relative;
  overflow: hidden;
  transition:
    background-color 0.5s,
    border-color 0.5s;
  border: 1px solid;

  ${(props) =>
    props.$isDark
      ? css`
          background: linear-gradient(
            to bottom right,
            #2e1065,
            #312e81
          ); /* bg-gradient-to-br from-violet-950 to-indigo-900 */
          border-color: rgba(139, 92, 246, 0.3); /* border-violet-500/30 */
        `
      : css`
          background: linear-gradient(
            to bottom right,
            #ffffff,
            #faf5ff
          ); /* bg-gradient-to-br from-white to-[#FAF5FF] */
          border-color: #f5f3ff; /* border-violet-100 */
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.08);
        `}
`;

export const IconWrapper = styled(motion.div)<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$isDark
      ? css`
          color: #ddd6fe;
        ` /* text-violet-200 */
      : css`
          color: #7c3aed;
        `}/* text-violet-650 */
`;

export const TrackGradient = styled.div<{ $isDark: boolean }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.7s;

  ${(props) =>
    props.$isDark
      ? css`
          opacity: 0.4;
          background: linear-gradient(
            to right,
            rgba(139, 92, 246, 0.15),
            transparent
          );
        `
      : css`
          opacity: 0.1;
          background: linear-gradient(
            to right,
            rgba(139, 92, 246, 0.2),
            rgba(168, 85, 247, 0.1)
          );
        `}
`;

export const BeaconOuter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BeaconTrack = styled.span`
  relative: relative;
  display: flex;
  height: 8px; /* h-2 */
  width: 8px; /* w-2 */
`;

export const PingCircle = styled.span<{ $isDark: boolean }>`
  position: absolute;
  display: inline-flex;
  height: 100%;
  width: 100%;
  border-radius: 9999px;
  opacity: 0.7;
  transition: background-color 0.5s;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

  /* keyframe definition is typically bundled or globally animated */
  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  background-color: ${(props) =>
    props.$isDark ? "#a78bfa" : "#c084fc"}; /* bg-violet-400 : bg-purple-400 */
`;

export const StaticCircle = styled.span<{ $isDark: boolean }>`
  position: relative;
  display: inline-flex;
  border-radius: 9999px;
  height: 8px; /* h-2 */
  width: 8px; /* w-2 */
  transition: background-color 0.5s;

  background-color: ${(props) =>
    props.$isDark ? "#8b5cf6" : "#a855f7"}; /* bg-violet-500 : bg-purple-500 */
`;
