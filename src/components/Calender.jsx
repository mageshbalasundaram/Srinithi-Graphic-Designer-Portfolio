import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCards } from 'swiper/modules';
import { useForm } from "react-hook-form";
import form from "../assets/Vd.webm"

import jan from "../assets/Calender/jan.webp";
import feb from "../assets/Calender/feb.webp";
import march from "../assets/Calender/march.webp";
import april from "../assets/Calender/april.webp";
import may from "../assets/Calender/may.webp";
import june from "../assets/Calender/june.webp";
import july from "../assets/Calender/july.webp";
import aug from "../assets/Calender/aug.webp";
import sep from "../assets/Calender/sep.webp";
import oct from "../assets/Calender/oct.webp";
import nov from "../assets/Calender/nov.webp";
import dec from "../assets/Calender/dec.webp";

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";

const Calender = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data) => {
    await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    reset();
    
    setShowSuccess(true);
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col px-5 sm:px-10 pt-[50px] sm:pt-[100px]">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 justify-between">

          <div className="w-full lg:w-[40%] flex flex-col gap-2 justify-center">
            <h2 className="custom-font text-3xl sm:text-5xl leading-snug">
              Your brand, <br /> blooming brighter!
            </h2>
            <p className="custom-font-2 text-base sm:text-[16px] leading-relaxed">
              Looking for designs that inspire, connect, and shine? This calendar design is just a glimpse
              of what I can do to make your ideas blossom into visual masterpieces.
              Let's create something extraordinary together!
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <a href="https://calendly.com/srinithidesign/30min">
                <button className="btn"><span className="btn-text">Book an appointment</span></button></a>
              <a href="https://wa.me/919087918818?text=Hello%20Srinithi,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20to%20discuss%20further.">
                <button className="sec-btn"><span className="sec-btn-text">Whatsapp</span></button></a>
            </div>
          </div>

          {/* Swiper */}
          <div className="w-full lg:w-1/2 flex justify-center px-[30px] md:px-0 pb-10">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Navigation, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{ prevEl: ".cal-custom-prev", nextEl: ".cal-custom-next" }}
              className="mySwiper w-full max-w-[400px] h-full"
            >
              {[jan, feb, march, april, may, june, july, aug, sep, oct, nov, dec].map((img, i) => (
                <SwiperSlide key={i} className="object-cover rounded-3xl">
                  <img src={img} loading="lazy" alt={`2024 calendar design ${i + 1}`} />
                </SwiperSlide>
              ))}

              {/* Navigation */}
              <div>
                <button className="cursor-pointer z-50 h-10 cal-custom-prev absolute -bottom-20 md:top-1/2 left-30 sm:-left-20 -translate-y-1/2 bg-[#44103E]/5 p-2 rounded-full shadow hover:bg-[#44103E]/10"  aria-label="Previous Slide">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}  aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="cursor-pointer z-50 h-10 cal-custom-next absolute -bottom-20 md:top-1/2 right-2 sm:-right-20 -translate-y-1/2 bg-[#44103E]/5 p-2 rounded-full shadow hover:bg-[#44103E]/10" aria-label="Next Slide">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}  aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </Swiper>
          </div>
        </div>

        {/* Form Section */}
        <div className=" flex flex-col justify-center items-center pt-[80px] sm:pt-[100px] gap-2">
          <h3 id="form" className="custom-font-2 text-sm sm:text-[18px]">Your Brand, Your decision</h3>
          <h2 className="custom-font text-3xl sm:text-5xl text-center">Let’s Start your brand makeover</h2>
          <p className="custom-font-2 text-center text-sm sm:text-[16px] max-w-2xl text-white/90!">
            Looking for designs that inspire, connect, and shine? This calendar design is just a glimpse
            of what I can do to make your ideas blossom into visual masterpieces.
            Let's create something extraordinary together!
          </p>

          <div className="flex flex-col lg:flex-row w-full justify-between lg:w-[75%] mt-5 rounded-3xl bg-white/10 border border-white/20 shadow-us">
            {/* Left box (placeholder for image/extra content) */}
            <div className="relative hidden lg:block rounded-2xl overflow-hidden  w-full lg:w-1/2 m-2.5 bg-white/10">
             
              <video autoPlay
                muted
                loop
                playsInline aria-hidden="true" className="w-full h-[550px] object-cover object-bottom" >
                <source src={form} type="video/mp4" />
                Your browser does not support the video tag
              </video>
            </div>

            {/* Form */}
            <div className="form flex flex-col w-full lg:w-1/2  justify-center items-center p-5 sm:p-10">
              <h3 className="custom-font text-2xl sm:text-3xl">Let’s Scale</h3>
              <h4 className="custom-font-2 text-base  mb-5 text-white/90! ">Your Brand, Together</h4>

              <form className="flex flex-col gap-4 w-full text-white leipzer" onSubmit={handleSubmit(onSubmit)}>
                <input className=" placeholder-white bg-white/10 rounded-3xl py-2.5 px-5 border:none  active:border-none hover:border-none" {...register("name", { required: "Name is required" })} placeholder="Name*" />
                {errors.name && <p className="text-red-800 text-xs">{errors.name.message}</p>}

                <input className="placeholder-white bg-white/10 rounded-3xl py-2.5 px-5 active:border-none hover:border-none" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })} placeholder="Your Email*" type="email" />
                {errors.email && <p className="text-red-800 text-xs">{errors.email.message}</p>}

                <input className="placeholder-white bg-white/10 rounded-3xl py-2.5 px-5 active:border-none hover:border-none" {...register("phone", { required: "Phone Number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" } })} placeholder="Phone*" type="tel" />
                {errors.phone && <p className="text-red-800 text-xs">{errors.phone.message}</p>}

                <input className=" placeholder-white bg-white/10 rounded-3xl py-2.5 px-5 active:border-none hover:border-none" {...register("subject")} placeholder="Subject" />
                <textarea className=" placeholder-white bg-white/10 rounded-3xl py-2.5 px-5 active:border-none hover:border-none" {...register("message", { required: "Message is required" })} placeholder="Enter Your Message Here"></textarea>
                {errors.message && <p className="text-red-800 text-xs">{errors.message.message}</p>}

                <button className=" bg-white rounded-3xl py-2.5 px-5 w-full text-black  cursor-pointer" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {isSubmitSuccessful && <p className="text-green-700">Message sent successfully! - We'll get back soon</p>}
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Calender;
