
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react'

const BASE_URL = 'https://image.tmdb.org/t/p/original'

const Thumbnail = forwardRef(({ movie }, ref) => {
    return (
        <div 
            ref={ref}
            className='group cursor-pointer p-2 
            sm:transition sm:duration-200 sm:ease-in sm:transform sm:hover:scale-105 sm:hover:z-50'
        >
            <Image
                src={
                    `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                    `${BASE_URL}${movie.poster_path}`
                }
                layout='responsive'
                height={1080}
                width={1920}
            />

            <div className='p-2'>
                <p className='truncate max-w-md' title={movie.overview}>
                    {movie.overview}
                </p>
                <h2 className='mt-1 text-lg sm:text-2xl text-white 
                transition-all duration-100 ease-in-out group-hover:font-bold'>
                    {movie.title || movie.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {movie.media_type && `${movie.media_type} •`}{' '}
                    {movie.release_date || movie.first_air_date} •{' '}
                    <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
                </p>
            </div>

        </div>
    )
})

export default Thumbnail
