import './index.css';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { ProjectPage } from '@/pages/Projects';
import { SkillPage } from '@/pages/Skills';
import { Navbar } from './utils/components/shared';
import { Footer } from './utils/components/shared';

function App() {
  return (
    <div className="relative ">
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <Footer />
    </div>
  );
}

export default App;
