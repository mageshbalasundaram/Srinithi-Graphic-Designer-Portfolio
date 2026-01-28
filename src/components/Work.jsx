import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// healthcare images 
import healthcare from "../assets/work/Healthcare/birth.webp"
import healthcare1 from "../assets/work/Healthcare/birthnbond.webp"
import healthcare2 from "../assets/work/Healthcare/kc-flyer.webp"
import healthcare3 from "../assets/work/Healthcare/kcshowcase5.webp"
import healthcare4 from "../assets/work/Healthcare/calories.webp"
import healthcare5 from "../assets/work/Healthcare/infant.webp"
import healthcare6 from "../assets/work/Healthcare/nail.webp"
import healthcare7 from "../assets/work/Healthcare/aba.webp"
import healthcare8 from "../assets/work/Healthcare/health.webp"
import healthcare9 from "../assets/work/Healthcare/online.webp"
import healthcare10 from "../assets/work/Healthcare/proffesionals.webp"

// agri images
import agri1 from "../assets/work/Branding/agri/why timac.webp"
import agri2 from "../assets/work/Branding/agri/harvest.webp"
import agri3 from "../assets/work/Branding/agri/may day.webp"
import agri5 from "../assets/work/Branding/agri/paddy.webp"
import agri6 from "../assets/work/Branding/agri/rule.webp"
import agri8 from "../assets/work/Branding/agri/timac.webp"
import agri9 from "../assets/work/Branding/agri/rose.webp"
import cowcover from "../assets/work/Branding/agri/Cow c.webp"
import cow from "../assets/work/Branding/agri/cow 1.webp"
import cow1 from "../assets/work/Branding/agri/cow 2.webp"
import cow2 from "../assets/work/Branding/agri/cow 3.webp"
import cow3 from "../assets/work/Branding/agri/cow 4.webp"
import cow4 from "../assets/work/Branding/agri/cow 5.webp"
import npkc from "../assets/work/Branding/agri/NPk C.webp"
import npk from "../assets/work/Branding/agri/NPK 1.webp"
import npk1 from "../assets/work/Branding/agri/NPK 2.webp"
import npk2 from "../assets/work/Branding/agri/NPK 3.webp"
import npk3 from "../assets/work/Branding/agri/NPK 4.webp"

// tech images
import tech from "../assets/work/tech/404.webp"
import tech1 from "../assets/work/tech/weekend.webp"
import tech2 from "../assets/work/tech/friend.webp"
import tech3 from "../assets/work/tech/service.webp"
import tech4 from "../assets/work/tech/data.webp"
import tech5 from "../assets/work/tech/kid.webp"
import tech6 from "../assets/work/tech/tamil.webp"
import tech7 from "../assets/work/tech/hacker.webp"
import tech8 from "../assets/work/tech/xmas.webp"
import tech9 from "../assets/work/tech/UPES.webp"

// retain n fashion
import retail from "../assets/work/Retail/ds-front.webp"
import retail1 from "../assets/work/Retail/td-front.webp"
import retail2 from "../assets/work/Retail/ds-packaging.webp"
import retail3 from "../assets/work/Retail/tdimage3.webp"
import retail4 from "../assets/work/Retail/tdimage4.webp"
import retail5 from "../assets/work/Retail/ds-product-1.webp"
import retail6 from "../assets/work/Retail/ds-product-2.webp"
import retail7 from "../assets/work/Retail/tdbag-1.webp"
import retail8 from "../assets/work/Retail/ds-white.webp"
import retail9 from "../assets/work/Retail/td-button.webp"
import retail10 from "../assets/work/Retail/ds-sandle.webp"
import retail11 from "../assets/work/Retail/td-tag.webp"

//fnb
import fnb from "../assets/work/fnb/task one.webp"
import fnb1 from "../assets/work/fnb/task two.webp"
import fnb2 from "../assets/work/fnb/menu.webp"
import fnb3 from "../assets/work/fnb/side1.webp"
import fnb4 from "../assets/work/fnb/side2.webp"
import fnb6 from "../assets/work/fnb/caro 1.webp"
import fnb7 from "../assets/work/fnb/caro 2.webp"
import fnb8 from "../assets/work/fnb/caro 3.webp"
import fnb9 from "../assets/work/fnb/mbgiftcard1.webp"
import fnb10 from "../assets/work/fnb/carrybagtwo.webp"

const industries = [
  {
    id: "technology",
    name: "Tech & Edu",
    description: "I transform complex concepts in technology and education into clear, engaging visuals that inspire trust and motivate action.",
    works: [
      { image: tech, title: " Redesigning Dead-Ends ", desc: " Instead of letting users feel stuck, I designed a 404 page that softens frustration with playful visuals—turning a negative moment into a brand connection." },
      { image: tech1, title: " Balancing Minds and Moods", desc: " I combined GUVI’s learning identity with a weekend tone, creating visuals that relax the eye while still anchoring the brand in education." },
      { image: tech9, title: " Aspiration Visualized", desc: "Clean layouts and confident typography were chosen to reflect clarity, ambition, and trust mirroring the journey of a student stepping into higher education." },
      { image: tech3, title: " Minimalism with Memory Value", desc: "Every element is reduced to essentials, ensuring the ad is not just visually striking but also leaves a lasting imprint in the viewer’s mind." },
      { image: tech4, title: " Making Complexity Approachable", desc: " I simplified abstract concepts of data science through visual metaphors, lowering the cognitive load and helping learners see possibility instead of pressure." },
      { image: tech5, title: "Designing for Curiosity", desc: "Playful colors and storytelling imagery were used to trigger curiosity in kids while assuring parents of trust and credibility." },
      { image: tech6, title: " Culture Translated into Design", desc: " By using Tamil typography with modern balance, I merged local emotion with global elegance—making the greeting both personal and timeless." },
      { image: tech7, title: "Designing for Curiosity", desc: "Playful colors and storytelling imagery were used to trigger curiosity in kids while assuring parents of trust and credibility." },
      { image: tech8, title: " Minimal Joy, Maximum Recall", desc: " I stripped away clutter to let festive colors breathe, creating a design that feels celebratory yet premium in tone." },
      { image: tech2, title: " Emotional Branding in Action", desc: "This design taps into nostalgia and connection, using warm tones and balanced spacing to evoke belonging beyond the brand’s voice." },
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "In healthcare, design means trust and clarity. I simplify medical info, build credibility, and connect patients with care through reassuring communication",
    works: [
      { image: healthcare, title: " Care in Every Pixel", desc: "Gentle tones and soft visuals were used to make gynecology approachable, creating comfort for expecting mothers." },
      { image: healthcare1, title: " Care in Every Pixel", desc: "Gentle tones and soft visuals were used to make gynecology approachable, creating comfort for expecting mothers." },
      { image: healthcare2, title: " Trust in Handheld Form", desc: "A clean brochure that balances medical facts with human warmth-easy to read, reassuring to keep." },
      { image: healthcare3, title: " Awareness Without Overwhelm", desc: "Designed to deliver important health information in small, digestible visuals-clear, calm, and memorable." },
      { image: healthcare4, title: " Health, Simplified Visually", desc: "Health, Simplified Visually" },
      { image: healthcare5, title: " Nurture in Visual Form", desc: "Soft visuals and warm tones create a sense of safety, mirroring the tenderness of infant care." },
      { image: healthcare6, title: " Knowledge in Bites", desc: "Designed to spark curiosity with quick facts—using visual hierarchy to make learning effortless." },
      { image: healthcare7, title: " Smiles Through Design", desc: "Balanced clean whites and blues to reflect hygiene, trust, and confidence in dental care." },
      { image: healthcare9, title: " Information Made Accessible", desc: "A pharmacy creative that makes medicine updates simple, avoiding jargon while keeping authority intact." },
      { image: healthcare10, title: " Professional, Yet Approachable", desc: "Designed posters that highlight expertise while keeping visuals friendly-building trust at first glance." },

    ]
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "In agriculture, design should be simple, trustworthy, and practical. I turn complex farming data into clear visuals that build understanding and brand credibility",
    works: [
      { image: agri1, title: "Clarity in Complexity", desc: "Translated key brand messages into simple icons and layouts, so farmers understand at a glance." },
      { image: agri2, title: "Visualizing Reliability", desc: " Repeated core values with a different structure, reinforcing recall through consistent yet fresh visuals." },
      { image: agri3, title: "Celebrating Effort, Showing Impact", desc: "Highlighted how Timac supports farmers by connecting labour recognition with real agricultural progress." },
      { image: agri5, title: "Proof Made Visual ", desc: "Designed to show crop improvement clearly, using before–after visuals that farmers instantly trust." },
      { image: agri6, title: " Balance in Nature, Balance in Design", desc: "Used the golden ratio layout to present tips, linking natural order with farming wisdom visually." },
      { image: agri8, title: "A Visual Comparison", desc: "Created side-by-side layouts that help farmers easily compare practices and make informed choices." },
      { image: agri9, title: "Beauty Backed by Data", desc: "Showed rose farming improvements visually, combining growth stats with elegant imagery for impact." },
      { image: cowcover, title: "Feeding Knowledge Step by Step", desc: "Broke down animal nutrition into simple frames - making complex science easy for farmers to follow." },
      { image: cow, title: " Spot Digestive Issues Early", desc: "Clear signs like bloating and appetite loss shown simply for farmers." },
      { image: cow1, title: " Understanding the Cause", desc: "Explains how feed imbalance impacts cattle health in an easy way." },
      { image: cow2, title: " Balanced Nutrition Solution Poster", desc: "Highlights balanced nutrition and gut-health boosters for livestock." },
      { image: cow3, title: " Healthy Gut Benefits", desc: "Showcases the key advantages of a strong digestive system." },
      { image: cow4, title: " Farm the Future -CTA", desc: "Clear call-to-action with contact details for farmer engagement." },
      { image: npkc, title: " Modern Layouts for Modern Farming", desc: "Used a bento grid structure to pack tips neatly, helping farmers absorb information quickly." },
      { image: npk, title: " Smart Nutrition for Strong Crops", desc: "Breaking down nutrients into clear visuals so farmers quickly grasp what their crops need." },
      { image: npk1, title: " Techniques for Smarter Fertilization", desc: "Explained complex methods in simple layouts, making advanced practices easy to adopt." },
      { image: npk2, title: " Boosting Yield", desc: "Biostimulants that strengthen roots, soil, and crops" },
      { image: npk3, title: " Your Smart Farming Partner", desc: "Timac Agro India - growing the future with you." },
    ]
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "In fashion, design is more than looks it builds identity and desire. I create packaging, logos, and visuals that make brands premium, memorable, and emotionally engaging.",
    works: [
      { image: retail, title: "Packaging with Presence", desc: "Designed packaging that feels elegant and premium, ensuring the product stands out and speaks before it’s opened." },
      { image: retail1, title: "Identity with Character", desc: "Crafted a logo that reflects Theesha’s fashion essence—balancing boldness and refinement for lasting recall." },
      { image: retail2, title: "Structure Meets Style", desc: "Built layouts using hierarchy and balance, making the packaging functional yet fashion-forward." },
      { image: retail3, title: "Theesha Dresses Identity Card", desc: "A sleek business card design that blends minimal typography with modern elegance to represent the brand’s premium identity.." },
      { image: retail4, title: "Theesha Dresses Store Signage", desc: "Outdoor branding that enhances visibility with a bold yet refined logo, giving the fashion brand a sophisticated street presence." },
      { image: retail5, title: "Fashion in Focus", desc: "Highlighted the product with minimal backdrops, allowing the design and texture to speak for itself." },
      { image: retail6, title: "DS Whipping Skincare", desc: "Clean and sophisticated packaging design crafted for a luxury skincare brand." },
      { image: retail7, title: " Theesha Packaging Design", desc: "Bold and modern packaging concept that enhances brand identity with a clean, minimal look." },
      { image: retail8, title: " DS packaging", desc: "Minimal packaging design with a soft, premium feel for skincare products." },
      { image: retail9, title: " Theesha Packaging", desc: "leek lid design with a fresh green palette, crafted to give the brand a modern and premium appeal." },
      { image: retail10, title: " DS Whipping Cream Packaging", desc: "Elegant skincare packaging with soft tones, designed to reflect purity and premium quality." },
      { image: retail11, title: " Theesha Dresses Tag", desc: "Elegant hang tag design that reflects modern fashion identity." },
    ]
  },

  {
    id: "fnb",
    name: "FnB",
    description: "In food and beverage, visuals shape first impressions. I design for appetite appeal, trust, and recall-making products feel fresh, desirable, and memorable.",
    works: [
      { image: fnb, title: "Serving Visual Appetite", desc: "Designed to trigger cravings instantly—using colors and layouts that make food look irresistible." },
      { image: fnb1, title: "Local Taste, Global Look", desc: "Created a brand-forward promo that balances cultural roots with modern design aesthetics." },
      { image: fnb2, title: "Compact Storytelling", desc: "A small pamphlet packed with bold visuals, built to attract quick attention in crowded events." },
      { image: fnb3, title: "Visibility in a Glance", desc: "A banner designed for maximum recall-large, clear elements that pull people from a distance." },
      { image: fnb4, title: " Visibility in a Glance", desc: "A banner designed for maximum recall-large, clear elements that pull people from a distance." },
      { image: fnb6, title: " Playing with Culture in Design", desc: "Explored bold Hindi typography and playful visuals to give the campaign a unique local voice." },
      { image: fnb7, title: " Rooted in Tradition", desc: "Designed warm, nostalgic visuals with family-centered storytelling to connect the brand with home-cooked authenticity." },
      { image: fnb8, title: " Simplicity with Charm", desc: "Created minimal yet playful compositions highlighting purity, freshness, and the brand’s joyful character." },
      { image: fnb9, title: " Gifting Experience, Not Just Value", desc: "A minimal yet premium card design that turns a simple voucher into an emotional gesture." },
      { image: fnb10, title: "Packaging that Stays in Mind", desc: " Crafted packaging that blends fun with identity so the brand feels playful yet professional." },
    ]
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const [openAccordion, setOpenAccordion] = useState(null); // mobile accordion state
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.05 }
    );

    industries.forEach((ind) => {
      if (sectionRefs.current[ind.id]) {
        observer.observe(sectionRefs.current[ind.id]);
      }
    });

    return () => {
      industries.forEach((ind) => {
        if (sectionRefs.current[ind.id]) {
          observer.unobserve(sectionRefs.current[ind.id]);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex md:min-h-screen justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col px-5 sm:px-10 pt-[50px] md:pt-[100px]">

        {/* ---------------- Desktop View ---------------- */}
        <div className="hidden md:flex flex-row w-full gap-[80px] items-start">
          {/* Sidebar */}
          <div className="w-[32%] sticky top-5 max-h-[calc(100vh-20px)]">
            <h2 id="work" className="custom-font text-white text-5xl w-full text-left block pb-8">
              Featured works
            </h2>
            <div className="flex flex-col gap-5">
              {industries.map((ind) => (
                <div
                  key={ind.id}
                  className={`hover:bg-white/20 flex flex-col gap-2.5 cursor-pointer text-left bg-white/10 border border-white/20 backdrop-blur-lg rounded-4xl transition-all duration-500 ease-in-out overflow-hidden ${activeTab === ind.id
                    ? "shadow-md text-2xl p-5 max-h-48 w-[95%]"
                    : "w-[60%] text-lg px-5 py-3.5 max-h-14"
                    }`}
                  onClick={() => scrollToSection(ind.id)}
                >
                  <button className="text-left cursor-pointer custom-font transition-all duration-500 ease-in-out">
                    {ind.name}
                  </button>
                  <p
                    className={`text-[16px] text-white/90 transition-all duration-500 ease-in-out transform ${activeTab === ind.id ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    {ind.description}
                  </p>
                </div>
              ))}
              {/* Add Yours */} <a
                href="#form"
                className="btn px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100 cursor-pointer inline-block"
              >
                <span className="btn-text">Add Yours</span>
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-16">
            {industries.map((ind) => (
              <section
                key={ind.id}
                id={ind.id}
                ref={(el) => (sectionRefs.current[ind.id] = el)}
                className="pt-8"
              >
                <div className="grid grid-cols-2 gap-10 pt-10">
                  {/* First Row */}
                  {ind.works.slice(0, 2).map((work, i) => (
                    <div key={i}>
                      <img
                        src={work.image}
                        alt={work.title}
                        className="object-cover rounded-3xl hover:shadow-lg transition-shadow duration-200"
                        loading="lazy"
                      />
                      <div className="flex flex-col p-5 gap-2">
                        <h3 className="custom-font text-lg ">
                          {work.title}
                        </h3>
                        <p className="text-[16px] text-white/80">{work.desc}</p>
                      </div>
                    </div>
                  ))}

                  {/* Second Row */}
                  <div className="col-span-2">
                    <img
                      src={ind.works[2].image}
                      alt={ind.works[2].title}
                      loading="lazy"
                      className="object-cover rounded-3xl hover:shadow-lg transition-shadow duration-200"
                    />
                    <div className="flex flex-col p-5 gap-2">
                      <h3 className="custom-font text-lg">
                        {ind.works[2].title}
                      </h3>
                      <p className="text-[16px] text-white/90">{ind.works[2].desc}</p>
                    </div>
                  </div>

                  {/* Third Row */}
                  {ind.works.slice(3, 5).map((work, i) => (
                    <div key={i}>
                      <img
                        src={work.image}
                        alt={work.title}
                        loading="lazy"
                        className="object-cover rounded-3xl hover:shadow-lg transition-shadow duration-200"
                      />
                      <div className="flex flex-col p-5 gap-2">
                        <h3 className="custom-font text-lg ">
                          {work.title}
                        </h3>
                        <p className="text-[16px] text-white/90">{work.desc}</p>
                      </div>
                    </div>
                  ))}

                  {/* Slider */}
                  <div className="col-span-2 mb-10 relative z-10">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={3}
                      navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                      }}
                      breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                      }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                    >
                      {ind.works.slice(5).map((work, i) => (
                        <SwiperSlide key={i} className="flex flex-col gap-2">
                          <img
                            src={work.image}
                            alt={work.title}
                            loading="lazy"
                            className="object-cover rounded-xl hover:shadow-lg transition-shadow duration-200"
                          />
                          <div className="flex flex-col p-3 gap-2">
                            <h3 className="custom-font text-lg  ">
                              {work.title}
                            </h3>
                            <p className="text-[16px] text-white/90">{work.desc}</p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div>
                      <button className="cursor-pointer z-50 custom-prev hover:scale-105 active:scale-90 transition-all duration-200 absolute -bottom-14 right-20 bg-white/10 p-2 rounded-full shadow hover:bg-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#fff"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="cursor-pointer z-50 custom-next hover:scale-105 active:scale-90 transition-all duration-200 absolute -bottom-14 right-0 bg-white/10 p-2 rounded-full shadow hover:bg-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#fff"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* ---------------- Mobile Accordion View ---------------- */}
        {/* Mobile Accordion View */}
        <div className="md:hidden flex flex-col gap-5 pt-0">
          <h2 id="featuredwork" className="custom-font text-white text-3xl w-full text-left block ">
            Featured Works
          </h2>
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="bg-white/10 border border-white/20 rounded-2xl"
            >
              {/* Accordion Header */}
              <button
                className="w-full flex justify-between items-center p-4 text-lg font-semibold custom-font tracking-wider"
                onClick={() =>
                  setOpenAccordion(openAccordion === ind.id ? null : ind.id)
                }
              >
                {ind.name}
                <span>{openAccordion === ind.id ? "−" : "+"}</span>
              </button>

              {/* Accordion Content */}
              {openAccordion === ind.id && (
                <div className="p-4 flex flex-col gap-6">
                  {/* Top Grid (first few images like desktop) */}
                  <div className="grid grid-cols-1 gap-6">
                    {ind.works.slice(0, 5).map((work, i) => (
                      <div key={i}>
                        <img
                          src={work.image}
                          alt={work.title}
                          loading="lazy"
                          className="object-cover rounded-2xl hover:shadow-lg transition-shadow duration-200"
                        />
                        <h3 className="custom-font text-md font-bold mt-2 tracking-wider">
                          {work.title}
                        </h3>
                        <p className="text-sm">{work.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Carousel for remaining works */}
                  {ind.works.length > 3 && (
                    <div className="relative">
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={15}
                        slidesPerView={1}
                        navigation={{
                          prevEl: `.custom-prev-${ind.id}`,
                          nextEl: `.custom-next-${ind.id}`,
                        }}
                        breakpoints={{
                          480: { slidesPerView: 1 },
                          640: { slidesPerView: 2 },
                        }}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        loop={true}
                      >
                        {ind.works.slice(5).map((work, i) => (
                          <SwiperSlide key={i}>
                            <img
                              src={work.image}
                              alt={work.title}
                              loading="lazy"
                              className="object-cover rounded-xl hover:shadow-lg transition-shadow duration-200"
                            />
                            <div className="flex flex-col p-3 gap-2">
                              <h3 className="custom-font text-md font-bold tracking-wider">
                                {work.title}
                              </h3>
                              <p className="text-sm">{work.desc}</p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      {/* Carousel Navigation (unique per accordion) */}
                      <div className="flex justify-end gap-3 mt-3">
                        <button
                          className={`custom-prev-${ind.id} cursor-pointer bg-white/10 p-2 rounded-full shadow hover:bg-white/20`}
                          aria-label="Previous Slide">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#fff"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          className={`custom-next-${ind.id} cursor-pointer bg-white/10 p-2 rounded-full shadow hover:bg-white/20`}
                          aria-label="Next Slide">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#fff"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}