import { useState } from "react";
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent,setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 45,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(()=>{

     gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2.4,
      delay: -1.3,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",
    });

     gsap.to(".character", {
      scale: 0.8,
      x: "-50%",
      bottom: "-63%",
      rotate: 0,
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",
    });

      gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
      const xMove = (e.clientX / window.innerWidth - .5) * 40;
      gsap.to(".imagesdiv .text ",{
        x:`${xMove*.4}%`,
      });
      gsap.to(".sky ",{
        x:xMove,
      });
      gsap.to(".bg ",{
        x:xMove*1.7,
      });
    });
  }, [showContent]);


  return (
    

  <>
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image  
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full -rotate-20 scale-200  bg-black">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
                 <div className="navbar absolute top-0 left-0 z-10 w-full py-10 px-10">
              <div className="logo flex gap-6">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-1 leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="text absolute">
              <h1>grand</h1>
              <h1>theft</h1>
              <h1>auto</h1>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen ">
                <img className=" sky scale-200  -rotate-20 absolute top-0 l-0 w-full h-full object-cover" src="../sky.png" alt="" />
              <img className=" bg scale-200 -rotate-20 absolute top-0 l-0 w-full h-full object-cover" src="../bg.png" alt="" />
                 <div className="text scale-150 -rotate-12 text-white absolute top-10 left-1/2 flex flex-col gap-0.5 -translate-x-1/4">
              <h1 className="text-8xl -ml-40">grand</h1>
              <h1 className="text-8xl ml-0">theft</h1>
              <h1 className="text-8xl -ml-40">auto</h1>
            </div>
              <img className="absolute character -bottom-[250%] left-1/2 -translate-x-1/2  scale-[3] -rotate-20" src="../girlbg.png" alt="" />
              
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-12 px-10 bg-linear-to-t from-black to-transparent ">
              <div className="flex gap-1 items-center absolute bottom-4">
                <i className="text-3xl ri-arrow-down-line"></i>
                <h3 className="text-l font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img className="absolute h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4" src="../ps5.png" alt="" />
            </div>
          </div>
          <div className=" w-full h-screen flex items-center justify-center bg-black ">
            <div className="cntnr  flex text-white w-full h-9/12">
            <div className="limg relative w-1/2 h-full ">
              <img className=" scale-100 ml-20 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " src="../imag.png" alt="" />
            </div>
             <div className="rimg">
              <h1 className="text-white text-7xl ml-20">still running </h1>
              <h1 className="text-white text-7xl ml-80 mt-2">not hunting </h1>
              <p className="mt-10 text-2xl font-[Helvetica_Now_Display]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maxime, animi  </p>
                <p className="mt-0 text-2xl font-[Helvetica_Now_Display]">cupiditate nesciunt libero,ratione, doloribus eligendi pariatur accusantium porro ipsa magnam iusto?</p>
              <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempora voluptatibus voluptatem esse?</p><p className="mt-0 text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum voluptatem illo itaque recusandae quis omnis libero dolores hic quasi?</p>
               <button className="bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl ml-50">
                  Download Now
                </button>
              </div>
             </div>
          </div>
        </div>
      )}
  </>
  );
}

export default App