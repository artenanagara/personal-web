
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../section/Hero"
import SelectedWork from "../section/SelectedWork"
import Shot from "../section/Shot"

function Home() {
  return (
    <div className="bg-[url('../assets/img/ornament.svg')] bg-no-repeat bg-right-top relative container mx-auto ">
        <div className="flex flex-col gap-16">
          <Navbar />
          <div className="h-screen flex flex-col justify-center">
            <Hero />
          </div>
        <SelectedWork />
        <Shot/>
        <Footer />
      </div> 
    </div>
    
      
  )
}

export default Home