import { useState, useEffect, useRef } from "react"

export default function Stats() {
  const statsRef = useRef(null)

  return (
    <section id="stats" className="min-h-screen" ref={statsRef}>
      <div>
        <h1>Over 10,000+ happy guests.</h1>
      </div>
      <div></div>
      <div>
        <h1></h1>
      </div>
    </section>
  )
}
