import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import movieService from "./api/movieService";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await movieService.getMovies();
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {movies.map((movie) => {
        return (
          <div className={styles.movie} key={movie.id}>
            <h1 className={styles.title}>
              Título: <b>{movie.title}</b>
            </h1>
            <div className={styles.info}>
              <h2 className={styles.year}>
                Ano: <b>{movie.releaseDate}</b>
              </h2>
              <h3 className={styles.director}>
                Diretor: <b>{movie.director}</b>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
