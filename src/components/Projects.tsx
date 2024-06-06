
import '../App.css';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
    const { t } = useTranslation();

    return(
        <section id="projects">
            <p className="text-lg text-slate-200 tracking-tight pt-5 sm:pt-20 uppercase">{t("projects")}</p>
            <hr className="border-slate-500 pb-5"/>
            <ProjectCard 
                title="ELECTRIC GAMES"
                year="2022"
                description={t("project.electricGames")}
                github="https://github.com/NikolaiLorentzen/ElectricGames"
                skills={["JS", "REACT", "CSS3", "TYPESCRIPT", ".NET"]}/>
            <p className="text-lg text-slate-400 tracking-tight pt-14">{t("comingSoon")}</p>
        </section>
    )
}

export default Projects