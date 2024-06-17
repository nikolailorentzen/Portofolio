import React from 'react';
import i18n from '../localization/i18n';

const LanguageSwitcher : React.FC = () => {
  const current = i18n.language

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
      <div className="flex self-end font-sans">
          <div className="text-center bg-slate-700 px-1 font-bold rounded-lg text-slate-400 hover:text-teal-300 w-9" onClick={current == "en" ? () => changeLanguage('no') : () => changeLanguage('en')}>{current == "en" ? "EN" : "NO"}</div>
      </div>
  );
};

export default LanguageSwitcher;