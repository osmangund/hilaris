"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const HOTEL_VARIANTS = {
  first: {
    width: "60%",
    transition: {
      duration: 1,
      ease: [0.64, 0, 0.78, 0],
    },
  },
  rest: {
    width: "40%",
    transition: {
      duration: 1,
      ease: [0.64, 0, 0.78, 0],
    },
  },
  hover: {
    width: "60%",
    transition: {
      duration: 1,
      ease: [0.64, 0, 0.78, 0],
    },
  },
}
const BG_VARIANTS = {
  first: { opacity: 0.7 },
  rest: { opacity: 0.3 },
  hover: { opacity: 0.7 },
}

export default function SelectHotel() {
  const [hovered, setHovered] = useState("hilaris")
  
  return (
    <div className="relative min-h-screen w-full flex bg-primary text-white">
      <motion.div
        className="hotel-select-card border-r border-red-500"
        variants={HOTEL_VARIANTS}
        initial="first"
        whileHover="hover"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          variants={BG_VARIANTS}
          initial="first"
          whileHover="hover"
        >
          <Image
            src="/images/exterior2.jpg"
            alt="Exterior."
            fill
            className="object-cover"
          />
        </motion.div>
        <h1 className="text-5xl">Hilaris Okurcalar</h1>
        <p></p>
      </motion.div>
      <motion.div
        className="hotel-select-card"
        variants={HOTEL_VARIANTS}
        initial="rest"
        whileHover="hover"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          variants={BG_VARIANTS}
        >
          <Image
            src="/images/exterior2.jpg"
            alt="Exterior."
            fill
            className="object-cover"
          />
        </motion.div>
        <h1 className="text-5xl">Hilaris Belek</h1>
        <p></p>
      </motion.div>
    </div>
  )
}
