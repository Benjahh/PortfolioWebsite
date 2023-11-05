import './index.css';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { ProjectPage } from '@/pages/Projects';

import { Navbar } from './utils/components/shared';
import { SocialIcons } from './utils/components/shared';
import { Footer } from './utils/components/shared';
import { ContactPage } from './pages/Contact';

function App() {
  return (
    <div className="relative bg-accent ">
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
      <SocialIcons />
      <Footer />
    </div>
  );
}

export default App;
