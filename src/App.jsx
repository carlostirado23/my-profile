import Header from './components/Header';
import Skills from './components/Skills';
import ProjectGallery from './components/ProjectGallery';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Skills />
      <ProjectGallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;