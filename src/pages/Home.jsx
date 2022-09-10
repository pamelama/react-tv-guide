import Navbar from "../components/Navbar/Navbar";
import PopularHero from "../components/PopularTvShows/PopularHero";
import PopularList from "../components/PopularTvShows/PopularList";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <PopularHero />
      <div className="container mx-auto">
        <PopularList />
      </div>
    </>
  );
}

export default Home;