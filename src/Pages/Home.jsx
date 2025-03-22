import React, { useState } from "react";
import Header from "../Components/Header";
import AnimatedCursor from "react-animated-cursor";
// import '../index.css'
function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      
      {/* Animated Cursor with hidden class applied on mobile */}
      
      <AnimatedCursor
        className="cursor-default md:cursor-none" // "md:cursor-none" hides cursor on mobile
        innerSize={10}
        outerSize={15}
        color="193, 0, 0"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Header />
      <div className="flex p-3 flex-col  item-center justify-center w-full ">
        <div className="head  text-4xl pr-20 font-Playfair_Display justify-center font-bold text-white">
          <h1 className="">Start your unforgettable Journey with us</h1>
        </div>
        <p>The best travel for your Journey begins now</p>
        <div className="form ">

        </div>
      </div>
    </div>
  );
}

export default Home;
