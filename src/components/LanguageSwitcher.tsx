import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../localization/i18n';

const LanguageSwitcher: React.FC = () => {
  const { t } = useTranslation();
  const current = i18n.language

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
   
        <div className='flex items-center gap-1 px-1'>
          <div className={`bg-en-us bg-cover bg-center h-6 w-8 rounded-md filter ${current == "en" ? "grayscale-0" : "grayscale"} hover:grayscale-0 all-transitions duration-300`} onClick={() => changeLanguage('en')} />
          <div className={`bg-no bg-cover bg-center h-6 w-8 rounded-md filter ${current == "no" ? "grayscale-0" : "grayscale"} hover:grayscale-0 all-transitions duration-300`} onClick={() => changeLanguage('no')} />
        </div>
      
  
  );
};

export default LanguageSwitcher;