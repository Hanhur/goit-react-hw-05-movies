import css from './MoviesPage.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleQuerySearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim() === '') 
        {
            alert('Enter the film title');
        }

        onSearch(searchQuery);
        setSearchQuery('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={css.searchForm}>
                <input
                    type="text"
                    name="searchQuery"
                    value={searchQuery}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search ..."
                    onChange={handleQuerySearch}
                    className={css.searchInput}
                />
                <button type="submit" className={css.searchButton}>Search</button>
            </form>
        </div>
    );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;