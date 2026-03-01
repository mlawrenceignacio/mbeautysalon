import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import salonLogo from "../assets/images/logo.jpg";
import owner from "../assets/images/owner.jpeg";
import owner2 from "../assets/images/owner2.png";
import owner3 from "../assets/images/owner3.png";
import gallery1 from "../assets/images/interior.png";
import gallery2 from "../assets/images/interior2.png";
import gallery3 from "../assets/images/logo2.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col h-[100dvh] w-full bg-white">
      <Header page={"ABOUT US"} />

      <div className="flex-1 overflow-y-auto">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-14">
            <div className="flex flex-col items-center text-center gap-3">
              <p className="text-xs md:text-sm tracking-widest text-red-950/70 uppercase">
                MBeautyQueen Beauty & Wellness
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-red-950 leading-tight">
                Beauty that feels personal.
              </h1>
              <p className="text-sm md:text-lg text-red-950/70 max-w-2xl">
                From a humble home-based studio to a trusted beauty destination
                — built with passion, skill, and genuine care.
              </p>
              <div className="mt-6 w-full max-w-4xl">
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {[gallery1, gallery3, gallery2].map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-2xl border border-red-950/10 bg-white shadow-sm"
                    >
                      <img
                        src={img}
                        alt="Salon gallery"
                        className="h-28 w-full object-cover md:h-44 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-950/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-red-950" />
                <span className="text-xs md:text-sm text-red-950/80">
                  Est. 2023 • Brows • Lashes • Aesthetics • Wellness
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              <div className="lg:col-span-3 rounded-3xl border border-red-950/10 bg-white shadow-sm p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-red-950">
                  Our Story
                </h2>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  What started as a small home-based setup grew through
                  consistent work, continuous learning, and a deep love for
                  making clients feel confident. We built MBeautyQueen around
                  comfort, cleanliness, and results — with a warm, welcoming
                  experience every visit.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-pink-50 p-4 border border-red-950/10">
                    <p className="text-sm font-semibold text-red-950">
                      Client-first care
                    </p>
                    <p className="text-xs md:text-sm text-gray-700 mt-1">
                      Friendly service, safe practices, and honest guidance.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-pink-50 p-4 border border-red-950/10">
                    <p className="text-sm font-semibold text-red-950">
                      Quality & consistency
                    </p>
                    <p className="text-xs md:text-sm text-gray-700 mt-1">
                      Clean, polished results you can trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 rounded-3xl border border-red-950/10 bg-gradient-to-b from-pink-50 to-white shadow-sm p-6 md:p-8 flex flex-col items-center justify-center text-center">
                <div className="w-full max-w-[260px] rounded-2xl bg-white p-4 border border-red-950/10 shadow-sm">
                  <img
                    src={salonLogo}
                    alt="Salon Logo"
                    className="w-full object-contain"
                  />
                </div>
                <p className="mt-4 text-sm text-red-950/70">
                  A modern beauty & wellness space designed to feel calm, clean,
                  and empowering.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-pink-50/60 border-y border-red-950/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-red-950">
                Our Journey
              </h2>
              <p className="mt-2 text-sm md:text-base text-red-950/70 max-w-2xl">
                Small beginnings, brave steps, and steady growth — fueled by
                skill and dedication.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "2023 — Humble Studio Start",
                  desc: "A home-based setup with passion, training, and a few tools — building skills and trust one client at a time.",
                },
                {
                  title: "First Space — A Turning Point",
                  desc: "After months of dedication, the salon moved into its own space — a bold step toward growth.",
                },
                {
                  title: "Expansion — Community Trust",
                  desc: "With consistent quality and care, clients came from nearby towns and services expanded into wellness and aesthetics.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-red-950/10 bg-white shadow-sm p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-950 text-white text-sm font-bold">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-red-950">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-3xl border border-red-950/10 bg-white shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-b from-pink-50 to-white p-6 md:p-8">
                  <h2 className="text-2xl font-extrabold text-red-950">
                    Meet the Founder
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-red-950/70">
                    Passion, perseverance, and continuous learning.
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[owner, owner3, owner2].map((img, idx) => (
                      <div
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl border border-red-950/10 bg-white shadow-sm"
                      >
                        <img
                          src={img}
                          alt="Founder"
                          className="h-28 w-full object-cover md:h-44 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Maricar Moral Dumon built MBeautyQueen from the ground up —
                    starting with brows and lashes, then expanding into advanced
                    aesthetic treatments through seminars, competitions, and
                    continuous upskilling.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-pink-50 p-4 border border-red-950/10">
                      <p className="text-sm font-semibold text-red-950">
                        Clean, safe, and meticulous
                      </p>
                      <p className="text-xs md:text-sm text-gray-700 mt-1">
                        Hygiene and quality standards come first.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-pink-50 p-4 border border-red-950/10">
                      <p className="text-sm font-semibold text-red-950">
                        Always improving
                      </p>
                      <p className="text-xs md:text-sm text-gray-700 mt-1">
                        Training-driven services with modern techniques.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-950 text-pink-50 px-4 py-2 w-fit shadow-sm">
                    <span className="text-sm font-semibold">
                      Thank you for trusting us
                    </span>
                    <span className="opacity-80">♡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
