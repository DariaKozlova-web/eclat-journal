import logo from '../assets/images/logo.png';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-base-300">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col items-center text-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Éclat Journal"
          className="w-12 opacity-90 mb-3"
        />

        {/* Tittle */}
        <h3 className="font-serif text-lg text-primary tracking-wide">
          Éclat Journal
        </h3>

        {/* Content */}
        <p className="text-xs text-primary mt-2">Made with ♥ by Daria Kozlova</p>
        <p className="text-neutral/50 text-xs mt-2">
          © {new Date().getFullYear()} Éclat Journal — A place for your thoughts.
        </p>
      </div>
    </footer>
  );
};
