import React, { useEffect, useState } from "react";
import Movie from "./components/movie";

function App() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/movie/popular?api_key=a1281ccc1d778c387fa713a6841bfbd9&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
  };

  return (
    <div className="App">
      <div className="">
        {popular.map((movie) => {
          console.log(movie);
          return <Movie movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
