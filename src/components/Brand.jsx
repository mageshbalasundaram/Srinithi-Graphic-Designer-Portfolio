import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // or next/link if using Next.js

// DK AC Service image import
import logo from "../assets/work/Branding/dk/dk-four-logo-small.webp";
import cap from "../assets/work/Branding/dk/Cap-small.webp";
import front from "../assets/work/Branding/dk/dk-front.webp";
import tees from "../assets/work/Branding/dk/dk-tshirt-design-small.webp";
import card from "../assets/work/Branding/dk/dkbcard-small.webp";
import color from "../assets/work/Branding/dk/color pellete.mp4";
import intro from "../assets/work/Branding/dk/intro.mp4";
import animation from "../assets/work/Branding/dk/dk-logo-anime.mp4";

// Monkey Bun images import
import mblogo from "../assets/work/Branding/mb/mblogoanimation.mp4";
import mbcolor from "../assets/work/Branding/mb/mbcolorpalete.png";
import mbbox from "../assets/work/Branding/mb/bun box ph.png";
import mbtext from "../assets/work/Branding/mb/mbtextone.mp4";
import mbmascot from "../assets/work/Branding/mb/mbmascot.png";
import mbnonveg from "../assets/work/Branding/mb/burger box nonveg.webp";
import mblogotext from "../assets/work/Branding/mb/mblogotext.png";
import mbcup from "../assets/work/Branding/mb/mb-cub.webp";
import cook from "../assets/work/Branding/cooking.gif";

// timac annual meet

import agenda from "../assets/timac/agenda.webp"
import agenda2 from "../assets/timac/A4-Agenda.webp"
import agenda3 from "../assets/timac/A5-Agenda.webp"
import backdrop from "../assets/timac/Back-drop.webp"
import display from "../assets/timac/display.webp"
import display1 from "../assets/timac/display1.webp"

import display2 from "../assets/timac/display2.webp"
import display3 from "../assets/timac/display3.webp"
import display4 from "../assets/timac/display4.webp"
import display5 from "../assets/timac/display5.webp"

import display6 from "../assets/timac/display6.webp"

const Brand = () => {
  const tabs = [
    { name: "DK AC Service", bg: "bg-[#082e45]", comingSoon: false, link: "https://www.blorencedesign.com/dkacservice" },
    { name: "MonkeyBun", bg: "bg-[#fff3ab]", comingSoon: false, link: "https://www.blorencedesign.com/monkeybun" },
    { name: "Timac Annual Meet", bg: "bg-[#98D7DD]", comingSoon: false, link: "/timac-agro-annual-meet" },
    { name: "FluffyPure", bg: "bg-white/10", comingSoon: true, link: null },
    { name: "Blubbles", bg: "bg-white/10", comingSoon: true, link: null },
  ];

  const gridData = [
    [
      { col: 2, row: 1, type: "image", src: logo },
      { col: 1, row: 1, type: "image", src: front },
      { col: 2, row: 1, type: "video", src: intro },
      { col: 1, row: 1, type: "image", src: card },
      { col: 2, row: 1, type: "video", src: color },
      { col: 1, row: 1, type: "image", src: tees },
      { col: 1, row: 1, type: "image", src: cap },
      { col: 2, row: 1, type: "video", src: animation },
    ],
    [
      { col: 1, row: 1, type: "image", src: mbmascot },
      { col: 1, row: 1, type: "video", src: mbtext },
      { col: 2, row: 1, type: "image", src: mbcup },
      { col: 2, row: 1, type: "video", src: mblogo },
      { col: 1, row: 1, type: "image", src: mbbox },
      { col: 2, row: 1, type: "image", src: mbcolor },
      { col: 2, row: 1, type: "image", src: mblogotext },
      { col: 1, row: 1, type: "image", src: mbnonveg },
    ],
    [
      { col: 2, row: 1, type: "image", src: agenda2 },
      { col: 2, row: 1, type: "image", src: backdrop },
      { col: 2, row: 1, type: "image", src: agenda3 },
      { col: 1, row: 1, type: "image", src: display },
      { col: 1, row: 1, type: "image", src: display1 },
      { col: 1, row: 1, type: "image", src: display2 },
      { col: 1, row: 1, type: "image", src: display3 },
      { col: 1, row: 1, type: "image", src: display4 },
      { col: 1, row: 1, type: "image", src: display6 },
    ],
  ];

  const [activeTab, setActiveTab] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1], staggerChildren: 0.07 },
    },
    exit: {
      opacity: 0,
      x: -100,
      filter: "blur(40px)",
      transition: { duration: 0.4, ease: [0.77, 0, 0.175, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.77, 0, 0.175, 1] } },
  };

  const activeTabData = tabs[activeTab];

  return (
    <div className="min-h-screen px-5 md:px-10 flex flex-col items-center mt-[50px] md:mt-[100px] text-white">
      {/* Heading */}
      <h2 id="brand" className=" custom-font text-3xl md:text-5xl font-bold pb-6 tracking-wider">Brand Identities</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify gap-y-2 gap-1 md:gap-3 mb-8 bg-white/10 p-2 rounded-4xl border border-white/20">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-2.5 py-1.5 md:px-4 md:py-2 rounded-3xl text-sm md:text-lg transition-all custom-font-2 ${
              activeTab === i ? "bg-white/20 border border-white/20" : "hover:bg-white/10"
            }`}
          >
            {tab.name}
          </button>
        ))}
        <a href="#form">
        <button className="btn cursor-pointer text-sm md:text-base">
          <span className="btn-text">Add Yours</span>
        </button></a>
      </div>

      {/* Project Container (Clickable) */}
      <div
        className={`relative w-full max-w-7xl p-3 md:p-5 flex flex-col items-center rounded-4xl transition-colors ${activeTabData.bg} group`}
      >
        {activeTabData.comingSoon ? (
          // Coming Soon State
          <div className="flex items-center justify-center min-h-[300px] md:min-h-[500px] rounded-3xl">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              src={cook}
              alt="Coming soon"
              loading="lazy"
              className="rounded-3xl max-h-[250px] md:max-h-[400px] object-contain"
            />
          </div>
        ) : (
          // ✅ Entire container is now clickable
          <Link to={activeTabData.link} className="w-full">
            <div className="relative w-full group cursor-pointer">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 z-20"
              >
                <span className="bg-white text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-lg">
                  View Case Study
                </span>
              </motion.div>

              {/* Grid Content */}
              <div className="w-full group-hover:opacity-90 transition-opacity duration-500">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5"
                  >
                    {gridData[activeTab].map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="bg-white/10 rounded-2xl md:rounded-3xl shadow-us border border-white/10 overflow-hidden"
                        style={{
                          gridColumn: `span ${item.col} / span ${item.col}`,
                          gridRow: `span ${item.row} / span ${item.row}`,
                        }}
                      >
                        {item.type === "image" && (
                          <img
                            src={item.src}
                            alt=" srinithi - portfolio "
                            loading="lazy"
                            className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                          />
                        )}
                        {item.type === "video" && (
                          <video
                            src={item.src}
                            autoPlay
                            muted
                            loop aria-hidden="true"
                            playsInline
                            className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                          />
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Brand;

