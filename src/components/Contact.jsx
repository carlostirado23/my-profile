import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          ¿Trabajamos Juntos?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Estoy disponible para nuevos proyectos y oportunidades de colaboración.
        </p>
        <button className="btn-primary flex items-center justify-center gap-2 mx-auto">
          <Mail size={20} />
          Contáctame
        </button>
      </div>
    </section>
  );
};

export default Contact;