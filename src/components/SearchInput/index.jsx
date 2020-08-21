import React from 'react';

const SearchInput = () => {
    
    return (
        <div className="searchBlock">
            {/* <label className="searchText" htmlFor="search">Enter task: </label> */}
            <input className="searchInput" type="text" placeholder="Enter task for search" id="search" />
        </div>
    )
}

export default SearchInput;