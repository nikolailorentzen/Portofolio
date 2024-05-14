import { useState } from "react";

const Nav = () => {

    const [selected, setSelected] = useState<string | null>("about");

    const onClick = (e: React.MouseEvent<HTMLElement>) => { 
        const dataTag = e.currentTarget.getAttribute("data-tag");
        
        if (dataTag) {
            setSelected(dataTag);
        }
        else{
            console.log("data-tag not found for HTMLElement")
        }
    };

    return (
        <nav>
            <ul className="flex flex-col gap-2 mt-10">
                <li data-tag="about" className="group flex flex-row items-center" onClick={onClick}>
                    <hr className={`mr-5 ${selected === "about" ? 'border-slate-200 w-20' : 'border-slate-500 w-8 group-hover:border-slate-200 group-hover:w-20 all-transitions duration-500'}`}></hr>
                    <h1 className={`text-sm ${selected === "about" ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'}`}>ABOUT</h1>
                </li>
        
                <li data-tag="experience" className="group flex flex-row items-center" onClick={onClick}>
                    <hr className={`mr-5 ${selected === "experience" ? 'border-slate-200 w-20' : 'border-slate-500 w-8 group-hover:border-slate-200 group-hover:w-20 all-transitions duration-500'}`}></hr>
                    <h1 className={`text-sm ${selected === "experience" ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'}`}>EXPERIENCE</h1>
                </li>
    
                <li data-tag="projects" className="group flex flex-row items-center text-slate-500" onClick={onClick}>
                    <hr className={`mr-5 ${selected === "projects" ? 'border-slate-200 w-20' : 'border-slate-500 w-8 group-hover:border-slate-200 group-hover:w-20 all-transitions duration-500'}`}></hr>
                    <h1 className={`text-sm ${selected === "projects" ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'}`}>PROJECTS</h1>
                </li>
            </ul>
        </nav>
        
      );
    };
    
    export default Nav;
    