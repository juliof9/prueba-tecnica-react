"use client"
import { useEffect, useState } from "react"
import SearchBar from "../Layout/SearchBar"
import Movies from "../UI/Movies"

const HomePage = () => {
  const [movies, setMovies] = useState<any>([])
  const [wordToPetition, setWordToPetition] = useState<string>('')

  const handleOnChange = (e: any) => {
    e.preventDefault()
    const word = e.target.value ?? ''
    console.log('soy la palabra', e.target.value)
    setWordToPetition(word)
  }

  const fetchData = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=4cfc7abc&s=${wordToPetition}`)
    const data = await response.json()
    console.log('data', data.Search)
    setMovies(data.Search ?? [])
  }

  return (
    <div className="m-4">
      <SearchBar
        onClick={() => fetchData()}
        onChange={handleOnChange}
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
        {movies.map((movie: any) => (
          <Movies
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            releaseYear={movie.Year}
          />
        ))}
      </ul>
    </div>
  )
}

export default HomePage
