'use client'


import Link from "next/link";
import {Link as ScrollLink, Element} from "react-scroll"
import { AnimatedShinyTextDemo } from "../components/demos/animated-shiny-text-demo"; 
import { CoverDemo } from "@/components/demos/cover-demo";
import BoxReveal from "@/components/ui/box-reveal";
import { PiCheckBold } from "react-icons/pi";
import NumberTicker from "@/components/ui/number-ticker";

import { WordPullUpDemo } from "@/components/ui/word-pull-up-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { IconStarFilled } from "@tabler/icons-react";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";


const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Development",
    description:
      "Transform your online presence with our expert web development solutions tailored to meet your unique business needs.",
  },
  {
    icon: "/images/s_2.png",
    title: "Static/Dynamic Web Design",
    description:
      "Transform your online presence with our custom web design solutions. From sleek static sites to interactive dynamic applications, we create engaging websites that drive results.",
  },
  {
    icon: "/images/s_3.png",
    title: "E-commerce Application",
    description:
      "Boost your online sales with our feature-rich e-commerce applications. Enhance customer interaction and streamline transactions for a seamless shopping experience.",
  },
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/images/s_5.png",
    title: "Personal Portfolio",
    description:
      "Showcase your skills and achievements with a stunning personal portfolio. Our tailored designs enhance your online presence and attract potential clients or employers.",
  },
  {
    icon: "/images/s_4.png",
    title: "Logo & Graphic Poster",
    description:
      "Create a memorable brand identity with our logo and graphic poster design services. Our engaging visuals capture attention and communicate your message effectively.",
  },
  
];

export default function Home() {
  return (
    <div
      className="overflow-clip
      inset-0 
      -z-10 h-full w-full bg-[#fafafa] 
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
      bg-[size:14px_24px]">
      <Element
      name="top"
      className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50
       xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between
        py-6 px-4 md:px-8 mx-6"
        >

<div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "12px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "120px",
          height: "60px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          zIndex: 1000,
        }}
      >
        <a
          href="https://wa.me/7591902596"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.instagram.com/fedgix/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <FaInstagram size={24} />
        </a>
      </div>

<Link href={"/"}>
  <div className="text-center">
    <span className="text-2xl font-bold text-black">FEDGIX</span>
    <span className="block text-sm text-gray-500 tracking-wider mt-[-2px]">Technologies</span>
  </div>
</Link>



      <div className="absolute right-1/2 translate-x-1/2 transform">
      <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
        <Link href={'/showcase'} className="hover:text-blue-500">
        Portfolio
        </Link>

        <ScrollLink 
        to="services"
        smooth={true}
        className="hover:text-blue-500">
          Services
        </ScrollLink>

        <ScrollLink 
        to="process"
        smooth={true}
        className="hover:text-blue-500">
          Process
        </ScrollLink>

       
      </div>
      </div>

      <div className="flex items-center gap-x-4">
  <a href="tel:+917592902596" className="hidden xl:flex">
    <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
      
    </button>
  </a>

  <a
    href="tel:+917591902596"
    className="py-3 px-6
      text-lg
      hover:bg-[#abcbff]
      rounded-[6px]
      border-2
      border-black
      text-white
      bg-[#121212]
      transition
      duration-200 
      hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
      dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
  >
    Book a Call
  </a>
</div>

        </Element>


        <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
        <AnimatedShinyTextDemo/>
        
        <h1>
          <CoverDemo/>
        </h1>

        <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
        Schedule a call with us to discuss your project and get a quote in minutes
      </p>

      <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
<Link
  href="tel:+917591902596"  
  className="py-3 
             px-10
             md:px-16
             md:text-xl
             hover:bg-[#abcbff] 
             rounded-[6px]
             border-2 
             border-black 
             dark:border-white 
             bg-[#121212] 
             text-white 
             transition 
             duration-200 
             hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
>
  Book a Call
</Link>

            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
             PORTFOLIO
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3B82F6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Web Designing
              </p>

            </BoxReveal>
            <BoxReveal boxColor={"#3B82F6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Web Development
              </p>

            </BoxReveal>
            <BoxReveal boxColor={"#3B82F6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                E-Commerce
              </p>

            </BoxReveal>
            <BoxReveal boxColor={"#3B82F6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Dynamic Landing Pages
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={99}/> +
                    <p className="text-gray-500 text-sm md:text-md">Happy clients</p>
                  </h1>
                </div>

                <div className="w-px bg-grey-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden ">
                    <NumberTicker value={105}/> +
                    <p className="text-gray-500 text-sm md:text-md">Projects Completed</p>
                  </h1>
                </div>
              </div>
            </div>


            <section className="overflow-hidden mt-10 md:w-4/5">
      
    </section>
          </div>

          </div>
        </main>

              <Element name="services">
                <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
                  <h1>
                    <WordPullUpDemo/>
                  </h1>

                  <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
                  All of our services are designed to help your business stand out
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
                </div>
              </Element>


              <section className="py-20">
                  <ScrollBasedVelocityDemo/>
              </section>

              <Element name="process">
                <main className="md:px-0 mx-6 md:mx-auto">
                  <h1 className="text-3xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
                  Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
                  </h1>

                  <p className="text-center
                   py-4 md:w-1/2 mx-auto
                    text-xl md:text-2xl text-gray-500">
                  All of our services are designed to help your business to get noticed.
                  </p>


                  <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
                  <div className="w-full md:w-1/2 order-2 md:order-1">
                        <AnimatedBeamMultipleOutputDemo/>
                  </div>

                  <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
                    <BoxRevealDemo/>
                  </div>
                  </div>
                </main>
              </Element>

               <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-lg ">
              Fedgix Technologies is a Kerala-based web development Company committed to elevating your online presence. We offer affordable website development and design services, tailored to meet the unique needs of business owners. Our goal is to help your business thrive in the digital world. Let’s work together to bring your vision to life! 
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Muhammed Shereef <br />
              CEO, Fedgix Technologies
            </span>
          </div>
        </main>
      </section>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
         
          <p className="text-left  text-lg  text-gray-500">+91 7591902596</p>
          <p className="text-left  text-lg  text-gray-500">
            fedgixtechnologies@gmail.com
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Fedgix Technologies. All Rights Reserved.
         
        </div>
      </footer>
    </div>
  );
}
