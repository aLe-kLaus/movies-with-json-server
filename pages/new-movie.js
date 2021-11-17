import React, { useState } from "react";
import styles from "../styles/NewMovie.module.css";
import movieService from "./api/movieService";

const NewMovie = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const createMovie = async () => {
    if ((title, director, releaseDate)) {
      try {
        const data = {
          title,
          director,
          releaseDate,
        };
        const response = await movieService.createMovie(data);
        setTitle("");
        setDirector("");
        setReleaseDate("");
        alert("Filme criado com sucesso");
      } catch {}
    } else {
      alert("Todos os campos devem ser preenchidos");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Adcionar um novo filme</h1>
      <input
        className={styles.input}
        placeholder="Título"
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <input
        className={styles.input}
        placeholder="Diretor"
        onChange={(evt) => setDirector(evt.target.value)}
      />
      <input
        className={styles.input}
        placeholder="Ano de Lançamento"
        onChange={(evt) => setReleaseDate(evt.target.value)}
        type="number"
      />
      <button className={styles.button} onClick={createMovie}>
        Adiconar
      </button>
    </div>
  );
};

export default NewMovie;
