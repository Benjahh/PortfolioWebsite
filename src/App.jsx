import './index.css';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { ProjectPage } from '@/pages/Projects';
import { SkillPage } from '@/pages/Skills';
import { Navbar } from './utils/components/shared';
import { Footer } from './utils/components/shared';
import { ContactPage } from './pages/Contact';

function App() {
  return (
    <div className="relative bg-accent ">
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
