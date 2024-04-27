import Hero from "@/components/hero"
import Nav from "@/components/booking/booking"
import Services from "@/components/services"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  )
}
