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


// const getCharacters = charactersUrlArray => {
  //response.characters - array of URLS
  //from each character, need to display: name, homeworld, pop of homrworld, species, related films
  //name: string
  //homeworld: url
  //pop of homeworld: fetch from homeworld url, key is population, value is string
  //species: url -> key "name" value is string of species type (like "human")
  //films: url -> go into each URL and grab the title

// }


const getCharacterName = characterUrl => {
  fetch(characterUrl)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response => console.log(response.name))
}