/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';
import { useFetch } from '../hooks/useFetch';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const FormPage = ({ students, isEdit }) => {
  const [fieldErrors, setFieldErrors] = useState({});
  const [currentStudent, setCurrentStudent] = useState({
    id: '',
    name: '',
    class: '',
    nim: '',
    guardian_name: '',
    birthDate: '',
    address: '',
    gender: '',
  });

  const navigate = useNavigate();
  const { postData, putData, loading } = useFetch('students');
  const { id } = useParams();

  useEffect(() => {
    if (id && students.length > 0) {
      const student = students.find((student) => student.id === id);
      if (student) {
        setCurrentStudent(student);
      }
    }
  }, [id, students]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    setFieldErrors({});
    postData(currentStudent)
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: 'Data berhasil ditambahkan',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/');
        });
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const handleEditStudent = (e) => {
    e.preventDefault();
    setFieldErrors({});
    putData(currentStudent.id, currentStudent)
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: 'Data berhasil diubah',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/');
        });
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const handleError = (error) => {
    const errorMessage = getErrorMessage(error.response.data.data);
    Swal.fire({
      title: 'Error',
      text: errorMessage,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  };

  const getErrorMessage = (error) => {
    if (error && Array.isArray(error)) {
      const fieldErrors = {};
      error.forEach((err) => {
        fieldErrors[err.path] = err.msg;
      });
      setFieldErrors(fieldErrors);
      return 'Please fix the errors in the form.';
    }
    return 'An unexpected error occurred. Please try again.';
  };

  return (
    <StudentForm
      onSubmit={isEdit ? handleEditStudent : handleAddStudent}
      onInputChange={handleInputChange}
      fieldErrors={fieldErrors}
      student={currentStudent}
      isEdit={isEdit}
      isLoading={loading}
    />
  );
};

FormPage.propTypes = {
  students: PropTypes.array.isRequired, 
  isEdit: PropTypes.bool.isRequired,
};

export default FormPage;
