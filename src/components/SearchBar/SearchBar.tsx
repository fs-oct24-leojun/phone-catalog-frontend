import React, {
  FC, useEffect, useState, useRef 
} from 'react';
import { getSearchWith } from '../../utils/searchHelper';
import './SearchBar.scss';
import { SetURLSearchParams } from 'react-router-dom';
interface SearchBarProps {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}
import * as NodeJS from 'node';

export const SearchBar: FC<SearchBarProps> = ({
  searchParams,
  setSearchParams,
}) => {
  const [query, setQuery] = useState('');
  const timerDebounce = useRef<NodeJS.Timeout>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const queryValue = e.target.value;

    setQuery(queryValue);

    if (timerDebounce.current) {
      clearTimeout(timerDebounce.current);
    }

    timerDebounce.current = setTimeout(() => {
      const queryObject =
        queryValue === '' ? { query: null } : { query: queryValue };

      const newSearchParams = getSearchWith(searchParams, queryObject);

      setSearchParams(newSearchParams);
    }, 1000);
  };

  useEffect(() => {
    const queryFromParams = searchParams.get('query') || '';

    setQuery(queryFromParams);

    return () => {
      if (timerDebounce.current) {
        clearTimeout(timerDebounce.current);
      }
    };
  }, [searchParams]);

  return (
    <div className="search-bar">
      <i className="icon fa-solid fa-magnifying-glass" />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-bar__input"
      />

      {/* <button onClick={handleSearchClick} className="search-bar__button">
        
      </button> */}
    </div>
  );
};
