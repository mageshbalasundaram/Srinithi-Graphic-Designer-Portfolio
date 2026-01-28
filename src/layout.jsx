import React, { Suspense } from "react";

// Always load immediately
import Navbar from "./components/Navbar"

// Lazy load the rest
const Footer = React.lazy(() => import('./components/Footer'));
const GoToTop = React.lazy(() => import('./components/GoToTop'));

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='relative overflow-clip'>
      {/* Background gradients */}

        <div className="absolute w-[3185px] h-[3454px] left-[-1681px] top-[-1410px] bg-[radial-gradient(50%_50%_at_50%_50%,_#FFF7AE_0%,_rgba(254,161,184,0.8)_27.1%,_rgba(255,73,192,0.5)_52.1%,_rgba(68,16,62,0)_100%)] blur-[25px] -z-10"></div>
        <div className="gradient-effect-2"></div>
        <div className="gradient-effect-3"></div>
        <div className="gradient-effect-4"></div>
        <div className="gradient-effect-5"></div>
        <div className="gradient-effect-6"></div>
        <div className="gradient-effect-7"></div>
        <div className="gradient-effect-8"></div>
        <div className="gradient-effect-9"></div>
        <div className="gradient-effect-10"></div>
        <div className="gradient-effect-11"></div>
        <div className="gradient-effect-12"></div>
        <div className="gradient-effect-13"></div>
        <div className="gradient-effect-14"></div>
        <div className="gradient-effect-15"></div>
        <div className="gradient-effect-16"></div>
        <div className="gradient-effect-17"></div>
        <div className="gradient-effect-18"></div>
        <div className="gradient-effect-19"></div>
        <div className="gradient-effect-20"></div>
        <div className="gradient-effect-21"></div>
        <div className="gradient-effect-22"></div>
        <div className="gradient-effect-23"></div>
        <div className="gradient-effect-24"></div>

      

      {/* Load Navbar immediately */}
      <Navbar/>

      <Outlet/>

      {/* Lazy load Footer and GoToTop separately */}
      <Suspense fallback={null}>
        <Footer />
        <GoToTop />
      </Suspense>
    </div>
  );
};

export default Layout;