import React, { useState, useMemo, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  GraduationCap,
  Search,
  Monitor,
  X,
} from "lucide-react";
import { CERTIFICATES } from "../../data";
import { Certificate } from "../../types";
import {
  CertificatesSectionContainer,
  AmbientOrbLeft,
  AmbientOrbRight,
  InnerContentWrapper,
  SectionHeader,
  CategoryTag,
  SectionHeading,
  GlowStyledText,
  UnderlineDivider,
  HeaderParagraph,
  // Crown Jewel
  CrownJewelWrapper,
  CrownJewelCard,
  CrownJewelGlow,
  CrownJewelBadge,
  CrownJewelLeft,
  CrownJewelTitle,
  CrownJewelMeta,
  CrownMetaItem,
  CrownMetaDot,
  CrownJewelDescription,
  CrownJewelTagsRow,
  CrownTag,
  CrownJewelStatus,
  CrownJewelRight,
  CrownSealCircle,
  CrownSealText,
  CrownFooter,
  // Grid
  PillsGroupRow,
  CategoryFilterPill,
  CertificatesGrid,
  CertificateCard,
  HoverRadialGlow,
  CardHeaderMeta,
  IssuerStampCode,
  DurationTag,
  CertificateTitleH3,
  CertificateCodeInfo,
  VerifyBadgeLink,
  // Acervo header & search
  AcervoHeaderRow,
  AcervoTitle,
  SearchBarWrapper,
  SearchInput,
  CardSkillTagsRow,
  CardSkillTag,
  // Lightbox
  LightboxBackdrop,
  LightboxImageContainer,
  LightboxImageEl,
  LightboxCloseBtn,
  LightboxVerifyPrimaryBtn,
  ActionsPillContainer,
  PendingCertPlaceholder,
  PendingCertIcon,
  PendingCertText,
} from "./styles";

interface CertificatesGalleryProps {
  isDark?: boolean;
}

export default function CertificatesGallery({
  isDark = true,
}: CertificatesGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Hide navbar and lock scroll when lightbox is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      // Hide navbar: adjust selector to match your navbar element
      const navbar = document.querySelector("nav") as HTMLElement | null;
      if (navbar) navbar.style.display = "none";
    } else {
      document.body.style.overflow = "auto";
      const navbar = document.querySelector("nav") as HTMLElement | null;
      if (navbar) navbar.style.display = "";
    }
    return () => {
      document.body.style.overflow = "auto";
      const navbar = document.querySelector("nav") as HTMLElement | null;
      if (navbar) navbar.style.display = "";
    };
  }, [selectedCert]);

  // Map skill tags to color variants for harmonious diversity
  const tagColorMap: Record<
    string,
    "violet" | "cyan" | "amber" | "emerald" | "rose" | "indigo"
  > = {
    // frontend
    "React Hooks": "violet",
    "Context API": "indigo",
    "Static Typing": "cyan",
    "Interfaces & Types": "cyan",
    "Custom Animations": "rose",
    "Responsive Grids": "violet",
    Closures: "amber",
    "Promises & Async/Await": "emerald",
    "DOM Manipulation": "indigo",
    "Event Listeners": "rose",
    // backend
    "REST APIs": "emerald",
    "Express Middleware": "cyan",
    // tools
    "Git Flow": "amber",
    "CI/CD": "emerald",
    // qa
    "Unit Tests": "rose",
    "E2E Testing": "indigo",
  };

  const getSkillTags = (
    cert: Certificate,
  ): {
    label: string;
    color: "violet" | "cyan" | "amber" | "emerald" | "rose" | "indigo";
  }[] => {
    const skills = cert.tags as string[] | undefined;
    if (skills && skills.length > 0) {
      const colorFallbacks: Array<
        "violet" | "cyan" | "amber" | "emerald" | "rose" | "indigo"
      > = ["violet", "cyan", "amber", "emerald", "rose", "indigo"];
      return skills.slice(0, 2).map((s, i) => ({
        label: s,
        color: tagColorMap[s] ?? colorFallbacks[i % colorFallbacks.length],
      }));
    }
    return [];
  };

  const categories = [
    { id: "all", label: "Todos os Temas" },
    { id: "frontend", label: "Front-End Core" },
    { id: "backend", label: "Back-End" },
    { id: "tools", label: "Ferramentas" },
    { id: "qa", label: "QA & Testes" },
  ];

  const filteredCertificates = useMemo(() => {
    let list =
      activeCategory === "all"
        ? CERTIFICATES
        : CERTIFICATES.filter((cert) => cert.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (cert) =>
          cert.title.toLowerCase().includes(q) ||
          cert.issuer?.toLowerCase().includes(q) ||
          cert.category?.toLowerCase().includes(q) ||
          cert.tags?.some((s: string) => s.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <CertificatesSectionContainer id="certificados" $isDark={isDark}>
      <AmbientOrbLeft $isDark={isDark} />
      <AmbientOrbRight $isDark={isDark} />

      <InnerContentWrapper>
        {/* ── Header ── */}
        <SectionHeader>
          <CategoryTag $isDark={isDark}>Trilha de Aprendizado</CategoryTag>
          <SectionHeading $isDark={isDark}>
            Formações{" "}
            <GlowStyledText $isDark={isDark}>
              & Conquistas Técnicas
            </GlowStyledText>
          </SectionHeading>

          <HeaderParagraph $isDark={isDark}>
            Certificações e formações concluídas ao longo da minha evolução como
            desenvolvedora, explorando tecnologias modernas de desenvolvimento
            full stack e qualidade de software.
          </HeaderParagraph>
          <UnderlineDivider />
        </SectionHeader>

        {/* ── CROWN JEWEL — Full Stack Certification ── */}
        <CrownJewelWrapper>
          <CrownJewelCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            $isDark={isDark}
          >
            <CrownJewelGlow />

            <CrownJewelLeft>
              <CrownJewelBadge>
                <ShieldCheck size={12} />
                Formação Principal
              </CrownJewelBadge>

              <CrownJewelTitle $isDark={isDark}>
                Full Stack Developer
              </CrownJewelTitle>

              <CrownJewelMeta>
                <CrownMetaItem>
                  Formação prática em desenvolvimento web
                </CrownMetaItem>
                <CrownMetaDot />
                <CrownMetaItem $golden>DevClub • Rodolfo Mori</CrownMetaItem>
              </CrownJewelMeta>

              <CrownJewelDescription $isDark={isDark}>
                Formação voltada para o desenvolvimento de aplicações web
                modernas, abrangendo Front-End, Back-End, integração com APIs,
                banco de dados, versionamento de código e boas práticas de
                desenvolvimento. Ao longo da formação foram desenvolvidos
                projetos práticos aplicando os conhecimentos adquiridos em
                cenários reais.
              </CrownJewelDescription>

              <CrownJewelTagsRow>
                {[
                  "HTML • CSS • JavaScript",
                  "React • TypeScript",
                  "Node.js • APIs",
                  "Git • GitHub",
                ].map((tag) => (
                  <CrownTag key={tag}>{tag}</CrownTag>
                ))}
              </CrownJewelTagsRow>

              <CrownJewelStatus>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#22c55e",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                Formação concluída • Atualização contínua através de projetos
                práticos.
              </CrownJewelStatus>
            </CrownJewelLeft>

            <CrownJewelRight>
              <CrownSealCircle>
                <Award size={40} />
              </CrownSealCircle>
              <CrownSealText>
                DEV
                <br />
                CERTIFIED
              </CrownSealText>
            </CrownJewelRight>

            <CrownFooter
              $isDark={isDark}
              style={{ position: "absolute", bottom: 16, left: 40, right: 40 }}
            >
              <span>Formação Full Stack</span>
              <span>10+ Certificações</span>
            </CrownFooter>
          </CrownJewelCard>
        </CrownJewelWrapper>

        {/* ── Acervo Header + Search ── */}
        <AcervoHeaderRow>
          <AcervoTitle $isDark={isDark}>
            <GraduationCap size={18} />
            Certificados Concluídos({CERTIFICATES.length})
          </AcervoTitle>
          <SearchBarWrapper $isDark={isDark}>
            <Search size={13} />
            <SearchInput
              $isDark={isDark}
              type="text"
              placeholder="Buscar certificado (ex: React, JS, Node...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBarWrapper>
        </AcervoHeaderRow>

        {/* ── Filter Pills ── */}
        <PillsGroupRow>
          {categories.map((cat) => (
            <CategoryFilterPill
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              $isActive={activeCategory === cat.id}
              $isDark={isDark}
            >
              {cat.label}
            </CategoryFilterPill>
          ))}
        </PillsGroupRow>

        {/* ── Grid 3 colunas ── */}
        <CertificatesGrid layout>
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => {
              const certCode = "ALVES-" + cert.id.toUpperCase();
              return (
                <CertificateCard
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  onClick={() => setSelectedCert(cert)}
                  $isDark={isDark}
                >
                  <HoverRadialGlow />

                  <div>
                    <CardHeaderMeta>
                      <IssuerStampCode $isDark={isDark}>
                        <Monitor
                          size={10}
                          style={{
                            display: "inline",
                            marginRight: 4,
                            verticalAlign: "middle",
                          }}
                        />
                        {cert.category?.toUpperCase() ?? "FRONTEND"}
                      </IssuerStampCode>
                      <DurationTag $isDark={isDark}>{cert.date}</DurationTag>
                    </CardHeaderMeta>

                    <CertificateTitleH3 $isDark={isDark}>
                      {cert.title}
                    </CertificateTitleH3>

                    <CertificateCodeInfo $isDark={isDark}>
                      <span>{cert.issuer}</span>
                    </CertificateCodeInfo>

                    {(() => {
                      const tags = getSkillTags(cert);
                      return tags.length > 0 ? (
                        <CardSkillTagsRow>
                          {tags.map((tag) => (
                            <CardSkillTag key={tag.label} $color={tag.color}>
                              {tag.label}
                            </CardSkillTag>
                          ))}
                        </CardSkillTagsRow>
                      ) : null;
                    })()}
                  </div>

                  <VerifyBadgeLink $isDark={isDark}>
                    <span>Ver Certificado</span>
                    <ChevronRight size={13} />
                  </VerifyBadgeLink>
                </CertificateCard>
              );
            })}
          </AnimatePresence>
        </CertificatesGrid>
      </InnerContentWrapper>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedCert && (
          <LightboxBackdrop onClick={() => setSelectedCert(null)}>
            <LightboxImageContainer
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedCert.imageUrl ? (
                <LightboxImageEl
                  src={selectedCert.imageUrl}
                  alt={`Certificado ${selectedCert.title}`}
                />
              ) : (
                <PendingCertPlaceholder $isDark={isDark}>
                  <PendingCertIcon>
                    <Award size={48} />
                  </PendingCertIcon>
                  <PendingCertText $isDark={isDark}></PendingCertText>
                </PendingCertPlaceholder>
              )}

              <ActionsPillContainer>
                <LightboxCloseBtn
                  onClick={() => setSelectedCert(null)}
                  $isDark={isDark}
                >
                  X Fechar
                </LightboxCloseBtn>
              </ActionsPillContainer>
            </LightboxImageContainer>
          </LightboxBackdrop>
        )}
      </AnimatePresence>
    </CertificatesSectionContainer>
  );
}
