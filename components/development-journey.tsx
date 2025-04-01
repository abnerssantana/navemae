import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Paintbrush, Code, Database, Smartphone, Rocket, 
  ChevronRight, ChevronDown, Zap, Search, Globe, Server 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DevelopmentJourney = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [expandedNode, setExpandedNode] = useState(null);
  const [showCode, setShowCode] = useState(false);
  
  // Define the journey nodes
  const journeyNodes = [
    {
      id: 'discovery',
      title: 'Discovery',
      icon: <Search className="h-5 w-5" />,
      color: 'bg-blue-500',
      description: 'We analyze your needs, audience, and goals to create a strategic roadmap.',
      details: [
        'Audience research and user personas',
        'Competitive analysis',
        'Project requirements and goals',
        'Content strategy planning',
        'Technical specifications',
      ],
      technologies: ['User Research', 'Analytics', 'SEO Audit', 'Content Strategy']
    },
    {
      id: 'design',
      title: 'Design',
      icon: <Paintbrush className="h-5 w-5" />,
      color: 'bg-violet-500',
      description: 'Creating intuitive interfaces and engaging visuals that align with your brand.',
      details: [
        'Wireframing and prototyping',
        'UI design and branding',
        'UX optimization',
        'Responsive layouts',
        'Design system creation',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Testing']
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <Code className="h-5 w-5" />,
      color: 'bg-indigo-500',
      description: 'Building the visual aspects of your website with clean, efficient code.',
      details: [
        'HTML/CSS implementation',
        'JavaScript functionality',
        'Animation and transitions',
        'Accessibility compliance',
        'Cross-browser compatibility',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: <Database className="h-5 w-5" />,
      color: 'bg-purple-500',
      description: 'Developing the server-side logic that powers your website or application.',
      details: [
        'API development',
        'Database architecture',
        'Content management',
        'User authentication',
        'Server-side rendering',
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'API Integration', 'Authentication']
    },
    {
      id: 'responsive',
      title: 'Responsive',
      icon: <Smartphone className="h-5 w-5" />,
      color: 'bg-pink-500',
      description: 'Ensuring your website works perfectly on all devices and screen sizes.',
      details: [
        'Mobile-first approach',
        'Flexible layouts',
        'Device testing',
        'Performance optimization',
        'Touch interface optimization',
      ],
      technologies: ['Media Queries', 'Flexible Grids', 'Device Testing', 'Mobile UX', 'Progressive Enhancement']
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: <Rocket className="h-5 w-5" />,
      color: 'bg-orange-500',
      description: 'Launching your site with proper testing and quality assurance.',
      details: [
        'CI/CD pipeline setup',
        'Performance optimization',
        'Security implementation',
        'Analytics integration',
        'SEO finalization',
      ],
      technologies: ['Vercel', 'AWS', 'Docker', 'CI/CD', 'Performance Testing', 'Monitoring']
    }
  ];

  // Code sample for each stage
  const codeSamples = {
    discovery: {
      filename: 'project-requirements.md',
      language: 'markdown',
      code: `# Project Requirements Document

## Client: Nave Mãe Web Solutions

### Project Goals:
- Create a modern, responsive website
- Improve conversion rates by 25%
- Enhance SEO performance
- Implement user-friendly CMS

### Target Audience:
- Small to medium businesses
- Technology startups
- E-commerce businesses

### Technical Requirements:
- Mobile-first responsive design
- Page load time < 2 seconds
- SEO optimized architecture
- Integration with analytics
- Secure contact forms

### Success Metrics:
- Improved Google PageSpeed score > 90
- Increased organic traffic by 30%
- 25% higher conversion rate
- Reduced bounce rate to below 40%`
    },
    design: {
      filename: 'design-system.css',
      language: 'css',
      code: `:root {
  /* Color Palette */
  --primary: #0f172a;
  --primary-light: #1e293b;
  --accent: #3b82f6;
  --text: #0f172a;
  --text-light: #64748b;
  --background: #ffffff;
  --background-alt: #f8fafc;
  
  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Roboto Mono', monospace;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-8: 2rem;
  --space-16: 4rem;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}

/* Base Components */
.button {
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-weight: 500;
  transition: all 0.2s ease;
}

.button-primary {
  background-color: var(--accent);
  color: white;
  border: none;
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}`
    },
    frontend: {
      filename: 'HeroSection.jsx',
      language: 'jsx',
      code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.h1 
          className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Sua solução completa para a <span className="text-primary">web.</span>
        </motion.h1>
        
        <motion.p 
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Desenvolvimento web profissional para construir, escalar e 
          otimizar sua presença online.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button className="px-6 py-3 bg-primary text-white rounded-md flex items-center">
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
      code: `// Contact form API endpoint
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const contactSchema = require('../models/Contact');

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// POST /api/contact
router.post(
  '/contact',
  [
    // Validate input fields
    body('name').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('message').notEmpty().withMessage('Mensagem é obrigatória'),
    body('phone').optional(),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Save contact to database
      const contact = new contactSchema({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
      });
      await contact.save();

      // Send email notification
      await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: 'Nova mensagem de contato - Website',
        text: \`
          Nome: \${req.body.name}
          Email: \${req.body.email}
          Telefone: \${req.body.phone || 'Não informado'}
          
          Mensagem:
          \${req.body.message}
        \`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: 'Erro ao processar solicitação' });
    }
  }
);

module.exports = router;`
    },
    responsive: {
      filename: 'responsive.css',
      language: 'css',
      code: `/* Base styles (mobile first) */
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
  display: none; /* Hidden on mobile */
}

.mobile-menu-button {
  display: block;
}

.hero-section {
  padding: 3rem 0;
  text-align: center;
}

.hero-title {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Small tablets (640px and up) */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablets (768px and up) */
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
  
  .hero-title {
    font-size: 3rem;
  }
}

/* Laptops (1024px and up) */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
  
  .hero-section {
    padding: 5rem 0;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
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
    },
    {
      "src": "/(.*)",
      "headers": {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com;"
      },
      "continue": true
    }
  ],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "meusite.com.br"
  },
  "github": {
    "silent": true
  }
}`
    }
  };

  // Preview content for each stage
  const stagePreview = {
    discovery: (
      <div className="space-y-4">
        <div className="border rounded p-3 bg-background">
          <h4 className="text-sm font-medium mb-2">Client Interview Notes</h4>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>• Need modernized website with improved mobile experience</li>
            <li>• Current conversion rate is below industry average</li>
            <li>• Want to improve SEO rankings and organic traffic</li>
            <li>• Need integration with their CRM system</li>
          </ul>
        </div>
        <div className="border rounded p-3 bg-background">
          <h4 className="text-sm font-medium mb-2">Competitor Analysis</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 border rounded bg-muted/30 text-center text-xs">
              <div className="w-full aspect-video bg-muted mb-1 rounded"></div>
              Competitor A
            </div>
            <div className="p-2 border rounded bg-muted/30 text-center text-xs">
              <div className="w-full aspect-video bg-muted mb-1 rounded"></div>
              Competitor B
            </div>
          </div>
        </div>
      </div>
    ),
    design: (
      <div className="space-y-4">
        <div className="border p-3 rounded-md border-dashed">
          <div className="flex justify-between items-center p-2 border-b border-dashed mb-2">
            <div className="w-16 h-4 bg-muted rounded"></div>
            <div className="flex gap-2">
              <div className="w-8 h-3 bg-muted rounded"></div>
              <div className="w-8 h-3 bg-muted rounded"></div>
              <div className="w-8 h-3 bg-muted rounded"></div>
            </div>
          </div>
          <div className="p-2 space-y-2">
            <div className="w-3/4 h-6 bg-muted rounded mx-auto"></div>
            <div className="w-1/2 h-4 bg-muted rounded mx-auto"></div>
            <div className="w-1/4 h-8 bg-primary/20 rounded mx-auto"></div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 aspect-square rounded-md bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-500 border font-medium text-xs">
            Primary
          </div>
          <div className="flex-1 aspect-square rounded-md bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center text-indigo-500 border font-medium text-xs">
            Secondary
          </div>
          <div className="flex-1 aspect-square rounded-md bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center text-neutral-500 border font-medium text-xs">
            Neutral
          </div>
        </div>
      </div>
    ),
    frontend: (
      <div className="border rounded-md overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b bg-background">
          <div className="font-medium text-sm">Nave Mãe</div>
          <div className="flex gap-4">
            <div className="text-xs text-muted-foreground">Serviços</div>
            <div className="text-xs text-muted-foreground">Sobre</div>
            <div className="text-xs text-muted-foreground">Contato</div>
          </div>
        </div>
        <div className="p-4 text-center bg-gradient-to-b from-background to-muted/30">
          <h3 className="text-lg font-medium mb-2">Sua solução completa para a web</h3>
          <p className="text-xs text-muted-foreground mb-3">Desenvolvimento web profissional para sua presença online</p>
          <button className="px-3 py-1.5 bg-primary text-white rounded-md text-xs">Iniciar Projeto</button>
        </div>
      </div>
    ),
    backend: (
      <div className="space-y-3">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-muted p-2 border-b text-xs font-medium">API Endpoints</div>
          <div className="p-3 text-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded mr-2">GET</span>
                <span>/api/services</span>
              </div>
              <span className="text-muted-foreground">List all services</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded mr-2">POST</span>
                <span>/api/contact</span>
              </div>
              <span className="text-muted-foreground">Submit contact form</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded mr-2">GET</span>
                <span>/api/projects/:id</span>
              </div>
              <span className="text-muted-foreground">Get project details</span>
            </div>
          </div>
        </div>
        <div className="border rounded-md overflow-hidden p-2">
          <div className="w-full h-24 bg-muted/50 rounded flex items-center justify-center">
            <div className="text-xs text-muted-foreground">Database Schema</div>
          </div>
        </div>
      </div>
    ),
    responsive: (
      <div className="flex justify-center">
        <motion.div 
          className="border rounded-md overflow-hidden flex flex-col max-w-[150px] bg-background"
          initial={{ width: "90%" }}
          animate={{ width: ["90%", "150px", "90%", "300px", "150px"] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          <div className="h-8 bg-muted/30 border-b flex items-center justify-between px-2">
            <div className="w-16 h-3 bg-muted rounded"></div>
            <div className="w-3 h-3 bg-muted rounded"></div>
          </div>
          <div className="p-2 text-center">
            <div className="w-full h-4 bg-muted rounded mb-2 mx-auto"></div>
            <div className="w-3/4 h-3 bg-muted rounded mb-2 mx-auto"></div>
            <div className="w-1/2 h-6 bg-primary/30 rounded mx-auto"></div>
          </div>
        </motion.div>
      </div>
    ),
    deployment: (
      <div className="space-y-3">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-muted p-2 border-b text-xs font-medium flex items-center">
            <Server className="h-3 w-3 mr-1" />
            <span>Deployment Status</span>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs">Production</span>
              <div className="flex items-center text-xs text-green-500">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                <span>Live</span>
              </div>
            </div>
            <div className="w-full h-1 bg-muted mb-3 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500 rounded-full" 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
              />
            </div>
            <div className="text-xs flex items-center gap-1 text-muted-foreground">
              <Globe className="h-3 w-3" />
              <span>navemae.com</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="border rounded-md p-2">
            <div className="text-xs font-medium mb-1">Page Speed</div>
            <div className="text-lg font-medium">98<span className="text-xs text-muted-foreground">/100</span></div>
          </div>
          <div className="border rounded-md p-2">
            <div className="text-xs font-medium mb-1">SEO Score</div>
            <div className="text-lg font-medium">95<span className="text-xs text-muted-foreground">/100</span></div>
          </div>
        </div>
      </div>
    )
  };

  // Handle node click
  const handleNodeClick = (id) => {
    setActiveNode(id);
    if (expandedNode !== id) {
      setExpandedNode(id);
    }
  };

  const handleShowCodeToggle = () => {
    setShowCode(!showCode);
  };

  // Setup progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-advance through nodes (optional)
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium mb-4">Jornada de Desenvolvimento</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore nosso processo de desenvolvimento da concepção ao lançamento, 
          vendo como transformamos ideias em sites de alto desempenho.
        </p>
      </div>

      {/* Journey Map Visualization */}
      <div className="border rounded-lg mb-8 p-4 lg:p-8 bg-muted/20">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
          {journeyNodes.map((node, index) => (
            <React.Fragment key={node.id}>
              <motion.div 
                className={`relative z-10 flex-none ${activeNode === node.id ? 'scale-110' : ''}`}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleNodeClick(node.id)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer
                   ${activeNode === node.id ? 'bg-white shadow-lg' : 'bg-white/80'}`}>
                  <div className={`p-2 rounded-full ${node.color.replace('bg-', 'text-')}`}>
                    {node.icon}
                  </div>
                </div>
                <div className="text-center mt-2 text-sm font-medium">{node.title}</div>
              </motion.div>
              
              {index < journeyNodes.length - 1 && (
                <div className="flex-1 hidden lg:block">
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
              
              {index < journeyNodes.length - 1 && (
                <div className="lg:hidden">
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Detail Panels */}
        <AnimatedPanel isOpen={expandedNode !== null}>
          {expandedNode && (
            <div className="bg-background border rounded-lg p-4 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-full ${journeyNodes.find(n => n.id === expandedNode)?.color}`}>
                  {journeyNodes.find(n => n.id === expandedNode)?.icon}
                </div>
                <div>
                  <h3 className="font-medium">{journeyNodes.find(n => n.id === expandedNode)?.title}</h3>
                  <p className="text-sm text-muted-foreground">{journeyNodes.find(n => n.id === expandedNode)?.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">O que fazemos nesta fase:</h4>
                    <Button variant="outline" size="sm" onClick={handleShowCodeToggle}>
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
                            <span className="text-sm">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <h4 className="text-sm font-medium mb-3">Tecnologias utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {journeyNodes.find(n => n.id === expandedNode)?.technologies.map((tech, i) => (
                            <motion.div
                              key={i}
                              className="px-2 py-1 rounded-full text-xs bg-muted"
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
                    <Card className="bg-black text-green-400 font-mono text-xs p-3 h-[300px] overflow-hidden">
                      <div className="flex items-center gap-2 mb-2 text-xs text-white/70">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        <span>{codeSamples[expandedNode]?.filename}</span>
                      </div>
                      <div className="overflow-auto h-[calc(100%-24px)]">
                        <pre className="whitespace-pre-wrap">{codeSamples[expandedNode]?.code}</pre>
                      </div>
                    </Card>
                  )}
                </div>

                <div>
                  <Tabs defaultValue="preview">
                    <TabsList className="mb-4">
                      <TabsTrigger value="preview">Visualização</TabsTrigger>
                      <TabsTrigger value="results">Resultados</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="preview" className="mt-0">
                      <Card className="overflow-hidden border bg-background">
                        <CardContent className="p-0">
                          <div className="bg-muted/30 text-xs px-4 py-2 border-b flex items-center justify-between">
                            <span>Preview</span>
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <div className="h-[280px] p-4 overflow-hidden flex items-center justify-center">
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
                      <Card className="overflow-hidden border bg-muted/20 h-[336px]">
                        <CardContent className="p-4">
                          <h4 className="text-sm font-medium mb-4">Métricas de Sucesso:</h4>
                          
                          {expandedNode === 'discovery' && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Definição de Requisitos</span>
                                  <span className="text-sm font-medium">100%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Análise Competitiva</span>
                                  <span className="text-sm font-medium">85%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Pesquisa de Audiência</span>
                                  <span className="text-sm font-medium">90%</span>
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
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Fidelidade ao Briefing</span>
                                  <span className="text-sm font-medium">95%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Consistência Visual</span>
                                  <span className="text-sm font-medium">100%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Usabilidade</span>
                                  <span className="text-sm font-medium">90%</span>
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
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Fidelidade ao Design</span>
                                  <span className="text-sm font-medium">98%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Qualidade do Código</span>
                                  <span className="text-sm font-medium">95%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Acessibilidade</span>
                                  <span className="text-sm font-medium">92%</span>
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
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Desempenho</span>
                                  <span className="text-sm font-medium">96%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Segurança</span>
                                  <span className="text-sm font-medium">100%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Escalabilidade</span>
                                  <span className="text-sm font-medium">94%</span>
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
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Mobile</span>
                                  <span className="text-sm font-medium">100%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Tablet</span>
                                  <span className="text-sm font-medium">98%</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Desktop</span>
                                  <span className="text-sm font-medium">100%</span>
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
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Velocidade</span>
                                  <span className="text-sm font-medium">98/100</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">SEO</span>
                                  <span className="text-sm font-medium">95/100</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Acessibilidade</span>
                                  <span className="text-sm font-medium">92/100</span>
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
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">Boas Práticas</span>
                                  <span className="text-sm font-medium">98/100</span>
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
            </div>
          )}
        </AnimatedPanel>
      </div>
    </div>
  );
};

// Helper component for animated panels
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