import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs, faPython, faSwift } from '@fortawesome/free-brands-svg-icons';
import Marquee from 'react-fast-marquee';

const ExperienceScroller = ({ handleSelection } : { handleSelection: (id: string) => void}) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [currentSelection, setCurrentSelection] = useState<string>()
    const [selectedIcon, setSelectedIcon] = useState<HTMLElement>()

    const icons = [
        {name: "react", icon: faReact}, 
        {name: "html5", icon: faHtml5}, 
        {name: "css3", icon: faCss3Alt},  
        {name: "js", icon: faJs}, 
        {name: "python", icon: faPython}, 
        {name: "swift", icon: faSwift},
    ];

    const mouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id;
        const icons = document.querySelectorAll(`#${id}`) as NodeListOf<HTMLElement>;

        icons.forEach(icon => { 
            if(icon.id !== currentSelection){
                icon.classList.remove("text-slate-500")
                icon.classList.remove("scale-100")
                icon.classList.add("text-slate-200")
                icon.classList.add("scale-125")
            } else{
                // do nothing
                
            }
        })
    };

    const mouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id;
        const icons = document.querySelectorAll(`#${id}`) as NodeListOf<HTMLElement>;
        
        icons.forEach(icon => {
            if(icon.id !== currentSelection){
                icon.classList.remove("text-slate-200")
                icon.classList.remove("scale-125")
                icon.classList.add("text-slate-500")
                icon.classList.add("scale-100")
            } else{
                // do nothing
            }
        })
        
    };

    const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id;
        const icons = document.querySelectorAll(`#${id}`) as NodeListOf<HTMLElement>;

        icons.forEach(icon => {

        })
    
        if(currentSelection && currentSelection !== id){
            const currentIcon = document.querySelector(`#${currentSelection}`) as HTMLElement;
            currentIcon.classList.remove("text-slate-200")
            currentIcon.classList.remove("scale-125")
            currentIcon.classList.add("text-slate-500")
            currentIcon.classList.add("scale-100")
        }
    }

    const mouseUp = (e: React.MouseEvent<HTMLDivElement>) => { 
        const id = e.currentTarget.id;
        const icons = document.querySelectorAll(`#${id}`) as NodeListOf<HTMLElement>;
        
        setCurrentSelection(id)

        icons.forEach(icon => {

        })
    }

    // const mouseClick = (e: React.MouseEvent<HTMLDivElement>) => { 
    //     const id = e.currentTarget.id;
    //     const icons = document.querySelectorAll(`#${id}`) as NodeListOf<HTMLElement>;
        
    //     setCurrentSelection(id) // when an icon is clicked, the currentSelection is set to its id

    //     icons.forEach(icon => { // then do this for every icon in the marquee:
    //         if(icon.id === currentSelection){ // check if icon clicked is equal to currentSelection
    //             icon.classList.remove("text-slate-500")
    //             icon.classList.remove("scale-100")
    //             icon.classList.add("scale-125")
    //             icon.classList.add("text-slate-200")
    //         } else{
    //             if(icon.id === currentSelection){
    //                 icon.classList.remove("text-slate-200")
    //                 icon.classList.remove("scale-125")
    //                 icon.classList.add("scale-100")
    //                 icon.classList.add("text-slate-500")
    //             }
    //         }
    //     });

        
    // };

    const resetIconStyles = () => {
        
    };

  return (
    <>
    <h1 className="text-md text-slate-400 tracking-tight mt-10"><span className='line-through'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;About me</h1>
    <h1 className="text-md text-slate-400 tracking-tight">Projects</h1>
    <h1 className="text-md text-slate-400 tracking-tight mb-10">Experience</h1>
    <div className="flex space-x-4 h-12 my-3">
    {/* {icons.map(({name, icon}) => (
        <div className="text-slate-500 hover:text-slate-200 hover:scale-125" key={name} id={name} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <FontAwesomeIcon icon={icon} size="2x"/>
        </div>
    ))} */}
    </div>
    </>
    
  );
};

export default ExperienceScroller;
