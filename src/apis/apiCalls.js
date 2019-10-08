export const fetchFilms = () => {
  return fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(films => {
      const filmData = films.results.sort((a, b) => a.episode_id - b.episode_id)
        .map(film => {
          const { title, episode_id, release_date } = film;
          return { title, episode_id, release_date };
        })
      return filmData;
    })
};