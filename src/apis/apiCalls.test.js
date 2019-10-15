import { getSpecies, getFilmName } from './apiCalls'

describe('getSpecies', () => {
  const mockResponse = {
    "name": "Human", 
    "classification": "mammal", 
    "designation": "sentient", 
    "average_height": "180", 
    "skin_colors": "caucasian, black, asian, hispanic", 
    "hair_colors": "blonde, brown, black, red", 
    "eye_colors": "brown, blue, green, hazel, grey, amber", 
    "average_lifespan": "120", 
    "homeworld": "https://swapi.co/api/planets/9/", 
    "language": "Galactic Basic", 
    "people": [
        "https://swapi.co/api/people/1/", 
        "https://swapi.co/api/people/4/", 
        "https://swapi.co/api/people/5/", 
        "https://swapi.co/api/people/6/", 
        "https://swapi.co/api/people/7/", 
    ], 
    "films": [
        "https://swapi.co/api/films/2/", 
        "https://swapi.co/api/films/7/", 
        "https://swapi.co/api/films/5/", 
        "https://swapi.co/api/films/4/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/"
    ], 
    "created": "2014-12-10T13:52:11.567000Z", 
    "edited": "2015-04-17T06:59:55.850671Z", 
    "url": "https://swapi.co/api/species/1/"
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should return the name of the species', () => {
    expect(getSpecies()).resolves.toEqual(mockResponse.name)
  })
})

describe('getFilmName', () => {
  const mockResponse = {
    "title": "A New Hope", 
    "episode_id": 4, 
    "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
    "director": "George Lucas", 
    "producer": "Gary Kurtz, Rick McCallum", 
    "release_date": "1977-05-25", 
    "characters": [
        "https://swapi.co/api/people/1/", 
        "https://swapi.co/api/people/2/", 
        "https://swapi.co/api/people/3/", 
        "https://swapi.co/api/people/4/", 
        "https://swapi.co/api/people/5/", 
        "https://swapi.co/api/people/6/", 
        "https://swapi.co/api/people/7/", 
        "https://swapi.co/api/people/8/", 
        "https://swapi.co/api/people/9/", 
        "https://swapi.co/api/people/10/", 
    ], 
    "planets": [
        "https://swapi.co/api/planets/2/", 
        "https://swapi.co/api/planets/3/", 
        "https://swapi.co/api/planets/1/"
    ], 
    "starships": [
        "https://swapi.co/api/starships/2/", 
        "https://swapi.co/api/starships/3/", 
        "https://swapi.co/api/starships/5/", 
        "https://swapi.co/api/starships/9/", 
    ], 
    "vehicles": [
        "https://swapi.co/api/vehicles/4/", 
        "https://swapi.co/api/vehicles/6/", 
        "https://swapi.co/api/vehicles/7/", 
        "https://swapi.co/api/vehicles/8/"
    ], 
    "species": [
        "https://swapi.co/api/species/5/", 
        "https://swapi.co/api/species/3/",
    ], 
    "created": "2014-12-10T14:23:31.880000Z", 
    "edited": "2015-04-11T09:46:52.774897Z", 
    "url": "https://swapi.co/api/films/1/"
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: Promise.resolve(mockResponse)
      })
    })
  })

  it('should return the name of the film when fetched properly', () => {
    expect(getFilmName()).resolves.toEqual(mockResponse.title)
  })
})