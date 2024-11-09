/* eslint-disable no-unused-vars */
// SearchBar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ students, setFilteredStudents }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = students.filter(
      (student) =>
        student.name.toLowerCase().includes(term) ||
        student.class.toLowerCase().includes(term) ||
        student.nim.toString().includes(term)
    );

    setFilteredStudents(filtered);
  };

  return (
    <input
      type='text'
      className='search-bar'
      value={searchTerm}
      onChange={handleSearch}
      placeholder='Search by name, class, or NIM'
    />
  );
};

SearchBar.propTypes = {
  students: PropTypes.array.isRequired,
  setFilteredStudents: PropTypes.func.isRequired,
};

export default SearchBar;
