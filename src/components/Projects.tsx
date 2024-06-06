
import '../App.css';
import ProjectCard from './ProjectCard';

export const Projects = () => {

    return(
        <section id="projects">
            <p className="text-lg text-slate-200 tracking-tight pt-5 sm:pt-20">PROJECTS</p>
            <hr className="border-slate-500 pb-5"/>
            <ProjectCard 
                title="ELECTRIC GAMES"
                year="2022"
                description="This is my submission for my first big fullstack exam. The front end is built with React.js and TypeScript, styled with custom CSS, and the backend is powered by .NET."
                github="https://github.com/NikolaiLorentzen/ElectricGames"
                skills={["JS", "REACT", "CSS3", "TYPESCRIPT", ".NET"]}/>
            <p className="text-lg text-slate-400 tracking-tight pt-14">More coming soon...</p>
        </section>
    )
}

export default Projects