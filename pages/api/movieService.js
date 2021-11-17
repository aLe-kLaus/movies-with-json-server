import { API } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async getMovies() {
    const response = await API.get("/movies");
    return response;
  },

  async createMovie(data) {
    const response = await API.post(
      "/movies",
      {
        title: data.title,
        director: data.director,
        releaseDate: data.releaseDate,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  },
};
