import React, { useEffect, useState } from 'react';
import './App.css';
import SocialMediaButtons from './components/SocialMediaButtons';
import Nav from './components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedExperience, setSelectedExperience] = useState<string | undefined>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const updateSelectedExperience = (id: string) => {
    console.log("Selected icon:", id);
    setSelectedExperience(id)
  };

  return (
    
    <div className="relative w-screen h-screen bg-slate-800 px-64 py-32 ">{/*overflow-hidden*/}
      <div className="pointer-events-none absolute inset-0 z-30" style={{background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
      
      <div className="flex flex-row align-center">
        {/* <div className="h-40 w-40 relative bg-cover bg-no-repeat bg-pfp rounded-3xl shadow-inner"/>
        <div className="absolute h-40 w-40 rounded-3xl bg-sky-950 opacity-30"/> */}
        <div className="flex flex-col">
          <h1 className="text-4xl text-slate-200 tracking-tight pb-2">Nikolai Lorentzen</h1>{/* pil ikon */}
          <h1 className="text-xl text-slate-400 tracking-tight">Frontend Developer</h1>
          <h1 className="text-lg text-slate-500 tracking-tight">With a mind for beautiful designs.</h1>
        </div>
      </div>
      <Nav/>
      
      <p className="pt-16 text-slate-200">{selectedExperience?.toUpperCase()}</p>
      <p className="pt-4 text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Tenetur quis corrupti ducimus qui rerum alias, aliquid illum, <br/>reiciendis, sed nostrum error voluptatem dicta eveniet! Eaque<br/> minus modi voluptas tempora dolorem!<br/><br/><span className="text-red-500">TODO: Legge til at man kan klikke på et av ikonene for å "aktivere" den react er først<br/>TODO: continue scroll animation when not hovered</span></p>
      {/* <SocialMediaButtons/> */}

    </div>
  );
}
export default App;
