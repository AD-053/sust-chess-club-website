import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChessKnight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import LogoImg from "../../public/Chess_club_logo.jpeg";

const events = [
  {
    date: "15",
    month: "NOV",
    title: "Annual Chess Championship",
    description: "Compete with the strongest chess players on campus.",
    type: "Tournament",
  },
  {
    date: "22",
    month: "NOV",
    title: "Beginner's Chess Workshop",
    description: "Learn chess fundamentals from experienced club members.",
    type: "Workshop",
  },
  {
    date: "05",
    month: "DEC",
    title: "Friendly Blitz Night",
    description: "Enjoy fast-paced games and friendly competition.",
    type: "Social Event",
  },
];

const teamMembers = [
  {
    name: "Club President",
    role: "President",
    initials: "CP",
  },
  {
    name: "Tournament Director",
    role: "Event Coordinator",
    initials: "TD",
  },
  {
    name: "Training Captain",
    role: "Training Coordinator",
    initials: "TC",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-base-200">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-success/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-warning/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/10 px-4 py-2 text-sm font-semibold text-success">
              <FaChessKnight />
              <span>The official SUST Chess Club</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Think ahead.
              <span className="block text-success">Move with purpose.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-base-content/70 sm:text-lg">
              Welcome to the SUST Chess Club — a community where strategy,
              friendship, and competitive spirit come together on one board.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="btn btn-success btn-lg text-white shadow-lg shadow-success/20"
              >
                Join the Club
                <FaArrowRight />
              </Link>

              <Link href="#events" className="btn btn-outline btn-lg">
                Explore Events
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-black text-success">100+</p>
                <p className="text-sm text-base-content/60">Active Members</p>
              </div>

              <div>
                <p className="text-3xl font-black text-success">20+</p>
                <p className="text-sm text-base-content/60">Events Every Year</p>
              </div>

              <div>
                <p className="text-3xl font-black text-success">1</p>
                <p className="text-sm text-base-content/60">Chess Community</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rotate-6 rounded-3xl bg-success/20" />

            <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-8 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <span className="badge badge-success text-white">
                  Make your move
                </span>
                <FaChessKnight className="text-3xl text-success" />
              </div>

              <div className="grid grid-cols-8 overflow-hidden rounded-lg border-4 border-base-content/10">
                {Array.from({ length: 64 }).map((_, index) => {
                  const row = Math.floor(index / 8);
                  const column = index % 8;
                  const isDark = (row + column) % 2 === 1;

                  return (
                    <div
                      key={index}
                      className={`aspect-square ${
                        isDark ? "bg-success/80" : "bg-warning/20"
                      }`}
                    >
                      {(index === 18 || index === 45) && (
                        <div className="flex h-full items-center justify-center text-xl sm:text-3xl">
                          {index === 18 ? "♞" : "♔"}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={LogoImg}
                  alt="SUST Chess Club logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <p className="font-bold">SUST Chess Club</p>
                  <p className="text-sm text-base-content/60">
                    Every move tells a story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-base-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-2xl text-success">
                <FaTrophy />
              </div>
              <h2 className="text-xl font-bold">Compete</h2>
              <p className="mt-2 text-base-content/65">
                Participate in tournaments, blitz nights, and inter-university
                competitions.
              </p>
            </div>

            <div className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-warning/20 text-2xl text-warning">
                <FaUsers />
              </div>
              <h2 className="text-xl font-bold">Connect</h2>
              <p className="mt-2 text-base-content/65">
                Meet passionate players and build friendships beyond the
                chessboard.
              </p>
            </div>

            <div className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-info/10 text-2xl text-info">
                <FaChessKnight />
              </div>
              <h2 className="text-xl font-bold">Improve</h2>
              <p className="mt-2 text-base-content/65">
                Learn new strategies and sharpen your skills with regular
                training sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-base-200 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-bold uppercase tracking-widest text-success">
                What is happening
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Upcoming events
              </h2>
            </div>

            <Link
              href="#contact"
              className="link link-success inline-flex items-center gap-2 font-semibold"
            >
              Get event updates <FaArrowRight />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="card border border-base-200 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="card-body">
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-success px-4 py-3 text-center text-white">
                      <p className="text-2xl font-black leading-none">
                        {event.date}
                      </p>
                      <p className="mt-1 text-xs font-bold">{event.month}</p>
                    </div>

                    <span className="badge badge-outline">{event.type}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{event.title}</h3>
                  <p className="text-base-content/65">{event.description}</p>

                  <div className="card-actions mt-4 items-center text-sm text-base-content/60">
                    <FaCalendarAlt className="text-success" />
                    SUST Chess Club Event
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-base-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-success">
              Meet the people
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              The team behind the club
            </h2>
            <p className="mt-4 text-base-content/65">
              Our dedicated team works to make every club event enjoyable,
              competitive, and welcoming.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.role}
                className="rounded-2xl border border-base-200 bg-base-100 p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-success text-2xl font-black text-white">
                  {member.initials}
                </div>
                <h3 className="mt-5 text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-sm text-success">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-base-200 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-widest text-success">
              Club moments
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              More than just a game
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Tournament days",
              "Friendly matches",
              "Training sessions",
              "Club community",
            ].map((title, index) => (
              <div
                key={title}
                className={`flex min-h-52 items-end rounded-2xl p-5 shadow-sm ${
                  index % 2 === 0
                    ? "bg-success text-white"
                    : "bg-warning/80 text-base-content"
                }`}
              >
                <div>
                  <FaChessKnight className="mb-8 text-3xl" />
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm opacity-80">
                    Discover the SUST chess experience.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-success py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-widest text-success-content/70">
              Ready to play?
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-5xl">
              Your next great move starts here.
            </h2>
            <p className="mt-5 max-w-xl text-success-content/80">
              Whether you are a beginner or an experienced player, there is a
              place for you at the SUST Chess Club.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-base-content shadow-xl sm:p-8">
            <h3 className="text-2xl font-bold">Join our community</h3>
            <p className="mt-2 text-base-content/65">
              Contact us to learn more about membership and upcoming events.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:chessclub@sust.edu"
                className="flex items-center gap-3 transition hover:text-success"
              >
                <FaEnvelope className="text-success" />
                chessclub@sust.edu
              </a>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-success" />
                Shahjalal University of Science and Technology
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="btn btn-circle btn-outline"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="btn btn-circle btn-outline"
              >
                <FaInstagram />
              </a>

              <Link href="/about" className="btn btn-success ml-auto text-white">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}