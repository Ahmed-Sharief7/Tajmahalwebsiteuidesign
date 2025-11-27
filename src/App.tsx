import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/globals.css';
import marble1 from 'figma:asset/df1a78d4fedc4a1317674c9a33c90498d90e81ad.png';
import marble2 from 'figma:asset/f27745d0cf3576070da98f3579f589f89789f38c.png';

export default function App() {
  // Gallery images with titles
  const galleryImages = [
    {
      url: marble1,
      title: 'رخام طبيعي فاخر'
    },
    {
      url: marble2,
      title: 'جرانيت بأنماط طبيعية'
    },
    {
      url: 'https://images.unsplash.com/photo-1610276099118-c929abaaa80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBraXRjaGVufGVufDF8fHx8MTc2NDI0NjcwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'مطبخ رخامي فاخر'
    },
    {
      url: 'https://images.unsplash.com/photo-1560185127-1902ccdc5094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwY291bnRlcnRvcHxlbnwxfHx8fDE3NjQyNDY3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'سطح عمل من الجرانيت'
    },
    {
      url: 'https://images.unsplash.com/photo-1757711648817-64cd4ae7358b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBzdGFpcnN8ZW58MXx8fHwxNzY0MjQ2NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'سلالم رخامية'
    },
    {
      url: 'https://images.unsplash.com/photo-1600328604921-300918f36018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vcnxlbnwxfHx8fDE3NjQyNDY3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'أرضيات رخامية'
    },
    {
      url: 'https://images.unsplash.com/photo-1706222125648-ad738b7af948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwc2xhYnxlbnwxfHx8fDE3NjQyNDY3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'ألواح جرانيت'
    },
    {
      url: 'https://images.unsplash.com/photo-1658280911730-467b4764c09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbWFyYmxlfGVufDF8fHx8MTc2NDI0NjcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'مطبخ عصري'
    },
    {
      url: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZXxlbnwxfHx8fDE3NjQyNDY3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'رخام أبيض فاخر'
    },
    {
      url: 'https://images.unsplash.com/photo-1711967152819-f493f7ab4cf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmYWNhZGV8ZW58MXx8fHwxNzY0MjQ2NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'واجهة رخامية'
    },
    {
      url: 'https://images.unsplash.com/photo-1569248403350-fa7dfa1eb1c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGN1dHRpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjQyNDY3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'ورشة القص والتشكيل'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        heroImage={marble2}
      />
      <About 
        workshopImage={marble1}
        projectImage="https://images.unsplash.com/photo-1610276099118-c929abaaa80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBraXRjaGVufGVufDF8fHx8MTc2NDI0NjcwNHww&ixlib=rb-4.1.0&q=80&w=1080"
      />
      <Services />
      <Gallery images={galleryImages} />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
