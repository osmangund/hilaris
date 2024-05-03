"use client"

import { useMotionValueEvent } from "framer-motion"
import Booking from "./booking/booking"
import { useEffect, useState } from "react"
import { Bars } from "./icons/bars"

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const latest = window.scrollY
      if (latest > 100 && !isScrolled) {
        setIsScrolled(true)
      }
      if (latest < 100 && isScrolled) {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isScrolled])

  return (
    <header>
      <nav
        className={`fixed flex justify-between left-0 right-0 top-0 py-3 px-16 text-lg z-50 bg-black text-white ${
          isScrolled ? "" : "mt-10 mx-20 border rounded-[3rem] border-black "
        } transition-all duration-500 border-0 ease-in-out`}
      >
        <div className="flex items-center justify-center">
          <a href="/">Hilaris</a>
        </div>
        <div className="basis-4/5">
          <Booking />
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <Bars style={{ color: "white", width: "32px", height: "32px" }} />
        </div>
      </nav>
    </header>
  )
}
