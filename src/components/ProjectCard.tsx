import React, { useState } from 'react';
import Chip from './Chip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"

const ProjectCard = ({title, year, subtitle, description, github} : {title?: string, year?: string, subtitle?: string, description?: string, github?: string}) => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Define isHovered state variable
  const backgroundImages = ["bg-electric1", "bg-electric2", "bg-electric3"];

  const nextImage = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const stopProp = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
  }

  return (
    <div className="relative min-w-96 min-h-64 [perspective:1000px] cursor-pointer group" onClick={nextImage} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`card rounded-3xl absolute inset-0 [backface-visibility:hidden] ${backgroundImages[bgIndex]} bg-cover bg-center hover:bg-slate-300 hover:bg-opacity-10 text-slate-500 flex justify-center items-center group all-transitions duration-300`}>
        <div className="backdrop-blur-sm bg-gray-900 bg-opacity-75 absolute inset-0 w-full h-full rounded-3xl group-hover:backdrop-blur-none group-hover:bg-opacity-0 all-transitions duration-500 z-10" onClick={nextImage}/>
        <div className="backdrop-blur-none flex flex-col w-full h-full bg-transparent justify-between p-5 z-20"> 
          <div>
            <div className="flex items-center justify-between group-hover:justify-end group">
              <p className="text-2xl text-slate-200 tracking-tight group-hover:hidden">{title}</p>
              <a href={github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSquareGithub} size="2x" className="aboslute invisible group-hover:visible text-slate-200 hover:text-teal-300 hover:scale-110 transition-colors transition-transform duration-300 z-30" onClick={stopProp}/>
              </a>
            </div>
            <p className="text-md text-slate-200 tracking-tight group-hover:hidden">{year}</p>
            <p className="text-md text-slate-400 tracking-tight pt-2 group-hover:hidden">{description}</p>
          </div>
          <div className="text-sm text-slate-200 tracking-tight flex gap-2 group-hover:hidden">
            <Chip text="REACT"/>
            <Chip text="TYPESCRIPT"/>
            <Chip text=".NET"/>
            <Chip text="C#"/>
          </div>
        </div>
      </div>
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-slate-800 p-2 rounded-full ${isHovered ? 'visible' : 'invisible'}`}>
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${index === bgIndex ? 'bg-teal-300' : 'bg-slate-600'}`}
          />
        ))}
      </div>
      <div className="z-0 cardback absolute inset-0 rounded-3xl shadow [backface-visibility:hidden] bg-electric3 bg-cover bg-center hover:bg-slate-300 hover:bg-opacity-10 text-slate-500 flex justify-center items-center [transform:rotateY(180deg)]"></div>
    </div>
  );
};

export default ProjectCard;
