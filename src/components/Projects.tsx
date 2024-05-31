
import '../App.css';
import ProjectCard from './ProjectCard';

export const Projects = () => {

    return(
        <section id="projects">
            <p className="text-lg text-slate-200 tracking-tight pt-20">PROJECTS</p>
            <hr className="border-slate-500 pb-5"/>
            <ProjectCard 
                title="ELECTRIC GAMES"
                year="2022"
                description="My exam submission for our first big fullstack exam. Under construction, check back later for more info coming soon."
                github="https://github.com/NikolaiLorentzen/ElectricGames"/>
            <p className="text-lg text-slate-400 tracking-tight pt-10">More coming soon...</p>
        </section>
    )
}

export default Projects