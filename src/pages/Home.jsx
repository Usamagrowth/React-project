import Features from "../components/Features";
import Herosection from "../components/Herosection";
import Navbar from "../components/NavBar";
import UserSection from "../components/UserSection";

const Home = () => {
  return (
   <section> <Navbar />
    <Herosection />
    <Features />
    <UserSection />
    </section>
  )
};

export default Home;