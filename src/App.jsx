import './index.css';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { ProjectPage } from '@/pages/Projects';

import { Navbar } from './utils/components/shared';
import { SocialIcons } from './utils/components/shared';
import { Footer } from './utils/components/shared';
import { ContactPage } from './pages/Contact';
import { Sidebar } from './utils/components/shared/Sidebar';

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
      <Sidebar />
    </div>
  );
}

export default App;
