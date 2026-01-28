import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define items with label + link
  const menuItems = [
    { name: "About", href: "/#about" },
    { name: "Service", href: "/#service" },
    { name: "Featured Works", href: "/#work" },
    { name: "Brand Identities", href: "/#brand" },
    { name: "Resources", href: "/#resources" },
  ];

  // Define items with label + link
  const mblItems = [
    { name: "About", href: "/#about" },
    { name: "Service", href: "/#service" },
    { name: "Featured Works", href: "/#featuredwork" },
    { name: "Brand Identities", href: "/#brand" },
    { name: "Resources", href: "/#resources" },
  ];

  return (
    <nav className="relative white-gradient-con w-full flex justify-center items-center left-0 z-50 transition-all duration-200">
      <div className="inner-con max-w-7xl w-full flex justify-between px-6 md:px-10 py-3 items-center">
        {/* Logo */}
        <Link to="/" className="logo cursor-pointer">
          <h2 className="text-3xl md:text-5xl">Srinithi</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex justify-between items-center gap-6">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="px-2.5 py-2.5 group relative cursor-pointer"
              >
                <a href={item.href} className="block">
                  <p>{item.name}</p>
                  <span className="absolute left-1/2 -bottom-3.5 h-1 w-0 -translate-x-1/2 bg-white rounded transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button (desktop) */} 
        <Link 
          to="/timac-agro-annual-meet"
          className="hidden scale-loop md:flex px-6 py-1.5 rounded-3xl bg-[#6A1451] text-[#44103E] border-[#6A1451] shadow-US cursor-pointer"
        >
          <p className="text-base md:text-lg font-bold">Latest Case study</p>
        </Link>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1.5 cursor-pointer relative z-[101]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Mobile Dropdown with Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)} // Close on outside click
          >
            <motion.div
              key="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-[60px] left-0 w-full bg-[#44103E]/90 flex flex-col items-center py-6 gap-4 rounded-b-2xl shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
            >
              {mblItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg text-white cursor-pointer hover:text-pink-400 transition"
                >
                  {item.name}
                </motion.a>
              ))}
              <a
                href="/timac-agro-annual-meet"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-6 py-2 rounded-3xl bg-white border border-[#44103E]/10 text-[#44103E]! shadow-US cursor-pointer"
              >
                <p className="text-lg text-[#44103E]!">Latest Case Study</p>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
