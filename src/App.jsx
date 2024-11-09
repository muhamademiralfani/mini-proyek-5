/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import StudentContainers from './containers/StudentContainers';
import { BrowserRouter } from 'react-router-dom';
import { LanguageContext } from './context/LanguageContext'; 

const App = () => {
  const [language, setLanguage] = useState('en'); 

  const handleChangeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'id' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      <BrowserRouter>
        <StudentContainers />
      </BrowserRouter>
    </LanguageContext.Provider>
  );
};

export default App;
