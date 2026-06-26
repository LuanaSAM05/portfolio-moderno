import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Eye,
  Code,
  Layers,
  Smartphone,
  Calendar,
  User,
  ArrowUpRight,
} from "lucide-react";
import { PROJECTS } from "../../data";
import { Project } from "../../types";
import {
  ProjectsSectionContainer,
  ProjectsSpotlightLeft,
  ProjectsSpotlightRight,
  InnerContentWrapper,
  SectionTitleWrapper,
  TitleTag,
  TitleH2,
  TitleGlowText,
  SectionDescription,
  TitleGlowDivider,
  ExhibitionWallGrid,
  ProjectCard,
  HoverSpotlightEffect,
  CardTopMetaRow,
  RoomTag,
  YearTag,
  ProjectCardTitle,
  BriefDescription,
  DeviceSimulatorFrame,
  SimulatorHeadControls,
  DotRowActions,
  DotSimulated,
  SimulatedUrlBar,
  SimulatorScreenArea,
  TagPillList,
  TagBadge,
  ExploreButton,
  ModalFixedBackdrop,
  ModalClickCloser,
  ModalContentCard,
  ModalHeaderBar,
  ModalCategoryStampText,
  ModalProjectTitleH3,
  ModalCloseButton,
  ModalMainBodyGrid,
  ModalRightQuickPanelRail,
  RailSectionTitle,
  RailMetaDataList,
  RailMetadataRowItem,
  MetalabelTag,
  MetaValueHighlight,
  ToolsWrapContainer,
  ToolPanelBadge,
  ModalCTAsGroup,
  ModalActionPrimaryButton,
  ModalActionSecondaryButton,
  ModalLeftScopeCol,
  ScopeTabsHeader,
  TabHeaderTrigger,
  TabContentArea,
  NarrativeSummaryBox,
  VibeIndicatorBanner,
  VibeDotSpin,
  VibeTextStamp,
  KpiHeading,
  SpecsHolderGrid,
  SpecBlockItem,
  SpecLabelTextCode,
  SpecValueBold,
  SandboxWarningSpan,
  ArchitectureColTitle,
  ArchitectureTableBox,
  ArchitectureTableHeaderRow,
  ArchitectureRowItem,
  GreenModelTextType,
  PurpleModelTextType,
  NeutralModelTextType,
} from "./styles";

interface ProjectsGalleryProps {
  isDark?: boolean;
}

export default function ProjectsGallery({
  isDark = true,
}: ProjectsGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // simulated test execution logs for the Jest QA tracker mockup
  const [jestLogs] = useState<string[]>([
    "PASS  ./tests/api.payment.test.ts (4.2s)",
    "✓ POST /api/v1/orders - should create order successfully (122ms)",
    "✓ POST /api/v1/orders - should calculate dynamic shipping index (89ms)",
    "✓ GET /api/v1/menu - should return cached menu items (12ms)",
    "PASS  ./tests/db.connection.test.ts (1.8s)",
    "✓ pgPool connection healthy (4m)",
    " ",
    "Test Suites: 2 passed, 2 total",
    "Tests:       5 passed, 5 total",
    "Snapshots:   0 total",
    "Time:        6.43s, estimated 7.0s",
    "Ran all test suites. Active coverage: 97.4%",
  ]);

  return (
    <ProjectsSectionContainer id="projetos" $isDark={isDark}>
      {/* Visual Ambient Spotlights */}
      <ProjectsSpotlightLeft $isDark={isDark} />
      <ProjectsSpotlightRight $isDark={isDark} />

      <InnerContentWrapper>
        {/* Header */}
        <SectionTitleWrapper>
          <TitleTag $isDark={isDark}>Galeria Técnica</TitleTag>
          <TitleH2 $isDark={isDark}>
            Obras <TitleGlowText $isDark={isDark}>Desenvolvidas</TitleGlowText>
          </TitleH2>
          <SectionDescription $isDark={isDark}>
            Cada aplicação representa uma etapa da minha evolução como
            desenvolvedora, reunindo desafios, aprendizado e tecnologias
            aplicadas na construção de soluções modernas.
          </SectionDescription>
          <TitleGlowDivider />
        </SectionTitleWrapper>

        {/* The Exhibition Wall Grid */}
        <ExhibitionWallGrid>
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              $isDark={isDark}
            >
              {/* Premium Spotlight on Hover */}
              <HoverSpotlightEffect />

              {/* Subtitle / Category Label & Year */}
              <CardTopMetaRow>
                <RoomTag $isDark={isDark}>
                  Project {index + 1} // {project.category.toUpperCase()}
                </RoomTag>
                <YearTag $isDark={isDark}>{project.year}</YearTag>
              </CardTopMetaRow>

              {/* Title representation */}
              <ProjectCardTitle $isDark={isDark}>
                {project.title}
              </ProjectCardTitle>

              {/* Brief introductory text */}
              <BriefDescription $isDark={isDark}>
                {project.description}
              </BriefDescription>

              {/* Simulated Device Artboard inside structural panel */}
              <DeviceSimulatorFrame>
                {/* Simulated header controls */}
                <SimulatorHeadControls>
                  <DotRowActions>
                    <DotSimulated $color="#ef4444" />
                    <DotSimulated $color="#f59e0b" />
                    <DotSimulated $color="#10b981" />
                  </DotRowActions>
                </SimulatorHeadControls>

                {/* Imagem real do projeto */}
                <SimulatorScreenArea>
                  {project.images && project.images.length === 1 && (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                        borderRadius: "0 0 8px 8px",
                      }}
                    />
                  )}

                  {project.images && project.images.length > 1 && (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        padding: "12px 8px 0",
                        overflow: "hidden",
                      }}
                    >
                      {project.images.map((img, i) => (
                        <div
                          key={i}
                          style={{
                            flexShrink: 0,
                            width: "22%",
                            height: "90%",
                            borderRadius: "10px 10px 0 0",
                            overflow: "hidden",
                            border: "1px solid rgba(139,92,246,0.25)",
                            transform:
                              i === 0
                                ? "rotate(-6deg) translateY(8px)"
                                : i === 1
                                  ? "rotate(-2deg) translateY(2px)"
                                  : i === 2
                                    ? "rotate(2deg) translateY(2px)"
                                    : "rotate(6deg) translateY(8px)",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                            zIndex: i === 1 || i === 2 ? 2 : 1,
                          }}
                        >
                          <img
                            src={img}
                            alt={`${project.title} ${i + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "top",
                              display: "block",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {(!project.images || project.images.length === 0) && (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(139,92,246,0.3)",
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      PREVIEW EM BREVE
                    </div>
                  )}
                </SimulatorScreenArea>
              </DeviceSimulatorFrame>

              {/* Flex Tags */}
              <TagPillList>
                {project.tags.slice(0, 3).map((tag) => (
                  <TagBadge key={tag} $isDark={isDark}>
                    {tag}
                  </TagBadge>
                ))}
              </TagPillList>

              {/* View/Explore button */}
              <ExploreButton
                onClick={() => setSelectedProject(project)}
                $isDark={isDark}
              >
                <Eye
                  size={14}
                  style={{ color: isDark ? "#a78bfa" : "#f5f3ff" }}
                />
                Explorar Projeto
              </ExploreButton>
            </ProjectCard>
          ))}
        </ExhibitionWallGrid>
      </InnerContentWrapper>

      {/* DETAILED EXHIBITION CATALOG OVERLAY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ModalFixedBackdrop>
            {/* Modal backdrop closer clicker */}
            <ModalClickCloser onClick={() => setSelectedProject(null)} />

            <ModalContentCard
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              $isDark={isDark}
            >
              {/* Header inside modal — apenas stamp e botão fechar */}
              <ModalHeaderBar $isDark={isDark}>
                <ModalCategoryStampText $isDark={isDark}>
                  {selectedProject.year} // Project Details
                </ModalCategoryStampText>
                <ModalCloseButton
                  onClick={() => setSelectedProject(null)}
                  $isDark={isDark}
                >
                  X Fechar
                </ModalCloseButton>
              </ModalHeaderBar>

              {/* Grid content columns */}
              <ModalMainBodyGrid $centered={true}>
                {/* Left side: título + descrição + vibe no mesmo bloco */}
                <ModalLeftScopeCol>
                  <NarrativeSummaryBox
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    $isDark={isDark}
                  >
                    <ModalProjectTitleH3 $isDark={isDark}>
                      {selectedProject.title}
                    </ModalProjectTitleH3>
                    <p>{selectedProject.detailedDescription}</p>
                    <VibeIndicatorBanner $isDark={isDark}>
                      <VibeDotSpin $isDark={isDark} />
                      <VibeTextStamp>
                        Responsividade • Performance • UX • SEO
                      </VibeTextStamp>
                    </VibeIndicatorBanner>
                  </NarrativeSummaryBox>
                </ModalLeftScopeCol>

                {/* Right side: quick metadata rail panel */}
                <ModalRightQuickPanelRail $isDark={isDark}>
                  <div>
                    <RailSectionTitle $isDark={isDark}>
                      Informações do Projeto
                    </RailSectionTitle>
                    <RailMetaDataList>
                      <RailMetadataRowItem $isDark={isDark}>
                        <MetalabelTag $isDark={isDark}>
                          <User size={13} style={{ flexShrink: 0 }} /> Projeto
                        </MetalabelTag>
                        <MetaValueHighlight $isDark={isDark}>
                          {selectedProject.client}
                        </MetaValueHighlight>
                      </RailMetadataRowItem>
                      <RailMetadataRowItem $isDark={isDark}>
                        <MetalabelTag $isDark={isDark}>
                          <Layers size={13} style={{ flexShrink: 0 }} /> Minha
                          Atuação
                        </MetalabelTag>
                        <MetaValueHighlight $isDark={isDark} $purple={true}>
                          {selectedProject.role}
                        </MetaValueHighlight>
                      </RailMetadataRowItem>
                      <RailMetadataRowItem $isDark={isDark}>
                        <MetalabelTag $isDark={isDark}>
                          <Calendar size={13} style={{ flexShrink: 0 }} /> Ano
                        </MetalabelTag>
                        <MetaValueHighlight $isDark={isDark}>
                          {selectedProject.year}
                        </MetaValueHighlight>
                      </RailMetadataRowItem>
                    </RailMetaDataList>
                  </div>

                  <div>
                    <RailSectionTitle $isDark={isDark}>
                      Tecnologias Utilizadas
                    </RailSectionTitle>
                    <ToolsWrapContainer>
                      {selectedProject.tags.map((tag) => (
                        <ToolPanelBadge key={tag} $isDark={isDark}>
                          {tag}
                        </ToolPanelBadge>
                      ))}
                    </ToolsWrapContainer>
                  </div>

                  {/* Actions buttons inside detail pop-up */}
                  <ModalCTAsGroup>
                    {selectedProject.id !== "dev-tempo" && (
                      <ModalActionPrimaryButton
                        as="a"
                        href={
                          selectedProject.liveUrl &&
                          selectedProject.liveUrl !== "#"
                            ? selectedProject.liveUrl
                            : undefined
                        }
                        target={
                          selectedProject.liveUrl &&
                          selectedProject.liveUrl !== "#"
                            ? "_blank"
                            : undefined
                        }
                        rel="noopener noreferrer"
                        onClick={
                          selectedProject.liveUrl === "#"
                            ? () => alert("Deploy em breve!")
                            : undefined
                        }
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          cursor: "pointer",
                        }}
                      >
                        <ArrowUpRight size={14} />
                        Acessar Projeto
                      </ModalActionPrimaryButton>
                    )}
                    <ModalActionSecondaryButton
                      as="a"
                      href={
                        selectedProject.githubUrl &&
                        selectedProject.githubUrl !== "#"
                          ? selectedProject.githubUrl
                          : undefined
                      }
                      target={
                        selectedProject.githubUrl &&
                        selectedProject.githubUrl !== "#"
                          ? "_blank"
                          : undefined
                      }
                      rel="noopener noreferrer"
                      onClick={
                        selectedProject.githubUrl === "#"
                          ? () => alert("Repositório privado.")
                          : undefined
                      }
                      $isDark={isDark}
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <Code size={13} />
                      Explorar Código-Fonte
                    </ModalActionSecondaryButton>
                  </ModalCTAsGroup>
                </ModalRightQuickPanelRail>
              </ModalMainBodyGrid>
            </ModalContentCard>
          </ModalFixedBackdrop>
        )}
      </AnimatePresence>
    </ProjectsSectionContainer>
  );
}
