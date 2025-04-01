import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Paintbrush, Code, Database, Smartphone, Rocket, 
  ChevronRight, ChevronDown, Zap, Search, Globe, Server, Info,
  ChevronsRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DevelopmentJourney = () => {
  // Inicializa com a primeira etapa (discovery) já aberta
  const [activeNode, setActiveNode] = useState("discovery");
  const [expandedNode, setExpandedNode] = useState("discovery");
  const [showCode, setShowCode] = useState(false);
  const [showTip, setShowTip] = useState(true);
  
  // Define os nós da jornada
  const journeyNodes = [
    {
      id: 'discovery',
      title: 'Descoberta',
      shortDesc: 'Análise e planejamento',
      icon: <Search className="h-5 w-5" />,
      color: 'bg-blue-500',
      description: 'Analisamos suas necessidades, público e objetivos para criar um roteiro estratégico.',
      details: [
        'Pesquisa de público e personas de usuário',
        'Análise competitiva',
        'Requisitos e objetivos do projeto',
        'Planejamento de estratégia de conteúdo',
        'Especificações técnicas',
      ],
      technologies: ['Pesquisa de Usuário', 'Analytics', 'Auditoria SEO', 'Estratégia de Conteúdo']
    },
    {
      id: 'design',
      title: 'Design',
      shortDesc: 'UI/UX e identidade visual',
      icon: <Paintbrush className="h-5 w-5" />,
      color: 'bg-violet-500',
      description: 'Criação de interfaces intuitivas e visuais envolventes alinhados com sua marca.',
      details: [
        'Wireframing e prototipagem',
        'Design de UI e identidade visual',
        'Otimização de UX',
        'Layouts responsivos',
        'Criação de sistema de design',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototipagem', 'Testes de Usuário']
    },
    {
      id: 'frontend',
      title: 'Frontend',
      shortDesc: 'Construção visual do site',
      icon: <Code className="h-5 w-5" />,
      color: 'bg-indigo-500',
      description: 'Construção dos aspectos visuais do seu site com código limpo e eficiente.',
      details: [
        'Implementação de HTML/CSS',
        'Funcionalidade JavaScript',
        'Animações e transições',
        'Conformidade de acessibilidade',
        'Compatibilidade cross-browser',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    },
    {
      id: 'backend',
      title: 'Backend',
      shortDesc: 'Lógica e funcionalidades',
      icon: <Database className="h-5 w-5" />,
      color: 'bg-purple-500',
      description: 'Desenvolvimento da lógica do servidor que alimenta seu site ou aplicação.',
      details: [
        'Desenvolvimento de API',
        'Arquitetura de banco de dados',
        'Gerenciamento de conteúdo',
        'Autenticação de usuários',
        'Renderização no servidor',
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Integração de API', 'Autenticação']
    },
    {
      id: 'responsive',
      title: 'Responsivo',
      shortDesc: 'Otimização para todos dispositivos',
      icon: <Smartphone className="h-5 w-5" />,
      color: 'bg-pink-500',
      description: 'Garantindo que seu site funcione perfeitamente em todos os dispositivos e tamanhos de tela.',
      details: [
        'Abordagem mobile-first',
        'Layouts flexíveis',
        'Testes em dispositivos',
        'Otimização de desempenho',
        'Otimização de interface touch',
      ],
      technologies: ['Media Queries', 'Grids Flexíveis', 'Testes em Dispositivos', 'UX Mobile', 'Enhancement Progressivo']
    },
    {
      id: 'deployment',
      title: 'Implantação',
      shortDesc: 'Lançamento e otimização',
      icon: <Rocket className="h-5 w-5" />,
      color: 'bg-orange-500',
      description: 'Lançamento do seu site com testes adequados e garantia de qualidade.',
      details: [
        'Configuração de pipeline CI/CD',
        'Otimização de desempenho',
        'Implementação de segurança',
        'Integração de analytics',
        'Finalização de SEO',
      ],
      technologies: ['Vercel', 'AWS', 'Docker', 'CI/CD', 'Testes de Desempenho', 'Monitoramento']
    }
  ];

  // Exemplos de código para cada estágio
  const codeSamples = {
    discovery: {
      filename: 'requisitos-projeto.md',
      language: 'markdown',
      code: `# Documento de Requisitos do Projeto

## Cliente: Nave Mãe Soluções Web

### Objetivos do Projeto:
- Criar um site moderno e responsivo
- Melhorar taxas de conversão em 25%
- Aprimorar desempenho de SEO
- Implementar CMS amigável

### Público-Alvo:
- Pequenas e médias empresas
- Startups de tecnologia
- Negócios de e-commerce

### Requisitos Técnicos:
- Design responsivo mobile-first
- Tempo de carregamento < 2 segundos
- Arquitetura otimizada para SEO
- Integração com analytics
- Formulários de contato seguros`
    },
    design: {
      filename: 'sistema-design.css',
      language: 'css',
      code: `:root {
  /* Paleta de Cores */
  --primary: #0f172a;
  --primary-light: #1e293b;
  --accent: #3b82f6;
  --text: #0f172a;
  --text-light: #64748b;
  --background: #ffffff;
  --background-alt: #f8fafc;
  
  /* Tipografia */
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'Roboto Mono', monospace;
  
  /* Espaçamento */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Raio de Borda */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  
  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}`
    },
    frontend: {
      filename: 'SecaoHero.jsx',
      language: 'jsx',
      code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function SecaoHero() {
  return (
    <section className="relative py-8 md:py-16">
      {/* Elementos de fundo animados */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 -left-4 w-32 md:w-72 
                    h-32 md:h-72 bg-primary/30 rounded-full 
                    mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -top-4 -right-4 w-32 md:w-72 
                    h-32 md:h-72 bg-blue-500/20 rounded-full 
                    mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container px-4 text-center">
        <motion.h1 
          className="text-2xl md:text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Sua solução para a <span className="text-primary">web</span>
        </motion.h1>
        
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button className="px-4 py-2 bg-primary text-white 
                          rounded-md flex items-center text-sm">
            Iniciar Projeto
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}`
    },
    backend: {
      filename: 'api.js',
      language: 'javascript',
      code: `// Endpoint de API para formulário de contato
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const contactSchema = require('../models/Contact');

// POST /api/contact
router.post(
  '/contact',
  [
    // Validar campos de entrada
    body('name').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('message').notEmpty().withMessage('Mensagem é obrigatória'),
    body('phone').optional(),
  ],
  async (req, res) => {
    // Verificar erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Salvar contato no banco de dados
      const contact = new contactSchema({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
      });
      await contact.save();

      // Enviar notificação por email
      await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: 'Nova mensagem de contato',
        text: \`Nome: \${req.body.name}
          Email: \${req.body.email}
          Telefone: \${req.body.phone || 'Não informado'}
          
          Mensagem:
          \${req.body.message}
        \`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Erro no formulário:', error);
      res.status(500).json({ error: 'Erro ao processar' });
    }
  }
);`
    },
    responsive: {
      filename: 'responsivo.css',
      language: 'css',
      code: `/* Base (mobile first) */
.container {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}

.header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-menu {
  display: none; /* Oculto em mobile */
}

.mobile-menu-button {
  display: block;
}

/* Tablets (768px e acima) */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
  
  .nav-menu {
    display: flex;
  }
  
  .mobile-menu-button {
    display: none;
  }
  
  .hero-section {
    padding: 4rem 0;
  }
}`
    },
    deployment: {
      filename: 'vercel.json',
      language: 'json',
      code: `{
  "version": 2,
  "builds": [
    {
      "src": "next.config.js",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "headers": {
        "cache-control": "s-maxage=0"
      },
      "continue": true
    },
    {
      "src": "/(.*\\.(js|css|svg|png|jpg|jpeg|gif|ico|json)$)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      },
      "continue": true
    }
  ],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "meusite.com.br"
  }
}`
    }
  };

  // Conteúdo de preview para cada estágio - simplificado para mobile
  const stagePreview = {
    discovery: (
      <div className="space-y-3">
        <div className="border rounded p-2 bg-background">
          <h4 className="text-xs font-medium mb-1">Notas da Entrevista</h4>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>• Website modernizado com experiência mobile</li>
            <li>• Melhorar rankings SEO e tráfego orgânico</li>
            <li>• Integração com CRM</li>
          </ul>
        </div>
        <div className="border rounded p-2 bg-background">
          <h4 className="text-xs font-medium mb-1">Análise Competitiva</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-1 border rounded bg-muted/30 text-center text-xs">
              <div className="w-full aspect-video bg-muted mb-1 rounded"></div>
              Concorrente A
            </div>
            <div className="p-1 border rounded bg-muted/30 text-center text-xs">
              <div className="w-full aspect-video bg-muted mb-1 rounded"></div>
              Concorrente B
            </div>
          </div>
        </div>
      </div>
    ),
    design: (
      <div className="space-y-3">
        <div className="border p-2 rounded-md border-dashed">
          <div className="flex justify-between items-center p-1 border-b border-dashed mb-1">
            <div className="w-12 h-3 bg-muted rounded"></div>
            <div className="flex gap-1">
              <div className="w-6 h-2 bg-muted rounded"></div>
              <div className="w-6 h-2 bg-muted rounded"></div>
            </div>
          </div>
          <div className="p-1 space-y-1">
            <div className="w-3/4 h-5 bg-muted rounded mx-auto"></div>
            <div className="w-1/2 h-3 bg-muted rounded mx-auto"></div>
            <div className="w-1/4 h-6 bg-primary/20 rounded mx-auto"></div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 aspect-square rounded-md bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-500 border font-medium text-xs">
            Primária
          </div>
          <div className="flex-1 aspect-square rounded-md bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center text-indigo-500 border font-medium text-xs">
            Sec.
          </div>
          <div className="flex-1 aspect-square rounded-md bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center text-neutral-500 border font-medium text-xs">
            Neutra
          </div>
        </div>
      </div>
    ),
    frontend: (
      <div className="border rounded-md overflow-hidden">
        <div className="flex items-center justify-between p-2 border-b bg-background">
          <div className="font-medium text-xs">Nave Mãe</div>
          <div className="flex gap-3">
            <div className="text-xs text-muted-foreground">Serviços</div>
            <div className="text-xs text-muted-foreground">Contato</div>
          </div>
        </div>
        <div className="p-3 text-center bg-gradient-to-b from-background to-muted/30">
          <h3 className="text-sm font-medium mb-1">Sua solução web</h3>
          <p className="text-xs text-muted-foreground mb-2">Desenvolvimento profissional</p>
          <button className="px-2 py-1 bg-primary text-white rounded-md text-xs">Iniciar Projeto</button>
        </div>
      </div>
    ),
    backend: (
      <div className="space-y-2">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-muted p-1.5 border-b text-xs font-medium">API Endpoints</div>
          <div className="p-2 text-xs">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded mr-1 text-[10px]">GET</span>
                <span className="text-[10px]">/api/services</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded mr-1 text-[10px]">POST</span>
                <span className="text-[10px]">/api/contact</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-md overflow-hidden p-1.5">
          <div className="w-full h-20 bg-muted/50 rounded flex items-center justify-center">
            <div className="text-xs text-muted-foreground">DB Schema</div>
          </div>
        </div>
      </div>
    ),
    responsive: (
      <div className="flex justify-center">
        <motion.div 
          className="border rounded-md overflow-hidden flex flex-col max-w-[100px] bg-background"
          initial={{ width: "70%" }}
          animate={{ width: ["70%", "100px", "70%", "150px", "100px"] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          <div className="h-6 bg-muted/30 border-b flex items-center justify-between px-1.5">
            <div className="w-10 h-2 bg-muted rounded"></div>
            <div className="w-2 h-2 bg-muted rounded"></div>
          </div>
          <div className="p-1.5 text-center">
            <div className="w-full h-3 bg-muted rounded mb-1 mx-auto"></div>
            <div className="w-3/4 h-2 bg-muted rounded mb-1 mx-auto"></div>
            <div className="w-1/2 h-4 bg-primary/30 rounded mx-auto"></div>
          </div>
        </motion.div>
      </div>
    ),
    deployment: (
      <div className="space-y-2">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-muted p-1.5 border-b text-xs font-medium flex items-center">
            <Server className="h-3 w-3 mr-1" />
            <span>Status</span>
          </div>
          <div className="p-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs">Produção</span>
              <div className="flex items-center text-xs text-green-500">
                <span className="h-1.5 w-1.5 bg-green-500 rounded-full mr-1"></span>
                <span>Online</span>
              </div>
            </div>
            <div className="w-full h-1 bg-muted mb-2 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500 rounded-full" 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
              />
            </div>
            <div className="text-[10px] flex items-center gap-1 text-muted-foreground">
              <Globe className="h-2 w-2" />
              <span>navemae.com</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="border rounded-md p-1.5">
            <div className="text-[10px] font-medium mb-0.5">Page Speed</div>
            <div className="text-sm font-medium">98<span className="text-[10px] text-muted-foreground">/100</span></div>
          </div>
          <div className="border rounded-md p-1.5">
            <div className="text-[10px] font-medium mb-0.5">SEO</div>
            <div className="text-sm font-medium">95<span className="text-[10px] text-muted-foreground">/100</span></div>
          </div>
        </div>
      </div>
    )
  };

  // Processar clique no nó
  const handleNodeClick = (id) => {
    setActiveNode(id);
    if (expandedNode !== id) {
      setExpandedNode(id);
    }
    // Esconder a dica depois que o usuário clicar em qualquer etapa
    setShowTip(false);
  };

  const handleShowCodeToggle = () => {
    setShowCode(!showCode);
  };

  // Função para obter o próximo nó na jornada
  const getNextNode = (currentNodeId) => {
    const currentIndex = journeyNodes.findIndex(node => node.id === currentNodeId);
    if (currentIndex < journeyNodes.length - 1) {
      return journeyNodes[currentIndex + 1].id;
    }
    return null;
  };

  // Navegar para o próximo nó
  const goToNextNode = () => {
    const nextNodeId = getNextNode(activeNode);
    if (nextNodeId) {
      setActiveNode(nextNodeId);
      setExpandedNode(nextNodeId);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-medium mb-3 sm:mb-4">Jornada de Desenvolvimento</h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Explore nosso processo de desenvolvimento da concepção ao lançamento.
        </p>
      </div>

      {/* Visualização do Mapa de Jornada */}
      <div className="border rounded-lg mb-6 sm:mb-8 p-3 sm:p-6 bg-muted/20">
        {/* Dica para usuários - mostra apenas inicialmente */}
        {showTip && (
          <motion.div 
            className="mb-4 sm:mb-6 bg-primary/10 p-2 sm:p-3 rounded-lg flex items-start gap-2 text-xs sm:text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p><strong>Dica:</strong> Toque nas etapas para explorar cada fase do nosso processo.</p>
            </div>
          </motion.div>
        )}

        {/* Layout para desktop - horizontal */}
        <div className="hidden md:relative md:flex md:flex-row md:items-center md:justify-between md:gap-4 md:mb-8">
          {journeyNodes.map((node, index) => (
            <React.Fragment key={node.id}>
              <motion.div 
                className={`relative z-10 flex-none ${activeNode === node.id ? 'scale-110' : ''}`}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleNodeClick(node.id)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-colors
                   ${activeNode === node.id ? 'bg-white shadow-lg' : 'bg-white/80'}`}>
                  <div className={`p-2 rounded-full ${node.color.replace('bg-', 'text-')}`}>
                    {node.icon}
                  </div>
                </div>
                <div className="text-center mt-2 text-sm font-medium">{node.title}</div>
              </motion.div>
              
              {index < journeyNodes.length - 1 && (
                <div className="flex-1">
                  <div className="h-0.5 bg-muted relative">
                    {activeNode === node.id && (
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Layout para mobile - vertical */}
        <div className="md:hidden space-y-2 mb-6">
          {journeyNodes.map((node, index) => (
            <motion.div 
              key={node.id}
              className={`border rounded-lg overflow-hidden transition-colors
                ${activeNode === node.id ? 'border-primary/50 bg-white/80 shadow-sm' : 'border-muted bg-white/50'}`}
              onClick={() => handleNodeClick(node.id)}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center p-3 cursor-pointer">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${node.color}`}>
                  {React.cloneElement(node.icon, { className: "h-5 w-5 text-white" })}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{node.title}</div>
                  <div className="text-xs text-muted-foreground">{node.shortDesc}</div>
                </div>
                {activeNode === node.id && (
                  <div className="ml-2 text-primary">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paineis de Detalhes */}
        <AnimatedPanel isOpen={expandedNode !== null}>
          {expandedNode && (
            <div className="bg-background border rounded-lg p-3 sm:p-4 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-full ${journeyNodes.find(n => n.id === expandedNode)?.color}`}>
                  {journeyNodes.find(n => n.id === expandedNode)?.icon}
                </div>
                <div>
                  <h3 className="font-medium">{journeyNodes.find(n => n.id === expandedNode)?.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{journeyNodes.find(n => n.id === expandedNode)?.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-medium">O que fazemos nesta fase:</h4>
                    <Button variant="outline" size="sm" className="h-8 text-xs" onClick={handleShowCodeToggle}>
                      {showCode ? 'Ver Exemplos' : 'Ver Código'}
                    </Button>
                  </div>

                  {!showCode ? (
                    <>
                      <ul className="space-y-2">
                        {journeyNodes.find(n => n.id === expandedNode)?.details.map((detail, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                              <ChevronRight className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-xs sm:text-sm">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="pt-3 sm:pt-4">
                        <h4 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Tecnologias utilizadas:</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {journeyNodes.find(n => n.id === expandedNode)?.technologies.map((tech, i) => (
                            <motion.div
                              key={i}
                              className="px-2 py-1 rounded-full text-[10px] sm:text-xs bg-muted"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Card className="bg-black text-green-400 font-mono text-[10px] sm:text-xs p-2 sm:p-3 h-[220px] sm:h-[300px] overflow-hidden">
                      <div className="flex items-center gap-1 sm:gap-2 mb-2 text-[10px] sm:text-xs text-white/70">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
                        <span>{codeSamples[expandedNode]?.filename}</span>
                      </div>
                      <div className="overflow-auto h-[calc(100%-20px)]">
                        <pre className="whitespace-pre-wrap">{codeSamples[expandedNode]?.code}</pre>
                      </div>
                    </Card>
                  )}
                </div>

                <div>
                  <Tabs defaultValue="preview" className="w-full">
                    <TabsList className="mb-3 w-full h-9">
                      <TabsTrigger value="preview" className="text-xs">Visualização</TabsTrigger>
                      <TabsTrigger value="results" className="text-xs">Resultados</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="preview" className="mt-0">
                      <Card className="overflow-hidden border bg-background">
                        <CardContent className="p-0">
                          <div className="bg-muted/30 text-[10px] sm:text-xs px-3 py-1.5 border-b flex items-center justify-between">
                            <span>Preview</span>
                            <div className="flex items-center gap-1 sm:gap-2">
                              <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
                              <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"></div>
                              <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <div className="h-[180px] sm:h-[280px] p-3 overflow-hidden flex items-center justify-center">
                            <motion.div
                              className="h-full w-full"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {stagePreview[expandedNode]}
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="results" className="mt-0">
                      <Card className="overflow-hidden border bg-muted/20 h-[230px] sm:h-[336px]">
                        <CardContent className="p-3 sm:p-4">
                          <h4 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4">Métricas de Sucesso:</h4>
                          
                          {expandedNode === 'discovery' && (
                            <div className="space-y-3 sm:space-y-4">
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Definição de Requisitos</span>
                                  <span className="text-xs font-medium">100%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-blue-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Análise Competitiva</span>
                                  <span className="text-xs font-medium">85%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-blue-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '85%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Pesquisa de Audiência</span>
                                  <span className="text-xs font-medium">90%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-blue-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '90%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {expandedNode === 'design' && (
                            <div className="space-y-3 sm:space-y-4">
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Fidelidade ao Briefing</span>
                                  <span className="text-xs font-medium">95%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-violet-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '95%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Consistência Visual</span>
                                  <span className="text-xs font-medium">100%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-violet-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Usabilidade</span>
                                  <span className="text-xs font-medium">90%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-violet-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '90%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {expandedNode === 'frontend' && (
                            <div className="space-y-3 sm:space-y-4">
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Fidelidade ao Design</span>
                                  <span className="text-xs font-medium">98%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-indigo-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '98%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Qualidade do Código</span>
                                  <span className="text-xs font-medium">95%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-indigo-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '95%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Acessibilidade</span>
                                  <span className="text-xs font-medium">92%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-indigo-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '92%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {expandedNode === 'backend' && (
                            <div className="space-y-3 sm:space-y-4">
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Desempenho</span>
                                  <span className="text-xs font-medium">96%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-purple-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '96%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Segurança</span>
                                  <span className="text-xs font-medium">100%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-purple-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Escalabilidade</span>
                                  <span className="text-xs font-medium">94%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-purple-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '94%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {expandedNode === 'responsive' && (
                            <div className="space-y-3 sm:space-y-4">
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Mobile</span>
                                  <span className="text-xs font-medium">100%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-pink-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Tablet</span>
                                  <span className="text-xs font-medium">98%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-pink-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '98%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Desktop</span>
                                  <span className="text-xs font-medium">100%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-pink-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {expandedNode === 'deployment' && (
                            <div className="space-y-3 sm:space-y-4">
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Velocidade</span>
                                  <span className="text-xs font-medium">98/100</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-orange-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '98%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">SEO</span>
                                  <span className="text-xs font-medium">95/100</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-orange-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '95%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Acessibilidade</span>
                                  <span className="text-xs font-medium">92/100</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-orange-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '92%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                              
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs">Boas Práticas</span>
                                  <span className="text-xs font-medium">98/100</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                                  <motion.div 
                                    className="h-full bg-orange-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '98%' }}
                                    transition={{ duration: 1 }}
                                  ></motion.div>
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              
              {/* Botão de navegação para próxima etapa - visible apenas em mobile */}
              {getNextNode(expandedNode) && (
                <motion.div 
                  className="mt-4 w-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    onClick={goToNextNode} 
                    className="w-full justify-between text-xs sm:text-sm bg-primary/10 hover:bg-primary/20 text-primary"
                  >
                    <span>Próxima etapa: {journeyNodes.find(n => n.id === getNextNode(expandedNode))?.title}</span>
                    <ChevronsRight className="h-4 w-4 ml-1" />
                  </Button>
                </motion.div>
              )}
            </div>
          )}
        </AnimatedPanel>
      </div>
    </div>
  );
};

// Componente auxiliar para painéis animados
const AnimatedPanel = ({ children, isOpen }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ 
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default DevelopmentJourney;