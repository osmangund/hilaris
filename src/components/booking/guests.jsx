"use client"

import { useRef, useState } from "react"
import { Remove } from "../icons/remove"
import { Add } from "../icons/add"
import useClickOutside from "@/hooks/useClickOutside"

export default function Guests({ guests, setGuests }) {
  
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useClickOutside(ref, () => setVisible(false))

  const totalGuests = Object.values(guests).reduce((acc, curr) => acc + curr, 0)

  const Button = ({ type }) => {
    return (
      <div className="flex gap-4">
        <button
          className={`handle-value-button ${
            guests[type] === 0 ? "opacity-20" : "cursor-pointer"
          }
          `}
        >
          <Remove
            onClick={() => {
              setGuests((prev) => {
                if (prev[type] === 0) return prev
                const newGuests = { ...prev }
                newGuests[type] = newGuests[type] - 1
                return newGuests
              })
            }}
          />
        </button>
        <span>{guests[type]}</span>
        <button
          className={`value-button ${
            totalGuests === 16 ? "opacity-20" : "cursor-pointer"
          }`}
        >
          <Add
            onClick={() => {
              setGuests((prev) => {
                if (totalGuests === 16) return prev
                const newGuests = { ...prev }
                newGuests[type] = newGuests[type] + 1
                return newGuests
              })
            }}
          />
        </button>
      </div>
    )
  }
  return (
    <>
      <div className="relative" ref={ref}>
        <div
          className="menu-trigger cursor-pointer"
          onClick={() => {
            setVisible((prev) => !prev)
          }}
        >
          <h1>Who</h1>
          <p className="font-thin w-24">
            {totalGuests === 0
              ? "Add guests"
              : totalGuests === 16
              ? "16+ guests"
              : `${totalGuests} guests`}
          </p>
        </div>
        <ul
          className={`dropdown [&>li]:flex [&>li]:justify-between [&>li]:border-b [&>li]:mb-2 [&>li]:items-center [&_p]:font-thin [&_p]:text-md w-[300px] -left-1/2 ${
            visible ? "" : "invisible"
          }`}
        >
          <li>
            <div>
              <h1>Adult</h1>
              <p>Ages 13+</p>
            </div>
            <Button type={"adult"} />
          </li>
          <li>
            <div>
              <h1>Children</h1>
              <p>Ages 2 - 12</p>
            </div>
            <Button type="children" />
          </li>
          <li>
            <div>
              <h1>Infants</h1>
              <p>Under 2</p>
            </div>
            <Button type="infants" />
          </li>
          <li>
            <div>
              <h1>Pets</h1>
              <p>
                <a href="#">Service animals?</a>
              </p>
            </div>
            <Button guests={guests} setGuests={setGuests} type="pets" />
          </li>
          <li>
            <h1>Rooms</h1>
          </li>
        </ul>
      </div>
    </>
  )
}
