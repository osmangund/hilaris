"use client"
import { useState } from "react"
import { ChevronLeft } from "../icons/chevronleft"
import { ChevronRight } from "../icons/chevronright"
import { monthNamesFull } from "@/utils/utils"

const getDate = (type, year, month) => {
  if (type === "first") return new Date(year, month, 1).getDay() //! Returns the day of the week, 0 to 6
  if (type === "last") return new Date(year, month + 1, 0).getDate()
}

const handleSelections = (selectedDate, setSelectedDate, day, currentDate) => {
  const { checkIn, checkOut } = selectedDate
  const { month, year } = currentDate

  // Helper function to create a date object from day, month, and year
  const createDate = (day, month, year) => new Date(year, month - 1, day)

  // Create date objects for comparison
  const currentDateObj = createDate(day, month, year)
  const checkInDateObj = checkIn
    ? createDate(checkIn.day, checkIn.month, checkIn.year)
    : null
  const checkOutDateObj = checkOut
    ? createDate(checkOut.day, checkOut.month, checkOut.year)
    : null

  const setCheckIn = (reset = null) => {
    if (reset) {
      return setSelectedDate(() => ({
        checkIn: {
          day,
          month,
          year,
        },
        checkOut: null,
      }))
    }
    setSelectedDate((prev) => ({
      ...prev,
      checkIn: {
        day,
        month,
        year,
      },
    }))
  }

  const setCheckOut = (reset = null) => {
    if (reset) {
      return setSelectedDate(() => ({
        checkIn: {
          day,
          month,
          year,
        },
        checkOut: null,
      }))
    }
    setSelectedDate((prev) => ({
      ...prev,
      checkOut: {
        day,
        month,
        year,
      },
    }))
  }

  if (checkIn === null) return setCheckIn()
  if (checkInDateObj && currentDateObj < checkInDateObj)
    return setCheckIn("reset")

  if (checkOut === null) return setCheckOut()
  if (checkOutDateObj && currentDateObj >= checkInDateObj) return setCheckOut()
}

export default function BookingDateDropdown({
  visible,
  currentDate,
  setCurrentDate,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <div
      className={`wrapper w-[500px] dropdown -left-1/2 -translate-x-1/4 ${
        visible ? "" : "invisible"
      }`}
    >
      <header className="flex items-center justify-between">
        <p className="current-date font-bold text-xl py-4">
          {monthNamesFull[currentDate.month]} {currentDate.year}
        </p>
        <div className="icons flex">
          <div
            onClick={() => {
              setCurrentDate((prev) => {
                const newDate = { ...prev }
                if (newDate.month === 0) {
                  newDate.year -= 1
                  newDate.month = 11
                  return newDate
                }
                newDate.month = newDate.month - 1
                return newDate
              })
            }}
          >
            <ChevronLeft className="value-button w-7 h-7" />
          </div>
          <div
            onClick={() => {
              setCurrentDate((prev) => {
                const newDate = { ...prev }
                if (newDate.month === 11) {
                  newDate.year += 1
                  newDate.month = 0
                  return newDate
                }
                newDate.month += 1
                return newDate
              })
            }}
          >
            <ChevronRight className="value-button w-7 h-7" />
          </div>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks flex flex-wrap text-center font-medium">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <li key={index} className="w-[calc(100%/7)]">
                {day}
              </li>
            )
          )}
        </ul>
        <ul className="days flex flex-wrap text-center mb-5">
          {/* Empty cells */}
          {Array.from(
            { length: getDate("first", currentDate.year, currentDate.month) },
            (_, i) => (
              <li key={i} className="w-[calc(100%/7)] mt-7 relative" />
            )
          )}

          {Array.from(
            {
              length: getDate("last", currentDate.year, currentDate.month),
            },
            (_, i) => i + 1
          ).map((day, index) => (
            <li
              key={index}
              className="w-[calc(100%/7)] mt-7 cursor-pointer relative before:date-day-bg"
              onClick={() => {
                handleSelections(
                  selectedDate,
                  setSelectedDate,
                  day,
                  currentDate
                )
              }}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
