
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move'

const Results = ({ results }) => {
    return (
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
        3xl:grid-cols-5 4xl:flex 4xl:flex-wrap'>
            {results.map((movie) => (
                <Thumbnail key={movie.id} movie={movie}  />
            ))}
        </FlipMove>
    )
}

export default Results
