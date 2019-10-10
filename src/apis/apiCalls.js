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

//characters to be array of URL
// export const getCharacters = film => {
//   return fetch(film)
//     .then(response => response.json())
//     .then(film => {film.characters)
//     .then(characters => {
//       const characterInfo = characters.map(character => {
//        return getCharacter(character).then(character => ({
//           name: character[0],
//           homeworld: character[1],
//           species: character[2],
//           relatedFilms: character[3]
//     })
//   )
//   })
//   return Promise.all(characterInfo);
// }
// )}

export const getCharacters = filmUrl => {
  return fetch(filmUrl)
    .then(response => response.json())
    // .then(film => console.log('characters', film))
    .then(film => {
      const characterInfo = film.characters.map(character => {
        return getCharacter(character).then(character => ({
          name: character[0],
          homeworld: character[1],
          species: character[2],
          relatedFilms: character[3]
        }))
      })
      return Promise.all(characterInfo)
    })
}

export const getCharacter = characterUrl => {
  return fetch(characterUrl)
    .then(response => response.json())
    .then(character => {
      const {name} = character
      const home = getHomeworld(character.homeworld)
      const speciesName = getSpeciesData(character.species).then(x => [...x])
      const relatedMovies = getRelatedFilms(character.films)
      return Promise.all([name, home, speciesName, relatedMovies])
    })
}

const getHomeworld = homeworldUrl => {
  return fetch(homeworldUrl)
    .then(response => response.json())
    .then(homeworld => {
      const { name, population } = homeworld
      return { name, population }
    })
}

const getSpeciesData = speciesArray => {
  const speciesInfo = speciesArray.map(speciesType => {
    return getSpecies(speciesType).then(name => name)
  })
  return Promise.all(speciesInfo)
}

const getSpecies = speciesUrl => {
  return fetch(speciesUrl)
    .then(response => response.json())
    .then(species => species.name)
}

const getRelatedFilms = filmsArray => {
  const relatedFilms = filmsArray.map(film => {
    return getFilmName(film).then(title => title)
  })
  return Promise.all(relatedFilms)
}

const getFilmName = filmUrl => {
  return fetch(filmUrl)
    .then(response => response.json())
    .then(film => film.title)
}