import React from 'react';
import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const changeInput = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const trimQuery = query.trim();

    if (trimQuery === '') {
      Notiflix.Notify.failure('Поле ввода пустое');
      return;
    }

    onSubmit(trimQuery.toLowerCase());
    setQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch size={24} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="query"
          value={query}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={changeInput}
        />
      </SearchForm>
    </>
  );
};

export default Searchbar;
