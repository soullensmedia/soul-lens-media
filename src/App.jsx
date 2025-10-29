import React from "react";

export default function App() {
  return (
    <main className="bg-stone-100 text-stone-800 font-serif leading-relaxed">
      {/* HEADER */}
      <header className="w-full bg-stone-100/80 backdrop-blur border-b border-stone-300/40 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="text-xl font-semibold tracking-tight text-stone-800">
              Soul Lens Media
            </span>
            <span className="text-xs text-stone-500 italic">
              Cinematic storytelling through soul and lens
            </span>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-stone-700">
            <a href="#home" className="hover:text-stone-900">Home</a>
            <a href="#portfolio" className="hover:text-stone-900">Portfolio</a>
            <a href="#client" className="hover:text-stone-900">Client Work</a>
            <a href="#about" className="hover:text-stone-900">About</a>
            <a href="#contact" className="hover:text-stone-900">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact" className="rounded-2xl bg-stone-800 text-stone-100 text-xs md:text-sm px-4 py-2 font-medium shadow-md hover:bg-stone-700">
              book a free chat
            </a>
            <a href="https://instagram.com/matt.hardaker" className="text-stone-600 hover:text-stone-900 text-sm md:text-base">
              IG ↗
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative w-full min-h-[100vh] flex items-end text-stone-100 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://drive.google.com/uc?export=view&id=1Xws6pkPa3I1BdrXRrO4lUbMqZ7TYei-z)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-semibold text-stone-100 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Soul Lens Media
            </h1>
            <p className="text-stone-200/90 text-lg md:text-xl mt-4 italic">
              Cinematic storytelling through soul and lens.
            </p>
            <p className="text-stone-200/80 text-sm md:text-base mt-6 leading-relaxed">
              Warm, honest imagery from the Blue Mountains and beyond — portraits,
              botanics, intimacy, and the quiet moments that actually matter.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#portfolio" className="bg-stone-100 text-stone-900 text-xs md:text-sm font-medium px-4 py-2 rounded-2xl shadow hover:bg-stone-200">
                view portfolio
              </a>
              <a href="#contact" className="border border-stone-100/60 text-stone-100 text-xs md:text-sm font-medium px-4 py-2 rounded-2xl hover:bg-stone-100/10">
                book a free chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 md:py-28 bg-stone-100 text-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Portfolio</h2>

          {/* Love & Connection */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-3">Love & Connection</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl h-80 bg-cover bg-center" style={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=YOUR_MJ_KISS_ID)" }}></div>
              <div className="rounded-xl h-80 bg-cover bg-center" style={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=YOUR_BJ26_ID)" }}></div>
              <div className="rounded-xl h-80 bg-cover bg-center" style={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=YOUR_0333_ID)" }}></div>
            </div>
          </div>

          {/* Motherhood & Intimacy */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-3">Motherhood & Intimacy</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="rounded-xl h-72 bg-cover bg-center" style={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=YOUR_BJ23_ID)" }}></div>
              <div className="rounded-xl h-72 bg-cover bg-center" style={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=YOUR_BJ9_ID)" }}></div>
              <div className="rounded-xl h-72 bg-cover bg-center" style={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=YOUR_BJ29_ID)" }}></div>
              <div className="rounded-xl h-72 bg-cover bg-center" style={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=YOUR_BJ26_ID)" }}></div>
            </div>
          </div>

          {/* Portraits & Presence */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-3">Portraits & Presence</h3>
            <p className="text-stone-600">To be added...</p>
          </div>

          {/* Soul & Landscape */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-3">Soul & Landscape</h3>
            <p className="text-stone-600">To be added...</p>
          </div>

          {/* Animals & Companionship */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-3">Animals & Companionship</h3>
            <p className="text-stone-600">To be added...</p>
          </div>
        </div>
      </section>

      {/* CLIENT WORK */}
      <section id="client" className="py-20 md:py-28 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Client Work</h2>
          <p className="text-stone-300 mb-6">
            Featuring Unwind Studios, a premium recovery & breathwork space — coming soon.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28 bg-stone-100 text-stone-900">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">About</h2>
            <p className="text-stone-700 mb-3">
              I'm Matt Hardaker. I shoot in honest light — mostly at the edges of
              the day when things feel a little slower and a little more true.
            </p>
            <p className="text-stone-700 mb-3">
              My work lives where tenderness meets presence: maternity at sunset,
              couples in the rain, quiet breath on a cliff before the sun breaks.
            </p>
            <p className="text-stone-700">
              Soul Lens Media is for people who value real connection over posing,
              and feeling over polish.
            </p>
          </div>
          <div
            className="rounded-2xl bg-cover bg-center h-96"
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?export=view&id=1Xws6pkPa3I1BdrXRrO4lUbMqZ7TYei-z)",
            }}
          ></div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-stone-200 text-stone-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Let's talk</h2>
          <p className="text-stone-700 mb-8">
            Tell me what you're dreaming up — maternity, connection, portraits,
            brand work, or something we haven't named yet.
          </p>
          <form className="grid gap-6 text-sm max-w-xl">
            <input placeholder="Your name" className="bg-white border border-stone-400/40 rounded-xl px-4 py-3" />
            <input placeholder="you@email.com" className="bg-white border border-stone-400/40 rounded-xl px-4 py-3" />
            <textarea placeholder="Your message" className="bg-white border border-stone-400/40 rounded-xl px-4 py-3 min-h-[6rem] resize-none" />
            <button type="submit" className="rounded-2xl bg-stone-900 text-stone-100 px-5 py-3 font-medium hover:bg-stone-700">
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 text-xs md:text-sm py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-stone-100 font-medium text-sm md:text-base">
              Soul Lens Media
            </span>
            <span className="italic text-stone-400 text-[11px] md:text-xs">
              Cinematic storytelling through soul and lens
            </span>
          </div>
          <div className="flex flex-col text-stone-500 leading-relaxed">
            <a href="https://instagram.com/matt.hardaker" className="hover:text-stone-100">
              Instagram @matt.hardaker
            </a>
            <a href="mailto:m_hardaker@hotmail.com" className="hover:text-stone-100">
              m_hardaker@hotmail.com
            </a>
          </div>
          <div className="text-stone-600 text-[11px] md:text-xs">© Soul Lens Media 2025</div>
        </div>
      </footer>
    </main>
  );
}
