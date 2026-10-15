import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import LogoImg from "./../../../public/Chess_club_logo.jpeg";
import { FaChessKnight } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/#events" },
  { label: "Our Team", href: "/#team" },
  { label: "Gallery", href: "/#gallery" },
];

function NavLinks({ mobile = false }) {
  return (
    <ul
      className={
        mobile
          ? "menu menu-sm w-full gap-1 p-2"
          : "menu menu-horizontal items-center gap-1"
      }
    >
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="rounded-lg px-3 py-2 font-medium transition-colors hover:bg-success/10 hover:text-success"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 shadow-sm backdrop-blur">
      <div className="navbar mx-auto min-h-18 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start gap-2">
          {/* Mobile menu */}
          <details className="dropdown lg:hidden">
            <summary
              className="btn btn-ghost btn-circle list-none"
              aria-label="Open navigation menu"
            >
              <IoIosMenu className="text-2xl" />
            </summary>

            <div className="dropdown-content mt-3 w-64 overflow-hidden rounded-2xl border border-base-200 bg-base-100 p-2 shadow-xl">
              <NavLinks mobile />

              <div className="mt-2 border-t border-base-200 p-2">
                <Link
                  href="/#contact"
                  className="btn btn-success w-full text-white"
                >
                  Join the Club
                </Link>
              </div>
            </div>
          </details>

          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-xl px-1 transition-transform hover:scale-[1.02]"
          >
            <Image
              src={LogoImg}
              alt="SUST Chess Club logo"
              width={52}
              height={52}
              priority
              className="h-11 w-11 rounded-full object-cover sm:h-13 sm:w-13"
            />

            <div className="hidden sm:block">
              <p className="text-base font-extrabold leading-tight text-success sm:text-lg">
                SUST Chess Club
              </p>
              <p className="text-xs font-medium text-base-content/60">
                Think. Move. Win.
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="navbar-center hidden lg:flex" aria-label="Main navigation">
          <NavLinks />
        </nav>

        {/* Action buttons */}
        <div className="navbar-end gap-2">
          <Link
            href="/#contact"
            className="btn btn-ghost hidden border border-success/30 text-success hover:bg-success hover:text-white sm:inline-flex"
          >
            Contact
          </Link>

          <Link
            href="/#contact"
            className="btn btn-success btn-sm gap-1 text-white sm:btn-md"
          >
            <FaChessKnight className="text-lg" />
            <span className="hidden sm:inline">Join Club</span>
            <span className="sm:hidden">Join</span>
          </Link>
        </div>
      </div>
    </header>
  );
}