import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">

      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-slate-900"
        >
          RAVONIX
        </Link>


        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

        </nav>


        {/* CTA */}
        <Link
          to="/contact"
          className="
          rounded-xl
          bg-blue-600
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          "
        >
          Let's Talk
        </Link>

      </div>

    </header>
  );
}

export default Header;