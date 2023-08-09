import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, prevLocation }) => {
    return (
        <div>
            <ul>
                {movies.map(({ id, original_title }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: prevLocation }}>
                            <h3>{original_title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_title: PropTypes.string.isRequired,
        })
    ).isRequired,
}
export default MovieList;
