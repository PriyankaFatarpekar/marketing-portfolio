export const metadata = {
  title: "Luxury Properties in Dubai | Skyline Properties",

  description:
    "Explore luxury apartments, villas and prime property locations in Dubai through the Skyline Properties real estate website concept.",

  keywords: [
    "luxury properties in Dubai",
    "Dubai properties",
    "apartments for sale in Dubai",
    "Dubai luxury apartments",
    "luxury villas in Dubai",
    "Dubai real estate",
    "prime properties in Dubai",
  ],

  openGraph: {
    title: "Luxury Properties in Dubai | Skyline Properties",
    description:
      "Discover luxury apartments, villas and premium property locations in Dubai.",
    type: "website",
    siteName: "Skyline Properties",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
        width: 1200,
        height: 630,
        alt: "Dubai skyline – Skyline Properties",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Properties in Dubai | Skyline Properties",
    description:
      "Explore premium Dubai property locations and luxury residences.",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
    ],
  },
};










import Link from "next/link";

const properties = [
  {
    name: "The Grand Residence",
    location: "Downtown Dubai",
    type: "Luxury Apartment",
    price: "AED 2.4M",
    beds: "3 Beds",
    baths: "3 Baths",
    area: "1,850 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
  },
  {
    name: "Palm Horizon Villa",
    location: "Palm Jumeirah",
    type: "Luxury Villa",
    price: "AED 8.9M",
    beds: "5 Beds",
    baths: "6 Baths",
    area: "4,200 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000",
  },
  {
    name: "Skyline Heights",
    location: "Business Bay",
    type: "Modern Apartment",
    price: "AED 1.8M",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1,300 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000",
  },
];

const locations = [
  {
    name: "Downtown Dubai",
    description: "Premium urban living in the heart of Dubai.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
  },
  {
    name: "Palm Jumeirah",
    description: "Exclusive waterfront homes and luxury living.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900",
  },
  {
    name: "Dubai Marina",
    description: "Contemporary homes with stunning marina views.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900",
  },
];

export default function SkylineProperties() {
  return (
    <main className="min-h-screen bg-white text-[#17283B]">

      {/* NAVBAR */}
      <header className="absolute left-0 top-0 z-50 w-full border-b border-white/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <Link href="/skyline-properties" className="text-white">
            <span className="block text-2xl font-semibold tracking-[0.16em]">
              SKYLINE
            </span>
            <span className="block text-[9px] tracking-[0.5em] text-[#D6B77A]">
              PROPERTIES
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white md:flex">
            <a href="#home" className="hover:text-[#D6B77A]">Home</a>
            <a href="#about" className="hover:text-[#D6B77A]">About Us</a>
            <a href="#properties" className="hover:text-[#D6B77A]">Properties</a>
            <a href="#locations" className="hover:text-[#D6B77A]">Locations</a>
            <a href="#contact" className="hover:text-[#D6B77A]">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden border border-[#D6B77A] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#D6B77A] hover:text-[#17283B] sm:block"
          >
            Get in Touch
          </a>

        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-[720px] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(12,27,43,0.88), rgba(12,27,43,0.35)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2000')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-40">

          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-[#D6B77A]">
              Discover Exceptional Living
            </p>

            <h1 className="text-5xl font-light leading-tight text-white sm:text-7xl">
              Find Your Place
              <br />
              <span className="font-semibold">
                in Dubai.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75">
              Luxury apartments in Dubai



              Dubai residential properties



              Premium property locations in Dubai
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#properties"
                className="bg-[#D6B77A] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#17283B] transition hover:bg-white"
              >
                Explore Properties
              </a>

              <a
                href="#about"
                className="border border-white/60 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#17283B]"
              >
                Discover Skyline
              </a>
            </div>
          </div>

          <div className="mt-24 flex flex-wrap gap-12 border-t border-white/25 pt-8 text-white">
            <div>
              <p className="text-3xl font-semibold">Dubai</p>
              <p className="mt-2 text-xs tracking-widest text-white/60">
                OUR PRIMARY MARKET
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Luxury</p>
              <p className="mt-2 text-xs tracking-widest text-white/60">
                CURATED LIVING
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Lifestyle</p>
              <p className="mt-2 text-xs tracking-widest text-white/60">
                BEYOND EXPECTATIONS
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="about" className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89557]">
              About Skyline
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
              A Better Perspective
              <br />
              on <span className="font-semibold">Dubai Living.</span>
            </h2>

            <p className="mt-7 leading-8 text-gray-500">
              Skyline Properties is a fictional real estate brand concept
              created to showcase a premium digital experience for
              Dubai's property market.
            </p>

            <p className="mt-4 leading-8 text-gray-500">
              From contemporary city apartments to exclusive waterfront
              residences, our concept brings property discovery,
              location insights and refined design together in one place.
            </p>

            <a
              href="#properties"
              className="mt-8 inline-block border-b border-[#B89557] pb-2 text-sm font-semibold tracking-wide"
            >
              Explore Our Collection →
            </a>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
              alt="Contemporary luxury property interior in Dubai"
              className="h-[450px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-[#17283B] p-8 text-white sm:block">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D6B77A]">
                Our Philosophy
              </p>
              <p className="mt-3 text-xl font-light">
                Where Lifestyle
                <br />
                Meets Location.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section id="properties" className="bg-[#F6F5F1] px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89557]">
              Curated Collection
            </p>

            <h2 className="mt-5 text-4xl font-light sm:text-5xl">
              Featured <span className="font-semibold">Properties</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
              Discover our selection of premium property concepts
              across Dubai's most desirable neighbourhoods.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property.name}
                className="group overflow-hidden bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={`${property.name} - ${property.type} in ${property.location}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-5 top-5 bg-[#17283B] px-4 py-2 text-[10px] uppercase tracking-widest text-white">
                    {property.type}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-xs text-gray-400">
                    {property.location}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {property.name}
                  </h3>

                  <p className="mt-4 text-lg font-semibold text-[#B89557]">
                    {property.price}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-100 pt-5 text-xs text-gray-500">
                    <span>{property.beds}</span>
                    <span>{property.baths}</span>
                    <span>{property.area}</span>
                  </div>

                  <a
                    href="#contact"
                    className="mt-7 block border border-[#17283B] py-3 text-center text-xs font-semibold uppercase tracking-widest transition hover:bg-[#17283B] hover:text-white"
                  >
                    Enquire Now →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            All properties, prices and specifications displayed are
            illustrative portfolio-demo content, not actual listings.
          </p>

        </div>
      </section>

      {/* WHY SKYLINE */}
      <section className="bg-[#17283B] px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B77A]">
              The Skyline Difference
            </p>

            <h2 className="mt-5 text-4xl font-light sm:text-5xl">
              Designed Around
              <br />
              <span className="font-semibold">Your Lifestyle.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Prime Locations",
                description:
                  "Explore property concepts inspired by Dubai's sought-after residential destinations.",
              },
              {
                number: "02",
                title: "Curated Selection",
                description:
                  "Discover thoughtfully presented residential options for different lifestyle preferences.",
              },
              {
                number: "03",
                title: "Personalised Approach",
                description:
                  "A property discovery experience designed around clarity, convenience and simplicity.",
              },
            ].map((item) => (
              <div key={item.number} className="border-t border-white/20 pt-7">
                <p className="text-sm text-[#D6B77A]">{item.number}</p>
                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89557]">
              Explore Dubai
            </p>

            <h2 className="mt-5 text-4xl font-light sm:text-5xl">
              Discover Prime <span className="font-semibold">Locations.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {locations.map((location) => (
              <div key={location.name} className="group relative h-[380px] overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.name}, Dubai`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-2xl font-semibold">
                    {location.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {location.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#F6F5F1] px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89557]">
            Begin Your Journey
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight sm:text-6xl">
            Your Next Address
            <br />
            <span className="font-semibold">Starts Here.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-gray-500">
            Explore the Skyline Properties concept and discover a
            thoughtfully designed digital property experience.
          </p>

          <a
            href="mailto:hello@example.com?subject=Skyline%20Properties%20Portfolio%20Demo"
            className="mt-10 inline-block bg-[#17283B] px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#B89557]"
          >
            Contact Us
          </a>

          <p className="mt-5 text-xs text-gray-400">
            Demonstration website – fictional brand and contact details.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#101D2B] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="text-2xl font-semibold tracking-[0.16em]">
              SKYLINE
            </p>
            <p className="mt-1 text-[9px] tracking-[0.5em] text-[#D6B77A]">
              PROPERTIES
            </p>
            <p className="mt-4 text-xs text-white/50">
              A real estate website concept for a digital marketing portfolio.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-white/60">
            <a href="#home" className="hover:text-[#D6B77A]">Home</a>
            <a href="#about" className="hover:text-[#D6B77A]">About</a>
            <a href="#properties" className="hover:text-[#D6B77A]">Properties</a>
            <a href="#contact" className="hover:text-[#D6B77A]">Contact</a>
          </div>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Skyline Properties. Demo concept.
          </p>

        </div>

        {/* <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6">
          <Link
            href="/"
            className="text-xs text-[#D6B77A] hover:text-white"
          >
            ← Back to Marketing Portfolio
          </Link>
        </div> */}
      </footer>

    </main>
  );
}
