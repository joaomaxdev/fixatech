function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © 2025 FixaTech. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Desenvolvido por{" "}
          <a
            href="https://github.com/joaomaxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            @joaomaxdev
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;