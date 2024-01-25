import './SearchBar.css';
import { useState } from 'react';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    props.onSearch(searchTerm.toLowerCase());
  }
  
  return (
    <div className="search-bar">
      <form className="search-form">
        <label className="search-label" htmlFor="search">Search titles</label>
        <input className="search-input" type="text" id="search" onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}></input>
        <input className="search-submit" type="submit" onClick={searchHandler}></input>
      </form>
    </div>
  )
};