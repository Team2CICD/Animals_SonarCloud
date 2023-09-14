import React from 'react';

const Search = (props) => {
    return (
        <div>
        <input onChange = {props.searchHandler} placeholder="Search"/>
        </div>
    );
};

export default Search;