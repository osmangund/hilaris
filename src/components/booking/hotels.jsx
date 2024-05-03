"use client"
import useClickOutside from "@/hooks/useClickOutside"
import { useRef, useState } from "react"
const hotels = ["okurcalar", "didim", "belek"]
const HOTEL_TEXT = (h) => `Hilaris ${h[0].toUpperCase() + h.slice(1)}`

export default function Hotels({ hotel, setHotel }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useClickOutside(ref, () => setVisible(false))

  return (
    <div className="basis-1/3 relative" ref={ref}>
      <div
        className="cursor-pointer"
        onClick={() => {
          setVisible((prev) => !prev)
        }}
      >
        <h1>Where</h1>
        <p className="font-thin opacity-50">
          {hotel === null ? "Select a hotel" : HOTEL_TEXT(hotel)}
        </p>
      </div>
      <ul className={`dropdown ${visible ? "" : "invisible"}`}>
        {hotels.map((hotel, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setHotel(hotel)
                setVisible(false)
              }}
              className="cursor-pointer"
            >
              {HOTEL_TEXT(hotel)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
