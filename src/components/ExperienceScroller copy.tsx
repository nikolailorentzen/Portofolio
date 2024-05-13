
import React, { useEffect, useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs, faPython, faSwift } from '@fortawesome/free-brands-svg-icons';

const ExperienceScrollerOld = ({ handleSelection } : { handleSelection: (id: string) => void}) => {
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

    useEffect(() => {
        if (currentSelection) {
          handleSelection(currentSelection);
        }
      }, [currentSelection]);

    const mouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id;
        const icon = document.querySelectorAll(`#${id}`) as NodeListOf<HTMLElement>;
        
        icon.forEach(icon => {
            if(isSelected){ // when mouse enters icon while an icon is selected
                if(currentSelection !== id){ // and its a a different icon than currently selected
                    icon.classList.add("scale-125")
                    icon.classList.add("text-slate-200")
                    icon.classList.remove("text-slate-500")
                }else{ 
                    // and its the same icon as is currently selected
                    // do nothing
                }
            }else{ // when mouse enters icon when no icons are selected
                icon.classList.add("scale-125")
                icon.classList.add("text-slate-200")
                icon.classList.remove("text-slate-500")
            }
        });
        
    };

    const mouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id;
        const icon = document.querySelectorAll(`#${id}`) as NodeListOf<HTMLElement>;
        icon.forEach(icon => {
            if(isSelected){ // if mouse leaves while an icon is selected
                if(currentSelection !== id){  // and its a a different icon than currently selected
                    icon.classList.remove("scale-125")
                    icon.classList.remove("text-slate-200")
                }else{ 
                    // and its the same icon as is currently selected
                    // do nothing
                }
                
            }else{ // when mouse leaves icon when no icons are selected
                icon.classList.remove("scale-125")
                icon.classList.remove("text-slate-200")
            }
        });
    };

    const resetIconStyles = () => {
        icons.forEach(({ name }) => {
            const iconElement = document.getElementById(name);
            if (iconElement) {
                iconElement.classList.remove("scale-125");
                iconElement.classList.remove("text-slate-200");
            }
        });
    };

    const mouseClick = (e: React.MouseEvent<HTMLDivElement>) => { 
        const id = e.currentTarget.id;
        const icons = document.querySelectorAll(`#${id}`) as NodeListOf<HTMLElement>;
        const parent = document.querySelectorAll(".item") as NodeListOf<HTMLElement>;
        console.log("printing each icon from icons")
        icons.forEach(icon => {
            console.log(icon); // Log each icon element
        });

        resetIconStyles()
        icons.forEach(icon => { 
            if(isSelected){ // when an icon is clicked while an icon is already selected
                if(currentSelection === id){ // and the icon clicked is the same as the one selected
                    resetIconStyles()
                    setIsSelected(false)
                    icons.forEach(icon => {
                        if(icon.id === id){
                            console.log("huh")
                            icon.classList.add("scale-125")
                            icon.classList.add("text-slate-200");
                        }
                    })
                }
                else{ // and the icon clicked is different from the one selected
                    let i = 0;
                    setCurrentSelection(id)
                    icons.forEach(icon => {
                        if(icon.id === id){
                            i += 1;
                            console.log("#" + i + " running check for icon.id equal to id")
                            console.log("icon.id " + icon.id)
                            console.log("id " + id)
                            console.log(icon)
                            icon.classList.remove("scale-100");
                            icon.classList.remove("text-slate-500");
                            icon.classList.add("scale-125");
                            icon.classList.add("text-slate-200");
                            console.log(icon)
                        }
                    })
                    let x = 0;
                    icons.forEach(icon => {
                        if(icon.id !== id){
                            x += 1;
                            console.log("#" + x + " running check for icon.id NOT EQUAL to id")
                            console.log("icon.id " + icon.id)
                            console.log("id " + id)
                            console.log(icon)
                            icon.classList.remove("scale-100")
                            icon.classList.remove("text-slate-500");
                            icon.classList.add("scale-100")
                            icon.classList.add("text-slate-500");
                        }
                    })
                }
            }
            else{ // when an icon is clicked while no icon is selected
                setCurrentSelection(id)
                icon.classList.add("scale-125")
                icon.classList.add("text-slate-200");
                setIsSelected(true)
            }
        })
    };

  return (
    <>
    <p className="text-white">{"id: "+currentSelection}</p>
    <p className="text-white">{"selectedIcon: "+selectedIcon}</p>
    <p className="text-white">{"isSelected: "+isSelected}</p>

    <div className="scroller flex space-x-4 w-64 overflow-hidden pt-4 text-slate-500 relative">
        {/* <div className="absolute top-3 left-0 h-14 w-14 z-10 pointer-events-none" style={{background: `linear-gradient(to right, rgba(31, 41, 55, 1), transparent)`}}></div> */}
        <div className="flex item space-x-4 animate-loop-scroll">
            {icons.map(({name, icon}) => (
                <div key={name} id={name} onClick={mouseClick} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <FontAwesomeIcon icon={icon} size="2x"/>
                </div>
            ))}
        </div>
        <div className="flex item space-x-4 animate-loop-scroll" aria-hidden="true">
            {icons.map(({name, icon}) => (
                <div key={name} id={name} onClick={mouseClick} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <FontAwesomeIcon icon={icon} size="2x"/>
                </div>
            ))}
        </div>
        {/* <div className="absolute top-3 right-0 h-14 w-14 z-10 pointer-events-none" style={{background: `linear-gradient(to left, rgba(31, 41, 55, 1), transparent)`}}></div> */}
    </div>
    </>
    
  );
};

export default ExperienceScrollerOld;