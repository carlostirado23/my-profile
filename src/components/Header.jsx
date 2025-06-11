import { MapPin, Calendar, Github, Linkedin, Mail, Globe} from 'lucide-react';
import foto1 from '../assets/images/foto1.png'

const Header = () => {
  return (
    <header className="flex justify-center items-center px-4 min-h-screen bg-white">
      <div className="mx-auto max-w-4xl text-center">
        {/* Avatar */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center items-center mx-auto mb-6 w-36 h-36 text-4xl text-gray-400 bg-gray-100 rounded-full border-4 border-gray-200 transition-transform duration-300 hover:scale-105">
            <img
                src={foto1}
                className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 animate-slide-in">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 md:text-6xl">
            Carlos Tirado
          </h1>
          <h2 className="mb-6 text-xl text-gray-600 md:text-2xl">
            Desarrollador Web
          </h2>
          
          {/* Location and Availability */}
          <div className="flex flex-col gap-4 justify-center items-center mb-8 text-gray-500 sm:flex-row">
            <div className="flex gap-2 items-center">
              <MapPin size={18} />
              <span>Montería, Colombia</span>
            </div>
            <div className="flex gap-2 items-center">
              <Calendar size={18} />
              <span>Disponible para proyectos</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 animate-slide-in">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Apasionado por crear experiencias digitales increíbles. Especializado en 
            desarrollo web moderno con tecnologías como React, Node.js y Go.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col gap-4 justify-center sm:flex-row animate-slide-in">
          <a 
            href="https://github.com/carlostirado23" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex gap-2 justify-center items-center bg-gradient-to-r to-zinc-900 from-zinc-800 btn-primary group hover:from-zinc-900 hover:to-zinc-950">
            <Github size={20} />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/carlos-tirado-a713a6247/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex gap-2 justify-center items-center btn-secondary">
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a 
            href="mailto:mariotiradotovar@gmail.com" 
            className="flex gap-2 justify-center items-center btn-secondary">
            <Mail size={20} />
            Gmail
          </a>
          <a 
            href="https://carlostirado.site/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex gap-2 justify-center items-center bg-gradient-to-r from-purple-600 to-purple-800 btn-primary group hover:from-purple-700 hover:to-purple-900">
            <Globe size={20} className="transition-transform duration-500 group-hover:spin" />
            Portafolio Web
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;