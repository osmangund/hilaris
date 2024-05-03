"use client"
import { useRef, useState } from "react"
import BookingDateDropdown from "./bookingDateDropdown"
import useClickOutside from "@/hooks/useClickOutside"
import { monthNamesShort } from "@/utils/utils"

const SELECTED_DATE_TEXT = (selectedDate) => {
  if (selectedDate !== null) {
    return selectedDate.day + " " + monthNamesShort[selectedDate.month]
  } else {
    return "Add dates"
  }
}

export default function Dates({
  currentDate,
  setCurrentDate,
  selectedDate,
  setSelectedDate,
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useClickOutside(ref, () => setVisible(false))

  const handleClick = (type) => {
    setVisible(true)
  }
  return (
    <>
      <div className="flex gap-16 relative" ref={ref}>
        <div className="relative">
          <div
            className="cursor-pointer"
            onClick={() => {
              handleClick("checkIn")
            }}
          >
            <h1>Check in</h1>
            <p className="font-thin">
              {SELECTED_DATE_TEXT(selectedDate.checkIn)}
            </p>
          </div>
        </div>
        <div className="relative">
          <div
            className="cursor-pointer"
            onClick={() => {
              handleClick("checkOut")
            }}
          >
            <h1>Check out</h1>
            <p className="font-thin">
              {SELECTED_DATE_TEXT(selectedDate.checkOut)}
            </p>
          </div>
        </div>
        <BookingDateDropdown
          visible={visible}
          currentDate={currentDate}
          selectedDate={selectedDate}
          setCurrentDate={setCurrentDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </>
  )
}
