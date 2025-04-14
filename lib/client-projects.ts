// lib/client-projects.ts
// Versão da biblioteca de projetos que funciona no lado do cliente

// Define o tipo de projeto
export interface Project {
    slug: string;
    title: string;
    description: string;
    client: string;
    date: string;
    category: string;
    services: string[];
    image?: string;
    images?: string[];
    content?: {
      sections: Array<{
        type: 'text' | 'image' | 'quote';
        content: string;
      }>;
    };
  }
  
  // Dados estáticos dos projetos
  const projects: Project[] = [
    {
      slug: 'portal-interdimensional',
      title: "Portal Interdimensional",
      description: "Redesign completo com interface que transcende o espaço-tempo.",
      client: "Corporação Nebulosa",
      date: "2025-03-15",
      category: "Desenvolvimento Web",
      services: ["Design UI/UX", "Desenvolvimento Frontend", "SEO"],
      image: "/images/projects/portal-interdimensional.jpg",
      images: [
        "/images/projects/portal-interdimensional-1.jpg",
        "/images/projects/portal-interdimensional-2.jpg"
      ],
      content: {
        sections: [
          {
            type: 'text',
            content: "O Portal Interdimensional é uma plataforma digital desenvolvida para a Corporação Nebulosa, uma empresa inovadora no setor de tecnologias avançadas. O projeto envolveu um redesign completo da plataforma, com foco em uma interface que transcende as expectativas convencionais de usabilidade."
          },
          {
            type: 'text',
            content: "Nosso objetivo foi criar uma experiência digital que se adaptasse perfeitamente a qualquer dispositivo, proporcionando navegação intuitiva e rápida acesso às informações essenciais."
          },
          {
            type: 'image',
            content: "/images/projects/portal-interdimensional-detail.jpg"
          },
          {
            type: 'text',
            content: "Utilizamos tecnologias de ponta como React, Next.js e Framer Motion para criar animações fluidas e transições que elevam a experiência do usuário a um novo patamar. O resultado é um portal que não apenas atende às necessidades funcionais, mas também causa uma impressão memorável em todos os visitantes."
          },
          {
            type: 'quote',
            content: "A Nave Mãe conseguiu transformar nossa visão em realidade digital. O novo portal não apenas melhorou nossos indicadores de conversão em 300%, mas também estabeleceu um novo padrão para experiências digitais em nosso setor."
          },
          {
            type: 'text',
            content: "O projeto também incluiu otimização SEO completa, garantindo que o portal seja facilmente encontrado pelos motores de busca intergalácticos, expandindo o alcance da Corporação Nebulosa para novos horizontes digitais."
          }
        ]
      }
    },
    {
      slug: 'ecommerce-jupteriano',
      title: "E-commerce Premium Jupteriano",
      description: "Plataforma de vendas completa com entregas em qualquer lua de Júpiter.",
      client: "JupStore",
      date: "2025-02-10",
      category: "Loja Virtual",
      services: ["E-commerce", "UX/UI Design", "Desenvolvimento Frontend", "Desenvolvimento Backend"],
      image: "/images/projects/ecommerce-jupteriano.jpg",
      images: [
        "/images/projects/ecommerce-jupteriano-1.jpg",
        "/images/projects/ecommerce-jupteriano-2.jpg"
      ],
      content: {
        sections: [
          {
            type: 'text',
            content: "A JupStore é uma loja virtual especializada em produtos premium com serviço de entrega para qualquer lua de Júpiter. Nosso desafio foi desenvolver uma plataforma de e-commerce que fosse tão sofisticada quanto os produtos oferecidos."
          },
          {
            type: 'text',
            content: "A solução desenvolvida incluiu um sistema de carrinho inteligente, filtros de busca avançados e um checkout otimizado para maximizar conversões."
          },
          {
            type: 'image',
            content: "/images/projects/ecommerce-jupteriano-detail.jpg"
          },
          {
            type: 'text',
            content: "A arquitetura do site foi construída pensando na escalabilidade, permitindo que a JupStore adicione facilmente novos produtos e categorias à medida que expande seu catálogo. A integração perfeita com o sistema de logística garante que o status de entrega seja atualizado em tempo real."
          },
          {
            type: 'quote',
            content: "A plataforma criada pela Nave Mãe superou todas as nossas expectativas. Desde o lançamento, tivemos um aumento de 250% nas vendas e uma redução significativa na taxa de abandono de carrinho."
          },
          {
            type: 'text',
            content: "O design responsivo garante que a experiência seja impecável em qualquer dispositivo, desde tablets até os mais avançados dispositivos holográficos disponíveis nas luas de Júpiter."
          }
        ]
      }
    },
    {
      slug: 'aplicacao-educacional-marciana',
      title: "Aplicação Educacional Marciana",
      description: "Sistema de aprendizado online que traduz conhecimento terrestre para qualquer espécie.",
      client: "Academia Marciana",
      date: "2025-01-20",
      category: "Aplicação Web",
      services: ["Desenvolvimento Web", "UX/UI Design", "Plataforma Educacional"],
      image: "/images/projects/aplicacao-educacional-marciana.jpg",
      images: [
        "/images/projects/aplicacao-educacional-marciana-1.jpg",
        "/images/projects/aplicacao-educacional-marciana-2.jpg"
      ],
      content: {
        sections: [
          {
            type: 'text',
            content: "A Academia Marciana, uma instituição de ensino inovadora, nos desafiou a criar uma aplicação educacional que tornasse o conhecimento terrestre acessível para estudantes de diversas espécies e origens."
          },
          {
            type: 'text',
            content: "Desenvolvemos uma plataforma adaptativa que ajusta automaticamente o conteúdo e a interface de acordo com as preferências e necessidades específicas de cada usuário, garantindo uma experiência de aprendizado personalizada."
          },
          {
            type: 'image',
            content: "/images/projects/aplicacao-educacional-marciana-detail.jpg"
          },
          {
            type: 'text',
            content: "A solução inclui um sistema avançado de tradução conceitual, que vai além da simples tradução de idiomas, adaptando conceitos complexos para os diferentes modelos mentais das diversas espécies de estudantes."
          },
          {
            type: 'quote',
            content: "A plataforma desenvolvida pela Nave Mãe revolucionou nossa abordagem educacional. Agora podemos realmente dizer que oferecemos educação universal, sem barreiras de comunicação entre espécies."
          },
          {
            type: 'text',
            content: "O sistema também inclui ferramentas de análise de desempenho que permitem aos educadores acompanhar o progresso dos alunos e identificar áreas onde o material didático pode ser melhorado para maior eficácia pedagógica."
          }
        ]
      }
    }
  ];
  
  // Função para obter todos os projetos
  export function getAllProjects(): Project[] {
    // Ordenar por data (mais recentes primeiro)
    return [...projects].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
  
  // Função para obter um projeto específico pelo slug
  export function getProjectBySlug(slug: string): Project | null {
    const project = projects.find(p => p.slug === slug);
    return project || null;
  }
  
  // Função para obter projetos relacionados (excluindo o projeto atual)
  export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
    const allProjects = getAllProjects();
    return allProjects
      .filter(project => project.slug !== currentSlug)
      .slice(0, limit);
  }