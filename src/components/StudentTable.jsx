/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import SearchBar from './SearchBar';

const StudentTable = ({
  students,
  toggleForm,
  handleDeleteStudent,
  setFilteredStudents,
  filteredStudents,
}) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className='add-button'>
        <SearchBar
          students={students}
          setFilteredStudents={setFilteredStudents}
        />
        <Link
          onClick={() => toggleForm(false)}
          className='button'
          to={'/students/add'}>
          {language === 'en' ? 'Add Data' : 'Tambah Data'}
        </Link>
      </div>

      <div className='table-responsive'>
        <table className='content-table'>
          <thead>
            <tr>
              {language === 'en' ? (
                <>
                  <th>No</th>
                  <th>Name</th>
                  <th>NIM</th>
                  <th>Action</th>
                </>
              ) : (
                <>
                  <th>No</th>
                  <th>Nama</th>
                  <th>NIM</th>
                  <th>Aksi</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredStudents && filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.nim}</td>
                  <td className='td-action'>
                    <Link
                      to={`/students/${student.id}`}
                      className='action-button detail'>
                      Detail
                    </Link>
                    <Link
                      to={'students/edit/' + student.id}
                      onClick={() => toggleForm(true)}
                      className='action-button edit'>
                      Edit
                    </Link>
                    <Link
                      onClick={() => handleDeleteStudent(student.id)}
                      className='action-button delete'>
                      {language === 'en' ? 'Delete' : 'Hapus'}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr style={{ textAlign: 'center' }}>
                <td colSpan='12'>
                  {language === 'en'
                    ? 'No data available'
                    : 'Tidak ada data yang tersedia'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

StudentTable.propTypes = {
  students: PropTypes.array.isRequired,
  toggleForm: PropTypes.func.isRequired,
  filteredStudents: PropTypes.array.isRequired,
  setFilteredStudents: PropTypes.func.isRequired,
  handleDeleteStudent: PropTypes.func.isRequired,
};

export default StudentTable;
