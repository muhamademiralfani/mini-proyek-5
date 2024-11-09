/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LanguageContext } from '../context/LanguageContext';

const StudentForm = ({
  onSubmit,
  onInputChange,
  fieldErrors,
  student,
  isEdit,
  isLoading,
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='container-form'>
      <div className='box-form'>
        <div className='header-form'>
          <Link to={'/'} className='button-back-form'>
            {language === 'en' ? 'Back' : 'Kembali'}
          </Link>
          <div className='title'>
            {isEdit ? (
              <h3>
                {language === 'en'
                  ? 'Edit Student Data'
                  : 'Edit Data Mahasiswa'}
              </h3>
            ) : (
              <h3>
                {language === 'en'
                  ? 'Add Student Data'
                  : 'Tambah Data Mahasiswa'}
              </h3>
            )}
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className='user-details'>
            <div className='input-box'>
              <label className='details'>
                {language === 'en' ? 'Full Name' : 'Nama Lengkap'}
              </label>
              <input
                onChange={onInputChange}
                type='text'
                name='name'
                value={student.name}
                className='input'
                placeholder='Masukan Nama Anda'
                required
              />
              {fieldErrors.name && (
                <span className='error-message'>{fieldErrors.name}</span>
              )}
            </div>
            <div className='input-box'>
              <label className='details'>
                {language === 'en' ? 'Class' : 'Kelas'}
              </label>
              <input
                type='text'
                className='input'
                value={student.class}
                onChange={onInputChange}
                name='class'
                required
              />
              {fieldErrors.class && (
                <span className='error-message'>{fieldErrors.class}</span>
              )}
            </div>
            <div className='input-box'>
              <label className='details'>
                {language === 'en' ? 'Guardian Name' : 'Nama Wali'}
              </label>
              <input
                name='guardian_name'
                value={student.guardian_name}
                className='input'
                onChange={onInputChange}
                type='text'
                required
              />
              {fieldErrors.guardian_name && (
                <span className='error-message'>
                  {fieldErrors.guardian_name}
                </span>
              )}
            </div>
            <div className='input-box'>
              <label className='details'></label>
              {language === 'en' ? 'Address' : 'Alamat'}
              <textarea
                name='address'
                className={fieldErrors.address ? 'address' : 'input'}
                onChange={onInputChange}
                value={student.address}
                type='text'
                required
              />
              {fieldErrors.address && (
                <span className='error-message'>{fieldErrors.address}</span>
              )}
            </div>
            <div className='input-box'>
              <label className='details'>NIM</label>
              <input
                name='nim'
                className={fieldErrors.nim ? 'nim' : 'input'}
                type='text'
                value={student.nim}
                inputMode='numeric'
                onChange={onInputChange}
                required
              />
              {fieldErrors.nim && (
                <span className='error-message'>{fieldErrors.nim}</span>
              )}
            </div>
            <div className='input-box'>
              <label className='details'>
                {language === 'en' ? 'Year' : 'Tahun'}
              </label>
              <input
                name='year'
                className={fieldErrors.year ? 'year' : 'input'}
                type='text'
                value={student.year}
                onChange={onInputChange}
                required
              />
              {fieldErrors.year && (
                <span className='error-message'>{fieldErrors.year}</span>
              )}
            </div>
            <div className='input-box'>
              <label className='details'>
                {language === 'en' ? 'Birth Date' : 'Tanggal Lahir'}
              </label>
              <input
                name='birthDate'
                onChange={onInputChange}
                type='date'
                value={student.birthDate}
                className='input-date'
                required
              />
              {fieldErrors.birthDate && (
                <span className='error-message'>{fieldErrors.birthDate}</span>
              )}
            </div>
            <div className='input-box gender-details'>
              <label className='details '>
                {language === 'en' ? 'Gender' : 'Jenis Kelamin'}
              </label>
              <select
                name='gender'
                onChange={onInputChange}
                id='gender'
                value={student.gender}
                className='gender-detail'
                required>
                <option value=''>
                  {language === 'en' ? 'Select Gender' : 'Pilih Jenis Kelamin'}
                </option>
                <option value='male'>
                  {language === 'en' ? 'Male' : 'Laki-laki'}
                </option>
                <option value='female'>
                  {language === 'en' ? 'Female' : 'Perempuan'}
                </option>
              </select>
              {fieldErrors.gender && (
                <span className='error-message'>{fieldErrors.gender}</span>
              )}
            </div>
          </div>
          <div className='button'>
            <button
              className={isEdit ? 'button-form-edit' : 'button-form-add'}
              type='submit'>
              {isLoading ? 'Loading...' : `${isEdit ? 'Edit' : 'Submit'}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

StudentForm.propTypes = {
  isEdit: PropTypes.bool,
  student: PropTypes.object,
  onSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  fieldErrors: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default StudentForm;
