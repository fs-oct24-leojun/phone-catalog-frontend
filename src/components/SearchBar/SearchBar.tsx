import React, { FC, useEffect, useState } from "react";
import { getSearchWith } from '../../utils/searchHelper'
import "./SearchBar.scss";
import { SetURLSearchParams } from "react-router-dom";
interface SearchBarProps {
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
}

export const SearchBar: FC<SearchBarProps> = ({ searchParams, setSearchParams }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const queryValue = e.target.value;

    //setQuery(queryValue);
    const queryObject =
      queryValue === '' ? { query: null } : { query: queryValue };
    const newSearchParams = getSearchWith(searchParams, queryObject);

    setSearchParams(newSearchParams);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //onSearch(query);
    }
  };

  const handleSearchClick = () => {
    //onSearch(query);
  };

  useEffect(() => {
    const queryFromParams = searchParams.get('query') || '';

    setQuery(queryFromParams);
  }, [searchParams]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Search..."
        className="search-bar__input"
      />
      <button onClick={handleSearchClick} className="search-bar__button">
        <i className="fa-solid fa-magnifying-glass"/>
      </button>
    </div>
  );
};
