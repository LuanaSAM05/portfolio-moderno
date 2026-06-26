import React, { useState, useEffect } from "react";
import { Award, Zap, Code2, CloudLightning } from "lucide-react";
import {
  AboutSectionContainer,
  DecorativeOrbRight,
  DecorativeOrbLeft,
  AboutGrid,
  LeftColumnFrame,
  PictureFrame,
  PictureFrameInner,
  PictureGradientOverlay,
  FrameMetadataOverlay,
  OverlayNameText,
  OverlayRoleContainer,
  StatusIndicatorCircle,
  FrameOuterBorderDecoration,
  PictureBackGlowCard,
  LocalTimeStickyCard,
  LocalTimeLabel,
  LocalTimeClockText,
  LocalTimeUtcLabel,
  BelowPhotoRow,
  RightColumnBioDetail,
  NarrativeBioHeader,
  NarrativeTagline,
  NarrativeH2,
  NarrativeGlowText,
  HorizontalGlowDivider,
  EditorialNarrativeText,
  StrongText,
  CoreValuesGrid,
  CoreValueCell,
  ValueIconBox,
  ValueHeading,
  ValueTextDescription,
} from "./styles";

interface AboutSectionProps {
  isDark?: boolean;
}

export default function AboutSection({ isDark = true }: AboutSectionProps) {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AboutSectionContainer id="sobre" $isDark={isDark}>
      <DecorativeOrbRight $isDark={isDark} />
      <DecorativeOrbLeft $isDark={isDark} />

      <AboutGrid>
        {/* LEFT COLUMN: Editorial Storytelling */}
        <RightColumnBioDetail>
          <NarrativeBioHeader>
            <NarrativeTagline $isDark={isDark}>A Jornada</NarrativeTagline>
            <NarrativeH2 $isDark={isDark}>
              Construindo Soluções <br />
              <NarrativeGlowText $isDark={isDark}>
                com Alma e Técnica
              </NarrativeGlowText>
            </NarrativeH2>
            <HorizontalGlowDivider $isDark={isDark} />
          </NarrativeBioHeader>

          <EditorialNarrativeText $isDark={isDark}>
            <p>
              Olá, eu sou a <StrongText $isDark={isDark}>Luana</StrongText>. Sou
              Desenvolvedora Full Stack e encontrei na programação uma forma de
              unir criatividade, lógica e resolução de problemas para
              desenvolver soluções digitais. Com mais de{" "}
              <StrongText $isDark={isDark} $purple={true}>
                10 certificações
              </StrongText>{" "}
              em tecnologias modernas de desenvolvimento web e qualidade de
              software, venho construindo uma base sólida em Front-End, Back-End
              e desenvolvimento de aplicações completas.
            </p>

            <p>
              Atualmente, concentro meus estudos e projetos no desenvolvimento
              de aplicações web modernas utilizando tecnologias como React,
              TypeScript, Node.js e PostgreSQL. Gosto de criar interfaces
              intuitivas, desenvolver funcionalidades bem estruturadas e buscar
              soluções que proporcionem uma boa experiência ao usuário. Acredito
              que cada novo projeto representa uma oportunidade de aprimorar
              minhas habilidades e evoluir continuamente como desenvolvedora.
            </p>
          </EditorialNarrativeText>

          <CoreValuesGrid>
            <CoreValueCell>
              <ValueIconBox $isDark={isDark}>
                <Code2 size={18} />
              </ValueIconBox>
              <div>
                <ValueHeading $isDark={isDark}>
                  Desenvolvimento Full Stack
                </ValueHeading>
                <ValueTextDescription $isDark={isDark}>
                  Criação de aplicações web e mobile utilizando tecnologias
                  modernas do ecossistema JavaScript.
                </ValueTextDescription>
              </div>
            </CoreValueCell>

            <CoreValueCell>
              <ValueIconBox $isDark={isDark}>
                <Award size={18} />
              </ValueIconBox>
              <div>
                <ValueHeading $isDark={isDark}>Quality Assurance</ValueHeading>
                <ValueTextDescription $isDark={isDark}>
                  Conhecimentos em testes e qualidade de software, contribuindo
                  para aplicações mais confiáveis e estáveis.
                </ValueTextDescription>
              </div>
            </CoreValueCell>

            <CoreValueCell>
              <ValueIconBox $isDark={isDark}>
                <Zap size={18} />
              </ValueIconBox>
              <div>
                <ValueHeading $isDark={isDark}>Foco em UI & UX</ValueHeading>
                <ValueTextDescription $isDark={isDark}>
                  Valorização de interfaces organizadas, acessíveis e pensadas
                  para proporcionar uma boa experiência ao usuário.
                </ValueTextDescription>
              </div>
            </CoreValueCell>

            <CoreValueCell>
              <ValueIconBox $isDark={isDark}>
                <CloudLightning size={18} />
              </ValueIconBox>
              <div>
                <ValueHeading $isDark={isDark}>
                  Aprendizado Contínuo
                </ValueHeading>
                <ValueTextDescription $isDark={isDark}>
                  Comprometida com evolução constante através de estudos,
                  certificações e desenvolvimento de projetos reais.
                </ValueTextDescription>
              </div>
            </CoreValueCell>
          </CoreValuesGrid>
        </RightColumnBioDetail>

        {/* RIGHT COLUMN: Foto + cards abaixo */}
        <LeftColumnFrame>
          {/* A foto — sem nada sobreposto */}
          <PictureFrame
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <PictureFrameInner
              style={{
                backgroundImage: "url('/luana-profile.jpeg')",
              }}
            />
            <PictureGradientOverlay />
            <FrameOuterBorderDecoration />
          </PictureFrame>

          <PictureBackGlowCard />

          {/* Cards ABAIXO da foto: nome à esquerda, local time à direita */}
          <BelowPhotoRow>
            {/* Card com nome e role */}
            <FrameMetadataOverlay $isDark={isDark}>
              <OverlayNameText>Luana Silva Alves Melo</OverlayNameText>
              <OverlayRoleContainer>
                <span>FULL STACK DEV</span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <StatusIndicatorCircle />
                  ONLINE
                </span>
              </OverlayRoleContainer>
            </FrameMetadataOverlay>

            {/* Card de horário local */}
            <LocalTimeStickyCard
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              $isDark={isDark}
            >
              <LocalTimeLabel>Local Time</LocalTimeLabel>
              <LocalTimeClockText $isDark={isDark}>
                {localTime || "10:09:44"}
              </LocalTimeClockText>
              <LocalTimeUtcLabel>
                {Intl.DateTimeFormat()
                  .resolvedOptions()
                  .timeZone.split("/")
                  .pop()
                  ?.replace("_", " ") ?? "LOCAL"}
              </LocalTimeUtcLabel>
            </LocalTimeStickyCard>
          </BelowPhotoRow>
        </LeftColumnFrame>
      </AboutGrid>
    </AboutSectionContainer>
  );
}
