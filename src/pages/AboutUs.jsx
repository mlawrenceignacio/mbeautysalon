import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import salonLogo from "../assets/images/logo.jpg";
import owner from "../assets/images/owner.jpeg";
import owner2 from "../assets/images/owner2.png";
import owner3 from "../assets/images/owner3.png";
import gallery1 from "../assets/images/interior.png";
import gallery2 from "../assets/images/interior2.png";
import gallery3 from "../assets/images/logo2.png";
import missionIcon from "../assets/images/mission.png";
import visionIcon from "../assets/images/vision.png";
import aboutIcon from "../assets/images/about.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col h-[100dvh] w-full">
      <Header page={"ABOUT US"} />

      <div className="flex-1 overflow-y-auto">
        <section className="w-full bg-[url('src/assets/images/desktopBG.jpg')] bg-cover py-10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-red-950">
              Our Story
            </h1>
            <p className="text-sm md:text-lg text-red-900 mt-1">
              A journey our eyes witnessed, and our hearts built.
            </p>

            <div className="flex justify-center gap-3 mt-6">
              <img
                src={gallery1}
                className="w-28 md:w-44 h-36 md:h-48 object-cover rounded-xl transition-transform duration-300 ease-out hover:scale-110"
              />
              <img
                src={gallery3}
                className="w-28 md:w-44 h-36 md:h-48 object-cover rounded-xl transition-transform duration-300 ease-out hover:scale-110"
              />
              <img
                src={gallery2}
                className="w-28 md:w-44 h-36 md:h-48 object-cover rounded-xl transition-transform duration-300 ease-out hover:scale-110
"
              />
            </div>

            <div className="mt-6 bg-white/80 backdrop-blur rounded-xl p-4 shadow max-w-xl mx-auto">
              <p className="text-sm md:text-base text-red-900">
                What began as a humble home-based studio has grown into a
                trusted beauty and wellness destination built with passion,
                dedication, and genuine care.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-pink-50 py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={missionIcon}
                  className="w-8 h-8 transition-transform duration-300 ease-out hover:scale-110
"
                />
                <h2 className="text-xl font-bold text-red-950">Our Mission</h2>
              </div>
              <p className="text-sm md:text-lg text-justify text-gray-700 leading-relaxed">
                MbeautyQueen Beauty and Wellness is committed to delivering
                high-quality, client-centered beauty and wellness services that
                enhance confidence, comfort, and natural beauty. Guided by
                genuine care and dedication, we aim to create a welcoming space
                where every client feels valued and empowered.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={visionIcon}
                  className="w-8 h-8 transition-transform duration-300 ease-out hover:scale-110
"
                />
                <h2 className="text-xl font-bold text-red-950">Our Vision</h2>
              </div>
              <p className="text-sm md:text-lg text-justify text-gray-700 leading-relaxed">
                Our vision is to become a leading beauty and wellness
                destination recognized for excellence, innovation, and heartfelt
                service. We aspire to uplift lives and inspire trust through
                transformative beauty experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl font-bold text-red-950 text-center">
              Our Journey
            </h2>

            <p className="text-sm md:text-lg text-justify text-gray-700 leading-relaxed">
              MbeautyQueen Beauty and Wellness began as a humble studio inside
              the owner’s home back in 2023. With only her training, a few
              tools, and a deep passion for beauty services, she slowly built
              her skills while working inside another salon.
            </p>

            <p className="text-sm md:text-lg text-justify text-gray-700 leading-relaxed">
              After three months, she bravely rented her own space. This small
              studio marked a turning point — after a year of dedication, the
              business expanded into a full salon and later opened a branch in
              Antipolo through franchise partnership.
            </p>

            <p className="text-sm md:text-lg text-justify text-gray-700 leading-relaxed">
              As the salon grew, clients came from nearby towns like Binangonan
              and Antipolo. From brows and lashes, the salon expanded into a
              complete wellness hub, earning trust through consistent quality
              and genuine care.
            </p>
          </div>
        </section>

        <section className="w-full bg-pink-50 py-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/3 bg-white p-4 rounded-xl shadow">
              <img
                src={salonLogo}
                alt="Salon Logo"
                className="w-full object-contain 
"
              />
            </div>

            <div className="w-full lg:w-2/3">
              <div className="flex items-center gap-2 mb-3">
                <img src={aboutIcon} className="w-6 h-6" />
                <h2
                  className="text-xl md:text-2xl font-bold text-red-950 transition-transform duration-300 ease-out hover:scale-110
"
                >
                  About Us
                </h2>
              </div>
              <p className="text-sm md:text-lg text-justify text-gray-700 leading-relaxed">
                MbeautyQueen Beauty and Wellness continues to evolve by adding
                new spa and aesthetic services while maintaining the highest
                standards of safety and quality. Today, it stands as a trusted
                beauty destination in the community.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 bg-pink-100/60 rounded-2xl p-6 shadow">
            <h2 className="text-xl md:text-2xl font-bold text-red-950 text-center mb-4">
              Meet the Founder
            </h2>

            <div className="flex justify-center gap-3 mb-4">
              <img
                src={owner}
                className="w-24 md:w-40 rounded-lg object-cover transition-transform duration-300 ease-out hover:scale-110
"
              />
              <img
                src={owner3}
                className="w-24 md:w-40 rounded-lg object-covertransition-transform duration-300 ease-out hover:scale-110
"
              />
              <img
                src={owner2}
                className="w-24 md:w-40 rounded-lg object-cover transition-transform duration-300 ease-out hover:scale-110
"
              />
            </div>

            <p className="text-sm md:text-lg text-justify text-gray-700 leading-relaxed">
              The owner, Maricar Moral Dumon, embodies passion, perseverance,
              and continuous learning. From simple brow and lash services to
              advanced aesthetic treatments, her dedication led her to
              international competitions and seminars — forming the foundation
              of the salon’s success.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
