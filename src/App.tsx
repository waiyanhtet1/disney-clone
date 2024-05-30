import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />

      <GenreMovieList />
    </div>
  );
};

export default App;
