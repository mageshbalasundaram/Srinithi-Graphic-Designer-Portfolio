import React, { useEffect, useState } from "react";
import PhysicsWords from "./drag";
import calendy from "../assets/calendy.svg";
import { useForm } from "react-hook-form";


const Allothers = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);
  const [physicsWord, setPhysicsWord] = useState("");

const onSubmit = async (data) => {
  const message = data.message.trim();

  if (!message) return;

  // 1. Add physics pill
  setPhysicsWord(`${message}-${Date.now()}`);

  try {
    // 2. Send email (example API)
    await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    setShowSuccess(true);
    reset();

    setTimeout(() => setShowSuccess(false), 2000);

  } catch (err) {
    console.error("Mail failed", err);
  }
};


  return (
    <div id="home" className="flex flex-col overflow-hidden ">
      {/* Hero Section */}
      <div className="w-full flex flex-col justify-center items-center z-0">
        <div className="hero max-w-7xl w-full flex px-5 md:px-10 pt-10 md:pt-[60px]  overflow-hidden">
          <div className="inner-hero relative white-gradient-con w-full flex flex-col items-center rounded-4xl pt-10">

            <h1 className="custom-font font-extrabold! -mt-4 md:-mt-6 tracking-normal md:tracking-wide relative text-[80px] sm:text-[80px] md:text-[120px] lg:text-[190px] text-center leading-none">
              <span className="absolute  text-[16px]! tracking-normal left-1 md:left-5 -top-2 md:top-2"><p>Hi I'm</p></span>
              Srinithi
              <p className="z-12  w-[150px] md:w-[250px]  tracking-normal absolute text-[14px]! md:text-[16px]! left-1 md:left-5 -bottom-14 md:-bottom-8 text-left leading-normal ">I create designs that don’t just look good - they actually work . </p>
              <a href="#work" className="hidden md:block z-12 btn tracking-normal  absolute text-[14px]! md:text-[16px]! left-1 md:left-5 -bottom-23 md:-bottom-23"> <span className="btn-text"> View Work</span></a>
           
              <a href="#featuredwork" className=" block md:hidden z-12 btn tracking-normal  absolute text-[14px]! md:text-[16px]! left-1 md:left-5 -bottom-23 md:-bottom-23"> <span className="btn-text"> View Work</span></a>
            </h1>
            <img src="/hero-girl3.webp" className="-mt-10 md:-mt-30 -mr-15 md:-mr-0 z-10 w-auto h-[350px] md:h-[500px]" alt="srinithi grphic designer"  />

          </div>
        </div>

        {/* About + Chat Section */}
        <div className=" about max-w-7xl w-full flex flex-col md:flex-row px-5 md:px-10 py-[50px] md:py-[100px] justify-between gap-8 md:gap-12 items-center z-10">

          {/* Left Text Content */}
          <div id="about" className="w-full md:w-[50%] flex flex-col gap-3 text-left">
            <p className="custom-font-2 text-sm sm:text-lg w-full">You Definitely Need to</p>
            <h2 className="custom-font text-3xl sm:text-4xl md:text-5xl leading-tight">
              know about your <br /> future designer

            </h2>
            <p className="custom-font-2 text-sm sm:text-base md:text-lg">Hi, I’m Srinithi. For me, design isn’t just arranging shapes or picking colors, it’s about emotions, psychology,
              and impact.<br></br> I always ask myself one question before starting a project: ‘How should people feel when they
              see this?’ Every poster, every creative I make is more than a visual. <br></br>It’s an experience. My goal is to design
              things that don’t just sit pretty on a screen but actually make people stop, connect, and remember.
            </p>
            <div className="flex gap-2.5">
              <a className="btn mt-2 self-start border border-white" href="/Srinithi-Graphic Designer Resume.pdf">
                <button className="btn-text text-sm sm:text-base">Download Resume</button>
              </a>
              <a className=" sec-btn py-2.5 px-6 rounded-3xl mt-2 self-start hover:shadow-lg border bg-[#fff]/10 border-[#fff]" href="https://www.linkedin.com/in/sri-nithi-1272b027a/">
                <button className="   sec-btn-text   ">Linkedin</button>
              </a>
            </div>
          </div>

          {/* Chat Box */}
          <div className="w-full md:w-[40%] flex justify-end z-10  ">
            <div className="w-full flex flex-col  border border-[#fff]/20 rounded-[20px] md:rounded-[30px] shadow-us">

              {/* Chat Header */}
              <div className="flex w-full items-center justify-between p-3 md:p-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)]">
                <div className="flex justify-start items-center w-full gap-2 sm:gap-2.5">
                  <div className="profile flex w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full">
                    <img className="w-full h-full object-cover" src="/hero-girl3.webp" alt="srinithi graphic designer" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="block custom-font text-sm sm:text-base">Srinithi | Graphic designer</h3>
                    <span className="online text-xs  text-[#86C462]">Online</span>
                  </div>
                </div>
                <div className="flex px-1 sm:px-2.5 gap-1">
                  <a href="https://wa.me/919087918818?text=Hello%20Srinithi,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20to%20discuss%20further.
" className="whatsapp w-8 h-8 sm:w-10 sm:h-10 p-1.5 overflow-hidden border border-transparent hover:border-white/20 rounded-[8px] sm:rounded-[10px] hover:bg-white/10 transition-all">
                    <svg className="arrow-path hidden md:block" viewBox="0 0 160 100">

                      <path d="M10,80 
               C40,20 70,20 100,60 
               C120,90 130,40 150,50 
               L140,40 M150,50 L140,60" />
                    </svg>
                    <div className="tooltip hidden md:block">Chat on WhatsApp 🗨️</div>

                    <img className="w-full h-full" src="/Phonecall.svg" alt="phone" loading="lazy"
                    />
                  </a>
                  <a href="https://calendly.com/srinithidesign/30min" className="calendy w-8 h-8 sm:w-10 sm:h-10 p-1.5 border border-transparent hover:border-white/20 rounded-[8px] sm:rounded-[10px] hover:bg-white/10 transition-all">
                    <svg className="arrow-path-2 hidden md:block" viewBox="0 0 160 100">

                      <path d="M50,20 
               C40,20 70,20 100,60 
               C120,90 130,40 150,50 
               L140,40 M150,50 L140,60" />
                    </svg>
                    <div className="tooltip-2 hidden md:block">Book an Appointment 📅</div>

                    <img className="w-full h-full" src={calendy} alt="calender" loading="lazy"/>
                  </a>
                </div>
              </div>

              {/* Chat Body */}
              <div className="bg-[url('/Frame75.webp')] bg-cover bg-center bg-no-repeat flex w-full max-h-[350px] min-h-[350px]  md:min-h-[400px] overflow-hidden   flex-col ">
                
               <PhysicsWords newWord={physicsWord} />

              </div>

              
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full gap-2 sm:gap-2.5 shadow-[0px_-4px_10px_rgba(0,0,0,0.1)] p-2 sm:p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-1.5 rounded-full flex w-full">
                    <button
                      type="button"
                      className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white/10 rounded-full p-0.5"
                    >
                      <img className="w-full h-full" src="/Smile.svg" alt="emoji" />
                    </button>

                    <input
                      type="text"
                      {...register("message", { required: "Message is required" })}
                      placeholder="Type your fav word and see the magic"
                      className="bg-transparent custom-font-2 text-xs sm:text-sm md:text-xs outline-none rounded-2xl text-white placeholder:text-white w-full pl-1 sm:pl-2"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="items-center justify-center bg-white/10 border border-white/20 backdrop-blur-lg p-2 rounded-full flex cursor-pointer"
                  >
                    <img
                      className={`w-4 h-4 sm:w-5 sm:h-5 rotate-45 transition-opacity ${isSubmitting ? "opacity-50" : "opacity-100"}`}
                      src="/Send1.svg"
                      alt="send"
                    />
                  </button>
                </div>

                {/* Error Message (shows if empty) */}
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 px-2">
                    {errors.message.message}
                  </p>
                )}

                {/* Success Message (auto hides after 2s) */}
                {showSuccess && (
                  <p className="text-white text-xs mt-1 px-2">
                    Message sent successfully! ✅
                  </p>
                )}
              </form>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allothers;
