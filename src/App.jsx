import React from "react";

import heroMatt from "./Assets/0T7A6514.jpg";
import catYawn from "./Assets/Cat_Yawn.jpg";
import janetFlare from "./Assets/Janet_Flare.jpg";
import maternityClose from "./Assets/Maternity_Close.jpg";
import maternityCouple from "./Assets/Maternity_Couple.jpg";
import maternityGlow from "./Assets/Maternity_Glow.jpg";
import maternityHands from "./Assets/Maternity_Hands.jpg";
import mattWide from "./Assets/Matt_Wide.jpg";
import oberonEyes from "./Assets/Oberon_Eyes.jpg";
import purpleFlower from "./Assets/Purple_Flower.jpg";
import puya1 from "./Assets/Puya_1.jpg";
import puya2 from "./Assets/Puya_2.jpg";
import puya3 from "./Assets/Puya_3.jpg";
import sunsetKiss from "./Assets/Sunset_Kiss.jpg";
import sunsetLayers from "./Assets/Sunset_Layers.jpg";
import sunsetMatt from "./Assets/Sunset_Matt.jpg";
import sunsetMoody from "./Assets/Sunset_Moody.jpg";
import sunsetPastel from "./Assets/Sunset_Pastel.jpg";
import unwindClose from "./Assets/Unwind_Close.jpg";
import unwindDetail from "./Assets/Unwind_Detail.jpg";
import unwindLounge from "./Assets/Unwind_Lounge.jpg";
import unwindMerch from "./Assets/Unwind_Merch.jpg";
import unwindOwner from "./Assets/Unwind_Owner.jpg";
import wedding from "./Assets/Wedding.jpg";
import whiteFlower from "./Assets/White_Flower.jpg";

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
            <a
              href="#contact"
              className="rounded-2xl bg-stone-800 text-stone-100 text-xs md:text-sm px-4 py-2 font-medium shadow-md hover:bg-stone-700"
            >
              book a free chat
            </a>
            <a
              href="https://instagram.com/matt.hardaker"
              className="text-stone-600 hover:text-stone-900 text-sm md:text-base"
            >
              IG ↗
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative w-full min-h-[90vh] flex items-end text-stone-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroMatt})` }}
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
              Warm, honest imagery from the Blue Mountains and beyond —
              intimacy, portraits, wild softness, and quiet moments that actually matter.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#portfolio"
                className="bg-stone-100 text-stone-900 text-xs md:text-sm font-medium px-4 py-2 rounded-2xl shadow hover:bg-stone-200"
              >
                view portfolio
              </a>
              <a
                href="#contact"
                className="border border-stone-100/60 text-stone-100 text-xs md:text-sm font-medium px-4 py-2 rounded-2xl hover:bg-stone-100/10"
              >
                book a free chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="py-20 md:py-28 bg-stone-100 text-stone-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Portfolio</h2>

          {/* Love and Connection */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-3">Love and Connection</h3>
            <p className="text-stone-600 text-sm mb-6 max-w-xl">
              Tender, held, present. The honesty between people when they feel safe.
            </p>

            <div className="grid md:grid-cols-5 gap-4">
              {/* sunsetKiss */}
              <div
                className="rounded-xl h-72 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${sunsetKiss})` }}
              ></div>

              {/* maternityCouple */}
              <div
                className="rounded-xl h-72 md:col-span-3 bg-cover bg-center"
                style={{ backgroundImage: `url(${maternityCouple})` }}
              ></div>

              {/* maternityGlow */}
              <div
                className="rounded-xl h-72 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${maternityGlow})` }}
              ></div>

              {/* maternityHands */}
              <div
                className="rounded-xl h-72 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${maternityHands})` }}
              ></div>

              {/* maternityClose */}
              <div
                className="rounded-xl h-72 md:col-span-1 bg-cover bg-center"
                style={{ backgroundImage: `url(${maternityClose})` }}
              ></div>
            </div>
          </div>

          {/* Portraits & Soul */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-3">Portraits &amp; Soul</h3>
            <p className="text-stone-600 text-sm mb-6 max-w-xl">
              Presence, memory, colour, devotion.
            </p>

            <div className="grid md:grid-cols-6 gap-4">
              {/* wedding */}
              <div
                className="rounded-xl h-80 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${wedding})` }}
              ></div>

              {/* janetFlare */}
              <div
                className="rounded-xl h-80 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${janetFlare})` }}
              ></div>

              {/* puya1 */}
              <div
                className="rounded-xl h-80 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${puya1})` }}
              ></div>

              {/* puya2 */}
              <div
                className="rounded-xl h-72 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${puya2})` }}
              ></div>

              {/* puya3 */}
              <div
                className="rounded-xl h-72 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${puya3})` }}
              ></div>

              {/* purpleFlower */}
              <div
                className="rounded-xl h-72 md:col-span-1 bg-cover bg-center"
                style={{ backgroundImage: `url(${purpleFlower})` }}
              ></div>

              {/* whiteFlower */}
              <div
                className="rounded-xl h-72 md:col-span-1 bg-cover bg-center"
                style={{ backgroundImage: `url(${whiteFlower})` }}
              ></div>
            </div>
          </div>

          {/* Sunsets & Landscape */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-3">Sunsets &amp; Landscape</h3>
            <p className="text-stone-600 text-sm mb-6 max-w-xl">
              Edges of daylight in the Blue Mountains. Breath-before-dark energy.
            </p>

            <div className="grid md:grid-cols-5 gap-4">
              {/* mattWide */}
              <div
                className="rounded-xl h-72 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${mattWide})` }}
              ></div>

              {/* sunsetMatt */}
              <div
                className="rounded-xl h-72 md:col-span-1 bg-cover bg-center"
                style={{ backgroundImage: `url(${sunsetMatt})` }}
              ></div>

              {/* sunsetLayers */}
              <div
                className="rounded-xl h-72 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${sunsetLayers})` }}
              ></div>

              {/* sunsetMoody */}
              <div
                className="rounded-xl h-72 md:col-span-3 bg-cover bg-center"
                style={{ backgroundImage: `url(${sunsetMoody})` }}
              ></div>

              {/* sunsetPastel */}
              <div
                className="rounded-xl h-72 md:col-span-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${sunsetPastel})` }}
              ></div>
            </div>
          </div>

          {/* Animals & Companionship */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-3">
              Animals &amp; Companionship
            </h3>
            <p className="text-stone-600 text-sm mb-6 max-w-xl">
              Soft faces, stolen naps, being chosen by another creature.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* catYawn */}
              <div
                className="rounded-xl h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${catYawn})` }}
              ></div>

              {/* oberonEyes */}
              <div
                className="rounded-xl h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${oberonEyes})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT WORK */}
      <section
        id="client"
        className="py-20 md:py-28 bg-stone-900 text-stone-100"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Client Work</h2>
          <p className="text-stone-300 mb-6 max-w-xl">
            Unwind Studios — recovery, breathwork, and stillness.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            <div
              className="rounded-xl h-60 bg-cover bg-center"
              style={{ backgroundImage: `url(${unwindOwner})` }}
            ></div>
            <div
              className="rounded-xl h-60 bg-cover bg-center"
              style={{ backgroundImage: `url(${unwindClose})` }}
            ></div>
            <div
              className="rounded-xl h-60 bg-cover bg-center"
              style={{ backgroundImage: `url(${unwindDetail})` }}
            ></div>
            <div
              className="rounded-xl h-60 bg-cover bg-center"
              style={{ backgroundImage: `url(${unwindMerch})` }}
            ></div>
            <div
              className="rounded-xl h-60 bg-cover bg-center"
              style={{ backgroundImage: `url(${unwindLounge})` }}
            ></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 md:py-28 bg-stone-100 text-stone-900"
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">About</h2>
            <p className="text-stone-700 mb-3">
              I'm Matt Hardaker. I shoot in honest light — mostly at the edges of
              the day when things feel a little slower and a little more true.
            </p>
            <p className="text-stone-700 mb-3">
              My work lives where tenderness meets presence: maternity at sunset,
              quiet jawline light, sleepy cats, the second right before you both
              laugh.
            </p>
            <p className="text-stone-700">
              Soul Lens Media is for people who value real connection over posing,
              and feeling over polish.
            </p>
          </div>

          <div
            className="rounded-2xl bg-cover bg-center h-96"
            style={{
              backgroundImage: `url(${sunsetLayers})`,
            }}
          ></div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 md:py-28 bg-stone-200 text-stone-900"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Let's talk</h2>
          <p className="text-stone-700 mb-8">
            Tell me what you're dreaming up — maternity, connection, portraits,
            brand work, or something we haven't named yet.
          </p>
          <form className="grid gap-6 text-sm max-w-xl">
            <input
              placeholder="Your name"
              className="bg-white border border-stone-400/40 rounded-xl px-4 py-3"
            />
            <input
              placeholder="you@email.com"
              className="bg-white border border-stone-400/40 rounded-xl px-4 py-3"
            />
            <textarea
              placeholder="Your message"
              className="bg-white border border-stone-400/40 rounded-xl px-4 py-3 min-h-[6rem] resize-none"
            />
            <button
              type="submit"
              className="rounded-2xl bg-stone-900 text-stone-100 px-5 py-3 font-medium hover:bg-stone-700"
            >
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
            <a
              href="https://instagram.com/matt.hardaker"
              className="hover:text-stone-100"
            >
              Instagram @matt.hardaker
            </a>
            <a
              href="mailto:m_hardaker@hotmail.com"
              className="hover:text-stone-100"
            >
              m_hardaker@hotmail.com
            </a>
          </div>
          <div className="text-stone-600 text-[11px] md:text-xs">
            © Soul Lens Media 2025
          </div>
        </div>
      </footer>
    </main>
  );
}
