import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import LogoImg from "../../../public/Chess_club_logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-base-300 bg-[#2b1713] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={LogoImg}
              alt="SUST Chess Club logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <h2 className="text-xl font-black text-white">
                SUST Chess Club
              </h2>
              <p className="text-sm text-white/60">Think. Move. Win.</p>
            </div>
          </Link>

          <p className="mt-5 max-w-md leading-7 text-white/65">
            A community for chess lovers at Shahjalal University of Science and
            Technology. Learn, compete, and connect with fellow players.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="btn btn-circle btn-sm border-white/20 bg-white/10 text-white hover:bg-success hover:text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="btn btn-circle btn-sm border-white/20 bg-white/10 text-white hover:bg-success hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:chessclub@sust.edu"
              aria-label="Email"
              className="btn btn-circle btn-sm border-white/20 bg-white/10 text-white hover:bg-success hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-bold text-white">Quick Links</h3>

          <ul className="space-y-3 text-white/65">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#events" className="transition hover:text-white">
                Events
              </Link>
            </li>
            <li>
              <Link href="/#team" className="transition hover:text-white">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-bold text-white">Contact Us</h3>

          <ul className="space-y-4 text-sm text-white/65">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-success" />
              <span>
                Shahjalal University of Science and Technology
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="shrink-0 text-success" />
              <a
                href="mailto:chessclub@sust.edu"
                className="transition hover:text-white"
              >
                chessclub@sust.edu
              </a>
            </li>
          </ul>

          <Link
            href="#top"
            className="btn btn-success btn-sm mt-6 gap-2 text-white"
          >
            Back to top
            <FaArrowUp />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-center text-sm text-white/50 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p>
            © 2026 SUST Chess Club. All rights reserved.
          </p>

          <p>Built with strategy and passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;