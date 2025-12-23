import Navbar from '../components/Navbar';
import ServicesHero from './components/ServicesHero';
import ServiceSection from './components/ServiceSection';
import Footer from '../components/Footer';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  color: 'dourado' | 'bege';
}

const services: Service[] = [
  {
    id: 'visualizacao-3d',
    title: 'Visualização 3D',
    subtitle: 'Imagens fotorrealistas que vendem',
    description: 'Criamos visualizações 3D de alta qualidade que transformam projetos arquitetônicos em imagens impressionantes. Cada render é cuidadosamente trabalhado para capturar a essência do seu projeto e criar uma conexão emocional com potenciais clientes.',
    features: [
      'Renderizações fotorrealistas',
      'Múltiplas perspectivas e ângulos',
      'Iluminação natural e artificial',
      'Pós-produção profissional',
    ],
    image: '/IDENTIDADE_11-1_View04 copy.jpg',
    color: 'dourado',
  },
  {
    id: 'tour-virtual',
    title: 'Tour Virtual 360°',
    subtitle: 'Experiências imersivas interativas',
    description: 'Permita que seus clientes explorem os espaços como se estivessem fisicamente presentes. Nossos tours virtuais 360° oferecem uma experiência imersiva completa, permitindo navegação intuitiva e visualização detalhada de cada ambiente.',
    features: [
      'Navegação 360° interativa',
      'Hotspots informativos',
      'Compatível com VR',
      'Integração web e mobile',
    ],
    image: '/AMBIENTE-KIU-AMENDOA.jpg',
    color: 'bege',
  },
  {
    id: 'animacao-3d',
    title: 'Animações 3D',
    subtitle: 'Vídeos que contam histórias',
    description: 'Transforme seu projeto em uma narrativa visual envolvente através de animações 3D cinematográficas. Criamos vídeos que não apenas mostram o espaço, mas contam a história do projeto, destacando cada detalhe e criando uma experiência memorável.',
    features: [
      'Animações cinematográficas',
      'Câmeras dinâmicas e fluidas',
      'Pós-produção e edição',
      'Múltiplos formatos de entrega',
    ],
    image: '/Chicago_17.jpg',
    color: 'dourado',
  },
  {
    id: 'maquete-digital',
    title: 'Maquete Digital Interativa',
    subtitle: 'Explore antes de construir',
    description: 'Nossas maquetes digitais interativas permitem que arquitetos, investidores e clientes explorem projetos em desenvolvimento de forma intuitiva. Visualize plantas, cortes, elevações e perspectivas em um único ambiente interativo.',
    features: [
      'Navegação em tempo real',
      'Múltiplas visualizações',
      'Anotações e medidas',
      'Exportação de imagens',
    ],
    image: '/cozinha_classica_c2_desfoque.jpg',
    color: 'bege',
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    subtitle: 'Estratégias que geram resultados',
    description: 'Desenvolvemos estratégias completas de marketing digital para aumentar sua presença online, atrair clientes qualificados e converter visitantes em vendas. Utilizamos as melhores práticas e ferramentas para maximizar o retorno sobre investimento.',
    features: [
      'Gestão de redes sociais',
      'Google Ads e Facebook Ads',
      'SEO e otimização de conteúdo',
      'E-mail marketing e automação',
    ],
    image: '/Briefing Chanel copiar.jpg',
    color: 'dourado',
  },
  {
    id: 'criacao-sites',
    title: 'Criação de Sites',
    subtitle: 'Presença digital profissional',
    description: 'Criamos sites modernos, responsivos e otimizados que representam sua marca com excelência. Desenvolvemos soluções personalizadas que combinam design elegante, performance excepcional e experiência do usuário impecável.',
    features: [
      'Design responsivo e moderno',
      'Otimização para SEO',
      'Performance e velocidade',
      'Integração com sistemas',
    ],
    image: '/IDENTIDADE_11-1_View04 copy.jpg',
    color: 'bege',
  },
];

export default function ServicosPage() {
  return (
    <main className="relative">
      <Navbar />
      <ServicesHero />
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
        />
      ))}
      <Footer />
    </main>
  );
}



