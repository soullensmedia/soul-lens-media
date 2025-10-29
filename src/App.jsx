import React, { useState, useRef, useEffect } from "react";

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

/* ---------------- LIGHTBOX COMPONENT ---------------- */
function Lightbox({ src, alt, onClose }) {
  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt || ""}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-[0_30px_120px_rgba(0,0,0,0.8)] border border-white/10"
      />
    </div>
  );
}

/* ---------------- HORIZONTAL SCROLL ROW COMPONENT ---------------- */
/*
- No gradients
- Arrows on sides
- Uniform square cards (240x240 mobile, 320x320 desktop)
- Snap scrolling on mobile
- Hidden scrollbar
- Click opens Lightbox
*/
function ScrollRow({ images }) {
  const scrollerRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* LEFT ARROW */}
      <button
        type="button"
        onClick={() => scrollByAmount(-350)}
        className="
          hidden md:flex
          absolute -left-3 top-1/2 -translate-y-1/2 z-20
          h-9 w-9 items-center justify-center
          rounded-full bg-stone-900/80 text-stone-100 text-lg leading-none
          shadow-lg hover:bg-stone-900
        "
        aria-label="scroll left"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        type="button"
        onClick={() => scrollByAmount(350)}
        className="
          hidden md:flex
          absolute -right-3 top-1/2 -translate-y-1/2 z-20
          h-9 w-9 items-center justify-center
          rounded-full bg-stone-900/80 text-stone-100 text-lg leading-none
          shadow-lg hover:bg-stone-900
        "
        aria-label="scroll right"
      >
        ›
      </button>

      {/* SCROLLER */}
      <div
        ref={scrollerRef}
        className={`
          flex gap-4
          overflow-x-auto overflow-y-hidden
          scroll-smooth
          pb-4
          snap-x snap-mandatory
          cursor-grab active:cursor-grabbing
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        `}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* hide scrollbar Chrome/Safari */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {images.map((img, i) => (
          <button
            key={i}
            onClick={img.onClick}
            className={`
              relative flex-shrink-0
              bg-stone-200
              border border-stone-300/60
              rounded-xl shadow-md
              hover:shadow-lg hover:shadow-stone-900/10
              active:scale-[0.99]
              transition-all
              overflow-hidden
              cursor-zoom-in
              snap-start
            `}
            style={{
              width: "240px",
              height: "240px",
            }}
          >
            <img
              src={img.src}
              alt={img.alt || ""}
              className="w-full h-full object-cover select-none md:rounded-xl"
              draggable="false"
            />

            {/* Responsive card size (bump to 320px on md+) */}
            <style>
              {`
                @media (min-width: 768px) {
                  button[style*="240px"][style*="240px"] {
                    width:320px !important;
                    height:320px !important;
                  }
                }
              `}
            </style>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  // Smooth scroll for anchor links (#portfolio etc.)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // Lightbox state
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const openLightbox = (src, alt = "") => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => {
    setLightboxSrc(null);
    setLightboxAlt("");
  };

  /* ---------------- IMAGE GROUPS WITH ORDER ---------------- */

  // Love & Connection
  const loveAndConnectionImgs = [
    { src: sunsetKiss, alt: "sunsetKiss" },
    { src: maternityCouple, alt: "maternityCouple" },
    { src: maternityGlow, alt: "maternityGlow" },
    { src: maternityHands, alt: "maternityHands" },
    { src: maternityClose, alt: "maternityClose" },
  ].map((img) => ({
    ...img,
    onClick: () => openLightbox(img.src, img.alt),
  }));

  // People & Portraits
  const peoplePortraitsImgs = [
    { src: wedding, alt: "wedding" },
    { src: janetFlare, alt: "janetFlare" },
  ].map((img) => ({
    ...img,
    onClick: () => openLightbox(img.src, img.alt),
  }));

  // Nature & Texture
  const natureTextureImgs = [
    { src: puya3, alt: "puya3" },
    { src: whiteFlower, alt: "whiteFlower" },
    { src: puya2, alt: "puya2" },
    { src: purpleFlower, alt: "purpleFlower" },
    { src: puya1, alt: "puya1" },
  ].map((img) => ({
    ...img,
    onClick: () => openLightbox(img.src, img.alt),
  }));

  // Land & Light
  const landLightImgs = [
    { src: mattWide, alt: "mattWide" },
    { src: sunsetLayers, alt: "sunsetLayers" },
    { src: sunsetMatt, alt: "sunsetMatt" },
    { src: sunsetMoody, alt: "sunsetMoody" },
    { src: sunsetPastel, alt: "sunsetPastel" },
  ].map((img) => ({
    ...img,
    onClick: () => openLightbox(img.src, img.alt),
  }));

  // Kindred Spirits
  const kindredSpiritsImgs = [
    { src: catYawn, alt: "catYawn" },
    { src: oberonEyes, alt: "oberonEyes" },
  ].map((img) => ({
    ...img,
    onClick: () => openLightbox(img.src, img.alt),
  }));

  // Client Work
  const clientWorkImgs = [
    { src: unwindOwner, alt: "unwindOwner" },
    { src: unwindClose, alt: "unwindClose" },
    { src: unwindDetail, alt: "unwindDetail" },
    { src: unwindMerch, alt: "unwindMerch" },
    { src: unwindLounge, alt: "unwindLounge" },
  ].map((img) => ({
    ...img,
    onClick: () => openLightbox(img.src, img.alt),
  }));

  return (
    <>
      {/* Fullscreen lightbox overlay */}
      <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={closeLightbox} />

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
              <a href="#home" className="hover:text-stone-900">
                Home
              </a>
              <a href="#portfolio" className="hover:text-stone-900">
                Portfolio
              </a>
              <a href="#client" className="hover:text-stone-900">
                Client Work
              </a>
              <a href="#about" className="hover:text-stone-900">
                About
              </a>
              <a href="#contact" className="hover:text-stone-900">
                Contact
              </a>
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

        {/* HERO / INTRO */}
        <section
          id="home"
          className="relative w-full min-h-[90vh] flex items-end text-stone-100 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroMatt})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-semibold text-stone-100 leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Soul Lens Media
              </h1>

              <p className="text-stone-200/90 text-lg md:text-xl mt-4 italic leading-snug">
                Cinematic storytelling through soul and lens.
              </p>

              {/* MOVED BLURB HERE */}
              <p className="text-stone-200/80 text-base md:text-lg mt-6 leading-relaxed italic">
                Stories of connection, presence, stillness, and adventure —
                honest moments that breathe with life and light.
              </p>

              <p className="text-stone-200/80 text-sm md:text-base mt-6 leading-relaxed">
                Warm, honest imagery from the Blue Mountains and beyond —
                intimacy, portraits, wild softness, and quiet moments that
                actually matter.
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
            {/* Portfolio heading only (blurb removed from here) */}
            <h2 className="text-3xl font-semibold mb-10 tracking-tight">
              Portfolio
            </h2>

            {/* Love & Connection */}
            <div className="mb-16">
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                Love &amp; Connection
              </h3>
              <p className="text-stone-600 text-sm mb-6 max-w-xl leading-relaxed">
                The beauty of being seen. Stories of love, tenderness, and
                belonging.
              </p>

              <ScrollRow images={loveAndConnectionImgs} />
            </div>

            {/* People & Portraits */}
            <div className="mb-16">
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                People &amp; Portraits
              </h3>
              <p className="text-stone-600 text-sm mb-6 max-w-xl leading-relaxed">
                Everyone has a story — honest, grounded, real.
              </p>

              <ScrollRow images={peoplePortraitsImgs} />
            </div>

            {/* Nature & Texture */}
            <div className="mb-16">
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                Nature &amp; Texture
              </h3>
              <p className="text-stone-600 text-sm mb-6 max-w-xl leading-relaxed">
                Botanics, light, and texture — the art found in stillness.
              </p>

              <ScrollRow images={natureTextureImgs} />
            </div>

            {/* Land & Light */}
            <div className="mb-16">
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                Land &amp; Light
              </h3>
              <p className="text-stone-600 text-sm mb-6 max-w-xl leading-relaxed">
                Where sky and land meet in silence. The quiet between golden
                hour and nightfall.
              </p>

              <ScrollRow images={landLightImgs} />
            </div>

            {/* Kindred Spirits */}
            <div className="mb-16">
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                Kindred Spirits
              </h3>
              <p className="text-stone-600 text-sm mb-6 max-w-xl leading-relaxed">
                Warm eyes and soft paws — love in its purest form.
              </p>

              <ScrollRow images={kindredSpiritsImgs} />
            </div>
          </div>
        </section>

        {/* CLIENT WORK */}
        <section
          id="client"
          className="py-20 md:py-28 bg-stone-900 text-stone-100"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Client Work
            </h2>
            <p className="text-stone-300 text-sm mb-10 max-w-xl leading-relaxed">
              Unwind Studios — recovery, breathwork, and stillness.
            </p>

            <ScrollRow images={clientWorkImgs} />
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="py-20 md:py-28 bg-stone-100 text-stone-900"
        >
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 tracking-tight">
                About
              </h2>
              <p className="text-stone-700 mb-3 leading-relaxed">
                I'm Matt Hardaker. I shoot in honest light — mostly at the
                edges of the day when things feel a little slower and a little
                more true.
              </p>
              <p className="text-stone-700 mb-3 leading-relaxed">
                My work lives where tenderness meets presence: maternity at
                sunset, quiet jawline light, sleepy cats, the second right
                before you both laugh.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Soul Lens Media is for people who value real connection over
                posing, and feeling over polish.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-stone-200 border border-stone-300/60 shadow-md">
              <img
                src={sunsetLayers}
                alt="about-section"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-20 md:py-28 bg-stone-200 text-stone-900"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Let's talk
            </h2>
            <p className="text-stone-700 mb-8 leading-relaxed">
              Tell me what you're dreaming up — maternity, connection,
              portraits, brand work, or something we haven't named yet.
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
    </>
  );
}
