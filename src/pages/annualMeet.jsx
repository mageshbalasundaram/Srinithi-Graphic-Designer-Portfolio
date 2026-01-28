import React from 'react'
import hero from "../assets/timac/hero-image-timac.webp"
import agenda from "../assets/timac/agenda.webp"
import print from "../assets/timac/timac-print.webp"
import id from "../assets/timac/timac-id.webp"
import image from "../assets/timac/timac-img.webp"
import group from "../assets/timac/group.webp"
import Slider from '../components/Slider'


const AnnualMeet = () => {
    return (
        <div className='flex flex-col justify-center '>
            <div className='main-hero flex justify-center bg-cover bg-top ' style={{ backgroundImage: `url(${hero})` }}>
                <div className='w-full items-center flex flex-col justify-center bg-gradient-to-b from-white/0 to-[#6A1451]'>


                    <div className='flex justify-center flex-col gap-2.5 md:gap-5 max-w-7xl w-full px-5 md:px-10 pt-30 md:pt-[300px] pb-10 md:pb-[100px]'>
                        <h4 className='glory-reg text-center font-normal text-[10px] md:text-[16px] backdrop-blur-md border border-white/10 inset-shadow-2xs self-center p-1 px-5 rounded-full tracking-[3px]'>TIMAC AGRO INDIA </h4>
                        <h1 className='glory text-center font-bold text-4xl md:text-7xl'>
                            Annual Event Branding
                        </h1>
                        <h2 className='glory-reg text-center font-bold text-xl md:text-4xl'>
                            End-to-end visual direction for a large-scale corporate event
                        </h2>


                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center flex-col max-w-7xl w-full '>
                    <div className=' flex flex-col gap-5 px-5 md:px-10 pt-10 md:pt-[60px] pb-10 md:pb-[60px]'>
                        <h2 className='glory-reg text-left font-bold text-2xl md:text-4xl'>Project Overview</h2>
                        <p className='glory-reg text-lg md:text-2xl'>Led the complete visual identity for Timac Agro India’s annual flagship event from defining the event theme to designing every on-ground and digital asset. The focus was on building a cohesive, professional event experience that aligned with brand values while working within real corporate and production constraints.</p>
                    </div>

                    <div className='flex justify-center w-full   px-5 md:px-10 '>
                        <div className='bg-white/05 border border-white/30  rounded-xl md:rounded-[30px] w-full max-w-7xl mx-auto overflow-hidden shadow-lg'>
                            <div className="flex flex-col md:flex-row justify-around">

                                <div className='flex flex-col w-full md:w-[45%] gap-5 self-center p-2.5 md:p-5'>
                                    <h2 className='glory-reg font-bold text-xl md:text-4xl  '>Project Snapshot</h2>
                                    <ul className='gap-2 md:gap-3.5 flex flex-col text-white '>
                                        <li className='text-[16px] md:text-2xl '><span className='font-bold text-[#6A1451]'>Role: </span>Sole Designer</li>
                                        <li className='text-[16px] md:text-2xl '><span className='font-bold text-[#6A1451]'>Scope: </span>Event Branding, Print, Signage, Digital</li>
                                        <li className='text-[16px] md:text-2xl '><span className='font-bold text-[#6A1451]'>Theme: </span>Seize the Opportunity</li>
                                        <li className='text-[16px] md:text-2xl '><span className='font-bold text-[#6A1451]'>Location: </span>Kumarakom, Kerala</li>
                                        <li className='text-[16px] md:text-2xl '><span className='font-bold text-[#6A1451]'>Tools: </span>Adobe Illustrator, Adobe Photoshop</li>
                                    </ul>

                                </div>
                                <div className=' flex w-full md:w-[55%] p-2.5 md:p-5 justify-between '>
                                    <img className=' w-[49%] object-cover rounded-[10px] ' src={print} alt="Timac agro - srinithi portfolio" />
                                    <img className='  w-[49%] object-cover rounded-[10px]' src={id} alt="Timac agro - srinithi portfolio" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=' flex flex-col gap-5 px-5 md:px-10 pt-10 md:pt-[60px] '>
                        <h2 className='glory-reg text-left font-bold text-2xl md:text-4xl'>The Challenge</h2>
                        <p className='glory-reg text-lg md:text-2xl'>Designing a unified visual system across multiple event assets each with a different functional purpose while adhering to strict brand guidelines and tight timelines. Every element needed to stand strong individually and still feel part of one consistent event experience.</p>
                        <div className=' w-full bg-white/05 border border-white/30 rounded-[30px] shadow-lg mt-10'>
                            <img className=" w-full" src={agenda} alt="Timac agro annual meet agenda - srinithi portfolio" />
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex justify-center flex-col max-w-7xl w-full '>
                    <div className=' flex flex-col gap-5 px-5 md:px-10 pt-10 md:pt-[60px] pb-10 md:pb-[60px]'>
                        <h2 className='glory-reg text-left font-bold text-2xl md:text-4xl'>Design Strategy</h2>
                        <div className='pl-5 flex flex-col gap-2.5'>
                            <h3 className='glory-reg text-left font-bold text-xl md:text-2xl'>Theme Direction</h3>
                            <p className='glory-reg text-lg md:text-2xl'> Built around three core values Commitment, Consistency, and Collaboration
                                reflecting Timac Agro’s long-term approach to farming and partnerships.</p>

                        </div>
                        <div className='pl-5 flex flex-col gap-2.5'>
                            <h3 className='glory-reg text-left font-bold text-xl md:text-2xl'>Visual Language</h3>
                            <p className='glory-reg text-lg md:text-2xl'> Expanded beyond conventional corporate blues by introducing brand
                                complementary colors to create a more dynamic yet credible corporate presence.</p>

                        </div>
                        <div className='py-8'>
                            <Slider />
                        </div>
                        <div className='pl-5 flex flex-col gap-2.5'>
                            <h3 className='glory-reg text-left font-bold text-xl md:text-2xl'>Cultural Context</h3>
                            <p className='glory-reg text-lg md:text-2xl'> Inspired by the event location, Kumarakom, Kerala, the color direction added
                                warmth and energy while staying balanced and professional.</p>

                        </div>
                        <div className='pl-5 flex flex-col gap-2.5'>
                            <h3 className='glory-reg text-left font-bold text-xl md:text-2xl'>Brand Balance</h3>
                            <p className='glory-reg text-lg md:text-2xl'> Cultural expression and color vibrancy were carefully controlled to ensure the
                                brand remained structured, corporate, and rooted in its agricultural philosophy.</p>

                        </div>
                        <div className='flex justify-center w-full py-8 '>
                            <div className='bg-white/05 border border-white/30 rounded-[30px] w-full max-w-7xl mx-auto overflow-hidden shadow-lg'>
                                <div className="flex flex-col md:flex-row justify-around">

                                    <div className='flex flex-col w-full md:w-[45%] gap-5 self-center p-5'>
                                        <h2 className='glory-reg font-bold text-2xl md:text-4xl '>Execution Highlights</h2>
                                        <ul className=' gap-3.5 flex flex-col text-white '>
                                            <li className='text-base md:text-2xl '><span className='font-bold text-[#6A1451]'>Itinerary & Agenda: </span>Designed for quick scanning and clear navigation</li>
                                            <li className='text-base md:text-2xl '><span className='font-bold text-[#6A1451]'>Product Standees: </span>High-visibility layouts with strong information hierarchy</li>
                                            <li className='text-base md:text-2xl '><span className='font-bold text-[#6A1451]'>Event Collaterals: </span>Modular design system applied consistently across all assets</li>
                                        </ul>

                                    </div>
                                    <div className=' flex w-full md:w-[55%] p-5 justify-between '>
                                        <img className=' w-full object-cover rounded-[10px] ' src={image} alt="timac agro annual meet - srinithi graphic designer portfolio" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=' flex flex-col gap-5'>
                            <h3 className='glory-reg text-left font-bold text-2xl md:text-4xl'>Outcome</h3>
                            <p className='glory-reg text-lg md:text-2xl'> Delivered a visually cohesive and professional on-ground event experience that aligned seamlessly with Timac Agro’s brand identity. The clarity, consistency, and thoughtful cultural integration were well received by internal teams and stakeholders.</p>

                        </div>


                    </div>

                </div>
            </div>
            <div className='main-hero flex justify-center bg-cover bg-bottom ' style={{ backgroundImage: `url(${group})` }}>
                <div className='w-full items-center flex flex-col justify-center   pt-100 md:pt-[450px]  md:pb-[0px]'>


                    <div className='flex justify-center flex-col gap-2 md:gap-5 w-full p-5 bg-gradient-to-b from-white/0 to-black/20 backdrop-blur-md'>
                        <h2 className='glory text-center font-normal text-2xl md:text-4xl'>What This Project Shows </h2>

                        <p className='glory-reg text-center font-bold test-base md:text-2xl w-full md:w-3/4 self-center'>
                            Ability to independently handle large-scale corporate branding projects, build scalable visual systems, and deliver under real operational and timeline constraints.
                        </p>

                        <div className='flex justify-center gap-5'>
                            <a className="btn mt-2 self-start border border-white" href="/#form">
                                <button className="btn-text text-sm sm:text-base">Let’s Build Your Brand</button>
                            </a>

                        </div>




                    </div>
                </div>
            </div>


        </div>
    )
}

export default AnnualMeet