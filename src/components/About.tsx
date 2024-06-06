import '../App.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export const About = () => {
    const { t } = useTranslation();
    
    return(
        <section>
            <div className="flex gap-1 items-center justify-between group cursor-pointer pr-1">
                <p className="text-lg text-slate-200 tracking-tight uppercase">{t('about')}</p>
                <LanguageSwitcher/>
            </div>
            
            <hr className="border-slate-500"/>
            <div className="flex flex-col gap-5 pt-5">
                <p className="text-slate-300 text-md font-thin"><span className="text-slate-100 font-550 " >{t("helloThere")}</span>{t("introduction.paragraph1")}</p>
                <p className="text-slate-300 text-md font-thin">{t("introduction.paragraph2")}</p>
                <p className="text-slate-300 text-md font-thin">{t("introduction.paragraph3")}</p>
                <p className="text-slate-300 text-md font-thin">{t("introduction.paragraph4")}<span className="text-slate-200 font-semibold">{t("enjoyYourStay")}</span></p>
            </div>
      </section>
    )
}

export default About
