/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Loading from '../components/Loading';
import NotFound from './NotFound';
import { LanguageContext } from '../context/LanguageContext';

const StudentDetailPage = () => {
  const { language } = useContext(LanguageContext);
  const [student, setStudent] = useState(null);
  const { id } = useParams();
  const { dataApi, errorData, loading } = useFetch(`students/${id}`);

  useEffect(() => {
    if (dataApi) {
      setStudent(dataApi);
    }
  }, [dataApi]);

  if (loading) {
    return <Loading />;
  }

  if (errorData || !student) {
    return <p>{<NotFound />}</p>;
  }

  return (
    <div className='container-detail'>
      <div className='button-detail-back'>
        <Link to={'/'} className='button-back-detail'>
          {language === 'en' ? 'Back' : 'Kembali'}
        </Link>
      </div>
      <div className='card'>
        <div className='detail-header'>
          <h2 className='detail-title'>
            {language === 'en' ? 'Student Detail' : 'Detail Mahasiswa'}
          </h2>
        </div>
        <table>
          <tbody>
            <tr>
              <th>{language === 'en' ? 'Name' : 'Nama'} : </th>
              <td>{student.name}</td>
            </tr>
            <tr>
              <th>{language === 'en' ? 'Class' : 'Kelas'}:</th>
              <td>{student.class}</td>
            </tr>
            <tr>
              <th>{language === 'en' ? 'Guardian Name' : 'Nama Wali'} : </th>
              <td>{student.guardian_name}</td>
            </tr>
            <tr>
              <th>{language === 'en ' ? 'Address' : 'Alamat'}: </th>
              <td>{student.address}</td>
            </tr>
            <tr>
              <th>NIM : </th>
              <td>{student.nim}</td>
            </tr>
            <tr>
              <th>{language === 'en' ? 'Year' : 'Tahun'}: </th>
              <td>{student.year}</td>
            </tr>
            <tr>
              <th>{language === 'en' ? 'Birth Date' : 'Tanggal Lahir'}: </th>
              <td>{student.birthDate}</td>
            </tr>
            <tr>
              <th>{language === 'en' ? 'Gender' : 'Jenis Kelamin'}: </th>
              <td>{student.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetailPage;
