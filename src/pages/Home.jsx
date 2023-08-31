
import Navbar from "../components/Navbar"
import Hero from "../section/Hero"
import CardPorto from "../components/CardPorto"

function Home() {
  return (
    <div className="bg-[url('../assets/img/ornament.svg')] bg-no-repeat bg-right-top relative container mx-auto">
    <Navbar />
    <Hero />
    <div className="container mx-auto my-16 flex flex-col gap-8">
        <h1 className="text-4xl text-white font-bold">Selected Work</h1>
        <CardPorto />
    </div>
    </div>
    
      
  )
}

export default Home