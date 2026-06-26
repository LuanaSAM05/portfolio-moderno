import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Globe,
  MessageCircle,
} from "lucide-react";
import {
  ContactSectionContainer,
  ContactGlowOrbRight,
  ContactGlowOrbLeft,
  ContactGridContainer,
  CenteredHeaderBlock,
  TagLabel,
  H2TitleText,
  TitleGlowTextItalic,
  SegmentDividerLine,
  InfoNarrativeIntro,
  LinksCardPanel,
  LinksPanelTitle,
  LinkRowsList,
  InfoCardRow,
  ActionIconContainerLeft,
  LabelGroup,
  RowSuperMeta,
  RowActualTextValue,
  WhatsAppCardPanel,
  WhatsAppCardEyebrow,
  WhatsAppCardTitle,
  WhatsAppCardSubtitle,
  WhatsAppCardButton,
  WhatsAppGlowOrb,
} from "./styles";

interface ContactSectionProps {
  isDark?: boolean;
}

const contactLinks = [
  {
    id: "email",
    meta: "Email Institucional",
    value: "lsilvaalvesmelo@gmail.com",
    href: "mailto:lsilvaalvesmelo@gmail.com",
    icon: <Mail size={18} />,
    brandColor: "#EA4335",
    hoverColor: "#EA4335",
  },
  {
    id: "linkedin",
    meta: "Rede Profissional",
    value: "linkedin.com/in/luana-s-a-melo",
    href: "https://www.linkedin.com/in/luana-s-a-melo-027a77365/",
    icon: <Linkedin size={18} />,
    brandColor: "#0A66C2",
    hoverColor: "#0A66C2",
  },
  {
    id: "instagram",
    meta: "Rede Social",
    value: "@luuana_05",
    href: "https://www.instagram.com/luuana_05",
    icon: <Instagram size={18} />,
    brandColor: "#E1306C",
    hoverColor: "#E1306C",
  },
  {
    id: "github",
    meta: "Projetos & Repositórios",
    value: "github.com/LuanaSAM05",
    href: "https://github.com/LuanaSAM05",
    icon: <Github size={18} />,
    brandColor: "#E6EDF3",
    hoverColor: "#E6EDF3",
  },

  {
    id: "remote",
    meta: "Disponibilidade",
    value: "Remoto • Internacional",
    href: undefined,
    icon: <Globe size={18} />,
    brandColor: "#22C55E",
    hoverColor: "#22C55E",
  },
];

const handleWhatsApp = () => {
  const url =
    "https://wa.me/353874446710?text=Ol%C3%A1%20Luana%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.";
  window.open(url, "_blank");
};

export default function ContactSection({ isDark = true }: ContactSectionProps) {
  return (
    <ContactSectionContainer id="contato" $isDark={isDark}>
      <ContactGlowOrbRight $isDark={isDark} />
      <ContactGlowOrbLeft $isDark={isDark} />

      {/* Header centralizado */}
      <CenteredHeaderBlock>
        <TagLabel $isDark={isDark}>Diálogo Técnico</TagLabel>
        <H2TitleText $isDark={isDark}>
          Iniciar uma
          <TitleGlowTextItalic $isDark={isDark}>Conexão</TitleGlowTextItalic>
        </H2TitleText>
        <InfoNarrativeIntro $isDark={isDark}>
          Seja para uma oportunidade profissional, um projeto ou apenas para
          trocar experiências sobre tecnologia, ficarei feliz em conversar com
          você.
        </InfoNarrativeIntro>
        <SegmentDividerLine $isDark={isDark} />
      </CenteredHeaderBlock>

      <ContactGridContainer>
        {/* Coluna esquerda — canais de contato com cores de marca */}
        <LinksCardPanel $isDark={isDark}>
          <LinksPanelTitle $isDark={isDark}>Canais Diretos</LinksPanelTitle>
          <LinkRowsList>
            {contactLinks.map((link) => (
              <InfoCardRow
                key={link.id}
                href={link.href || undefined}
                target={link.href ? "_blank" : undefined}
                rel={link.href ? "noopener noreferrer" : undefined}
                $isDark={isDark}
                $brandColor={link.brandColor}
                $isClickable={!!link.href || link.id === "remote"}
              >
                <ActionIconContainerLeft
                  $isDark={isDark}
                  $brandColor={link.brandColor}
                >
                  {link.icon}
                </ActionIconContainerLeft>
                <LabelGroup>
                  <RowSuperMeta>{link.meta}</RowSuperMeta>
                  <RowActualTextValue
                    $isDark={isDark}
                    $brandColor={link.brandColor}
                  >
                    {link.value}
                  </RowActualTextValue>
                </LabelGroup>
              </InfoCardRow>
            ))}
          </LinkRowsList>
        </LinksCardPanel>

        {/* Coluna direita — card WhatsApp */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <WhatsAppCardPanel $isDark={isDark}>
            <WhatsAppGlowOrb />
            <WhatsAppCardEyebrow $isDark={isDark}>
              Contato Direto
            </WhatsAppCardEyebrow>
            <WhatsAppCardTitle $isDark={isDark}>
              Vamos conversar?
            </WhatsAppCardTitle>
            <WhatsAppCardSubtitle $isDark={isDark}>
              Disponível para oportunidades profissionais,
              <br />
              freelas e parcerias estratégicas.
            </WhatsAppCardSubtitle>
            <WhatsAppCardButton
              $isDark={isDark}
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} />
              Conversar pelo WhatsApp
            </WhatsAppCardButton>
          </WhatsAppCardPanel>
        </motion.div>
      </ContactGridContainer>
    </ContactSectionContainer>
  );
}