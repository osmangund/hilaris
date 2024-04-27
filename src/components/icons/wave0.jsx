import React from "react"

export default function Wave0(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="900"
      height="600"
      version="1.1"
      viewBox="0 0 900 600"
      {...props}
    >
      <path fill="#023" d="M0 0H900V600H0z"></path>
      <path
        fill="#334c36"
        strokeLinecap="round"
        d="M0 271l7.8 9.7c7.9 9.6 23.5 29 39.4 29.5 15.8.5 31.8-17.9 47.6-21.4 15.9-3.5 31.5 7.9 47.2 11.5 15.7 3.7 31.3-.3 47.2-1.8 15.8-1.5 31.8-.5 47.6-2.2 15.9-1.6 31.5-6 47.4-5.5 15.8.5 31.8 5.9 47.6 9.5 15.9 3.7 31.5 5.7 47.2 3 15.7-2.6 31.3-10 47.2-13.5 15.8-3.5 31.8-3.1 47.6-3.1 15.9 0 31.5-.4 47.2 3.3 15.7 3.7 31.3 11.3 47.2 18.2C584 315 600 321 615.8 320.8c15.9-.1 31.5-6.5 47.4-12.6 15.8-6.2 31.8-12.2 47.6-9.4 15.9 2.9 31.5 14.5 47.2 17 15.7 2.5 31.3-4.1 47.2-5.8 15.8-1.7 31.8 1.7 47.6 5.2 15.9 3.5 31.5 7.1 39.4 9l7.8 1.8V0H0z"
      ></path>
    </svg>
  )
}
