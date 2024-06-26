"use client"

import { useState } from "react"
import { Search } from "../icons/search"
import BookingDates from "./bookingDates"
import Guests from "./guests"
import Hotels from "./hotels"
const textColor = "white"
const bgColor = "black"

export default function Booking() {
  const [hotel, setHotel] = useState(null)

  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  })

  const [selectedDate, setSelectedDate] = useState({
    checkIn: null,
    checkOut: null,
  })

  const [guests, setGuests] = useState({
    adult: 0,
    children: 0,
    infants: 0,
    pets: 0,
  })

  return (
    <div className="flex justify-center">
      <div
        className={`w-full max-w-screen-lg flex justify-evenly gap-8 px-6 py-2  bg-black text-${textColor}`}
      >
        <Hotels hotel={hotel} setHotel={setHotel} />
        <BookingDates
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <Guests guests={guests} setGuests={setGuests} />
        <button
          className="flex flex-col items-center justify-center"
          onClick={() => console.log(hotel, selectedDate, guests)}
        >
          <Search width="24px" height="24px" fill={textColor} />
        </button>
      </div>
    </div>
  )
}
