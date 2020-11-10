import React from 'react';

import './SearchBox.styles.css'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='p2 psearch-box'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;