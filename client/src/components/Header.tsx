import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-black">
          <Link href="/" className="font-mono text-lg font-bold uppercase">
            Olha Lazareva
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="font-mono text-sm uppercase tracking-widest">[ About Me ]</Link>
            <Link href="/#works" className="font-mono text-sm uppercase tracking-widest">[ Works ]</Link>
            <Link href="/#services" className="font-mono text-sm uppercase tracking-widest">[ Services ]</Link>
            <Link href="/#connect" className="font-mono text-sm uppercase tracking-widest">[ Connect ]</Link>
          </nav>
          <Link href="/#contact" className="font-mono text-sm uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300">
            Contact Me &gt;
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
