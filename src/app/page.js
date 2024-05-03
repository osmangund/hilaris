import Hero from "@/components/hero"
import Nav from "@/components/nav"
import SelectHotel from "@/components/selecthotel"
import Services from "@/components/services"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelectHotel />
        <Services />
      </main>
    </>
  )
}
