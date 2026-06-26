import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUp } from "lucide-react";
import HeroSection from "../../components/Hero";
import AboutSection from "../../components/About";
import SkillsSection from "../../components/Skills";
import ProjectsGallery from "../../components/Projects";
import CertificatesGallery from "../../components/Certificates";
import ContactSection from "../../components/Contact";
import ThemeToggle from "../../components/ThemeToggle";
import {
  HomeRootContainer,
  HomeLayoutWrapper,
  AmbientCursorAura,
  StickyLuxuryHeader,
  HeaderContainer,
  LogoSerifButton,
  LogoLetterPeriod,
  LogoLetterSurnames,
  DesktopNavbar,
  NavActionButton,
  ActionsToolbarRight,
  MobileMenuTrigger,
  MobileDrawerBackdrop,
  MobileCabinetLogo,
  MobileDrawerNavigation,
  MobileNavButtonOption,
  MobileDrawerCloseButton,
  EditorialFooterBlock,
  FooterContainerInner,
  FooterBrandCreditsCol,
  FooterBrandName,
  FooterPortfolioStamp,
  FooterTechnicalSpecsCol,
  FooterCreditsMetaSubtext,
  FooterNavigationLinksBox,
  FooterNavSelector,
  ScrollToTopButton,
} from "./styles";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Handle scroll events for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse cursor coordinate track for deluxe ambient aura
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsDark(!isDark);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HomeRootContainer className={isDark ? "dark" : "light"}>
      <HomeLayoutWrapper $isDark={isDark}>
        {/* Dynamic Deluxe Ambient Cursor Aura */}
        <AmbientCursorAura
          $isDark={isDark}
          $left={cursorPos.x}
          $top={cursorPos.y}
        />

        {/* STICKY LUXURY NAVIGATION HEADER */}
        <StickyLuxuryHeader $isDark={isDark}>
          <HeaderContainer>
            {/* Logo Display Serif */}
            <LogoSerifButton
              onClick={() => scrollToSection("inicio")}
              $isDark={isDark}
            >
              <LogoLetterPeriod $isDark={isDark}>L.</LogoLetterPeriod>
              <LogoLetterSurnames $isDark={isDark}>Melo</LogoLetterSurnames>
            </LogoSerifButton>

            {/* Desktop Navigation Links */}
            <DesktopNavbar $isDark={isDark}>
              <NavActionButton
                $isDark={isDark}
                onClick={() => scrollToSection("inicio")}
              >
                Início
              </NavActionButton>
              <NavActionButton
                $isDark={isDark}
                onClick={() => scrollToSection("sobre")}
              >
                A Jornada
              </NavActionButton>
              <NavActionButton
                $isDark={isDark}
                onClick={() => scrollToSection("skills")}
              >
                Habilidades
              </NavActionButton>
              <NavActionButton
                $isDark={isDark}
                onClick={() => scrollToSection("projetos")}
              >
                Projetos
              </NavActionButton>
              <NavActionButton
                $isDark={isDark}
                onClick={() => scrollToSection("certificados")}
              >
                Certificados
              </NavActionButton>
              <NavActionButton
                $isDark={isDark}
                onClick={() => scrollToSection("contato")}
              >
                Contato
              </NavActionButton>
            </DesktopNavbar>

            {/* Theme Toggle & Mobile Menu Controller Container */}
            <ActionsToolbarRight>
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

              <MobileMenuTrigger
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                $isDark={isDark}
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </MobileMenuTrigger>
            </ActionsToolbarRight>
          </HeaderContainer>
        </StickyLuxuryHeader>

        {/* MOBILE DRAWER OVERLAY MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <MobileDrawerBackdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              $isDark={isDark}
            >
              <MobileCabinetLogo
                onClick={() => scrollToSection("inicio")}
                $isDark={isDark}
              >
                Luana Melo
              </MobileCabinetLogo>

              <MobileDrawerNavigation $isDark={isDark}>
                <MobileNavButtonOption
                  $isDark={isDark}
                  onClick={() => scrollToSection("inicio")}
                >
                  Início
                </MobileNavButtonOption>
                <MobileNavButtonOption
                  $isDark={isDark}
                  onClick={() => scrollToSection("sobre")}
                >
                  A Jornada
                </MobileNavButtonOption>
                <MobileNavButtonOption
                  $isDark={isDark}
                  onClick={() => scrollToSection("skills")}
                >
                  Habilidades
                </MobileNavButtonOption>
                <MobileNavButtonOption
                  $isDark={isDark}
                  onClick={() => scrollToSection("projetos")}
                >
                  Projetos
                </MobileNavButtonOption>
                <MobileNavButtonOption
                  $isDark={isDark}
                  onClick={() => scrollToSection("certificados")}
                >
                  Certificados
                </MobileNavButtonOption>
                <MobileNavButtonOption
                  $isDark={isDark}
                  onClick={() => scrollToSection("contato")}
                >
                  Contato
                </MobileNavButtonOption>
              </MobileDrawerNavigation>

              <MobileDrawerCloseButton
                onClick={() => setIsMenuOpen(false)}
                $isDark={isDark}
              >
                {isDark ? "Voltar ao Espaço" : "Fechar Menu"}
              </MobileDrawerCloseButton>
            </MobileDrawerBackdrop>
          )}
        </AnimatePresence>

        {/* PRIMARY MAIN LAYOUT SECTION CONTENT */}
        <main className="w-full">
          {/* 1. Hero Landing Section */}
          <HeroSection
            onExploreClick={() => scrollToSection("projetos")}
            isDark={isDark}
          />

          {/* 2. Biography About Section */}
          <AboutSection isDark={isDark} />

          {/* 3. Skill Metric Matrices */}
          <SkillsSection isDark={isDark} />

          {/* 4. Museum Digital Art Projects Gallery */}
          <ProjectsGallery isDark={isDark} />

          {/* 5. Pedestal Crown Jewel Certificate Showroom */}
          <CertificatesGallery isDark={isDark} />

          {/* 6. Clean Handshake Form Section */}
          <ContactSection isDark={isDark} />
        </main>

        {/* EDITORIAL CROWN FOOTER BLOCK */}
        <EditorialFooterBlock $isDark={isDark}>
          <FooterContainerInner>
            <FooterBrandCreditsCol>
              <FooterBrandName $isDark={isDark}>Luana Melo</FooterBrandName>
              <FooterPortfolioStamp $isDark={isDark}>
                Desenvolvedora Full Stack • Web & Mobile • v1.0.0
              </FooterPortfolioStamp>
            </FooterBrandCreditsCol>

            <FooterTechnicalSpecsCol>
              <p>Construindo soluções digitais através de código, aprendizado contínuo e paixão por tecnologia.</p>
              <FooterCreditsMetaSubtext $isDark={isDark}>
                Direitos Reservados © 2026 Luana Silva Alves Melo. <br /> Desenvolvido com React, TypeScript, Styled
                Components & Google IA Studio.
              </FooterCreditsMetaSubtext>
            </FooterTechnicalSpecsCol>

            <FooterNavigationLinksBox $isDark={isDark}>
              <FooterNavSelector
                $isDark={isDark}
                onClick={() => scrollToSection("inicio")}
              >
                TOPO
              </FooterNavSelector>
              <span>//</span>
              <FooterNavSelector
                $isDark={isDark}
                onClick={() => scrollToSection("sobre")}
              >
                BIO
              </FooterNavSelector>
            </FooterNavigationLinksBox>
          </FooterContainerInner>
        </EditorialFooterBlock>

        {/* FLOATING ACTION SCROLL TO TOP TRIGGER */}
        <AnimatePresence>
          {showScrollTop && (
            <ScrollToTopButton
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              onClick={() => scrollToSection("inicio")}
              $isDark={isDark}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </ScrollToTopButton>
          )}
        </AnimatePresence>
      </HomeLayoutWrapper>
    </HomeRootContainer>
  );
}
