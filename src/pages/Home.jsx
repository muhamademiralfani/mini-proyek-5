/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import StudentTable from '../components/StudentTable';
import PropTypes from 'prop-types';
import { LanguageContext } from '../context/LanguageContext';

const Home = ({ students, toggleForm, handleDeleteStudent }) => {
  const { language, handleChangeLanguage } = useContext(LanguageContext);
  const [filteredStudents, setFilteredStudents] = useState(students);
  return (
    <div className='container'>
      <h1 className='table-title'>
        {language === 'en' ? 'Student List' : 'Daftar Mahasiswa'}
      </h1>
      <div className='button-language'>
        <button className='button' onClick={handleChangeLanguage}>
          {language === 'en' ? 'Indonesia' : 'English'}
        </button>
      </div>

      <StudentTable
        filteredStudents={filteredStudents}
        setFilteredStudents={setFilteredStudents}
        students={students}
        toggleForm={toggleForm}
        handleDeleteStudent={handleDeleteStudent}
      />
    </div>
  );
};

Home.propTypes = {
  students: PropTypes.array.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleDeleteStudent: PropTypes.func.isRequired,
};

export default Home;
