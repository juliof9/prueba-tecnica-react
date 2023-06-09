import Image from "next/image"
import { AiOutlineHeart } from 'react-icons/ai'

interface Props {
  title: string,
  poster: string,
  releaseYear: string,
}

const Movie = ({ title, poster, releaseYear }:Props) => {
  const isLargeText = title.length > 15 ? 'h-auto' : 'h-96'

  return (
    <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow ${isLargeText}`}>
        <div className="flex justify-center mt-2 pt-5">
        <Image className="rounded-t-lg" src={poster} alt={title} width={150} height={150}/>
        </div>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{releaseYear}</p>
            <div>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm p-2.5">
                <AiOutlineHeart />
            </button>
            </div>
        </div>
    </div>
  )
}
export default Movie