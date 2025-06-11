const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center bg-white border-t border-gray-100">
      <p className="text-gray-500">
        © {currentYear} Carlos Tirado. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;