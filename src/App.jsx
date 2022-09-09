import Navbar from "./components/Navbar/Navbar";
import PopularHero from './components/PopularTvShows/PopularHero'
import PopularList from './components/PopularTvShows/PopularList'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <PopularHero/>
      <div className="container mx-auto">
        <PopularList/>
      </div>
      <Footer/>
    </>
  );
}

export default App;