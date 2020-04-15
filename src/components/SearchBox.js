import React from 'react'


const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input type="search"
                className='pa2 ba b--green bg-lightest-blue'
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox