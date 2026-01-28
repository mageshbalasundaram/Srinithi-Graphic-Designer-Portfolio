import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import intro from "../assets/blorence-intro.mp4"
import { ul } from "framer-motion/client";


const Footer = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data) => {
    await fetch("https://formspree.io/f/mrbldlnr", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    reset();
    setShowSuccess(true);
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);
  return (
    <footer className="w-full flex flex-col justify-center items-center pb-10 overflow-hidden">
      {/* Newsletter Section */}
      <div id="resources" className="inner-newsletter max-w-7xl w-full md:w-[550px] flex flex-col md:flex-row justify-between gap-5 px-5 md:px-10 py-[50px] md:py-25 items-center">
        <div className="flex flex-col items-center  justify-center w-full ">
          <div className="flex items-start w-full">
            <img src="/icon1.svg" alt="icon" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)} className="mt-3 mb-3 bg-white/20 backdrop-blur-lg px-2 md:pl-8 py-2 rounded-full flex items-center w-full max-w-[500px]">
            <input

              {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })} placeholder="Type your email address.." type="email"
              className="bg-transparent custom-font-2 text-base md:text-[16px] opacity-100 outline-none text-white placeholder:text-white w-full "
            />
            {errors.email && <p className="text-red-800 text-xs">{errors.email.message}</p>}
            <button type="submit" disabled={isSubmitting} className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-white/20 rounded-full p-1">
              <img className={`w-full h-full ${isSubmitting ? "opacity-50" : "opacity-100"}`} src="/Arrow right-circle.svg" alt="submit" />
            </button>

          </form>
          {/* Error Message (shows if empty) */}
          {errors.message && (
            <p className="text-red-500 text-xs mt-1 px-2">
              {errors.message.message}
            </p>
          )}

          {/* Success Message (auto hides after 2s) */}
          {showSuccess && (
            <p className="text-white text-xs mt-1 px-2">
              Thanks! Exciting updates are on their way 🚀
            </p>
          )}
          <div className="flex justify-end items-end w-full">
            <img src="/icon2.svg" alt="icon" />
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="inner-footer max-w-7xl w-full flex flex-col gap-5 px-5 md:px-10 items-center">
        <div className="footer-top flex flex-col  lg:flex-row  gap-5 w-full ">
          {/* Quick Links */}
          <div className="white-gradient-con p-5 rounded-4xl flex flex-col gap-3 w-full md:w-[20%] ">
            <ul><li className="custom-font-2 text-lg font-bold list-none">Quick links</li></ul>
            {[
              { name: "About", url: "#about" },
              { name: "Featured Works", url: "#works" },
              { name: "Brand Identities", url: "#brand" },
              { name: "Services", url: "#service" },
              { name: "Free Resources", url: "#resources" },
              { name: "Contact", url: "#form" },
              
            ].map((link, i) => (
              <ul>
                <li key={i} className="list-none pl-1">
                  <a
                    href={link.url}
                    className="custom-font-2 text-white/90 text-sm md:text-base  hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              </ul>
            ))}
          </div>

          {/* Right Section */}
          <div className="footer-top-right-con flex flex-col  gap-5 w-full">
            <div className="footer-top-right-inner-con flex flex-col md:flex-row gap-5">
              {/* Expertise */}
              <div className="white-gradient-con p-5 rounded-4xl flex flex-col gap-3  ">
                <li className="custom-font-2 text-lg font-bold list-none">Expertise</li>
                {["Graphic Design", "Logo Design", "Branding", "Pitch deck"].map((item, i) => (
                  <li key={i} className="custom-font-2 text-white/90! text-sm md:text-base list-none   pl-1">{item}</li>
                ))}
              </div>

              {/* Follow Me */}
              <div className="white-gradient-con p-5 rounded-4xl flex flex-col gap-3 ">
                <li className="custom-font-2 text-lg font-bold list-none">Follow Me</li>
                {[
                  { name: "Instagram", url: "https://www.instagram.com/sriiiniithi/" },
                  { name: "Linkedin", url: "https://www.linkedin.com/in/sri-nithi-1272b027a/" },
                  { name: "Dribbble", url: "https://dribbble.com/srinithidesign" },
                  { name: "Behance", url: "https://www.behance.net/srinithim/" },
                ].map((social, i) => (
                  <ul>
                    <li key={i} className="list-none pl-1">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-font-2 text-white/90 text-sm md:text-base hover:text-white"
                      >
                        {social.name}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>

              {/* Contact + Mail */}
              <div className="flex flex-col gap-5 ">
                <div className="white-gradient-con px-5 py-4 rounded-4xl flex flex-col gap-2.5">
                  <ul><li className="custom-font-2 text-lg font-bold list-none">Contact</li></ul>
                  <a href='tel:+91 9087918818'>
                    <ul> <li className="custom-font-2 text-sm text-white/90! md:text-base list-none pl-1  ">+91 9087918818</li></ul></a>
                </div>
                <div className="white-gradient-con px-5 py-4 rounded-4xl flex flex-col gap-2.5"><ul>
                  <li className="custom-font-2 text-lg font-bold list-none">Mail</li> <a href='mailto:Srinithi@blorencedesign.com'>
                    <li className="custom-font-2 text-sm text-white/90! md:text-base list-none pl-1  ">Srinithi@blorencedesign.com</li></a></ul>
                </div>
              </div>

              {/* Video / Play Icon */}
              <div className=" flex-1 overflow-hidden relative h-40 md:h-full w-full md:w-80 white-gradient-con rounded-4xl flex justify-center items-center">
                {/* <img src="Playcircle.svg" alt="Play" className="w-16 md:w-auto" /> */}
                <video autoPlay
                  muted
                  loop
                  playsInline aria-hidden="true" className="object-cover w-full h-full"  >
                  <source src={intro} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>
            </div>

            {/* Copyright */}
            <div className="copyright-con white-gradient-con p-4 rounded-4xl text-center  text-sm md:text-base ">
              <p className="font-normal">
                Copyright @2025 All rights reserved. Designed by{" "}
                <a className="font-bold text-base md:text-lg" href="https://blorencedesign.com">Blorencedesign</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom relative white-gradient-con w-full  overflow-hidden rounded-4xl flex items-center justify-center">
          <div className="text-[70px] md:text-[280px]  custom-font text-center pt-8  -mb-3 md:-mb-12 leading-none tracking-tight">
            Portfolio
          </div>
          <div className="text-base md:text-xl custom-font-2 absolute top-5 text-white/90!  md:top-10 left-6 md:left-10">
            Srinithi's
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
