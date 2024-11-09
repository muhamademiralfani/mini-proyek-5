/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FormPage from '../pages/FormPage';
import StudentDetailPage from '../pages/StudentDetailPage';
import Swal from 'sweetalert2';
import NotFound from '../pages/NotFound';

const StudentContainers = () => {
  const [students, setStudents] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const toggleForm = (isEdit = false) => {
    setIsEdit(isEdit);
  };

  const { dataApi, deleteData } = useFetch('students');
  const handleDeleteStudent = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0080ff',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id)
          .then(() => {
            const updatedStudents = students.filter(
              (student) => student.id !== id
            );
            setStudents(updatedStudents);
          })
          .catch((error) => {
            console.error('Error deleting student:', error);
          });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  useEffect(() => {
    setStudents(dataApi);
  }, [dataApi]);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home
            students={students}
            toggleForm={toggleForm}
            handleDeleteStudent={handleDeleteStudent}
          />
        }
      />
      <Route
        path='/students/add'
        element={<FormPage students={students} isEdit={isEdit} />}
      />
      <Route
        path='/students/edit/:id'
        element={<FormPage students={students} isEdit={isEdit} />}
      />
      <Route path='students/:id' element={<StudentDetailPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default StudentContainers;
