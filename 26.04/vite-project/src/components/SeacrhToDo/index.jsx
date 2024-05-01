import React from 'react'

function SearchToDo({setSearchQuery}) {
  function handleSearch(){

  }
  return (
    <input onKeyUp={(e) => handleSearch(e)} type="text" placeholder="search todo" />
  )
}
SearchToDo.propTypes = {
  setSearchQuery: PropTypes.func,
};

export default SearchToDo