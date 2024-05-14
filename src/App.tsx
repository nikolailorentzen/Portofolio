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
    
    <div className="relative w-screen h-screen bg-slate-800 px-32 py-32 ">{/*overflow-hidden*/}
      <div className="pointer-events-none absolute inset-0 z-30" style={{background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
      
      
        {/* <div className="h-40 w-40 relative bg-cover bg-no-repeat bg-pfp rounded-3xl shadow-inner"/>
        <div className="absolute h-40 w-40 rounded-3xl bg-sky-950 opacity-30"/> */}
        <div className="flex">
        <header className="flex flex-col lg:w-1/2 md:w-80">
            <h1 className="text-4xl text-slate-200 tracking-tight pb-2">Nikolai Lorentzen</h1>{/* pil ikon */}
            <h1 className="text-xl text-slate-400 tracking-tight">Frontend Developer</h1>
            <h1 className="text-lg text-slate-500 tracking-tight">With a mind for beautiful designs.</h1>
            <Nav/>
          </header>
          <main className="flex flex-col lg:w-1/2 md:w-80"> {/* last worked on*/}
            <p className="text-lg text-slate-200 tracking-tight pb-2">ABOUT</p>
            <p className="whitespace-normal text-slate-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nemo culpa vitae ratione, omnis nulla inventore aperiam quos, eveniet, voluptatum odit repellat cum ea asperiores nostrum placeat iusto quod. Iusto quia modi earum quisquam, tempore placeat voluptatum soluta officiis qui odio error doloribus libero maxime commodi ea est reiciendis natus.</p>
          </main>
        </div>
    </div>
  );
}
export default App;
