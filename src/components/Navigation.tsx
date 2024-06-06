import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navigation = () => {
    const { t } = useTranslation();

    const [selected, setSelected] = useState<string | null>("about");

    const onClick = (e: React.MouseEvent<HTMLElement>) => { 
        const dataTag = e.currentTarget.getAttribute("data-tag");
        
        if (dataTag) {
            setSelected(dataTag);
            scrollToSection(dataTag);
        } else {
            console.log("data-tag not found for HTMLElement")
        }
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <ul className="flex flex-col gap-2 mt-10">
                <li data-tag="about" className="group flex flex-row items-center" onClick={onClick}>
                    <hr className={`mr-5 ${selected === "about" ? 'border-slate-200 w-20' : 'border-slate-500 w-8 group-hover:border-slate-200 group-hover:w-20 all-transitions duration-500'}`}></hr>
                    <h1 className={`text-sm uppercase ${selected === "about" ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'}`}>{t("about")}</h1>
                </li>
        
                <li data-tag="experience" className="group flex flex-row items-center" onClick={onClick}>
                    <hr className={`mr-5 ${selected === "experience" ? 'border-slate-200 w-20' : 'border-slate-500 w-8 group-hover:border-slate-200 group-hover:w-20 all-transitions duration-500'}`}></hr>
                    <h1 className={`text-sm uppercase ${selected === "experience" ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'}`}>{t("experience")}</h1>
                </li>
    
                <li data-tag="projects" className="group flex flex-row items-center text-slate-500" onClick={onClick}>
                    <hr className={`mr-5 ${selected === "projects" ? 'border-slate-200 w-20' : 'border-slate-500 w-8 group-hover:border-slate-200 group-hover:w-20 all-transitions duration-500'}`}></hr>
                    <h1 className={`text-sm uppercase ${selected === "projects" ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'}`}>{t("projects")}</h1>
                </li>
            </ul>
        </nav>
        
      );
    };
    
    export default Navigation;
    