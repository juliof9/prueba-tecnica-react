import Movie from "./Movie"

interface Props {
  title: string,
  poster: string,
  releaseYear: string,
}

const Movies = ({ title, poster, releaseYear }:Props) => {
  return (
    <div className="mx-auto w-96 lg:w-full">
      <Movie
        title={title}
        poster={poster}
        releaseYear={releaseYear}
      />
    </div>
  )
}

export default Movies