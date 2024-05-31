import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import ExperienceItem from "./ExperienceItem"

const Experience = () => {
    

    return (
        <section id="experience">

            <div className="flex items-end justify-between">
                <p className="text-lg text-slate-200 tracking-tight pt-20">EXPERIENCE</p>
                <a href="/resume.pdf" target="_blank">
                    <div className="flex gap-1 items-center group cursor-pointer pr-1">
                        <p className="text-slate-400 text-md font-thin group-hover:text-slate-200 group-hover:pr-1 group-hover:text-teal-300 all-transitions duration-200">View résumé</p>
                        <FontAwesomeIcon icon={faUpRightFromSquare} className="text-slate-400 text-sm font-thin group-hover:text-teal-300 group-hover:scale-105 group-hover:pb-1 all-transitions duration-200" />
                    </div>
                </a>
            </div>

            <hr className="border-slate-500 pb-5"/>

            <ExperienceItem 
                year="2021 | Autumn"
                title="Kristiania University College"
                subtitle="Frontend and Mobile Development"
                description="The first semester of my Frontend- and Mobile development study. I was introduced to plain JavaScript, HTML and CSS, as well as some basic SQL."
                skills={["JS", "HTML", "CSS3", "SQL", "DATABASES"]}
            />

            <ExperienceItem 
                year="2022 | Spring"
                title="Kristiania University College"
                subtitle="Frontend and Mobile Development"
                description="The second semester. This was a big step towards ''understanding'' code for me. Although Java today is not my favorite language, I learned alot about general code structure and object oriented elements."
                skills={["JAVA", "OBJECT ORIENTED PROGRAMING", "FIGMA"]}
            />

            <ExperienceItem 
                year="2022 | Autumn"
                title="Kristiania University College"
                subtitle="Frontend and Mobile Development"
                description="The third semester. This was a semester was a load of fun. I was introduced to Kotlin and Android development and made an Android application that communicated with ''Edamame API''. We ended the semester with a big full-stack project where I made a database and a C# web API along with react/bootstrap frontend. The end result can be found in Projects > ElectricGames."
                skills={["REACT", "BOOTSTRAP", ".NET", "C#", "API", "KOTLIN", "ANDROID"]}
            />

            <ExperienceItem 
                year="2023 | Spring"
                title="Kristiania University College"
                subtitle="Frontend and Mobile Development"
                description="The fourth semester. TO BE CONTINUED"
                skills={["REACT", "CSS3", "AGILE", "PYTHON", "UNITY"]}
            />

            <ExperienceItem 
                year="2023 | Autumn"
                title="Kristiania University College"
                subtitle="Frontend and Mobile Development"
                description="The fifth semester. TO BE CONTINUED"
                skills={["SWIFT", "REACT NATIVE", "AGILE"]}
            />

            <ExperienceItem 
                year="2024 | Spring"
                title="Kristiania University College"
                subtitle="Frontend and Mobile Development"
                description="The final semester. This semester was fully dedicated to our bachelors project. Me and my collegues were stationed at Norges Idrettsforbund (NIF for short), and helped them continue delevopment of their Vue/Vuetify3 web application. A few months in the product owners decided to convert their solution into a native .NET MAUI app where they also hired a team from Sopra Steria to help us get a headstart on the project. I learned alot from this valuable experience, as I was introduced to using Azure DevOps for managing sprints and tasks/bugs, and participated daily standup meetings and demos. This allowed me to get a feel of how the daily life of a frontend developer looks like, and on top of all this I got to work side by side with some brilliant people."
                skills={["VUE", "VUETIFY3", ".NET MAUI", "DEVOPS", "AGILE", "FIGMA"]}
            />

        </section>
    )
}

export default Experience
