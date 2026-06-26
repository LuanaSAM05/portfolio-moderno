import React, { useState, useEffect } from "react";
import { Sparkles, ArrowDown, ChevronRight, GraduationCap } from "lucide-react";
import {
  HeroSectionContainer,
  HeroBackground,
  GlowOrb1,
  GlowOrb2,
  HeroContent,
  MicroNotificationTag,
  HeroTitle,
  BrandFirstName,
  BrandSecondName,
  CaricatureContainer,
  CaricatureImage,
  HeroSubheading,
  CredentialsContainer,
  CertificationsTag,
  SeparationDot,
  MecTag,
  CtaButtonsContainer,
  PrimaryButton,
  SecondaryButtonLink,
  ScrollIndicatorContainer,
  GoldenRatioLeftAccent,
  GoldenRatioRightAccent,
  DecorativeFloatingOrbRight,
  DecorativeFloatingOrbLeft,
  MobileCaricatureWrapper, // novo — adicione em styles.ts (veja abaixo)
} from "./styles";

interface HeroSectionProps {
  onExploreClick: () => void;
  isDark: boolean;
}

export default function HeroSection({
  onExploreClick,
  isDark,
}: HeroSectionProps) {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 110);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const caricatureSrc = blink ? "/luana-blink.png" : "/luana-open.png";

  return (
    <HeroSectionContainer id="inicio">
      <HeroBackground $isDark={isDark}>
        <GlowOrb1 $isDark={isDark} />
        <GlowOrb2 $isDark={isDark} />
      </HeroBackground>

      <HeroContent>
        {/* ── Caricatura apenas em mobile — centralizada acima do título ── */}
        <MobileCaricatureWrapper>
          <CaricatureImage src={caricatureSrc} alt="Caricatura Luana" />
        </MobileCaricatureWrapper>

        <MicroNotificationTag
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          $isDark={isDark}
        >
          <Sparkles size={12} className="animate-pulse" />
          <span>Full Stack Development • Modern Web Applications</span>
        </MicroNotificationTag>

        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          $isDark={isDark}
        >
          <BrandFirstName $isDark={isDark}>LUANA SILVA</BrandFirstName>
          <BrandSecondName $isDark={isDark}>
            Alves Melo
            {/* Caricatura desktop — posicionada ao lado do texto ── */}
            <CaricatureContainer>
              <CaricatureImage src={caricatureSrc} alt="Caricatura Luana" />
            </CaricatureContainer>
          </BrandSecondName>
        </HeroTitle>

        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          $isDark={isDark}
        >
          Desenvolvendo aplicações web modernas com foco em qualidade,
          desempenho e uma experiência intuitiva para o usuário. Cada projeto
          representa uma oportunidade de aprender, evoluir e transformar ideias
          em soluções reais.
        </HeroSubheading>

        <CredentialsContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          $isDark={isDark}
        >
          <CertificationsTag $isDark={isDark}>
            10+ CERTIFICAÇÕES
          </CertificationsTag>
          <SeparationDot />
          <MecTag $isDark={isDark}>
            <GraduationCap
              size={14}
              style={{ color: isDark ? "#c084fc" : "#7c3aed" }}
            />
            FULL STACK CERTIFICADO RECONHECIDO MEC
          </MecTag>
        </CredentialsContainer>

        <CtaButtonsContainer
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <PrimaryButton onClick={onExploreClick}>
            Ver Projetos
            <ChevronRight
              size={16}
              className="transform transition-transform duration-300 group-hover:translate-x-1"
            />
          </PrimaryButton>

          <SecondaryButtonLink href="#certificados" $isDark={isDark}>
            Verificar Certificados
          </SecondaryButtonLink>
        </CtaButtonsContainer>

        <ScrollIndicatorContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          onClick={onExploreClick}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ArrowDown
            size={14}
            style={{ color: isDark ? "#c084fc" : "#7c3aed" }}
          />
        </ScrollIndicatorContainer>
      </HeroContent>

      <GoldenRatioLeftAccent />
      <GoldenRatioRightAccent />
      <DecorativeFloatingOrbRight />
      <DecorativeFloatingOrbLeft />
    </HeroSectionContainer>
  );
}
