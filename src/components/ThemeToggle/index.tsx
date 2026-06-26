import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import {
  ToggleContainer,
  ThemeLabel,
  SwitchButton,
  IndicatorBall,
  IconWrapper,
  TrackGradient,
  BeaconOuter,
  BeaconTrack,
  PingCircle,
  StaticCircle,
} from "./styles";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ToggleContainer>
      {/* Dynamic Descriptive Tag - Responsive Contrast */}
      <ThemeLabel $isDark={isDark}>
        {isDark ? "Cosmic Twilight" : "Ethereal Dawn"}
      </ThemeLabel>

      {/* Main Switch Bar Component - Inspired by Day & Night Sky */}
      <SwitchButton
        id="theme-toggle-button"
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        $isDark={isDark}
        aria-label="Alternar Tema"
      >
        {/* Sliding Indicator Ball */}
        <IndicatorBall
          animate={{
            x: isDark ? 28 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          $isDark={isDark}
        >
          {/* Sun vs Moon Icon Transitions with subtle rotation */}
          <IconWrapper
            animate={{
              rotate: isDark ? 180 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            $isDark={isDark}
          >
            {isDark ? (
              <Moon size={13} style={{ fill: "rgba(167, 139, 250, 0.1)" }} />
            ) : (
              <Sun size={13} style={{ fill: "rgba(139, 92, 246, 0.1)" }} />
            )}
          </IconWrapper>
        </IndicatorBall>

        {/* Dynamic Abstract Light Gradient inside track */}
        <TrackGradient $isDark={isDark} />
      </SwitchButton>

      {/* Pulse Beacon Indicator */}
      <BeaconOuter>
        <BeaconTrack>
          <PingCircle $isDark={isDark} />
          <StaticCircle $isDark={isDark} />
        </BeaconTrack>
      </BeaconOuter>
    </ToggleContainer>
  );
}
