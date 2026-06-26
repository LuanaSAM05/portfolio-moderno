import { Certificate, Project, SkillCategory } from "./types";

export const CERTIFICATES: Certificate[] = [
  {
    id: "mec-fullstack",
    title: "Especialização Full Stack",
    issuer: "Instituição Credenciada pelo MEC",
    date: "01/06/2026",
    category: "core",
    level: "Especialização",
    isMecApproved: true,
    tags: [
      "Arquitetura de Software",
      "Cloud Computing",
      "Clean Code",
      "Segurança",
    ],
    imageUrl: "/certificates/cert-full-stack.jpeg",
    verifyUrl: "",
  },

  {
    id: "react-mori",
    title: "React JS",
    issuer: "DevClub • Rodolfo Mori",
    date: "01/06/2026",
    category: "frontend",
    level: "Avançado",
    tags: ["React Hooks", "Context API", "State Management", "SPA Routing"],
    imageUrl: "/certificates/cert-react.png",
    verifyUrl:
      "https://aulas.devclub.com.br/verify/f3fafd976063e6a8776a3c98cb849fbdab862fd5",
  },

  {
    id: "typescript-mori",
    title: "TypeScript",
    issuer: "DevClub • Rodolfo Mori",
    date: "08/05/2026",
    category: "frontend",
    level: "Avançado",
    tags: ["Static Typing", "Interfaces & Types", "Generics", "Type Safety"],
    imageUrl: "/certificates/cert-typescript.png",
    verifyUrl:
      "https://aulas.devclub.com.br/verify/7385d550ad77df7ba9af4849e2a463ea156d911a",
  },

  {
    id: "css-avancado",
    title: "CSS Avançado",
    issuer: "DevClub • Rodolfo Mori",
    date: "20/12/2025",
    category: "frontend",
    level: "Avançado",
    tags: ["Custom Animations", "Responsive Grids", "Flexbox", "Tailwind CSS"],
    imageUrl: "/certificates/cert-css-grid.png",
    verifyUrl:
      "https://aulas.devclub.com.br/verify/63613f37126f6dc92f84266a279f1dc6c45cb3",
  },

  {
    id: "node-mori",
    title: "Node.js",
    issuer: "DevClub • Rodolfo Mori",
    date: "29/12/2025",
    category: "backend",
    level: "Profissional",
    tags: [
      "REST APIs",
      "Express Middleware",
      "Authentication",
      "Database Integration",
    ],
    imageUrl: "/certificates/cert-node.png",
    verifyUrl:
      "https://aulas.devclub.com.br/verify/40fddd9ca336ace651ee99ff86fabf1201c052",
  },

  {
    id: "js-avancado",
    title: "JavaScript Avançado",
    issuer: "DevClub • Rodolfo Mori",
    date: "30/12/2025",
    category: "frontend",
    level: "Avançado",
    tags: ["Closures", "Promises & Async/Await", "ESNext", "Prototypes"],
    imageUrl: "/certificates/cert-js-async.png",
    verifyUrl:
      "https://aulas.devclub.com.br/verify/8ac679a96b007c777fcbed2a7889dad582bd7",
  },

  {
    id: "js-mori",
    title: "JavaScript",
    issuer: "DevClub • Rodolfo Mori",
    date: "08/12/2025",
    category: "frontend",
    level: "Fundamentos",
    tags: [
      "DOM Manipulation",
      "Event Listeners",
      "ES6",
      "Lógica de Programação",
    ],
    imageUrl: "/certificates/cert-js.png",
    verifyUrl:
      "https://aulas.devclub.com.br/verify/535928d844a0afb784512276ec8091daf6adf6",
  },

  {
    id: "html-mori",
    title: "HTML5",
    issuer: "DevClub • Rodolfo Mori",
    date: "08/12/2025",
    category: "frontend",
    level: "Fundamentos",
    tags: ["Semantic HTML", "SEO", "Accessibility", "Forms"],
    imageUrl: "/certificates/cert-html.png",
    verifyUrl:
      "https://aulas.devclub.com.br/verify/216dc321d3b5c272e4bc3ad3d9c2be2eaf3f0",
  },

  {
    id: "css-mori",
    title: "CSS",
    issuer: "DevClub • Rodolfo Mori",
    date: "08/12/2025",
    category: "frontend",
    level: "Fundamentos",
    tags: ["Box Model", "Flexbox", "Responsividade", "CSS Variables"],
    imageUrl: "/certificates/cert-css.png",
    verifyUrl:
      "https://aulas.devclub.com.br/verify/82d72154ea199be8e1866aa0af0c81d767",
  },

  {
    id: "git-github",
    title: "Git & GitHub",
    issuer: "DevClub • Rodolfo Mori",
    date: "08/12/2025",
    category: "tools",
    level: "Essencial",
    tags: ["Version Control", "Branches", "Pull Requests", "Git Flow"],
    imageUrl: "/certificates/cert-git.png",
    verifyUrl:
      "https://aulas.devclub.com.br/verify/5f7911c31d96120859238765cf9093ce9c80e",
  },

  {
    id: "udemy-testing",
    title: "Testes de Software e QA",
    issuer: "Udemy • Gustavo Farias",
    date: "20/05/2025",
    category: "specialized",
    level: "Profissional",
    tags: ["Quality Assurance", "Automated Tests", "Jest", "Análise de Bugs"],
    imageUrl: "/certificates/cert-qa.jpg",
    verifyUrl: "https://ude.my/UC-3584adc3-c823-45f0-889d-95b4068c7841",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "regilainy-alves",

    title: "Site Institucional — Dra. Regilainy Alves",

    description:
      "Website profissional desenvolvido para apresentar serviços jurídicos especializados em Direito Agrário e Regularização Fundiária.",

    detailedDescription:
      "Projeto desenvolvido para fortalecer a presença digital da Dra. Regilainy Alves através de uma plataforma moderna, responsiva e otimizada para mecanismos de busca. O site foi planejado para transmitir credibilidade e profissionalismo, permitindo que clientes encontrem facilmente informações sobre áreas de atuação, serviços oferecidos e canais de contato. O desenvolvimento priorizou experiência do usuário, performance e adaptação para dispositivos móveis.",

    category: "frontend",

    tags: ["React", "JavaScript", "Tailwind CSS", "SEO", "Responsividade"],

    year: "2026",

    role: "Front-End + UI/UX",

    client: "Site Institucional Jurídico Moderno",

    previewType: "legal",

    stats: [
      { label: "Responsividade", value: "100%" },
      { label: "SEO", value: "Otimizado" },
      { label: "Performance", value: "Alta" },
    ],

    images: ["/projects/direito-agrarioo.jpeg"],

    liveUrl: "https://regilainy-alves-direito-agrario.vercel.app/",

    githubUrl: "https://github.com/LuanaSAM05/Site-Dra-Regilainy-Alves.git",
  },

  {
    id: "dev-burguer",

    title: "Dev Burguer",

    description:
      "Aplicação Full Stack de delivery com autenticação de usuários, catálogo de produtos, carrinho de compras e painel administrativo.",

    detailedDescription:
      "Sistema Full Stack desenvolvido para simular uma plataforma completa de delivery online. A aplicação conta com autenticação de usuários utilizando JWT, gerenciamento de produtos, carrinho de compras, realização de pedidos e área administrativa para controle operacional. Durante o desenvolvimento foram aplicados conceitos de integração entre Front-End e Back-End, consumo de APIs REST, persistência de dados em PostgreSQL e organização de arquitetura escalável.",

    category: "fullstack",

    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Axios",
    ],

    year: "2026",

    role: "Full Stack (React + Node)",

    client: "Sistema de Delivery Completo (Projeto Acadêmico)",

    previewType: "burger",

    stats: [
      { label: "Autenticação", value: "JWT" },
      { label: "Banco de Dados", value: "PostgreSQL" },
      { label: "Arquitetura", value: "Full Stack" },
    ],

    images: ["/projects/devv-burguer.jpeg"],

    liveUrl: "https://dev-burguer-2026.vercel.app/",

    githubUrl: "https://github.com/LuanaSAM05/dev-burguer-frontend.git",
  },

  {
    id: "dev-bills",

    title: "Dev Bills",

    description:
      "Plataforma Full Stack para controle financeiro pessoal com autenticação, dashboard analítico e gerenciamento de receitas e despesas.",

    detailedDescription:
      "Sistema desenvolvido para auxiliar usuários no gerenciamento financeiro diário através de uma interface moderna e intuitiva. A aplicação permite cadastrar receitas e despesas, acompanhar movimentações financeiras, visualizar gráficos analíticos e monitorar o orçamento mensal. O projeto utiliza autenticação via Google, integração entre Front-End e Back-End e banco de dados relacional para armazenamento seguro das informações.",

    category: "fullstack",

    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Google Auth",
      "Charts",
    ],

    year: "2026",

    role: "Full Stack + Dashboard",

    client: "Plataforma Web de Controle Financeiro Pessoal (Projeto Acadêmico)",

    previewType: "finance",

    stats: [
      { label: "Login", value: "Google OAuth" },
      { label: "Dashboard", value: "Financeiro" },
      { label: "Relatórios", value: "Gráficos" },
    ],

    images: ["/projects/dev-bills-1.jpeg"],

    liveUrl: "https://devbills-26.vercel.app/",

    githubUrl:
      "https://github.com/LuanaSAM05/dev-bills-typescript-tailwind.git",
  },

  {
    id: "dev-tempo",

    title: "Dev Tempo",

    description:
      "Aplicativo mobile de previsão climática desenvolvido com React Native e integração com API meteorológica.",

    detailedDescription:
      "Aplicação mobile criada para consulta de condições climáticas em tempo real. O usuário pode pesquisar cidades e visualizar informações detalhadas como temperatura, sensação térmica, condições do clima e previsão atualizada. O projeto foi desenvolvido utilizando React Native, TypeScript e consumo de APIs externas, com foco em experiência mobile, organização de componentes e reutilização de código.",

    category: "mobile",

    tags: ["React Native", "TypeScript", "Expo", "Weather API", "Mobile UI"],

    year: "2026",

    role: "Mobile (React Native)",

    client: "App de Previsão do Tempo (Projeto Acadêmico)",

    previewType: "weather",

    stats: [
      { label: "Plataforma", value: "React Native" },
      { label: "API", value: "Tempo Real" },
      { label: "Pesquisa", value: "Global" },
    ],

    images: [
      "/projects/dev-tempo.jpeg",
    ],

    liveUrl: "#",

    githubUrl: "https://github.com/LuanaSAM05/app-dev-tempo-reactive-native.git",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Front-End",
    skills: [
      {
        name: "React (Hooks & Context API)",
        percentage: 80,
        icon: "ReactIcon",
      },
      {
        name: "TypeScript",
        percentage: 75,
        icon: "TsIcon",
      },
      {
        name: "Tailwind CSS & Motion",
        percentage: 80,
        icon: "TwIcon",
      },
      {
        name: "HTML5 Semântico & SEO",
        percentage: 85,
        icon: "HtmlIcon",
      },
      {
        name: "CSS3 & Responsividade",
        percentage: 85,
        icon: "CssIcon",
      },
    ],
  },

  {
    id: "backend",
    title: "Back-End",
    skills: [
      {
        name: "Node.js",
        percentage: 70,
        icon: "NodeIcon",
      },
      {
        name: "Express.js",
        percentage: 70,
        icon: "ExpressIcon",
      },
      {
        name: "REST APIs",
        percentage: 75,
        icon: "ApiIcon",
      },
      {
        name: "Git & GitHub",
        percentage: 80,
        icon: "GitIcon",
      },
    ],
  },

  {
    id: "testing-qa",
    title: "Quality Assurance",
    skills: [
      {
        name: "Testes Automatizados",
        percentage: 75,
        icon: "JestIcon",
      },
      {
        name: "Qualidade de Software",
        percentage: 80,
        icon: "QaIcon",
      },
      {
        name: "Testes de Integração",
        percentage: 70,
        icon: "TestIcon",
      },
    ],
  },
];
