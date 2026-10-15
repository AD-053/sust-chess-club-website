import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBullseye,
  FaChessKnight,
  FaCode,
  FaHeart,
  FaServer,
  FaUsers,
} from "react-icons/fa";
import LogoImg from "../../../public/Chess_club_logo.jpeg";

const teamMembers = [
  {
    name: "Autanu Datta",
    role: "Frontend Developer",
    description: "Creates the user interface and responsive website experience.",
    icon: FaCode,
  },
  {
    name: "Taposh Kumar Ghosh",
    role: "Frontend Developer",
    description: "Builds interactive components and improves the visual design.",
    icon: FaCode,
  },
  {
    name: "Rahad Islam",
    role: "Backend Developer",
    description: "Works on server-side logic, APIs, and application functionality.",
    icon: FaServer,
  },
  {
    name: "Roisul Islam",
    role: "Backend Developer",
    description: "Manages databases, backend services, and data integration.",
    icon: FaServer,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-base-200">
      {/* Header */}
      <section className="bg-success py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white p-2 shadow-lg">
            <Image
              src={LogoImg}
              alt="SUST Chess Club logo"
              width={80}
              height={80}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <p className="font-bold uppercase tracking-widest text-success-content/70">
            About the project
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            SUST Chess Club
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-success-content/80 sm:text-lg">
            A digital platform created to connect chess enthusiasts, share club
            activities, and promote a strong chess community at SUST.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-base-100 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-widest text-success">
              Who we are
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Built for the chess community
            </h2>

            <p className="mt-5 leading-7 text-base-content/70">
              The SUST Chess Club website is designed to give club members and
              chess lovers a simple place to discover upcoming events, learn
              about the club, and stay connected with the community.
            </p>

            <p className="mt-4 leading-7 text-base-content/70">
              Our goal is to make chess more accessible, enjoyable, and
              engaging for students of all skill levels.
            </p>

            <Link
              href="/#contact"
              className="btn btn-success mt-7 text-white"
            >
              Join the Club
              <FaArrowRight />
            </Link>
          </div>

          <div className="rounded-3xl border border-base-300 bg-base-200 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-success/10 text-xl text-success">
                  <FaBullseye />
                </div>

                <div>
                  <h3 className="font-bold">Our Mission</h3>
                  <p className="mt-1 text-sm text-base-content/65">
                    Encourage strategic thinking and healthy competition.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-success/10 text-xl text-success">
                  <FaUsers />
                </div>

                <div>
                  <h3 className="font-bold">Our Community</h3>
                  <p className="mt-1 text-sm text-base-content/65">
                    Bring students together through the game of chess.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-success/10 text-xl text-success">
                  <FaHeart />
                </div>

                <div>
                  <h3 className="font-bold">Our Values</h3>
                  <p className="mt-1 text-sm text-base-content/65">
                    Respect, friendship, learning, and sportsmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-base-200 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-success">
              Meet our team
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              The people behind this website
            </h2>

            <p className="mt-4 text-base-content/65">
              This project was developed by a four-member team with separate
              frontend and backend responsibilities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => {
              const Icon = member.icon;

              return (
                <article
                  key={member.name}
                  className="rounded-2xl border border-base-300 bg-base-100 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success text-2xl text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{member.name}</h3>

                  <p className="mt-1 font-semibold text-success">
                    {member.role}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-base-content/65">
                    {member.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Call-to-action */}
      <section className="bg-base-100 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FaChessKnight className="mx-auto text-4xl text-success" />

          <h2 className="mt-4 text-3xl font-black">
            Every great move starts with an idea.
          </h2>

          <p className="mt-4 text-base-content/65">
            Thank you for visiting the SUST Chess Club website.
          </p>

          <Link href="/" className="btn btn-success mt-6 text-white">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}