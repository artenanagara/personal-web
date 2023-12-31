import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../section/Hero";
import SelectedWork from "../section/SelectedWork";
import Shot from "../section/Shot";

function Home() {
  return (
    <div className="bg-[url('../assets/img/ornament.svg')] bg-no-repeat bg-right-top bg-origin-border">
      <div className="flex flex-col gap-16">
        <div className="mt-[120px] flex flex-col justify-center md:h-screen md:mt-0">
          <Hero />
        </div>
        <SelectedWork />
        <Shot />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
