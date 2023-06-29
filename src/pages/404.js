import React, { useState } from "react"
import { Link } from "gatsby"
import RevealAnimation from "../components/RevealAnimation"


const NotFoundPage = () => {


  return (
    <main className="w-screen h-screen bg-white font-archivo font-semibold flex flex-col gap-20 justify-center items-center text-center">
      <title>oops</title>

      <RevealAnimation>
        <h1 className="text-8xl text-[#A961D5] drop-shadow-lg ">o<span className="-mx-4 text-7xl">🍩</span>ps</h1>
      </RevealAnimation>
      <RevealAnimation>
        <p className="text-5xl text-main-gray-darker leading-tight">
          You've reached my secret page.
          <br />
          ...
          <br />
          Don't worry, have a donut and <br />
          head <span className="text-[#A961D5]">
            <Link to="/">back</Link>.</span>
        </p>
      </RevealAnimation>
    </main>
  )
}

export default NotFoundPage
