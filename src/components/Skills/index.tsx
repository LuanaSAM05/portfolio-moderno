import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Server, Settings, BadgeCheck } from "lucide-react";
import { SKILL_CATEGORIES } from "../../data";
import {
  SkillsSectionContainer,
  AmbientFlareRight,
  AmbientFlareLeft,
  SectionContentWrapper,
  SectionHeaderBlock,
  HeaderTag,
  HeaderH2,
  HeaderGlowText,
  HeaderDescription,
  HeaderGlowDivider,
  FilterPillsContainer,
  PillButton,
  CategoriesGrid,
  CategoryCard,
  CardGlowOverlay,
  CardHeaderRow,
  CardIconWrapper,
  CardTitleH3,
  SkillsWrapper,
  SkillRow,
  SkillLabelRow,
  SkillPercentageValue,
  SkillBadgeWrapper,
  ProgressBarTrack,
  ProgressBarFiller,
  ApprovedStampText,
} from "./styles";

interface SkillsSectionProps {
  isDark?: boolean;
}

export default function SkillsSection({ isDark = true }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <SkillsSectionContainer id="skills" $isDark={isDark}>
      {/* Background flares */}
      <AmbientFlareRight $isDark={isDark} />
      <AmbientFlareLeft $isDark={isDark} />

      <SectionContentWrapper>
        {/* Header */}
        <SectionHeaderBlock>
          <HeaderTag $isDark={isDark}>Competências</HeaderTag>

          <HeaderH2 $isDark={isDark}>
            Tecnologias &
            <HeaderGlowText $isDark={isDark}>Habilidades</HeaderGlowText>
          </HeaderH2>

          <HeaderDescription $isDark={isDark}>
            Conhecimentos construídos através de formação, certificações e
            projetos práticos nas áreas de desenvolvimento web, mobile e
            qualidade de software.
          </HeaderDescription>
          <HeaderGlowDivider />
        </SectionHeaderBlock>

        {/* Category Filter Pills (Immersive design) */}
        <FilterPillsContainer>
          <PillButton
            onClick={() => setActiveCategory("all")}
            $isActive={activeCategory === "all"}
            $isDark={isDark}
          >
            Todas as Stacks
          </PillButton>
          {SKILL_CATEGORIES.map((cat) => (
            <PillButton
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              $isActive={activeCategory === cat.id}
              $isDark={isDark}
            >
              {cat.id === "frontend"
                ? "Front-End"
                : cat.id === "backend"
                  ? "Back-End"
                  : "QA / Testes"}
            </PillButton>
          ))}
        </FilterPillsContainer>

        {/* Categories Grid Container */}
        <CategoriesGrid layout>
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                $isDark={isDark}
              >
                {/* Decorative glowing gradient path inside each card */}
                <CardGlowOverlay />

                <div>
                  {/* Category Title & Icon Indicator */}
                  <CardHeaderRow $isDark={isDark}>
                    <CardIconWrapper $isDark={isDark}>
                      {category.id === "frontend" ? (
                        <Code2 size={20} className="text-violet-400" />
                      ) : category.id === "backend" ? (
                        <Server size={20} className="text-violet-400" />
                      ) : (
                        <Settings size={20} className="text-violet-400" />
                      )}
                    </CardIconWrapper>
                    <CardTitleH3 $isDark={isDark}>{category.title}</CardTitleH3>
                  </CardHeaderRow>

                  {/* Skills List loops */}
                  <SkillsWrapper>
                    {category.skills.map((skill, sIdx) => (
                      <SkillRow key={skill.name}>
                        {/* Label & Value */}
                        <SkillLabelRow $isDark={isDark}>
                          <SkillBadgeWrapper>
                            <BadgeCheck
                              size={14}
                              className="text-violet-400 shrink-0"
                            />
                            {skill.name}
                          </SkillBadgeWrapper>
                          <SkillPercentageValue>
                            {skill.percentage}%
                          </SkillPercentageValue>
                        </SkillLabelRow>

                        {/* Progress Bar Track */}
                        <ProgressBarTrack $isDark={isDark}>
                          {/* Colored dynamic progress bar overlay */}
                          <ProgressBarFiller
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: sIdx * 0.1,
                              ease: [0.76, 0, 0.24, 1],
                            }}
                          />
                        </ProgressBarTrack>
                      </SkillRow>
                    ))}
                  </SkillsWrapper>
                </div>

                {/* Aesthetic stamp on cards bottom right */}
                <ApprovedStampText $isDark={isDark}>
                  Luana // Certified
                </ApprovedStampText>
              </CategoryCard>
            ))}
          </AnimatePresence>
        </CategoriesGrid>
      </SectionContentWrapper>
    </SkillsSectionContainer>
  );
}
